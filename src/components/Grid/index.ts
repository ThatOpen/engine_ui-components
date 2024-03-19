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
    }
    
    :host([floating]) {
      --bim-toolbars-container--olw: 1px;
      --bim-toolbars-container--olc: var(--bim-ui_bg-contrast-20);
      --bim-toolbars-container--js: center;
      --bim-toolbars-container--as: start;
      --bim-toolbars-container_tabs--bgc: transparent;
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-toolbars-container--js: auto;
      --bim-toolbars-container--as: auto;
      --bim-toolbars-container_tabs--bgc: var(--bim-ui_bg-base);
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
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

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[]
    for (const child of children) {
      child.toggleAttribute("floating", this.floating)
      try {
        const isVertical = this.isVerticalArea(child.style.gridArea)
        if ("horizontal" in child) {
          child.horizontal = !isVertical
        } else if ("vertical" in child) {
          child.vertical = isVertical
        }
      } catch (error) {
        // Means the gridArea of the child is not present in this grid template
        child.remove()
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