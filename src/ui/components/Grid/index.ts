import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Grid extends UIComponent {
  static styles = css`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      background-color: var(--bim-grid--bgc);
      grid-template: var(--bim-grid--tpl);
      padding: var(--bim-grid--p);
      gap: var(--bim-grid--g);
    }
    
    :host([floating]) {
      --bim-grid--bgc: transparent;
      --bim-grid--p: 1rem;
      --bim-grid--g: 1rem;
      /* --bim-grid--tpl:
        "empty" 1fr
        "toolbar-b" auto
        / 1fr
      ; */
      --bim-toolbars-container--olw: 1px;
      --bim-toolbars-container--olc: var(--bim-ui_bg-contrast-20);
      --bim-toolbars-container--js: center;
      --bim-toolbars-container--as: start;
      --bim-toolbars-container_tabs--bgc: transparent;
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-grid--bgc: var(--bim-ui_bg-contrast-20);
      --bim-grid--g: 1px;
      /* --bim-grid--tpl:
        "toolbar-a toolbar-a toolbar-a" auto
        "panel-a viewport panel-b" 1fr
        "panel-a viewport panel-b" 1fr
        / auto 1fr auto
      ; */
      --bim-toolbars-container--js: auto;
      --bim-toolbars-container--as: auto;
      --bim-toolbars-container_tabs--bgc: var(--bim-ui_bg-base);
      --bim-panel--bdrs: 0;
    }
  `

  static properties = {
    floating: { type: Boolean, reflect: true }
  }

  declare floating: boolean
  declare template: string

  get rows() {
    const template = this.style.gridTemplate
    const rows = template
      .trim()
      .split(/"([^"]*)"/)
      .map((value, index) => {if (index % 2 !== 0) {return value}})
      .filter((value) => value !== undefined) as string[];
    return rows
  }

  get areas() {
    const areas = new Set<string>()
    for (const row of this.rows) {
      const columns = row.trim().split(/\s+/);
      for (const column of columns) areas.add(column)
    }
    return [...areas]
  }

  constructor() {
    super()
    this.floating = false
  }

  private onSlotChange() {
    for (const child of this.children) {
      if (this.floating) {
        child.setAttribute("floating", "")
      } else {
        child.removeAttribute("floating")
      }
    }
  }
  
  isVerticalArea(area: string) {
    const { rows } = this
    const row = rows.find((row) => row.includes(area))
    if (!row) throw new Error(`${area} wasn't defined in the grid-template of this bim-grid`)
    const index = rows.indexOf(row)
    const abovePanel = index > 0 && rows[index - 1].includes(area);
    const belowPanel = index < rows.length - 1 && rows[index + 1].includes(area);
    return abovePanel || belowPanel
  }

  render() {
    return html`
      <slot @slotchange=${this.onSlotChange}></slot>
    `
  }
}