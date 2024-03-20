import { css, html } from "lit";
import { UIComponent } from "../../../core/UIComponent";
import { Table } from "../index";

export class TableCell extends UIComponent {
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

  static properties = {
    column: { type: String, reflect: true },
  };

  declare column?: string;

  table = this.closest<Table>("bim-table");

  render() {
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
