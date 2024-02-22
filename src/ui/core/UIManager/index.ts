import { ToolbarSection } from "../..";
import { Panel } from "../../components/Panel";
import { PanelsContainer } from "../../components/PanelsContainer";
import { Toolbar } from "../../components/Toolbar";
import { css } from "lit";

export interface UIManagerConfig {
  floating: boolean;
  grid: {
    areas: string;
    columnsSize: string;
    rowsSize: string;
    padding: string;
    gap: string;
  };
}

export type UIAreas = "a" | "b" | "c" | "d" | "e" | "f" | "l" | "r" | "t";

export type UIOrientation = "horizontal" | "vertical";

export class UIManager {
  // The main HTMLElement where all the UI lives
  grid: HTMLElement

  // Only defined if config.floating is false
  viewerArea: HTMLDivElement | null = null

  // A configuration object to define the UI behavior
  static config: Required<UIManagerConfig> = {
    floating: true,
    grid: {
      areas: `
        'toolbar-a toolbar-a toolbar-a'
        'panel-a viewer panel-b'
      `,
      columnsSize: "minmax(320px, auto) 1fr minmax(320px, auto)",
      rowsSize: "auto 1fr",
      padding: "1.25rem",
      gap: "1rem",
    },
  }

  config: Required<UIManagerConfig>

  private PANEL_CONTAINER_PREFIX = "panel-"
  private TOOLBAR_PREFIX = "toolbar-"

  constructor(container: HTMLElement, config?: Partial<UIManagerConfig>) {
    this.config = { ...UIManager.config, ...config }
    const { floating, grid } = this.config
    if (!floating && !grid.areas.includes("viewer")) {
      throw new Error(
        "If UI.floating is false, UI.config.areas must have a viewer area defined."
      )
    }
    this.grid = floating ? document.createElement("div") : container
    if (floating) {
      container.style.position = "relative"
      container.append(this.grid)
    }
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
    const { floating } = this.config
    this.grid.setAttribute("data-ui-style", floating ? "floating" : "fixed")
    const { areas, columnsSize, rowsSize, padding, gap } = this.config.grid
    if (floating) {
      this.grid.style.position = "absolute";
      this.grid.style.pointerEvents = "none";
      this.grid.style.top = "0";
      this.grid.style.left = "0";
      this.grid.style.height = "100%";
      this.grid.style.width = "100%";
    } else {
      this.viewerArea = document.createElement("div");
      this.viewerArea.style.minHeight = "0px";
      this.viewerArea.style.minWidth = "0px";
      this.viewerArea.style.gridArea = "viewer";
      this.viewerArea.style.position = "relative";
      this.viewerArea.style.outline = `1px solid var(--bim-ui_bg-contrast-20)`
      this.grid.append(this.viewerArea)
    }
    this.grid.setAttribute("data-ui-type", "grid")
    this.grid.style.overflow = "hidden";
    this.grid.style.boxSizing = "border-box";
    this.grid.style.display = "grid";
    this.grid.style.gridTemplateAreas = areas;
    this.grid.style.gridTemplateColumns = columnsSize;
    this.grid.style.gridTemplateRows = rowsSize;
    this.grid.style.padding = padding;
    this.grid.style.gap = gap;
  }

  private createPanelContainers() {
    const { gridTemplateAreas } = this.grid.style;
    const rows = gridTemplateAreas
      .trim()
      .split(/"([^"]*)"/)
      .filter((value) => Boolean(value.replace(" ", "")));

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
  }

  private createGridToolbars() {
    const { gridTemplateAreas } = this.grid.style;
    const rows = gridTemplateAreas
      .trim()
      .split(/"([^"]*)"/)
      .filter((value) => Boolean(value.replace(" ", "")));

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
      element.style.flexDirection = orientation === "horizontal" ? "row" : "column"
      this.grid.append(element);
    }
  }

  getPanelsContainer(area: UIAreas) {
    const gridArea = `${this.PANEL_CONTAINER_PREFIX}${area}`
    const selector = `bim-panels-container[style*="grid-area: ${gridArea};"]`
    const container = this.grid.querySelector<PanelsContainer>(selector)
    if (!container) {
      throw new Error(`${gridArea} wasn't define in the UIManager.config.grid.areas`)
    }
    return container
  }

  getGridToolbar(area: UIAreas) {
    const gridArea = `${this.TOOLBAR_PREFIX}${area}`
    const selector = `bim-toolbar[style*="grid-area: ${gridArea};"]`
    const container = this.grid.querySelector<Toolbar>(selector)
    if (!container) {
      throw new Error(`${gridArea} wasn't define in the UIManager.config.grid.areas`)
    }
    return container
  }

  addPanel(panel: Panel, area: UIAreas) {
    // if (!(panel instanceof Panel)) {
    //   throw new Error("Only bim-panel can be added to a bim-panels-container element.")
    // }
    const container = this.getPanelsContainer(area)
    container.appendChild(panel)
  }

  addGridToolbarSection(section: ToolbarSection, area: UIAreas) {
    const container = this.getGridToolbar(area)
    container.appendChild(section)
  }

  createElementFromTemplate<T extends HTMLElement = HTMLElement>(template: string) {
    const temp = document.createElement("div");
    temp.innerHTML = template;
    const element = temp.firstElementChild as T;
    temp.remove();
    return element;
  }
}