import { css, html } from "lit";
import { UIComponent } from "../../../core/UIComponent";
import { TableGroup as ITableGroup, Table } from "../index";
import { TableGroup } from "./TableGroup";

export class TableChildren extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      grid-area: Children;
    }
  `

  static properties = {
    groups: { type: Array, attribute: false },
    hidden: { type: Boolean, reflect: true }
  }

  declare hidden: boolean

  private _groups?: ITableGroup[]

  set groups(value: ITableGroup[] | undefined) {
    this._groups = value
    this.hidden = !value
  }

  get groups() {
    return this._groups
  }

  table?: Table

  constructor() {
    super()
    this.hidden = false
  }

  render() {
    return html`
      <style>
        :host {
          display: ${this.hidden? "none" : "block"}
        }
      </style>
      ${this.groups?.map((group) => {
        const tableGroup = document.createElement("bim-table-group") as TableGroup
        tableGroup.group = group
        tableGroup.table = this.table
        return tableGroup
      })}
    `
  }
}