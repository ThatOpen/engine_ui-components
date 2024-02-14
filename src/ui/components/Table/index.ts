import { TemplateResult, css, html } from 'lit';
import { UIComponent } from './../../core/UIComponent';
import { createRef, ref } from 'lit/directives/ref.js';

interface TableItem {
  [key: string]: string | TableItem[] | undefined;
  children?: TableItem[];
}

export class Table extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
    
    table {
      border-collapse: collapse;
    }
    
    thead {
      background-color: #2e2e2e;
      color: #909499;
    }
    
    th {
      padding: 0.5rem 1rem;
      font-weight: 500;
    }
    
    td {
      /* font-size: 12px; */
      padding: 0.5rem 1rem;
    }

    tr {
      cursor: pointer;
      border-bottom: 1px solid #2e2e2e;
    }
  `

  static properties = {
    html: { type: String }
  }

  declare html: TemplateResult

  private _table = createRef<HTMLTableElement>()

  constructor() {
    super()
    const tableData: TableItem[] = [
      {
        "Entity": "IFCSLAB",
        "Name": "Pad:1",
        "GlobalId": "1qLKYRgKrBzh9DsytADjn1",
        children: [
          {
            "Entity": "IFCPROPERTYSET",
            "Description": "A built-in pset",
            "Name": "Pset_SlabCommon",
            "GlobalId": "1qLKYRgKrBzh9DsytADjn1",
            children: [
              {
                "Entity": "IFCPROPERTYSINGLEVALUE",
                "Name": "IsExternal",
                "NominalValue": "T",
              },
              {
                "Entity": "IFCPROPERTYSINGLEVALUE",
                "Name": "LoadBearing",
                "NominalValue": "T",
              },
            ]
          },
          {
            "Entity": "IFCPROPERTYSET",
            "Name": "Pset_Environmental",
            "GlobalId": "1qLKYRgKrBzh9DsytADjn1",
          }
        ]
      },
      {
        "Entity": "IFCSLAB",
        "Name": "Pad:2",
        "Description": "A simple base slab",
        "GlobalId": "1qLKYRgKrBzh9DsytADjn1",
        children: [
          {
            "Entity": "IFCPROPERTYSET",
            "Name": "Pset_SlabCommon",
            "GlobalId": "1qLKYRgKrBzh9DsytADjn1",
            children: [
              {
                "Entity": "IFCPROPERTYSINGLEVALUE",
                "Name": "LoadBearing",
                "NominalValue": "T",
              },
            ]
          }
        ]
      }
    ]

    const headers: string[] = []
    const rows: { [key: string]: string[] } = {}
    const rowsOrder: string[] = []

    function generateHTML(data: TableItem[], parent = "1", initial = true) {
      let rowsCount = 1
      for (const item of data) {
        const index = initial ? rowsCount.toString() : `${parent}${rowsCount}`
        rowsOrder.push(index)
        rows[index] = []
        const row: string[] = []
        const { children, ...data } = item
        for (const header in data) {
          if (!headers.includes(header)) { headers.push(header) }
          const headerIndex = headers.indexOf(header)
          const value = item[header]
          rows[index][headerIndex] = `${value}`
          row.push(`${value}`)
        }
        if (children) {
          generateHTML(children, `${index}.`, false)
        }
        rowsCount++
      }
    }

    generateHTML(tableData);
    const trs: TemplateResult[] = []
    for (const key of rowsOrder) {
      const row = rows[key]
      row.length = headers.length
      const indexCount = key.split(".").length - 1
      const tds: TemplateResult[] = []
      for (const [index, data] of row.entries()) {
        if (data !== undefined) {
          const paddingLeft = indexCount * 30
          tds.push(html`
            <td style="padding-left: ${index === 0 && paddingLeft > 0 ? `${paddingLeft.toString()}px` : "revert-layer"}; text-align: ${index === 0 ? "left" : "center"}">${data}</td >
          `)
        } else {
          tds.push(html`<td></td>`)
        }
      }
      const tr = html`<tr data-ui-table-group='${key}' @click=${this.rowClicked}>${tds}</tr>`
      trs.push(tr)
    }
    
    const tbody = html`<tbody>${trs}</tbody>`
    const thead = html`<thead><tr>${headers.map(h => html`<th>${h}</th>`)}</tr></thead>`

    this.html = html`${thead}${tbody}`
  }

  rowClicked(e: PointerEvent) {
    const row = (e.target as HTMLElement).parentElement!
    const input = row.getAttribute("data-ui-table-group")
    const table = this._table.value!
    const pattern = new RegExp(`^${input}\\.`);
    const rows = table.querySelectorAll('tr[data-ui-table-group]');
    Array.from(rows).filter(row => {
      const pass = pattern.test(row.getAttribute('data-ui-table-group')!)
      if (pass) {
        row.hidden = !row.hidden
      }
    });
  }

  render() {
    return html`
      <table ${ref(this._table)}>${this.html}</table>
    `
  }
}