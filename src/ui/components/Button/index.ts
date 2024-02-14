import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Button extends UIComponent {
  static styles = css`
    :host {
      display: flex;
      user-select: none;
      column-gap: 0.5rem;
      background-color: #2e2e2e;
      height: 1.75rem;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      line-height: 1rem;
      border-radius: 0.375rem;
    }

    :host(:not([disabled]):hover) {
      background-color: #6528D7;
      cursor: pointer;
    }
    
    :host([active]) {
      background-color: #6528D7;
    }

    :host([disabled]) {
      color: gray;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    active: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true }
  }

  declare label?: string
  declare active: boolean
  declare disabled: boolean

  constructor() {
    super()
    this.active = false
    this.disabled = false
  }

  render() {
    return html`
      ${this.label}
    `
  }
}