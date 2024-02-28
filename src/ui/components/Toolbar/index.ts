import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent"
import { ToolbarSection } from "../ToolbarSection";
import { Button } from "../Button";

export class Toolbar extends UIComponent {
  static styles = css`
    :host([active]) {
      display: block;
    }

    :host(:not([active])) {
      display: none;
    }

    .parent {
      display: flex;
      align-items: center;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section) {

    }
  `

  static properties = {
    name: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    labelsHidden: { type: Boolean, attribute: "labels-hidden", reflect: true },
    vertical: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    active: { type: Boolean, reflect: true }
  }

  declare name: string
  declare icon?: string
  declare labelsHidden: boolean

  private onActiveChange = new Event("activechange")

  private _active = true

  set active(value: boolean) {
    this._active = value
    this.dispatchEvent(this.onActiveChange)
  }

  get active() {
    return this._active
  }

  private _vertical = false

  set vertical(value: boolean) {
    this._vertical = value
    this.updateSections()
  }

  get vertical() {
    return this._vertical
  }

  private _gridArea: string = ""

  get gridArea() {
    return this._gridArea
  }

  set gridArea(value: string) {
    this._gridArea = value
    this.style.gridArea = `toolbar-${value}`
  }

  tabElement: Button = document.createElement("bim-button")

  constructor() {
    super()
    this.labelsHidden = false
    this.active = false
    this.name = "Toolbar"
  }

  private updateSections() {
    const children = this.children;
    for (const child of children) {
      if (child instanceof ToolbarSection) {
        child.labelHidden = this.vertical
        child.vertical = this.vertical
      }
    }
  }

  private onTabElementClick = () => {
    this.active = true
  }

  connectedCallback() {
    super.connectedCallback()
    this.tabElement.icon = this.icon
    this.tabElement.addEventListener("click", this.onTabElementClick)
  }

  render() {
    this.tabElement.label = this.name
    this.tabElement.active = this.active
    return html`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `
  }
}