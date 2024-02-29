import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { styles } from "../../core/UIManager/src/styles";

export class Input extends UIComponent {
  static styles = [
    styles.internalStyles,
  ]

  static properties = {
    label: { type: String, reflect: true },
    labelInside: { type: Boolean, attribute: "label-inside", reflect: true },
    icon: { type: String, reflect: true },
    vertical: { type: Boolean, reflect: true },
    noGap: { type: Boolean, attribute: "no-gap", reflect: true }
  }

  declare label?: string
  declare labelInside: boolean
  declare icon?: string
  declare vertical: boolean
  declare noGap: boolean

  constructor() {
    super()
    this.labelInside = false
    this.vertical = false
    this.noGap = false
  }

  render() {
    const style = html`
      <style>
        .parent {
          column-gap: 0;
        }
      </style>
    `

    return html`
      ${this.noGap ? style : null}
      <div class="parent">
        ${this.label || this.icon ? html`<bim-label .label=${this.label} .icon=${this.icon}></bim-label>` : null}        
        <div class="input">
          <slot></slot>
        </div>
      </div>  
    `
  }
}