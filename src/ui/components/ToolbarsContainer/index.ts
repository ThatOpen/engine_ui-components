import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { Toolbar } from "../Toolbar";
import { createRef, ref } from "lit/directives/ref.js";

export class ToolbarsContainer extends UIComponent {
  static styles = css`
    :host {
      justify-self: var(--bim-toolbars-container--js);
      align-self: var(--bim-toolbars-container--as);
    }

    .parent {
      display: flex;
      pointer-events: auto;
    }
    
    :host([vertical]) .parent {
      height: 100%;
    }
    
    :host(:not([vertical])) .parent {
      flex-direction: column;
    }
    
    .tabs {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      --bim-button--bdrs: 0;
      --bim-button--bgc: var(--bim-ui_bg-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--bim-toolbars-container_tabs--bgc);
    }
    
    :host(:not([toolbars-hidden])) .tabs {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
    }

    :host([vertical]) .tabs {
      display: none;
      writing-mode: tb;
    }
    
    .tabs div {
      display: flex;
    }

    .tabs bim-button:first-child {
      border-top-left-radius: var(--bim-ui_size-4xs);
    }

    .tabs bim-button:last-child {
      border-top-right-radius: var(--bim-ui_size-4xs);
    }

    .tabs bim-button {
      font-weight: 600;
    }

    .tabs div bim-button {
      padding: 0.25rem 0.5rem;
    }


    .tabs bim-button:hover,
    .tabs bim-button[active] {
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }
    
    .toolbars {
      display: flex;
      flex: 1;
      border-radius: var(--bim-toolbars-container--bdrs);
      outline: var(--bim-toolbars-container--olw) solid var(--bim-toolbars-container--olc);
      background-color: var(--bim-toolbars-container--bgc);
    }

    :host(:not([vertical])) .toolbars {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    
    :host([vertical]) .toolbars {
      flex-direction: column;
    }

    :host([tabs]) .toolbars {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    :host([toolbars-hidden]) .toolbars {
      display: none;
    }
  `

  static properties = {
    vertical: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    tabsHidden: { type: Boolean, attribute: "tabs-hidden", reflect: true },
    tab: { type: String, reflect: true },
    toolbarsHidden: { type: Boolean, reflect: true, attribute: "toolbars-hidden" },
    activeToolbar: { type: Object, attribute: false }
  }

  declare tabsHidden: boolean

  private _toolbars: Toolbar[] = []
  private _lastActiveToolbar: Toolbar | null = null

  private _toolbarsHidden = false

  set toolbarsHidden(value: boolean) {
    this._toolbarsHidden = value
    if (value) {
      for (const child of this.children) {
        if (child instanceof Toolbar) {
          if (!this._lastActiveToolbar && child.active) this._lastActiveToolbar = child;
          child.active = false
        }
      }
      this._tab = null
    } else if(this._lastActiveToolbar) {
      this._lastActiveToolbar.active = true
    } else if (this._toolbars[0]) {
      this._toolbars[0].active = true
    }
  }

  get toolbarsHidden() {
    return this._toolbarsHidden
  }

  private _tabs = createRef()
  
  private _tab: string | null = null

  set tab(value: string | null) {
    this._tab = null
    for (const child of this.children) {
      if (!(child instanceof Toolbar)) continue;
      if (!this._tab && child.name === value) {
        this._tab = value
        child.active = true
        this._lastActiveToolbar = child
        this.toolbarsHidden = false
      } else {
        child.active = false
      }
    }
    if (!this._tab) this.toolbarsHidden = true;
  }

  get tab() {
    return this._tab
  }

  private _vertical = false

  set vertical(value: boolean) {
    this._vertical = value
    this.updateToolbars()
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

  constructor() {
    super()
    this.tabsHidden = false
  }

  private updateToolbars() {
    const { value: tabs } = this._tabs
    for (const child of this.children) {
      if (!tabs || !(child instanceof Toolbar) || this._toolbars.includes(child)) continue;
      if (child.active) {
        if (this.tab) {
          child.active = false
        } else {
          this.tab = child.name
        }
      }
      this._toolbars.push(child)
      child.vertical = this.vertical
      const { tabElement } = child
      tabs.append(tabElement)
      tabElement.onclick = () => {
        this.tab = this.tab === child.name ? null : child.name
      };
    }
    this.updateToolbarsList()
    if (!this.tab && !this.toolbarsHidden && this._toolbars[0]) this.tab = this._toolbars[0].name;
  }
  
  private updateToolbarsList() {
    for (const toolbar of this._toolbars) {
      if (![...this.children].includes(toolbar)) {
        this._toolbars = this._toolbars.filter(t => t !== toolbar)
      }
    }
  }

  render() {
    const tabs = html`
      <div class="tabs">
        <div ${ref(this._tabs)}></div>
      </div>
    `

    return html`
      <div class="parent">
        ${!this.tabsHidden ? tabs : null}
        <div class="toolbars">
          <slot @slotchange=${this.updateToolbars}></slot>
        </div>
      </div>
    `
  }
}