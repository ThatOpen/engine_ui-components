import { ToolbarSection } from "../..";
import { Panel } from "../../components/Panel";
import { PanelsContainer } from "../../components/PanelsContainer";
import { Toolbar } from "../../components/Toolbar";
import { styles } from "./src/styles";

export interface UIManagerStyles {
  color: {
    main: string
    accent: string
  }
  focus: {
    color: string
  }
  label: {
    color: string
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
    document.head.append(style)
    style.id = "bim-ui"
    style.textContent = `
      * {
        --bim-label-color: ${styles.label.color};
        --bim-dropdown-focus-color: ${styles.color.main};
        --bim-number-input-focus-color: ${styles.color.main};
        --bim-selector-input-selected: ${styles.color.main};
        --bim-checkbox-accent: ${styles.color.main};
        --bim-panel-section-hover: ${styles.color.main};
        --bim-button-hover: ${styles.color.main};
        --bim-dropdown-color: ${styles.color.main};
      }
    `
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
      this.viewerArea.style.outline = "1px solid #2e2e2e"
      this.grid.append(this.viewerArea)
      this.grid.style.backgroundColor = "#1b1b1b"
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