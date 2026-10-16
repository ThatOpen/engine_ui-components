import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { TableRowData } from "./types";
import { Table, TableGroup, TableRow } from "..";

export class TableCell<T extends TableRowData> extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      padding: var(--bim-table-cell--padding, 4px);
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    
    :host([data-cell-header]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      position: relative;
    }

    /* The grip a column is resized by: the header's right edge. */
    .grip {
      position: absolute;
      top: 15%;
      right: 0;
      width: 7px;
      height: 70%;
      cursor: col-resize;
      touch-action: none;
      z-index: 1;
    }
    .grip::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 3px;
      width: 1px;
      background: var(--bim-ui_bg-contrast-20);
    }
    .grip:hover::after,
    .grip.dragging::after {
      width: 2px;
      right: 2px;
      background: var(--bim-ui_accent-base);
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }
  `;

  @property({ type: String, reflect: true })
  column: keyof T = "";

  columnIndex = 0;
  table: Table<T> | null = null
  group: TableGroup<T> | null = null
  row: TableRow<T> | null = null
  rowData: Partial<T> = {};

  get data() {
    return this.column ? this.rowData[this.column] : null
  }

  get dataTransform() {
    const rowDataTransform = this.row?.dataTransform?.[this.column]
    const tableDataTransform = this.table?.dataTransform[this.column]
    const defaultDataTransform = this.table?.defaultContentTemplate
    return rowDataTransform || tableDataTransform || defaultDataTransform
  }

  get headersTransform() {
    return this.table?.headersTransform[this.column];
  }

  private _renderValue(result: unknown) {
    if (
      typeof result === "string" ||
      typeof result === "boolean" ||
      typeof result === "number"
    ) {
      return html`<bim-label>${result}</bim-label>`;
    }
    return result;
  }

  get templateValue() {
    const { data, rowData, group } = this;

    if (this.row?.isHeader) {
      const headerTransformFn = this.headersTransform;
      if (headerTransformFn && data !== null && data !== undefined) {
        return this._renderValue(headerTransformFn(this.column));
      }
      if (data !== null && data !== undefined) {
        return html`<bim-label>${data}</bim-label>`;
      }
      return nothing;
    }

    const transformFn = this.dataTransform;
    if (transformFn && (data !== null && data !== undefined) && group) {
      return this._renderValue(transformFn(data, rowData, group));
    }
    if (data !== null && data !== undefined) {
      return html`<bim-label>${data}</bim-label>`;
    }
    return nothing;
  }

  connectedCallback() {
    super.connectedCallback()
    if (this.group?.data._isComputedGroup && this.table?.groupedBy.includes(this.column)) {
      this.style.gridColumn = "1"
      this.style.gridRow = "1"
    } else {
      this.style.gridArea = this.column.toString()
    }
  }

  // Followed on the window, not on the grip: a header's cells are made anew as
  // its columns change, so the grip pressed is gone after the first step.
  private _startResize = (down: PointerEvent) => {
    const table = this.table;
    if (!table) return;
    down.preventDefault();
    down.stopPropagation();
    const column = this.column;
    const start = this.getBoundingClientRect().width;
    const from = down.clientX;
    const min = 48;
    const cursor = document.body.style.cursor;
    document.body.style.cursor = "col-resize";
    const move = (event: PointerEvent) => {
      const width = Math.max(min, Math.round(start + event.clientX - from));
      table.resizeColumn(column, `${width}px`);
    };
    const up = () => {
      document.body.style.cursor = cursor;
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  protected render() {
    const resizable = this.row?.isHeader && this.table?.resizableColumns;
    return html`${this.templateValue}${resizable
      ? html`<div class="grip" data-grip=${String(this.column)} @pointerdown=${this._startResize} @click=${(e: Event) => e.stopPropagation()}></div>`
      : nothing}`;
  }
}
