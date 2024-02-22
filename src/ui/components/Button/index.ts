import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Button extends UIComponent {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      user-select: none;
      column-gap: 0.5rem;
      height: 1.75rem;
      align-items: center;
      justify-content: center;
      line-height: 1rem;
      border-radius: 0.375rem;
      padding: 0 1rem;
      min-width: 4rem;
      font-size: 0.75rem;
      color: var(--bim-button--c);
      background-color: var(--bim-button--bgc);
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
      background-color: var(--bim-button¡hover--bgc);
      color: var(--bim-button¡hover--c);
    }
    
    :host([active]) {
      background-color: var(--bim-button¡active--bgc);
      color: var(--bim-button¡active--c);
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