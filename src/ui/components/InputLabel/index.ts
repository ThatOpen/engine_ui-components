import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class InputLabel extends UIComponent {
  static styles = css`
    :host {
      overflow: hidden;
      font-size: var(--bim-input-label--fz);
      color: var(--bim-input-label--c);
    }
    
    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.375rem;
      user-select: none;
      height: 100%;
    }

    label {
      margin-right: 1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    icon: { type: String, reflect: true }
  }

  declare icon?: string
  declare label?: string

  render() {
    return html`
      <div class="parent">
        ${ this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : null }
        ${ this.label ? html`<label>${this.label}</label>` : null }
      </div>
    `
  }
}