import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../../core/Component";

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

  get value(): any {
    const childrenCount = this.children.length;
    if (childrenCount === 1) {
      const child = this.children[0];
      return "value" in child ? child.value : child.textContent;
    }
    const values = [];
    for (const child of this.children) {
      const value = "value" in child ? child.value : child.textContent;
      values.push(value);
    }
    return values;
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
