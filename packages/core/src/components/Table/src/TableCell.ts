import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { TableRowData } from ".";

export class TableCell extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]:not([data-no-indentation])) {
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

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;

  @property({ type: String, reflect: true })
  column = "";

  columnIndex = 0;

  rowData: TableRowData = {};

  get data() {
    if (this.column) return this.rowData[this.column];
    return null;
  }

  protected render() {
    return html`
      <style>
        :host {
          grid-area: ${this.column ?? "unset"};
        }
      </style>
      <slot></slot>
    `;
  }
}
