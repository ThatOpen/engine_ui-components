import { Grid } from "../../components/Grid";
import { ToolbarSection } from "../../components/ToolbarSection";
import { Panel } from "../../components/Panel";
import { PanelsContainer } from "../../components/PanelsContainer";
import { Toolbar } from "../../components/Toolbar";
import { css } from "lit";

export interface ManagerConfig {
  floating: boolean;
  addGlobalStyles: boolean,
  onViewportResize: () => void;
}

export type GridArea = "a" | "b" | "c" | "d" | "e" | "f" | "l" | "r" | "t";

export type UIOrientation = "horizontal" | "vertical";

export class UIManager {
  // The main HTMLElement where all the UI lives. Here also lives the viewport if config.floating = false.
  grid = document.createElement("bim-grid") as Grid

  // Only defined if config.floating is false
  viewport: HTMLElement

  // A configuration object to define the UI behavior
  config: Required<ManagerConfig> = {
    floating: false,
    addGlobalStyles: true,
    onViewportResize: () => {}
  }

  private PANEL_CONTAINER_PREFIX = "panel-"
  private TOOLBAR_PREFIX = "toolbar-"

  private get gridRows() {
    const template = getComputedStyle(document.documentElement).getPropertyValue("--bim-grid--tpl")
    const rows = template
      .trim()
      .split(/"([^"]*)"/)
      .map((value, index) => {if (index % 2 !== 0) {return value}})
      .filter((value) => value !== undefined) as string[];
    return rows
  }

  constructor(viewport: HTMLElement, config?: Partial<ManagerConfig>) {
    this.viewport = viewport
    this.config = { ...this.config, ...config }
    // if (!this.config.grid.areas.includes("viewport")) {
    //   throw new Error(
    //     "UI.config.areas must have a viewport area defined."
    //   )
    // }
    this.createGrid()
    this.createPanelContainers()
    this.createGridToolbars()
    this.addGlobalStyles()
  }

  private addGlobalStyles() {
    const style = document.createElement("style")
    const firstChild = document.head.firstChild
    if (firstChild) {
      document.head.insertBefore(style, firstChild)
    } else {
      document.head.append(style)
    }
    style.id = "bim-ui"
    const rules = css`
      :root { 
        /* Backgrounds */
        --bim-ui_bg-base: hsl(210 10% 5%);
        --bim-ui_bg-contrast-10: hsl(210 10% 10%);
        --bim-ui_bg-contrast-20: hsl(210 10% 20%);
        --bim-ui_bg-contrast-40: hsl(210 10% 40%);
        --bim-ui_bg-contrast-60: hsl(210 10% 60%);
        --bim-ui_bg-contrast-80: hsl(210 10% 80%);
        --bim-ui_bg-contrast-100: hsl(210 10% 95%);

        /* Colors */
        --bim-ui_color-main: #6528D7;
        --bim-ui_color-main-light: #9D6BFF;
        --bim-ui_color-accent: #BCF124;

        /* Sizes */
        --bim-ui_size-4xs: 0.375rem;
        --bim-ui_size-3xs: 0.5rem;
        --bim-ui_size-2xs: 0.625rem;
        --bim-ui_size-xs: 0.75rem;
        --bim-ui_size-sm: 0.875rem;
        --bim-ui_size-base: 1rem;
        --bim-ui_size-lg: 1.125rem;

        /* Scrollbar */
        --bim-scrollbar--c: var(--bim-ui_color-main);
        --bim-scrollbar--bgc: black;

        /* Button */
        --bim-button--fz: var(--bim-ui_size-xs);
        --bim-button--c: var(--bim-ui_bg-contrast-100);
        --bim-button--bgc: var(--bim-ui_bg-contrast-20);
        --bim-button¡hover--c: var(--bim-ui_bg-contrast-100);
        --bim-button¡hover--bgc: var(--bim-ui_color-main);
        --bim-button¡active--c: var(--bim-ui_bg-contrast-100);
        --bim-button¡active--bgc: var(--bim-ui_color-main);

        /* Checkbox */
        --bim-checkbox--c: var(--bim-ui_color-main);
        --bim-checkbox--olw: 2px;
        --bim-checkbox--olc: var(--bim-ui_color-accent);

        /* ColorInput */
        --bim-color-input--c: var(--bim-ui_bg-contrast-100);
        --bim-color-input--bgc: var(--bim-ui_bg-contrast-20);
        --bim-color-input--bdrs: var(--bim-ui_size-4xs);

        /* Dropdown */
        --bim-dropdown--c: var(--bim-ui_bg-contrast-100);
        --bim-dropdown--fz: var(--bim-ui_size-xs);
        --bim-dropdown--bdrs: var(--bim-ui_size-4xs);
        --bim-dropdown--olw: 2px;
        --bim-dropdown--olc: transparent;
        --bim-dropdown--bgc: var(--bim-ui_bg-contrast-20);
        --bim-dropdown¡focus--c: var(--bim-ui_color-accent);
        --bim-dropdown¡selected--c: var(--bim-ui_color-main-light);
        --bim-dropdown_list--bgc: var(--bim-ui_bg-contrast-20);

        /* Grid */
        --bim-grid--bgc: var(--bim-ui_bg-contrast-20);
        --bim-grid--g: 1px;
        --bim-grid--tpl:
          "panel-a viewport" 1fr
          "panel-a viewport" 1fr
          "panel-b panel-b" auto
          / 350px 1fr
        ;

        bim-grid[floating] {
          --bim-grid--p: 1.25rem;
          --bim-grid--g: 1rem;
          --bim-grid--bgc: transparent;
        }

        /* Icon */
        --bim-icon--fz: var(--bim-ui_size-base);

        /* InputLabel */
        --bim-input-label--fz: var(--bim-ui_size-sm);
        --bim-input-label--c: var(--bim-ui_bg-contrast-60);

        /* NumberInput */
        --bim-number-input--c: var(--bim-ui_bg-contrast-100);
        --bim-number-input--bdrs: var(--bim-ui_size-4xs);
        --bim-number-input--bgc: var(--bim-ui_bg-contrast-20);
        --bim-number-input--olc: transparent;
        --bim-number-input--olw: 2px;
        --bim-number-input--fz: var(--bim-ui_size-xs);
        --bim-number-input¡focus--c: var(--bim-ui_color-accent);
        --bim-number-input_affixes--c: var(--bim-ui_bg-contrast-60);
        --bim-number-input_affixes--fz: var(--bim-ui_size-xs);

        /* Panel */
        --bim-panel--bgc: var(--bim-ui_bg-base);
        --bim-panel--c: var(--bim-ui_bg-contrast-100);
        --bim-panel--bdrs: var(--bim-ui_size-base);
        --bim-panel--fz: var(--bim-ui_size-sm);

        bim-grid:not([floating]) {
          --bim-panel--bdrs: 0;
        }

        /* PanelSection */
        --bim-panel-section--fz: var(--bim-ui_size-sm);
        --bim-panel-section--c: var(--bim-ui_bg-contrast-80);
        --bim-panel-section--bdc: var(--bim-ui_bg-contrast-20);
        --bim-panel-section¡hover: var(--bim-ui_color-accent);

        /* SelectorInput */
        --bim-selector-input--bdrs: var(--bim-ui_size-4xs);
        --bim-selector-input--c: var(--bim-ui_bg-contrast-100);
        --bim-selector-input--bgc: var(--bim-ui_bg-contrast-20);
        --bim-selector-input¡hover--bgc: var(--bim-ui_bg-contrast-20);
        --bim-selector-input¡hover--c: var(--bim-ui_bg-contrast-100);
        --bim-selector-input¡selected--bgc: var(--bim-ui_color-main);
        --bim-selector-input¡selected--c: white;

        /* Table */
        --bim-table_header--bgc: var(--bim-ui_bg-contrast-20);
        --bim-table_header--c: var(--bim-ui_bg-contrast-100);
        --bim-table¡striped--c: var(--bim-ui_bg-contrast-10);

        /* Tag */

        /* Toolbar */
        --bim-toolbar--bgc: var(--bim-ui_bg-base);
        --bim-toolbar--bdrs: var(--bim-ui_size-base);
        bim-grid:not([floating]) {
          --bim-toolbar--bdrs: 0;
        }

        /* ToolbarSection */

        /* VectorInput */
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --bim-ui_bg-base: hsl(210 10% 5%);
          --bim-ui_bg-contrast-10: hsl(210 10% 10%);
          --bim-ui_bg-contrast-20: hsl(210 10% 20%);
          --bim-ui_bg-contrast-40: hsl(210 10% 40%);
          --bim-ui_bg-contrast-60: hsl(210 10% 60%);
          --bim-ui_bg-contrast-80: hsl(210 10% 80%);
          --bim-ui_bg-contrast-100: hsl(210 10% 95%);
        }
      }

      @media (prefers-color-scheme: light) {
        :root {
          --bim-ui_bg-base: hsl(210 10% 95%);
          --bim-ui_bg-contrast-10: hsl(210 10% 90%);
          --bim-ui_bg-contrast-20: hsl(210 10% 80%);
          --bim-ui_bg-contrast-40: hsl(210 10% 60%);
          --bim-ui_bg-contrast-60: hsl(210 10% 40%);
          --bim-ui_bg-contrast-80: hsl(210 10% 20%);
          --bim-ui_bg-contrast-100: hsl(210 10% 5%);
        }
      }

      html.bim-ui-dark {
        --bim-ui_bg-base: hsl(210 10% 5%);
        --bim-ui_bg-contrast-10: hsl(210 10% 10%);
        --bim-ui_bg-contrast-20: hsl(210 10% 20%);
        --bim-ui_bg-contrast-40: hsl(210 10% 40%);
        --bim-ui_bg-contrast-60: hsl(210 10% 60%);
        --bim-ui_bg-contrast-80: hsl(210 10% 80%);
        --bim-ui_bg-contrast-100: hsl(210 10% 95%);
      }

      html.bim-ui-light {
        --bim-ui_bg-base: hsl(210 10% 95%);
        --bim-ui_bg-contrast-10: hsl(210 10% 90%);
        --bim-ui_bg-contrast-20: hsl(210 10% 80%);
        --bim-ui_bg-contrast-40: hsl(210 10% 60%);
        --bim-ui_bg-contrast-60: hsl(210 10% 40%);
        --bim-ui_bg-contrast-80: hsl(210 10% 20%);
        --bim-ui_bg-contrast-100: hsl(210 10% 5%);
      }
    `
    style.textContent = rules.cssText
  }

  private createGrid() {
    const { floating, onViewportResize } = this.config
    this.grid.floating = floating
    if (floating) {
      this.viewport.style.position = "relative"
      this.viewport.append(this.grid)
    } else {
      const container = this.viewport.parentElement
      if (!container) {
        throw new Error("UIManager: viewport needs to have a parent to create a grid.")
      }
      container.append(this.grid)
      container.style.overflow = "auto"
      this.grid.append(this.viewport)
      this.viewport.style.minHeight = "0px";
      this.viewport.style.minWidth = "0px";
      this.viewport.style.gridArea = "viewport";
      this.viewport.style.position = "relative";
      const observer = new ResizeObserver(onViewportResize)
      observer.observe(this.viewport)
    }
  }

  private createPanelContainers() {
    requestAnimationFrame(() => {
      const rows = this.gridRows
      const panelsOrientation: Record<string, UIOrientation> = {};
      for (const [rowIndex, row] of rows.entries()) {
        const columns = row.trim().split(/\s+/);
        for (const column of columns) {
          const isPanel = RegExp(/\b\w*panel-\b/g).test(column);
          if (!isPanel) continue;
          if (!panelsOrientation[column]) {
            const abovePanel =
              rowIndex > 0 && rows[rowIndex - 1].includes(column);
            const belowPanel =
              rowIndex < rows.length - 1 && rows[rowIndex + 1].includes(column);
            panelsOrientation[column] =
              abovePanel || belowPanel ? "vertical" : "horizontal";
          }
        }
      }
  
      for (const area in panelsOrientation) {
        // const container = this.getPanelsContainer(area.split(this.PANEL_CONTAINER_PREFIX)[1] as UIAreas)
        // if (container) continue;
        const orientation = panelsOrientation[area];
        const element = document.createElement("bim-panels-container") as PanelsContainer
        element.horizontal = orientation === "horizontal"
        element.style.gridArea = area;
        element.ondragenter = () => {
          element.classList.remove("bg-[#00000021]");
          element.classList.add("bg-[#00000030]");
        };
        element.ondragleave = () => {
          element.classList.add("bg-[#00000021]");
          element.classList.remove("bg-[#00000030]");
        };
        element.ondragover = (e) => {
          e.preventDefault();
          if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = "move";
          }
        };
        element.ondrop = (e) => {
          e.preventDefault();
          const id = e.dataTransfer?.getData("id");
          if (!id) return;
          const panel = document.getElementById(id);
          if (!panel) return;
          element.append(panel);
        };
        this.grid.append(element);
      }
    })
  }

  private createGridToolbars() {
    requestAnimationFrame(() => {
      const rows = this.gridRows
      const toolbarsOrientation: Record<string, UIOrientation> = {};
      for (const [rowIndex, row] of rows.entries()) {
        const columns = row.trim().split(/\s+/);
        for (const column of columns) {
          const isToolbar = RegExp(/\b\w*toolbar-\b/g).test(column);
          if (!isToolbar) continue;
          if (!toolbarsOrientation[column]) {
            const aboveToolbar =
              rowIndex > 0 && rows[rowIndex - 1].includes(column);
            const belowToolbar =
              rowIndex < rows.length - 1 && rows[rowIndex + 1].includes(column);
            toolbarsOrientation[column] =
              aboveToolbar || belowToolbar ? "vertical" : "horizontal";
          }
        }
      }
  
      for (const area in toolbarsOrientation) {
        const orientation = toolbarsOrientation[area];
        const element = document.createElement("bim-toolbar") as Toolbar;
        element.horizontal = orientation === "horizontal"
        element.style.gridArea = area;
        this.grid.append(element);
      }
    })
  }

  private getPanelsContainer(area: GridArea) {
    const gridArea = `${this.PANEL_CONTAINER_PREFIX}${area}`
    const selector = `bim-panels-container[style*="grid-area: ${gridArea};"]`
    const container = this.grid.querySelector<PanelsContainer>(selector)
    if (!container) {
      throw new Error(`UIManager: ${gridArea} wasn't define in --bim-grid--tpl`)
    }
    return container
  }

  getGridToolbar(area: GridArea) {
    const gridArea = `${this.TOOLBAR_PREFIX}${area}`
    const selector = `bim-toolbar[style*="grid-area: ${gridArea};"]`
    const container = this.grid.querySelector<Toolbar>(selector)
    if (!container) {
      throw new Error(`UIManager: ${gridArea} wasn't define in --bim-grid--tpl`)
    }
    return container
  }

  addPanel(panel: Panel, area: GridArea) {
    requestAnimationFrame(() => {
      const container = this.getPanelsContainer(area)
      container.appendChild(panel)
    })
  }

  addGridToolbarSection(section: ToolbarSection, area: GridArea) {
    requestAnimationFrame(() => {
      const container = this.getGridToolbar(area)
      container.appendChild(section)
    })
  }

  createElementFromTemplate<T extends HTMLElement = HTMLElement>(template: string) {
    const temp = document.createElement("div");
    temp.innerHTML = template;
    const element = temp.firstElementChild as T;
    temp.remove();
    return element;
  }

  setGridTemplate(template: string) {
    document.documentElement.style.setProperty("--bim-grid--tpl", template);
    this.createPanelContainers()
  }
}