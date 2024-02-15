import { TemplateResult, css, html } from 'lit';
import { UIComponent } from './../../core/UIComponent';
import { createRef, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';

interface TableComponentCell {
  component: typeof UIComponent
  onCreated?: (component: UIComponent) => void
}

interface TableRow {
  [key: string]: string | TableRow[] | undefined | TableComponentCell
  children?: TableRow[];
}

export interface TableData {
  headers?: string[]
  rows: TableRow[]
}

interface ParsedTable {
  headers: string[]
  rows: {
    data: { [key: string]: TemplateResult[] }
    order: string[]
  }
}

export class Table extends UIComponent {
  static styles = css`
    table {
      border-collapse: collapse;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
    
    thead {
      background-color: #2e2e2e;
      color: #909499;
    }
    
    th {
      padding: 0.5rem 1rem;
      font-weight: 500;
      text-wrap: nowrap;
    }
    
    td {
      position: relative;
      padding: 0.5rem 1rem;
    }

    tr {
      cursor: pointer;
      border-bottom: 1px solid #2e2e2e;
      position: relative;
    }

    tbody tr:nth-child(odd) {
      background-color: #181818;
    }
  `
  
  static properties = {
    value: { type: Object, attribute: false },
    headers: { type: Object, attribute: false },
    rows: { type: Object, attribute: false },
    headersVisible: { type: Boolean, reflect: true, attribute: "headers" },
    indentHighlighted: { type: String, reflect: true, attribute: "indent-highlighted" },
    selectableRows: { type: Boolean, reflect: true, attribute: "selectable-rows" }
  }

  declare headersVisible: boolean
  declare selectableRows: boolean
  
  private _indentHighlighted?: string = undefined

  set indentHighlighted(value: string | undefined) {
    this._indentHighlighted = value
    if (value) {
      this.highlightRowsByIndent(Number(value))
    }
  }

  get indentHighlighted() {
    return this._indentHighlighted
  }

  private _parsedData: ParsedTable = {
    headers: [],
    rows: {
      data: {},
      order: []
    }
  }
  
  private _value: TableData = {rows: []}

  set value(data: TableData) {
    this._value = data
    this._parsedData = {
      headers: data.headers?? [],
      rows: {
        data: {},
        order: []
      }
    }
    this.parseTableData()
  }

  get value() {
    return this._value
  }
  
  private _table = createRef<HTMLTableElement>()

  inferHeaders = true

  constructor() {
    super()
    this.headersVisible = true
    this.selectableRows = false
  }

  private parseTableData(data = this._value.rows, parent = "0") {
    const { headers } = this._parsedData
    const { data: rows, order } = this._parsedData.rows
    for (const [count, item] of data.entries()) {
      const indentation = parent.length === 1 ? count.toString() : `${parent}${count}`
      order.push(indentation)
      rows[indentation] = []
      const { children, ...data } = item
      for (const header in data) {
        if (!headers.includes(header) && this.inferHeaders) { headers.push(header) }
        const headerIndex = headers.indexOf(header)
        const value = item[header] as string | TableComponentCell
        if (typeof value === "string") {
          rows[indentation][headerIndex] = html`${value}`
        } else {
          const component = this.createCellComponent(value)
          if (component) rows[indentation][headerIndex] = html`${component}`
        }
      }
      if (children) this.parseTableData(children, `${indentation}.`)
    }
  }

  private createCellComponent(cell: TableComponentCell) {
    const { component, onCreated } = cell
    if (component._tableHostable) {
      const instance = new component()
      if (onCreated) onCreated(instance)
      return instance
    } else {
      console.warn(`You tried to add a ${component.name} component which is not hostable on a table.`)
      return null
    }
  }

  private rowClicked(e: PointerEvent) {
    const row = (e.target as HTMLElement).parentElement!
    const input = row.getAttribute("data-ui-table-group")
    const pattern = new RegExp(`^${input}\\.`);
    const table = this._table.value!
    const rows = table.querySelectorAll('tr[data-ui-table-group]');
    Array.from(rows).filter(row => {
      const pass = pattern.test(row.getAttribute('data-ui-table-group')!)
      if (pass) {
        // row.hidden = !row.hidden
      }
    });
  }

  highlightRowsByIndent(level: number, color = "#6528d752") {
    this._indentHighlighted = level.toString()
    const table = this._table.value!
    const rows = table.querySelectorAll<HTMLTableRowElement>('tr[data-ui-table-group]');
    for (const row of rows) {
      row.style.backgroundColor = "transparent"
      const indentation = row.getAttribute("data-ui-table-group")
      if (!indentation) { continue }
      const nestLevels = indentation.split(".")
      if (nestLevels.length - 1 === level) {
        row.style.backgroundColor = color
      }
    }
  }

  render() {
    const tableRows: TemplateResult[] = []
    const { headers } = this._parsedData
    const { data: rows, order } = this._parsedData.rows
    for (const indentation of order) {
      const row = rows[indentation]
      row.length = headers.length
      const indentCount = indentation.split(".").length - 1
      const tableCells: TemplateResult[] = []
      for (const [index, data] of row.entries()) {
        const divStyle = {
          display: "flex",
          justifyContent: `${index === 0 && data !== undefined ? `left` : "center"}`,
          alignItems: "center",
          columnGap: "0.25rem",
          marginLeft: `${index === 0 && data !== undefined ? `${indentCount.toString()}rem` : 0}`
        }
        const caretRight = html`<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M10 17l5-5-5-5v10z"/><path d="M0 24V0h24v24H0z" fill="none"/></svg>`
        const caretDown = html`<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>`
        const caret = index === 0 && data !== undefined ? caretDown : null
        const container = html`
          <div style=${styleMap(divStyle)}>
            ${caret}
            ${data}
          </div> 
        `
        tableCells.push(html`
          <td>
            ${data !== undefined ? container : null}
          </td>
        `)
      }
      const tr = html`
        <tr data-ui-table-group='${indentation}'>
          ${this.selectableRows ? html`<td><bim-checkbox-input></bim-checkbox-input></td>` : null}
          ${tableCells}
        </tr>
      `
      tableRows.push(tr)
    }
    
    return html`
      <table ${ref(this._table)}>
        ${this.headersVisible ? html`<thead><tr>${headers.map(h => html`<th>${h}</th>`)}</tr></thead>` : null}
        <tbody>${tableRows}</tbody>
      </table>
    `
  }
}