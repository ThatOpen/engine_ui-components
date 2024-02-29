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

    :host([dropping]) {
      justify-self: auto;
      align-self: auto;
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
      background-color: var(--bim-toolbars-container_tabs--bgc);
    }
    
    :host(:not([toolbars-hidden])) .tabs {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
    }

    :host([vertical]) .tabs {
      display: none;
      writing-mode: tb;
    }
    
    .tabs {
      display: flex;
    }

    :host([toolbars-hidden]) .tabs bim-button:first-child {
      border-top-left-radius: var(--bim-toolbars-container--bdrs);
      border-bottom-left-radius: var(--bim-toolbars-container--bdrs)
    }

    :host([toolbars-hidden]) .tabs bim-button:last-child {
      border-top-right-radius: var(--bim-toolbars-container--bdrs);
      border-bottom-right-radius: var(--bim-toolbars-container--bdrs)
    }

    .tabs bim-button:first-child {
      border-top-left-radius: var(--bim-ui_size-base);
    }

    .tabs bim-button:last-child {
      border-top-right-radius: var(--bim-ui_size-base);
    }

    .tabs bim-button {
      font-weight: 600;
    }

    .tabs bim-button {
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
      background-color: var(--bim-toolbars-container--bgc, var(--bim-ui_bg-base));
    }

    :host(:not([vertical])) .toolbars {
      border-top-left-radius: 0;
      /* border-top-right-radius: 0; */
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

    .drop-element {
      min-width: 80px; 
      width: 100%; 
      min-height: 80px; 
      height: 100%;
      background-color: #6528d70d;
      border: 2px dashed var(--bim-ui_color-main);
      border-radius: 1rem;
    }
  `

  static properties = {
    vertical: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    tabsHidden: { type: Boolean, attribute: "tabs-hidden", reflect: true },
    activeTab: { type: String, attribute: "active-tab", reflect: true },
    toolbarsHidden: { type: Boolean, reflect: true, attribute: "toolbars-hidden" },
    activeToolbar: { type: Object, attribute: false },
    dropping: { type: Boolean, reflect: true }
  }

  declare tabsHidden: boolean
  declare dropping: boolean
  
  private _tabs = createRef()
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

  set activeTab(value: string | null) {
    this._activeTab = null
    for (const child of this.children) {
      if (!(child instanceof Toolbar)) continue;
      if (!this._activeTab && child.name === value) {
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

  get activeTab() {
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
    this.tabsHidden = false
    this.dropping = false
  }

  private updateToolbars() {    
    for (const child of this.children) {
      if (!(child instanceof Toolbar) || this._toolbars.includes(child)) continue;
      child.active = false
      this._toolbars.push(child)
      child.vertical = this.vertical
      const { tabElement } = child
      tabElement.onclick = () => {
        this.activeTab = this.activeTab === child.name ? null : child.name
      };
    }
    this.updateToolbarsList()
    if (!this.activeTab && !this.toolbarsHidden && this._toolbars[0]) this.activeTab = this._toolbars[0].name;
  }
  
  private updateToolbarsList() {
    const { value: tabs } = this._tabs
    for (const toolbar of this._toolbars) {
      if (![...this.children].includes(toolbar)) {
        this._toolbars = this._toolbars.filter(t => t !== toolbar)
      } else {
        tabs?.append(toolbar.tabElement)
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
    const dropPlaceTemplate = html`<div class="drop-element"></div>`

    return html`
      <div class="parent">
        ${this.dropping ? dropPlaceTemplate : 
        html`
          ${!this.tabsHidden ? tabsTemplate : null}
          <div class="toolbars">
            <slot @slotchange=${this.updateToolbars}></slot>
          </div>
        `
        }
      </div>
    `
  }
}