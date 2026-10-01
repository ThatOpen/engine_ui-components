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

  // Rows that carry an `id` are keyed by it instead, so their element survives
  // new data objects describing the same row. Pruned in `updated`.
  private _idCache = new Map<string, TableGroup<T>>();

  // Ids claimed by rows during the current render (first occurrence wins).
  private _claimedIds = new Map<TableGroupData<T>, string>();

  group = this.closest<TableGroup<T>>("bim-table-group");

  private _data: TableGroupData<T>[] = [];

  get data() {
    return this.group?.data.children ?? this._data;
  }

  set data(value: TableGroupData<T>[]) {
    this._data = value;
  }

  table = this.closest<Table<T>>("bim-table");

  /** The groups currently rendered by this list (direct children only). */
  get groupElements() {
    return Array.from(
      this.renderRoot.querySelectorAll<TableGroup<T>>("bim-table-group"),
    );
  }

  private _createGroup(groupData: TableGroupData<T>, depth: number) {
    // @ts-ignore
    const tg = document.createElement("bim-table-group") as TableGroup<T>;
    tg.table = this.table;
    tg.data = groupData;
    tg.depth = depth;
    return tg;
  }

  // repeat() keys: `id:<id>` for the first row with a given id among siblings,
  // the per-object numeric id otherwise (rows without id, or duplicated ids).
  private _keyOf = (groupData: TableGroupData<T>) => {
    const { id } = groupData;
    if (id != null) {
      const key = String(id);
      if (!this._claimedKeys.has(key)) {
        this._claimedKeys.add(key);
        this._claimedIds.set(groupData, key);
        return `id:${key}`;
      }
    }
    return TableChildren._dataId(groupData);
  };

  private _claimedKeys = new Set<string>();

  protected render() {
    this._claimedIds.clear();
    this._claimedKeys.clear();
    const depth = (this.group?.depth ?? -1) + 1;
    return html`
      <slot></slot>
      ${repeat(
        this.data,
        this._keyOf,
        (groupData) => {
          const id = this._claimedIds.get(groupData);
          if (id !== undefined) {
            let tg = this._idCache.get(id);
            if (!tg) {
              tg = this._createGroup(groupData, depth);
              this._idCache.set(id, tg);
            } else {
              tg.reuse(groupData, depth);
            }
            return tg;
          }
          let tg = this._groupCache.get(groupData);
          if (!tg) {
            tg = this._createGroup(groupData, depth);
            this._groupCache.set(groupData, tg);
          }
          return tg;
        },
      )}
    `;
  }

  protected updated() {
    // Drop the elements of ids that are no longer present among the siblings.
    for (const key of this._idCache.keys()) {
      if (!this._claimedKeys.has(key)) this._idCache.delete(key);
    }
  }
}
