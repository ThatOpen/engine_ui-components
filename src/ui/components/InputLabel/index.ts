import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class InputLabel extends UIComponent {
  static styles = css`
    :host {
      font-size: 14px;
      overflow: hidden;
      height: 100%;
    }

    .host {
      display: flex;
      align-items: center;
      color: rgb(156 163 175);
      column-gap: 0.25rem;
      user-select: none;
      height: 100%;
    }

    span {
      font-size: 16px;
      line-height: 1.25rem;
    }

    label {
      margin-right: 1rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  `

  static properties = {
    icon: { type: String },
    label: { type: String }
  }

  declare icon?: string
  declare label?: string

  render() {
    return html`
      <div class="host">
        ${
          this.icon
            ? html`<span class="material-icons">${this.icon}</span>`
            : null
        }
        ${
          this.label
            ? html`<label>${this.label}</label>`
            : null
        }
      </div> 
    `
  }
}