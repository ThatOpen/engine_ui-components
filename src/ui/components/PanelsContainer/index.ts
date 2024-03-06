import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent"
import { styles } from "../../core/UIManager/src/styles";
import { Panel } from "../Panel";

export class PanelsContainer extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap: 0.5rem;
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
    horizontal: { type: Boolean, reflect: true },
    gridArea: { attribute: false }
  }

  declare horizontal: boolean

  private _gridArea: string = ""

  get gridArea() {
    return this._gridArea
  }

  set gridArea(value: string) {
    this._gridArea = value
    this.style.gridArea = `panel-${value}`
  }

  constructor() {
    super()
    this.horizontal = false
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[]
    let hasActivePanel = false
    for (const child of children) {
      if (!(child instanceof Panel)) continue;
      hasActivePanel && (child.active = false)
      hasActivePanel || (hasActivePanel = child.active)
    }
  }

  render() {
    return html`
      <slot @slotchange=${this.onSlotChange}></slot>
    `
  }
}