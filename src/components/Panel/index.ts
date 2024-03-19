import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"
import { styles } from "../../core/UIManager/src/styles"
import { Button } from "../Button"
import { HasName, HasValue } from "../../core/types"

export class Panel extends UIComponent implements HasName, HasValue {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        min-width: 20rem;
        overflow: auto;
      }

      :host([active]) {
        display: flex;
      }

      :host(:not([active])) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        border-radius: var(--bim-panel--bdrs, var(--bim-ui_size-base));
        background-color: var(--bim-panel--bgc, var(--bim-ui_bg-base));
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `
  ]

  static properties = {
    icon: { type: String, reflect: true },
    name: { type: String, reflect: true },
    label: { type: String, reflect: true },
    active: { type: Boolean, reflect: true }
  }

  declare label?: string
  declare name?: string
  declare icon?: string

  onValueChange = new Event("change")

  private _active = false

  set active(value: boolean) {
    this._active = value
    this.activationButton.active = value
    if (value) {
      const parentChildren = this.parentElement?.children?? []
      for (const child of parentChildren) {
        if (child instanceof Panel && child !== this) {
          child.active = false
        }
      }
    }
  }

  get active() {
    return this._active
  }

  get value() {
    const value: Record<string, any> = {}
    for (const _child of this.children) {
      const child = _child as any
      if ("value" in child) {
        value[child.name || child.label] = child.value
      }
    }
    return value
  }

  set value(data: Record<string, any>) {
    const children = [...this.children]
    for (const key in data) {
      const _input = children.find((_child) => {
        const child = _child as any
        return child.name === key || child.label === key
      })
      if (!_input) continue;
      const input = _input as any
      input.value = data[key]
    }
  }

  activationButton: Button = document.createElement("bim-button")

  constructor() {
    super()
    this.activationButton.onclick = () => this.active = !this.active
  }

  collapseSections() {
    const sections = this.querySelectorAll("bim-panel-section");
    for (const section of sections) section.collapsed = true;
  }

  expandSections() {
    const sections = this.querySelectorAll("bim-panel-section");
    for (const section of sections) section.collapsed = false;
  }

  render() {
    this.activationButton.icon = this.icon
    this.activationButton.label = this.label || this.name
    this.label || this.name && (this.activationButton.tooltipTitle = this.label || this.name)
    return html`
      <div class="parent">
        ${this.label || this.name || this.icon ? html`<bim-label .label=${this.label || this.name} .icon=${this.icon}></bim-label>` : null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `
  }
}