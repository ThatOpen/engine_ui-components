import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

export class ToolbarGroup extends LitElement {
  static styles = css`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `;

  /**
   * The number of rows to display in the toolbar group.
   *
   * @defaultValue 2
   */
  @property({ type: Number, reflect: true })
  rows = 2;

  private _vertical = false;

  /**
   * Sets the vertical property of the ToolbarGroup.
   * When vertical is true, the toolbar group will display its children vertically.
   * When vertical is false, the toolbar group will display its children horizontally.
   */
  @property({ type: Boolean, reflect: true })
  set vertical(value: boolean) {
    this._vertical = value;
    this.updateChildren();
  }

  get vertical() {
    return this._vertical;
  }

  private updateChildren() {
    const children = this.children;
    for (const child of children) {
      if (this.vertical) {
        child.setAttribute("label-hidden", "");
      } else {
        child.removeAttribute("label-hidden");
      }
    }
  }

  protected render() {
    return html`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical ? "row" : "column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `;
  }
}
