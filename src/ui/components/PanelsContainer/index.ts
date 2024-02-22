import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent"
import { styles } from "../../core/UIManager/src/styles";

export class PanelsContainer extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        overflow: auto;
        overflow-x: hidden;
      }

      :host([horizontal]) {
        flex-direction: row;
      }

      :host([horizontal]) ::slotted(bim-panel) {
        max-width: 100%;
        flex-grow: 1;
      }
    `
  ]

  static properties = {
    horizontal: {type: Boolean, reflect: true}
  }

  declare horizontal?: boolean

  render() {
    return html`
      <slot></slot>
    `
  }
}