import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../../core/Component";
import { TableRowData } from ".";

export class TableCell extends Component {
  static styles = css`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
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
  column?: string;

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
