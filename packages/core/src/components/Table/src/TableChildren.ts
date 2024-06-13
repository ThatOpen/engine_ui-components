import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Table } from "../index";
import { TableGroup } from "./TableGroup";
import { TableGroupData } from "./types";

export class TableChildren extends LitElement {
  /**
  * CSS styles for the component.
  */
  static styles = css`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;

  private _groups: TableGroup[] = [];

  @property({ type: Array, attribute: false })
  data: TableGroupData[] = [];

  table = this.closest<Table>("bim-table");

  toggleGroups(force?: boolean, recursive = false) {
    for (const group of this._groups) {
      group.childrenHidden =
        typeof force === "undefined" ? !group.childrenHidden : !force;
      if (recursive) group.toggleChildren(force, recursive);
    }
  }

  protected render() {
    this._groups = [];
    return html`
      <slot></slot>
      ${this.data.map((group) => {
        const tableGroup = document.createElement(
          "bim-table-group",
        ) as TableGroup;
        this._groups.push(tableGroup);
        tableGroup.table = this.table;
        tableGroup.data = group;
        return tableGroup;
      })}
    `;
  }
}
