import { LitElement, PropertyValues, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { Table, TableGroup } from "../index";
import { TableCell } from "./TableCell";
import {
  TableRowData,
  CellCreatedEventDetail,
  RowSelectedEventDetail,
  RowDeselectedEventDetail,
  TableDataTransform,
} from "./types";
import { Checkbox } from "../../Checkbox";

export class TableRow<T extends TableRowData> extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_accent-base) 10%
      );
    }
  `;

  @property({ type: Boolean, reflect: true })
  selected = false;

  get columns() {
    return this.table?.columns ?? []
  }

  // @property({ attribute: false })
  // hiddenColumns: (keyof T)[] = [];

  get hiddenColumns() {
    return this.table?.hiddenColumns ?? []
  }

  group: TableGroup<T> | null = null

  get groupData() {
    return this.group?.data;
  }

  private _data: Partial<T> = {};

  get data() {
    return this.group?.data.data ?? this._data;
  }

  set data(value: Partial<T>) {
    this._data = value;
  }

  @property({ type: Boolean, attribute: "is-header", reflect: true })
  isHeader = false;

  private get _columnNames() {
    const filteredColumns = this.columns.filter(
      (column) => !this.hiddenColumns.includes(column.name as string),
    );
    const names = filteredColumns.map((column) => column.name);
    return names;
  }

  private get _columnWidths() {
    const columns = this.columns.filter(
      (column) => !this.hiddenColumns.includes(column.name as string),
    );
    const widths = columns.map((column) => column.width);
    return widths;
  }

  table: Table<T> | null = null;

  private onTableColumnsChange = () => {
    if (!this.table) return;
    this.requestUpdate()
  };

  @state()
  private _intersecting = false;

  // private _cacheTimeout?: number
  private _intersectTimeout?: number;
  private _timeOutDelay = 250

  private _observer = new IntersectionObserver(
    (entries) => {
      window.clearTimeout(this._intersectTimeout)
      this._intersectTimeout = undefined
      if (entries[0].isIntersecting) {
        this._intersectTimeout = window.setTimeout(() => {
          this._intersecting = true
        }, this._timeOutDelay)
      } else {
        this._intersecting = false
      }
    },
    { rootMargin: "36px" },
  );

  private get _isSelected() {
    return this.table?.selection.has(this.data);
  }

  private onSelectionChange(e: Event) {
    if (!this.table) return;
    const target = e.target as Checkbox;
    this.selected = target.value;
    if (target.value) {
      let data = [this.data]
      if (this.isHeader) {
        data = Table.flattenData<T>(this.table.data).map(entry => entry.data)
      }
      this.table.selection.add(...data);
      if (this.isHeader) {
        this.table.dispatchEvent(
          new CustomEvent<RowSelectedEventDetail<T>>("rowselected", {
            detail: {
              data: this.data,
            },
          }),
        );
      }
    } else {
      if (this.isHeader) {
        this.table.selection.clear()
      } else {
        this.table.selection.delete(this.data);
        this.table.dispatchEvent(
          new CustomEvent<RowDeselectedEventDetail<T>>("rowdeselected", {
            detail: {
              data: this.data,
            },
          }),
        );
      }
    }
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)
    this._observer.observe(this);
  }

  private _onDataSelected = () => {
    this.toggleAttribute("selected", this.table?.selection.has(this.data))
  }

  private _onDataDeselected = () => {
    if (!this.table?.selection.has(this.data)) this.removeAttribute("selected")
  }

  private _onDataSelectionCleared = () => {
    this.removeAttribute("selected")
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.table) return;
    this.table.addEventListener("dataselected", this._onDataSelected)
    this.table.addEventListener("datadeselected", this._onDataDeselected)
    this.table.addEventListener("dataselectioncleared", this._onDataSelectionCleared)
    this.toggleAttribute("selected", this._isSelected);
    this.table.addEventListener("columnschange", this.onTableColumnsChange);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer.unobserve(this);
    this.table?.removeEventListener("dataselected", this._onDataSelected)
    this.table?.removeEventListener("datadeselected", this._onDataDeselected)
    this.table?.removeEventListener("dataselectioncleared", this._onDataSelectionCleared)
    this.data = {}
    this.table = null
  }

  @state()
  dataTransform: TableDataTransform<T> | null = null

  private _interval: number | null = null

  private clearDataTransform = () => {
    this.dataTransform = null
    if (this._interval === null) return
    clearInterval(this._interval)
    this._interval = null
  }

  applyAdaptativeDataTransform(dataTransform: TableDataTransform<T>) {
    this.addEventListener("pointerenter", () => {
      this.dataTransform = dataTransform
      this._interval = window.setInterval(() => {
        if (this.matches(":hover")) return
        this.clearDataTransform()
      }, 50)
    })
  }

  protected render() {
    if (!(this.table && this._intersecting)) return html`${nothing}`
    this.style.gridTemplateAreas = `"${this.table.selectableRows ? "Selection" : ""} ${this._columnNames.join(" ")}"`;
    this.style.gridTemplateColumns = `${this.table.selectableRows ? "1.6rem" : ""} ${this._columnWidths.join(" ")}`;
    const indentation = this.table.getRowIndentation(this.data) ?? 0;
    const cells: Element[] = [];
    let data = this.data
    if (this.groupData?._isComputedGroup) {
      const visibleColumns = this.table.dataKeys.filter(key => !this.table?.hiddenColumns.includes(key))
      for (const column of visibleColumns) {
        if (this._columnNames.indexOf(column) === 0) continue
        (data as any)[column] = ""
      }
    }
    for (const column in data) {
      if (!this.groupData?._isComputedGroup && this.hiddenColumns.includes(column)) continue;

      const cell = document.createElement("bim-table-cell") as TableCell<T>;
      cell.group = this.group
      cell.table = this.table
      cell.row = this
      cell.column = column;
      const columnIndex = this.group?.data._isComputedGroup && this.table.groupedBy.includes(column) ? 0 : this._columnNames.indexOf(column);
      if (columnIndex === 0)
        cell.style.marginLeft = `${this.table.noIndentation ? 0 : indentation + 0.75}rem`;
      cell.setAttribute("data-column-index", String(columnIndex));
      cell.toggleAttribute(
        "data-no-indentation",
        columnIndex === 0 && this.table.noIndentation,
      );
      cell.toggleAttribute("data-cell-header", this.isHeader);
      cell.rowData = this.data;
      this.table.dispatchEvent(
        new CustomEvent<CellCreatedEventDetail<T>>("cellcreated", {
          detail: { cell },
        }),
      );

      cells.push(cell);
    }

    this._timeOutDelay = 0

    return html`
      ${this.table.selectableRows
        ? html`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected ?? false}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`
        : null}
      ${cells}
      <slot></slot>
    `;
  }
}
