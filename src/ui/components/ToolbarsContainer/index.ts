import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { Toolbar } from "../Toolbar";
import { createRef, ref } from "lit/directives/ref.js";
import { Button } from "../Button";
import { styles } from "../../core/UIManager/src/styles"

export class ToolbarsContainer extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
    :host {
      justify-self: var(--bim-toolbars-container--js);
      align-self: var(--bim-toolbars-container--as);
    }

    :host([dropping]) {
      justify-self: auto;
      align-self: auto;
    }

    /* Parent */

    .parent {
      display: flex;
      pointer-events: auto;
    }

    :host([floating]) .parent {
      align-items: center;
    }
    
    :host([vertical]) .parent {
      height: 100%;
      flex-direction: column;
    }
    
    :host(:not([vertical])) .parent {
      flex-direction: column;
    }

    /* Tabs container */
    
    .tabs {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      --bim-button--bdrs: 0;
      --bim-button--bgc: var(--bim-ui_bg-base);
      display: flex;
      width: fit-content;
    }

    :host([floating]) .tabs {
      overflow: hidden;
      border-top-left-radius: var(--bim-toolbars-container--bdrs, var(--bim-ui_size-4xs));
      border-top-right-radius: var(--bim-toolbars-container--bdrs, var(--bim-ui_size-4xs));
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      outline: var(--bim-toolbars-container--olw) solid var(--bim-toolbars-container--olc);
    }

    :host([floating][toolbars-hidden]) .tabs {
      border-bottom-left-radius: var(--bim-toolbars-container--bdrs, var(--bim-ui_size-4xs));
      border-bottom-right-radius: var(--bim-toolbars-container--bdrs, var(--bim-ui_size-4xs));
    }

    :host([vertical]) .tabs {
      display: none;
      writing-mode: tb;
    }

    .tabs bim-button {
      font-weight: 600;
      height: var(--bim-ui_size-9xl);
    }

    .tabs bim-button:hover,
    .tabs bim-button[active] {
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }

    /* Toolbars container */
    
    .toolbars {
      overflow: auto;
      display: flex;
      flex: 1;
      background-color: var(--bim-toolbars-container--bgc, var(--bim-ui_bg-base));
    }

    :host([floating]:not([vertical])) .toolbars {
      width: 120%;
    }
    
    :host([floating]) .toolbars {
      outline: var(--bim-toolbars-container--olw) solid var(--bim-toolbars-container--olc);
      border-radius: var(--bim-toolbars-container--bdrs, var(--bim-ui_size-4xs)) ;
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
    }
    
    :host([floating][vertical]) .toolbars {
      border-radius: var(--bim-toolbars-container--bdrs, 0 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs)) ;
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

    :host(:not([toolbars-hidden]):not([tabs-hidden]):not([floating])) .toolbars {
      border-top: 1px solid var(--bim-ui_bg-contrast-20);
    }

    /* More toolbars button */
    .parent > bim-button {
      --bim-button--bgc: var(--bim-ui_bg-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0 0;
      --bim-button--olw: 1px;
      --bim-button--olc: var(--bim-ui_bg-contrast-20);
      width: 100%;
    }

    :host([toolbars-hidden]) .parent > bim-button {
      --bim-button--bdrs: var(--bim-ui_size-4xs);
    }
    
    /* Drop element */

    .drop-element {
      min-width: 40px; 
      width: 100%; 
      min-height: 40px; 
      height: 100%;
      background-color: #6528d70d;
      border: 2px dashed var(--bim-ui_color-main);
      border-radius: 1rem;
    }
  `
  ]

  static properties = {
    floating: { type: Boolean, reflect: true },
    vertical: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    tabsHidden: { type: Boolean, attribute: "tabs-hidden", reflect: true },
    activeToolbar: { type: String, attribute: "active-toolbar", reflect: true },
    toolbarsHidden: { type: Boolean, reflect: true, attribute: "toolbars-hidden" },
    dropping: { type: Boolean, reflect: true }
  }

  declare floating: boolean
  declare tabsHidden: boolean
  declare dropping: boolean
  
  private _tabs = createRef()
  private _toolbarsButton = createRef<Button>()
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
      this._activeTab = null
    } else if(this._lastActiveToolbar) {
      this._lastActiveToolbar.active = true
    } else if (this._toolbars[0]) {
      this._toolbars[0].active = true
    }
  }

  get toolbarsHidden() {
    return this._toolbarsHidden
  }
  
  private _activeTab: string | null = null

  set activeToolbar(value: string | null) {
    this._activeTab = null
    for (const child of this.children) {
      if (!(child instanceof Toolbar)) continue;
      if (!this._activeTab && child.label === value) {
        this._activeTab = value
        child.active = true
        this._lastActiveToolbar = child
        this.toolbarsHidden = false
      } else {
        child.active = false
      }
    }
    if (!this._activeTab) this.toolbarsHidden = true;
  }

  get activeToolbar() {
    return this._activeTab
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
    this.floating = false
    this.tabsHidden = false
    this.dropping = false
  }

  private updateToolbars() {    
    for (const child of this.children) {
      if (!(child instanceof Toolbar) || this._toolbars.includes(child)) continue;
      child.active = false
      this._toolbars.push(child)
      child.vertical = this.vertical
      const { activationButton: tabElement } = child
      tabElement.onclick = () => {
        this.activeToolbar = this.activeToolbar === child.label ? null : child.label
      };
    }
    this.updateToolbarsList()
    if (!this.activeToolbar && !this.toolbarsHidden && this._toolbars[0]) this.activeToolbar = this._toolbars[0].label;
  }
  
  private updateToolbarsList() {
    const { value: tabs } = this._tabs
    const { value: toolbarsButton } = this._toolbarsButton
    for (const toolbar of this._toolbars) {
      if (![...this.children].includes(toolbar)) {
        this._toolbars = this._toolbars.filter(t => t !== toolbar)
      } else {
        this.vertical ? toolbarsButton?.append(toolbar.activationButton) : tabs?.append(toolbar.activationButton)
      }
    }
  }

  private onDragOver = (e: DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
    }
  }

  private onDrop = (e: DragEvent) => {
    e.preventDefault()
    const id = e.dataTransfer?.getData("id");
    if (!id) return;
    const toolbar = document.querySelector(`bim-toolbar[data-ui-manager-id='${id}']`);
    if (!toolbar) return;
    this.append(toolbar);
  }

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener("dragover", this.onDragOver)
    this.addEventListener("drop", this.onDrop)
  }
  
  disconnectedCallback() {
    this.removeEventListener("dragover", this.onDragOver)
    this.removeEventListener("drop", this.onDrop)
  }

  render() {
    const tabsTemplate = html`<div class="tabs" ${ref(this._tabs)}></div>`
    const toolbarsBtnTemplate = html`<bim-button ${ref(this._toolbarsButton)} style="flex-grow: 0;"></bim-button>`
    const dropPlaceTemplate = html`<div class="drop-element"></div>`

    return html`
      <div class="parent">
        ${!this.vertical ? tabsTemplate : null}
        ${this.vertical ? toolbarsBtnTemplate : null}
        ${this.dropping ? dropPlaceTemplate : html`
          <div class="toolbars">
            <slot @slotchange=${this.updateToolbars}></slot>
          </div>
        `}
      </div>
    `
  }
}