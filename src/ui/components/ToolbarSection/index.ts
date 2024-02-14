import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class ToolbarSection extends UIComponent {
  static styles = css`
    :host {
      display: flex;
      height: 100%;
    }
  `

  render() {
    return html`
      <slot></slot>
    `
  }
}