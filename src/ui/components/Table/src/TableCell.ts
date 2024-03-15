import { css, html } from "lit";
import { UIComponent } from "../../../core/UIComponent";
import { Table } from "../index";

export class TableCell extends UIComponent {
  static styles = css`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `

  static properties = {
    column: { type: String, reflect: true }
  }

  declare column?: string

  table?: Table

  render() {
    return html`
      <style>
        :host {
          grid-area: ${this.column ?? "unset"}
        }
      </style>
      <slot></slot>
    `
  }
}