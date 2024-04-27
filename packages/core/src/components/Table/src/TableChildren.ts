import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../../core/UIComponent";
import { Table, TableGroupValue } from "../index";
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
    return new Promise<TableGroupValue[]>((resolve) => {
      setTimeout(async () => {
        const value: TableGroupValue[] = [];
        for (const group of this._groups) {
          value.push(await group.value);
        }
        resolve(value);
      });
    });
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
