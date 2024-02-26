import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class ToolbarGroup extends UIComponent {
  static styles = css`
    .parent {
      display: grid;
      grid-auto-flow: column;
    }
  `

  static properties = {
    rows: { type: Number, reflect: true }
  }

  declare rows: number

  constructor() {
    super()
    this.rows = 2
  }

  render() {
    return html`
      <style>
        .parent {
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot></slot>
      </div>
    `
  }
}