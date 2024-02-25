import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { createRef, ref } from "lit/directives/ref.js";

export class ToolbarGroup extends UIComponent {
  static styles = css`
    .parent {
      display: grid;
    }
  `

  static properties = {
    rowItems: { type: Number, reflect: true, attribute: "row-items" }
  }

  private _parent = createRef<HTMLDivElement>()

  private _rowItems: number = 2
  set rowItems(value: number) {
    this._rowItems = value
    const { value: parent } = this._parent
    if (parent) {
      parent.style.gridTemplateColumns = `repeat(${value}, 1fr)`
    }
  }

  get rowItems() {
    return this._rowItems
  }

  render() {
    return html`
      <div ${ref(this._parent)} class="parent">
        <slot></slot>
      </div>
    `
  }
}