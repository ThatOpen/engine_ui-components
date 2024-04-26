import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../../core/UIComponent";
import { Table } from "../index";
import { TableGroup, TableGroupData } from "./TableGroup";

export class TableChildren extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }
  `;

  @property({ type: Array, attribute: false })
  groups?: TableGroupData[];

  private _groups: TableGroup[] = [];

  table = this.closest<Table>("bim-table");

  get value() {
    const value: { data: Record<string, any> }[] = [];
    for (const group of this._groups) {
      value.push(group.value);
    }
    return value;
  }

  protected render() {
    this._groups = [];
    return html`
      ${this.groups?.map((group) => {
        const tableGroup = document.createElement(
          "bim-table-group",
        ) as TableGroup;
        this._groups.push(tableGroup);
        tableGroup.group = group;
        tableGroup.table = this.table;
        return tableGroup;
      })}
    `;
  }
}
