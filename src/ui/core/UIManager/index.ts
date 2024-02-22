import { ToolbarSection } from "../..";
import { Panel } from "../../components/Panel";
import { PanelsContainer } from "../../components/PanelsContainer";
import { Toolbar } from "../../components/Toolbar";
import { styles } from "./src/styles";
import { css, unsafeCSS } from "lit";

export interface UIManagerStyles {
  color: {
    brand: {
      main: {
        light: string
        base: string
      }
      accent: {
        base: string
      }
    }
    background: {
      "base": string
      "contrast-10": string
      "contrast-20": string
      "contrast-40": string
      "contrast-60": string
      "contrast-80": string
      "contrast-100": string
    }
  }
  size: {
    "4xs": string
    "3xs": string
    "2xs": string
    "xs": string
    "sm": string
    "base": string
  }
}

export interface UIManagerConfig {
  styles: UIManagerStyles;
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
    styles,
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
    const { styles } = this.config
    const style = document.createElement("style")
    document.head.append(style);
    style.id = "bim-ui"
    const rules = css`
      :root {        
        /* Button */
        --bim-button--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-button--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-button¡hover--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-button¡hover--bgc: ${unsafeCSS(styles.color.brand.main.base)};
        --bim-button¡active--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-button¡active--bgc: ${unsafeCSS(styles.color.brand.main.base)};

        /* Checkbox */
        --bim-checkbox--c: ${unsafeCSS(styles.color.brand.main.base)};
        --bim-checkbox--olw: 2px;
        --bim-checkbox--olc: ${unsafeCSS(styles.color.brand.accent.base)};

        /* ColorInput */
        --bim-color-input--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-color-input--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-color-input--bdrs: ${unsafeCSS(styles.size["4xs"])};

        /* Dropdown */
        --bim-dropdown--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-dropdown--fz: ${unsafeCSS(styles.size.xs)};
        --bim-dropdown--bdrs: ${unsafeCSS(styles.size["4xs"])};
        --bim-dropdown--olw: 2px;
        --bim-dropdown--olc: transparent;
        --bim-dropdown--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-dropdown¡focus--c: ${unsafeCSS(styles.color.brand.accent.base)};
        --bim-dropdown¡selected--c: ${unsafeCSS(styles.color.brand.main.light)};
        --bim-dropdown_list--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-dropdown_sb--c: ${unsafeCSS(styles.color.brand.main.light)};
        --bim-dropdown_sb--bgc: black;

        /* InputLabel */
        --bim-input-label--fz: ${unsafeCSS(styles.size.sm)};
        --bim-input-label--c: ${unsafeCSS(styles.color.background["contrast-60"])};

        /* NumberInput */
        --bim-number-input--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-number-input--bdrs: ${unsafeCSS(styles.size["4xs"])};
        --bim-number-input--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-number-input--olc: transparent;
        --bim-number-input--olw: 2px;
        --bim-number-input--fz: ${unsafeCSS(styles.size.xs)};
        --bim-number-input¡focus--c: ${unsafeCSS(styles.color.brand.accent.base)};
        --bim-number-input_affixes--c: ${unsafeCSS(styles.color.background["contrast-60"])};
        --bim-number-input_affixes--fz: ${unsafeCSS(styles.size.xs)};

        /* Panel */
        --bim-panel--bgc: ${unsafeCSS(styles.color.background["base"])};
        --bim-panel--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-panel--bdrs: ${unsafeCSS(styles.size.base)};
        --bim-panel--fz: ${unsafeCSS(styles.size.sm)};

        /* PanelSection */
        --bim-panel-section--fz: ${unsafeCSS(styles.size.sm)};
        --bim-panel-section--c: ${unsafeCSS(styles.color.background["contrast-80"])};
        --bim-panel-section--bdc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-panel-section¡hover: ${unsafeCSS(styles.color.brand.accent.base)};

        /* SelectorInput */
        --bim-selector-input--bdrs: ${unsafeCSS(styles.size["4xs"])};
        --bim-selector-input--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-selector-input--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-selector-input¡hover--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-selector-input¡hover--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-selector-input¡selected--bgc: ${unsafeCSS(styles.color.brand.main.base)};
        --bim-selector-input¡selected--c: white;

        /* Table */
        --bim-table_header--bgc: ${unsafeCSS(styles.color.background["contrast-20"])};
        --bim-table_header--c: ${unsafeCSS(styles.color.background["contrast-100"])};
        --bim-table¡striped--c: ${unsafeCSS(styles.color.background["contrast-10"])};

        /* Tag */

        /* Toolbar */
        --bim-toolbar--bgc: ${unsafeCSS(styles.color.background["base"])};

        /* ToolbarSection */

        /* VectorInput */
      }
    `
    style.textContent = rules.cssText
  }

  private createGrid() {
    const { floating, styles } = this.config
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
      this.viewerArea.style.outline = `1px solid ${styles.color.background["contrast-20"]}`
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