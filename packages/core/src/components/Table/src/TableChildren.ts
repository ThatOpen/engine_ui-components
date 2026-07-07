import { LitElement, css, html } from "lit";
import { repeat } from "lit/directives/repeat.js";
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

  // Stable numeric ID per TableGroupData object, used as repeat() key.
  private static _dataIds = new WeakMap<object, number>();
  private static _nextDataId = 0;

  private static _dataId(obj: object): number {
    let id = TableChildren._dataIds.get(obj);
    if (id === undefined) {
      id = TableChildren._nextDataId++;
      TableChildren._dataIds.set(obj, id);
    }
    return id;
  }

  // Cache of TableGroup elements keyed by their data object.
  // WeakMap ensures entries are GC'd when data objects are released.
  private _groupCache = new WeakMap<TableGroupData<T>, TableGroup<T>>();

  group = this.closest<TableGroup<T>>("bim-table-group");

  private _data: TableGroupData<T>[] = [];

  get data() {
    return this.group?.data.children ?? this._data;
  }

  set data(value: TableGroupData<T>[]) {
    this._data = value;
  }

  table = this.closest<Table<T>>("bim-table");

  protected render() {
    return html`
      <slot></slot>
      ${repeat(
        this.data,
        (groupData) => TableChildren._dataId(groupData),
        (groupData) => {
          let tg = this._groupCache.get(groupData);
          if (!tg) {
            // @ts-ignore
            tg = document.createElement("bim-table-group") as TableGroup<T>;
            tg.table = this.table;
            tg.data = groupData;
            tg.depth = (this.group?.depth ?? -1) + 1;
            this._groupCache.set(groupData, tg);
          }
          return tg;
        },
      )}
    `;
  }
}
