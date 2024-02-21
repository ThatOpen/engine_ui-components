import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class InputLabel extends UIComponent {
  static styles = css`
    :host {
      overflow: hidden;
      font-size: 0.875rem;
      color: var(--bim-label-color);
    }
    
    .host {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
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
    label: { type: String }
  }

  declare label?: string

  render() {
    return html`
      <div class="host">
        ${ this.label ? html`<label>${this.label}</label>` : null }
      </div>
    `
  }
}