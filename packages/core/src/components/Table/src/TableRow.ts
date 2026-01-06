import { LitElement, PropertyValues, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { Table, TableGroup } from "../index";
import { TableCell } from "./TableCell";
import {
  TableRowData,
  CellCreatedEventDetail,
  RowSelectedEventDetail,
  RowDeselectedEventDetail,
  ColumnData,
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

  @property({ attribute: false })
  columns: ColumnData<T>[] = [];

  @property({ attribute: false })
  hiddenColumns: (keyof T)[] = [];

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
    const columns = this.columns.filter(
      (column) => !this.hiddenColumns.includes(column.name as string),
    );
    const names = columns.map((column) => column.name);
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
    this.columns = this.table.columns;
  };

  private onTableColumnsHidden = () => {
    if (!this.table) return;
    this.hiddenColumns = this.table.hiddenColumns;
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

  connectedCallback() {
    super.connectedCallback();
    this.toggleAttribute("selected", this._isSelected);
    if (!this.table) return;
    this.columns = this.table.columns;
    this.hiddenColumns = this.table.hiddenColumns;
    this.table.addEventListener("columnschange", this.onTableColumnsChange);
    this.table.addEventListener("columnshidden", this.onTableColumnsHidden);
    this.style.gridTemplateAreas = `"${this.table.selectableRows ? "Selection" : ""} ${this._columnNames.join(" ")}"`;
    this.style.gridTemplateColumns = `${this.table.selectableRows ? "1.6rem" : ""} ${this._columnWidths.join(" ")}`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer.unobserve(this);
    this.columns = [];
    this.hiddenColumns = [];
    this.toggleAttribute("selected", false);
    this.data = {}
    if (this.table) {
      this.table.removeEventListener("columnschange", this.onTableColumnsChange);
      this.table.removeEventListener("columnshidden", this.onTableColumnsHidden);
      this.table = null
    };
    this.clean()
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
    
    // this.addEventListener("pointerleave", this.clearDataTransform)
  }

  private _cache: Record<string, TableCell<T>> = {}

  private clean() {
    clearTimeout(this._intersectTimeout);
    this._intersectTimeout = undefined;
    this._timeOutDelay = 250
    for (const [, element] of Object.entries(this._cache)) {
      element.remove()
    }
    this._cache = {}
    // console.log("cleared")
  }

  protected render() {
    if (!(this.table && this._intersecting)) return html`${nothing}`
    // window.clearTimeout(this._cacheTimeout)
    const indentation = this.table.getRowIndentation(this.data) ?? 0;
    const cells: Element[] = [];
    // const cells: TemplateResult[] = [];
    for (const column in this.data) {
      if (this.hiddenColumns.includes(column)) continue;
      
      // const onCreated = (e?: Element) => {
      //   if (!e) return
      //   const cell = e as TableCell<T>
      //   cell.group = this.group
      //   cell.table = this.table
      //   cell.row = this
      //   cell.rowData = this.data

      //   this.table?.dispatchEvent(
      //     new CustomEvent<CellCreatedEventDetail<T>>("cellcreated", {
      //       detail: { cell },
      //     }),
      //   );
      // }

      // const style = {
      //   marginLeft: `${this._columnNames.indexOf(column) === 0 && this.table.noIndentation ? 0 : indentation + 0.75}rem`
      // }

      // const columnIndex = this._columnNames.indexOf(column);
      
      // const template = html`
      //   ${cache(html`
      //     <bim-table-cell
      //       ${ref(onCreated)}
      //       .column=${column}
      //       style=${styleMap(style)} 
      //       data-column-index=${columnIndex}
      //       ?data-cell-header=${this.isHeader}
      //       ?data-no-indendation=${columnIndex === 0 && this.table.noIndentation}
      //     ></bim-table-cell>  
      //   `)}
      // `

      // cells.push(template)

      // const existingCell = this._cache[column]
      // if (existingCell) {
      //   cells.push(existingCell)
      //   existingCell.requestUpdate()
      //   continue
      // }

      const cell = document.createElement("bim-table-cell") as TableCell<T>;
      // this._cache[column] = cell
      cell.group = this.group
      cell.table = this.table
      cell.row = this
      cell.column = column;
      if (this._columnNames.indexOf(column) === 0)
        cell.style.marginLeft = `${this.table.noIndentation ? 0 : indentation + 0.75}rem`;
      const columnIndex = this._columnNames.indexOf(column);
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
    // this._cacheTimeout = window.setTimeout(() => this.clean(), 10000)

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
