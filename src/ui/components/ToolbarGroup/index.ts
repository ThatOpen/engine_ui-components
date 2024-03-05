import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class ToolbarGroup extends UIComponent {
  static styles = css`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `

  static properties = {
    rows: { type: Number, reflect: true },
    vertical: { type: Boolean, reflect: true }
  }

  declare rows: number
  
  private _vertical = false

  set vertical(value: boolean) {
    this._vertical = value
    this.updateChildren()
  }

  get vertical() {
    return this._vertical
  }

  constructor() {
    super()
    this.rows = 2
    this.vertical = false
  }

  private updateChildren() {
    const children = this.children
    for (const child of children) {
      if (this.vertical) {
        child.setAttribute("label-hidden", "")
      } else {
        child.removeAttribute("label-hidden")
      }
    }
  }

  render() {
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
    `
  }
}