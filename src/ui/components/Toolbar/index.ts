import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent"

export class Toolbar extends UIComponent {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      background-color: black;
      border-radius: 0.75rem;
      padding: 1rem;
    }
  `

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