import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class InputLabel extends UIComponent {
  static styles = css`
    :host {
      overflow: hidden;
      color: var(--bim-input-label--c);
      font-size: var(--bim-input-label--fz);
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
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
  }

  declare icon?: string
  declare label?: string
  declare vertical: boolean

  constructor() {
    super()
    this.vertical = false
  }

  render() {
    return html`
      <div class="parent">
        ${ this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : null }
        ${ this.label ? html`<label>${this.label}</label>` : null }
      </div>
    `
  }
}