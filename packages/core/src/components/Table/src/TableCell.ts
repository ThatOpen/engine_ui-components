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
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
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

  get templateValue() {
    const { data, rowData, group } = this;
    const transformFn = this.dataTransform;
    if (transformFn && (data !== null && data !== undefined) && group) {
      const result = transformFn(data, rowData, group)
      if (
        typeof result === "string" ||
        typeof result === "boolean" ||
        typeof result === "number"
      ) {
        return html`<bim-label>${result}</bim-label>`
      } 
      return result
    };
    if (data !== null && data !== undefined) {
      return html`<bim-label>${data}</bim-label>`;
    }
    return nothing;
  }

  connectedCallback() {
    super.connectedCallback()
    this.style.gridArea = this.column.toString()
  }

  protected render() {
    return html`${this.templateValue}`;
  }
}
