import { css, html } from 'lit';
import { UIComponent } from './../../core/UIComponent';
import { styles } from '../../core/UIManager/src/styles';
import { TableChildren } from './src/TableChildren';
import { TableRow, TableRowData } from './src/TableRow';
import { TableGroupData } from './src/TableGroup';
import { createRef, ref } from 'lit/directives/ref.js';

export interface ColumnData {
  name: string
  width: string
}

export class Table extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        position: relative;
        overflow: auto;
      }
      
      .parent {
        display: grid;
        grid-template-areas: "Header" "Body";
      }
      
      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(--bim-table_header--bgc, var(--bim-ui_bg-contrast-20));
      }
    `
  ]
  
  static properties = {
    _value: { type: Object, state: true },
    columns: { type: Array, attribute: false },
    rows: { type: Object, attribute: false },
    carets: { type: Boolean, reflect: true },
    branches: { type: Boolean, reflect: true },
    striped: { type: Boolean, reflect: true },
    headersHidden: { type: Boolean, attribute: "headers-hidden", reflect: true },
    firstColCenter: { type: Boolean, attribute: "first-col-center", reflect: true },
    minColWidth: { type: String, attribute: "min-col-width", reflect: true }
  }

  declare minColWidth: string
  declare headersHidden: boolean
  declare carets: boolean
  declare striped: boolean
  declare firstColCenter: boolean
  declare private _value: TableGroupData[]

  private _children = createRef<TableChildren>()
  private _headerRow = createRef<TableRow>()
  private _columnsChange = new Event("columns-change")
  
  private _rows: TableGroupData[] = []

  set rows(data: TableGroupData[]) {
    this._rows = data
    this._value = data
    const computed = this.computeMissingColumns(data)
    if (computed) this.columns = this._columns
  }

  get rows() {
    return this._rows
  }

  private _columns: ColumnData[] = []

  set columns(value: (string | ColumnData)[]) {
    const columns: ColumnData[] = []
    for (const header of value) {
      const column = typeof header === "string" ? { name: header, width: `minmax(${this.minColWidth}, 1fr)` } : header
      columns.push(column)
    }
    this._columns = columns
    this.computeMissingColumns(this.rows)
    this.dispatchEvent(this._columnsChange)
  }

  get columns(): ColumnData[] {
    return this._columns
  }

  private get _headerRowData() {
    const data: TableRowData = {}
    for (const column of this.columns) {
      if (typeof column === "string") {
        data[column] = column
      } else {
        const { name } = column
        data[name] = name
      }
    }
    return data
  }

  constructor() {
    super()
    this.columns = []
    this.minColWidth = "4rem"
    this.headersHidden = false
    this.carets = true
    this.striped = true
    this.firstColCenter = false
  }

  private computeMissingColumns(row: TableGroupData[]): boolean {
    let computed = false
    for (const data of row) {
      const { children, data: rowData } = data
      for (const header in rowData) {
        const names = this._columns.map((column) => {
          return typeof column === "string" ? column : column.name
        })
        if (!names.includes(header)) {
          this._columns.push({ name: header, width: `minmax(${this.minColWidth}, 1fr)` })
          computed = true
        }
      }
      if (children) {
        const childrenComputed = this.computeMissingColumns(children)
        if (childrenComputed && !computed) computed = childrenComputed
      }
    }
    return computed
  }

  getRowIndentation(target: TableRowData, tableGroups = this.rows, level = 0): number | undefined {
    for (const tableGroup of tableGroups) {
      if (tableGroup.data === target) return level
      if (tableGroup.children) {
        const childLevel = this.getRowIndentation(target, tableGroup.children, level + 1);
        if (childLevel !== undefined) return childLevel
      }
    }
    return
  }

  getGroupIndentation(target: TableGroupData, tableGroups = this.rows, level = 0): number | undefined {
    for (const tableGroup of tableGroups) {
      if (tableGroup === target) return level
      if (tableGroup.children) {
        const childLevel = this.getGroupIndentation(target, tableGroup.children, level + 1);
        if (childLevel !== undefined) return childLevel
      }
    }
    return
  }
  
  updated() {
    const { value: headerRow } = this._headerRow
    if (headerRow) {
      headerRow.isHeader = true
      headerRow.data = this._headerRowData
      headerRow.table = this
      headerRow.style.gridArea = "Header"
    }
    
    const { value: children } = this._children
    if (children) {
      children.groups = this._value
      children.table = this
      children.style.gridArea = "Body"
      children.style.backgroundColor = "transparent"
    }
    
  }

  filter() {
    this._value = [this._rows[0]]
    this.requestUpdate()
  }

  render() {
    const headerRowTemplate = html`
      <bim-table-row ${ref(this._headerRow)}></bim-table-row>
    `

    return html`
      <div class="parent">
        ${!this.headersHidden ? headerRowTemplate : null}
        <bim-table-children ${ref(this._children)}></bim-table-children>
      </div>
    `
  }
}

export * from "./src"