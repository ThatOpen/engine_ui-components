import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class Label extends UIComponent {
  static styles = css`
    :host {
      color: var(--bim-label--c);
      font-size: var(--bim-label--fz);
      border-radius: var(--bim-ui_size-4xs);
    }

    :host([tag]) {
      --bim-label--c: white;
      --bim-label--fz: var(--bim-ui_size-xs);
      background-color: var(--bim-ui_color-main);
      padding: 0 0.625rem;
    }
    
    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      user-select: none;
      height: 100%;
      pointer-events: none;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    label {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    labelHidden: { type: Boolean, attribute: "label-hidden", reflect: true },
    icon: { type: String, reflect: true },
    iconHidden: { type: Boolean, attribute: "icon-hidden", reflect: true },
    vertical: { type: Boolean, reflect: true },
  }

  declare icon?: string
  declare iconHidden: boolean
  declare label?: string
  declare labelHidden: boolean
  declare vertical: boolean

  protected static _tableHostable = true

  constructor() {
    super()
    this.iconHidden = false
    this.labelHidden = false
    this.vertical = false
  }

  render() {
    return html`
      <div class="parent">
        ${ !this.iconHidden && this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : null }
        ${ !this.labelHidden && this.label ? html`<label>${this.label}</label>` : null }
      </div>
    `
  }
}