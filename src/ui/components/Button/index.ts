import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import 'iconify-icon';

export class Button extends UIComponent {
  static styles = css`
    .parent {
      box-sizing: border-box;
      display: flex;
      height: 100%;
      user-select: none;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      min-width: 1.75rem;
      align-items: center;
      justify-content: center;
      border-radius: var(--bim-button--bdrs);
      font-size: var(--bim-button--fz);
      color: var(--bim-button--c);
      background-color: var(--bim-button--bgc);
    }
    
    :host([vertical]) .parent {
      flex-direction: column;
      padding: 0.375rem;
    }
    
    :host(:not([vertical])) .parent {
      height: 1.75rem;
      padding: 0 0.375rem;
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

    .parent > p {
      margin: 0;
      padding: 0;
      text-wrap: nowrap;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    active: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true }
  }

  declare label?: string
  declare icon?: string
  declare active: boolean
  declare disabled: boolean
  declare vertical: boolean

  protected static _tableHostable = true

  constructor() {
    super()
    this.active = false
    this.disabled = false
    this.vertical = false
  }

  render() {
    return html`
      <div class="parent">
        ${this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : null }
        ${this.label ? html`<p>${this.label}</p>` : null}
      </div>
    `
  }
}