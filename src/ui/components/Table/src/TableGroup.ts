import { css, html } from "lit";
import { UIComponent } from "../../../core/UIComponent";
import { TableGroup as ITableGroup, Table } from "../index";
import { TableRow } from "./TableRow";
import { TableChildren } from "./TableChildren";
import { createRef, ref } from "lit/directives/ref.js";

export class TableGroup extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 1.5rem;
      border-left: 1px solid gray;
    }
  `

  static properties = {
    group: { type: Object, attribute: false }
  }
  
  declare group: ITableGroup
  private _row = createRef<TableRow>()
  private _children = createRef<TableChildren>()
  
  table?: Table

  constructor() {
    super()
    this.group = { data: {} }
  }

  firstUpdated() {
    const { value: row } = this._row
    if (row) {
      row.data = this.group.data
      row.table = this.table
    }

    const { value: children } = this._children
    if (children) {
      children.groups = this.group.children
      children.table = this.table
    }
  }

  render() {
    const childrenTemplate = html`<bim-table-children ${ref(this._children)}></bim-table-children>`
    
    return html`
      <div class="branch"></div>
      <bim-table-row ${ref(this._row)}></bim-table-row>
      ${this.group.children ? childrenTemplate : null}
    `
  }
}