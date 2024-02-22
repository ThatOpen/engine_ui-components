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
    label: { type: String }
  }

  declare label?: string

  render() {
    return html`
      <div class="parent">
        <bim-input-label .label="${this.label}"></bim-input-label>
        <div class="input">
          <slot></slot>
        </div>
      </div>  
    `
  }
}