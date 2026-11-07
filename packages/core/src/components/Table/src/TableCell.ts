import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { TableRowData } from "./types";
import { columnWidthVar } from "./column-width";
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

  // Followed on the window, not on the grip (a header's cells are made anew
  // when its columns change). While dragging only the column's width variable
  // changes, once a frame: no row renders again (re-rendering every cell on
  // every step lagged and flickered, Antonio 17-10). The width is set for good
  // when the button is let go.
  private _startResize = (down: PointerEvent) => {
    const table = this.table;
    if (!table) return;
    down.preventDefault();
    down.stopPropagation();
    const column = this.column;
    const variable = columnWidthVar(String(column));
    const start = this.getBoundingClientRect().width;
    const from = down.clientX;
    const min = 48;
    let width = Math.round(start);
    let frame = 0;
    // A sheet over the page while dragging: it holds the cursor, and the rows
    // under the pointer get no hover to answer to. (Setting the body's cursor
    // restyled the whole page at the first step, and the rows' hover handlers
    // ran at every row crossed: the first drag felt heavy, Antonio 17-10.)
    const sheet = document.createElement("div");
    sheet.style.cssText = "position:fixed; inset:0; z-index:2147483647; cursor:col-resize;";
    document.body.append(sheet);
    const move = (event: PointerEvent) => {
      width = Math.max(min, Math.round(start + event.clientX - from));
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        table.style.setProperty(variable, `${width}px`);
      });
    };
    const up = () => {
      cancelAnimationFrame(frame);
      sheet.remove();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      table.resizeColumn(column, `${width}px`);
      table.style.removeProperty(variable);
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
