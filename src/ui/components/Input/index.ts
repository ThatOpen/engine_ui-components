import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";

export class Input extends UIComponent {
  static styles = [
    styles.internalStyles,
    css`
      .input {
        height: auto;
      }

      slot {
        display: flex;
        flex: 1;
        gap: 0.375rem;
        flex-wrap: wrap;
      }
    `
  ]

  static properties = {
    label: { type: String, reflect: true },
    icon: { type: String, reflect: true }
  }

  declare label?: string
  declare icon?: string

  render() {
    return html`
      <div class="parent">
        ${this.label || this.label ? html`<bim-label .label=${this.label} .icon=${this.icon}></bim-label>` : null}
        <div class="input">
          <slot></slot>
        </div>
      </div>  
    `
  }
}