import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class ToolbarSection extends UIComponent {
  static styles = css`
    :host {
      height: 100%;
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0 0.5rem;
      height: 100%;
      justify-content: space-between;
    }
    
    .children {
      display: grid;
      grid-auto-flow: column;
      gap: 0.25rem;
    }
  `

  static properties = {
    label: { type: String, reflect: true },
    labelIcon: { type: String, reflect: true, attribute: "label-icon" },
  }

  declare label?: string
  declare labelIcon?: string

  render() {
    return html`
      <div class="parent">
        <div class="children">
          <slot></slot>
        </div>
        ${this.label || this.labelIcon ? html`<bim-input-label .label=${this.label} .icon=${this.labelIcon} style="font-size: 0.75rem"></bim-input-label>` : null}
      </div>
    `
  }
}