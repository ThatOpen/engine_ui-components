import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent"

export class Toolbar extends UIComponent {
  static styles = css`   
    :host {
      display: flex;
    }

    .parent {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      align-items: center;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
    }
  `

  static properties = {
    horizontal: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false }
  }

  declare horizontal?: boolean

  private _gridArea: string = ""

  get gridArea() {
    return this._gridArea
  }

  set gridArea(value: string) {
    this._gridArea = value
    this.style.gridArea = `toolbar-${value}`
  }

  render() {
    return html`
      <div class="parent">
        <slot></slot>
      </div>
    `
  }
}