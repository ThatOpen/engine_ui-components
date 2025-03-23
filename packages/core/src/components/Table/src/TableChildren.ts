import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Table } from "../index";
import { TableGroup } from "./TableGroup";
import { TableGroupData, TableRowData } from "./types";

export class TableChildren<T extends TableRowData> extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      display: block;
      overflow: hidden;
      grid-area: Children;
    }

    :host([hidden]) {
      height: 0;
      opacity: 0;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;

  private _groups: TableGroup<T>[] = [];

  @property({ type: Array, attribute: false })
  data: TableGroupData<T>[] = [];

  table = this.closest<Table<T>>("bim-table");

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
        // @ts-ignore
        const tableGroup = document.createElement(
          "bim-table-group",
        ) as TableGroup<T>;
        this._groups.push(tableGroup);
        tableGroup.table = this.table;
        tableGroup.data = group;
        return tableGroup;
      })}
    `;
  }
}
