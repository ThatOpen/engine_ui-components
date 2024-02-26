import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class ToolbarsContainer extends UIComponent {
  static styles = css`
    :host {
      justify-self: var(--bim-toolbars-container--js)
    }

    .parent {
      display: flex;
      flex-direction: column;
      pointer-events: auto;
    }
    
    :host([vertical]) .parent {
      flex-direction: column;
    }
    
    .switchers {
      --bim-button--bdrs: 0;
      --bim-button--bgc: var(--bim-ui_bg-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--bim-toolbars-container_tabs--bgc);
    }
    
    .switchers div {
      display: flex;
      /* gap: 0.25rem; */
    }

    .switchers bim-button {
      overflow: hidden;
      outline: 1px solid var(--bim-ui_bg-contrast-20);
      border-top-left-radius: var(--bim-ui_size-4xs);
      border-top-right-radius: var(--bim-ui_size-4xs);
    }
    
    .toolbars {
      padding: 0.5rem 0;
      border-radius: var(--bim-toolbars-container--bdrs);
      outline: var(--bim-toolbars-container--olw) solid var(--bim-toolbars-container--olc);
      background-color: var(--bim-toolbars-container--bgc);
    }

    :host([tabs]) .toolbars {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    :host([toolbars-hidden]) .toolbars {
      display: none;
    }

    :host(:not([toolbars-hidden])) .toolbars {
      /* border-top: 1px solid var(--bim-ui_bg-contrast-20) */
    }
  `

  static properties = {
    horizontal: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    tabs: { type: Boolean, reflect: true },
    toolbarsHidden: { type: Boolean, reflect: true, attribute: "toolbars-hidden" },
  }

  declare horizontal: boolean
  declare toolbarsHidden: boolean
  declare tabs: boolean

  private _gridArea: string = ""

  get gridArea() {
    return this._gridArea
  }

  set gridArea(value: string) {
    this._gridArea = value
    this.style.gridArea = `toolbar-${value}`
  }

  constructor() {
    super()
    this.horizontal = false
    this.tabs = false
    this.toolbarsHidden = false
  }

  render() {
    const tabs = html`
      <div class="switchers">
        <div>
          <bim-button .label=${"Home"} .icon=${"typcn:home"}></bim-button>
          <bim-button .label=${"Architecture"} .icon=${"flowbite:building-solid"}></bim-button>
          <bim-button .label=${"Structure"} .icon=${"mdi:column"}></bim-button>
        </div>
        <bim-button .icon=${"eva:arrow-up-fill"} @click=${() => this.toolbarsHidden = !this.toolbarsHidden}></bim-button>
      </div>
    `

    return html`
      <div class="parent">
        ${this.tabs ? tabs : null}
        <div class="toolbars">
          <slot></slot>
        </div>
      </div>
    `
  }
}