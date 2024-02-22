import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import 'iconify-icon';

export class Button extends UIComponent {
  static styles = css`
    .parent {
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
      font-size: var(--bim-button--fz);
      color: var(--bim-button--c);
      background-color: var(--bim-button--bgc);
    }

    :host(:not([disabled]):hover) div {
      cursor: pointer;
      background-color: var(--bim-button¡hover--bgc);
      color: var(--bim-button¡hover--c);
    }
    
    :host([active]) div {
      background-color: var(--bim-button¡active--bgc);
      color: var(--bim-button¡active--c);
    }

    :host([disabled]) div {
      color: gray;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    active: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    icon: { type: String, reflect: true }
  }

  declare label?: string
  declare icon?: string
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
      <div class="parent">
        ${this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : null }
        ${this.label}
      </div>
    `
  }
}