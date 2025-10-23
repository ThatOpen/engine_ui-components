import { LitElement, css, html } from "lit";
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

  group = this.closest<TableGroup<T>>("bim-table-group");

  private _data: TableGroupData<T>[] = [];

  get data() {
    return this.group?.data.children ?? this._data;
  }

  set data(value: TableGroupData<T>[]) {
    this._data = value;
  }

  table = this.closest<Table<T>>("bim-table");

  private clean() {
    for (const group of this._groups) {
      group.remove()
    }
    this._groups = [];
  }

  protected render() {
    this.clean()
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
