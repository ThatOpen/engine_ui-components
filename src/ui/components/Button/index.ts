import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Button extends UIComponent {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      user-select: none;
      column-gap: 0.5rem;
      background-color: #2e2e2e;
      height: 1.75rem;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 0.75rem;
      line-height: 1rem;
      border-radius: 0.375rem;
      padding: 0 1rem;
      min-width: 4rem;
    }

    :host(:not([disabled]):hover) {
      background-color: var(--bim-button-hover);
      cursor: pointer;
    }
    
    :host([active]) {
      background-color: var(--bim-button-hover);
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

  protected static _tableHostable = true

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