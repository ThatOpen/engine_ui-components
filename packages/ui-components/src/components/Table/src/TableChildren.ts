import { css, html } from "lit";
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

  static properties = {
    groups: { type: Array, attribute: false },
  };

  declare groups?: TableGroupData[];
  table = this.closest<Table>("bim-table");

  render() {
    return html`
      ${this.groups?.map((group) => {
        const tableGroup = document.createElement(
          "bim-table-group",
        ) as TableGroup;
        tableGroup.group = group;
        tableGroup.table = this.table;
        return tableGroup;
      })}
    `;
  }
}
