import { Grid } from "../../components/Grid";
import { Panel } from "../../components/Panel";
import { PanelsContainer } from "../../components/PanelsContainer";
import { Toolbar } from "../../components/Toolbar";
import { styles } from "./src/styles";
import { ToolbarsContainer } from "../../components/ToolbarsContainer";

export interface ManagerConfig {
  addGlobalStyles: boolean
  sectionLabelOnVerticalToolbar: boolean
  draggableToolbars: boolean
  draggablePanels: boolean
  onViewportResize: () => void
}

type Areas = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

export type UIOrientation = "horizontal" | "vertical";

export class UIManager<GridAreas extends string = Areas> {
  private PANEL_CONTAINER_PREFIX = "panel-"
  private GRID_TOOLBAR_PREFIX = "toolbar-"

  private containers: {
    panels: PanelsContainer[]
    toolbars: ToolbarsContainer[]
  } = { panels: [], toolbars: [] }
  
  // The main working area of the app.
  viewport: HTMLElement

  // The grid surrounding the viewport.
  outerGrid = document.createElement("bim-grid") as Grid

  // The grid inside the viewport.
  innerGrid = document.createElement("bim-grid") as Grid

  private static _config: Required<ManagerConfig> = {
    addGlobalStyles: true,
    sectionLabelOnVerticalToolbar: false,
    draggableToolbars: true,
    draggablePanels: true,
    onViewportResize: () => { },
  }

  static set config(value: Partial<ManagerConfig>) {
    this._config = {...UIManager._config, ...value}
  }

  static get config(): Required<ManagerConfig> {
    return UIManager._config
  }

  constructor(viewport: HTMLElement) {
    this.viewport = viewport
    this.createGrid()
    this.createPanelContainers()
    this.createToolbarContainers()
    this.addGlobalStyles()
  }

  private addGlobalStyles() {
    if (!UIManager.config.addGlobalStyles) return;
    const style = document.createElement("style")
    style.id = "bim-ui"
    style.textContent = styles.globalStyles.cssText
    const firstChild = document.head.firstChild
    if (firstChild) {
      document.head.insertBefore(style, firstChild)
    } else {
      document.head.append(style)
    }
  }

  private validateGridTemplates() {
    // Outer must have viewport
    // Inner must not have viewport
    // There must be no repeated panels/toolbars
    throw new Error("UIManager: You've passed an invalid grid template.")
  }

  private createGrid() {
    const container = this.viewport.parentElement
    if (!container) {
      throw new Error("UIManager: viewport needs to have a parent to create a grid.")
    }
    container.append(this.outerGrid)
    container.style.overflow = "auto"
    this.outerGrid.append(this.viewport)
    this.outerGrid.floating = false
    this.innerGrid.floating = true
    this.viewport.style.position = "relative"
    this.viewport.style.minHeight = "0px";
    this.viewport.style.minWidth = "0px";
    this.viewport.style.gridArea = "viewport";
    this.viewport.append(this.innerGrid)
    const observer = new ResizeObserver(UIManager.config.onViewportResize)
    observer.observe(this.viewport)
  }

  private getGridRows(grid: Grid) {
    const template = getComputedStyle(grid).gridTemplate
    const rows = template
      .trim()
      .split(/"([^"]*)"/)
      .map((value, index) => {if (index % 2 !== 0) {return value}})
      .filter((value) => value !== undefined) as string[];
    return rows
  }
  
  private createPanelContainers() {
    // Request animation frame is needed because in the first render of the page
    // the browser has not computed CSS variables yet.
    requestAnimationFrame(() => {
      const { panels: panelContainers } = this.containers
      for (const grid of [this.outerGrid, this.innerGrid]) {
        const rows = this.getGridRows(grid)
        for (const [rowIndex, row] of rows.entries()) {
          const columns = row.trim().split(/\s+/);
          for (const column of columns) {
            const isPanelContainer = RegExp(/\b\w*panel-\b/g).test(column);
            if (!isPanelContainer) continue;
            const columnArea = column.split(this.PANEL_CONTAINER_PREFIX)[1] as GridAreas
            const existingContainer = panelContainers.find((container) => container.gridArea === columnArea)
            if (existingContainer) {
              grid.append(existingContainer);
              continue
            };
            const abovePanel = rowIndex > 0 && rows[rowIndex - 1].includes(column);
            const belowPanel = rowIndex < rows.length - 1 && rows[rowIndex + 1].includes(column);
            const element = document.createElement("bim-panels-container") as PanelsContainer
            panelContainers.push(element)
            element.horizontal = !(abovePanel || belowPanel)
            element.gridArea = columnArea
            grid.append(element);
          }
        }
      }
      this.removeUnusedLayoutElements()
    })
  }

  private createToolbarContainers() {
    // Request animation frame is needed because in the first render of the page
    // the browser has not computed CSS variables yet.
    requestAnimationFrame(() => {
      const { toolbars } = this.containers
      for (const grid of [this.outerGrid, this.innerGrid]) {
        const rows = this.getGridRows(grid)
        for (const [rowIndex, row] of rows.entries()) {
          const columns = row.trim().split(/\s+/);
          for (const column of columns) {
            const isToolbar = RegExp(/\b\w*toolbar-\b/g).test(column);
            if (!isToolbar) continue;
            const columnArea = column.split(this.GRID_TOOLBAR_PREFIX)[1] as GridAreas
            const existingContainer = toolbars.find((container) => container.gridArea === columnArea)
            if (existingContainer) {
              grid.append(existingContainer);
              continue
            };
            const abovePanel = rowIndex > 0 && rows[rowIndex - 1].includes(column);
            const belowPanel = rowIndex < rows.length - 1 && rows[rowIndex + 1].includes(column);
            const element = document.createElement("bim-toolbars-container") as ToolbarsContainer
            toolbars.push(element)
            element.vertical = abovePanel || belowPanel
            element.gridArea = columnArea
            grid.append(element);
          }
        }
      }
      this.removeUnusedLayoutElements()
    })
  }
  
  private removeUnusedLayoutElements() {
    const { panels: panelContainers } = this.containers
    const usedAreas = [
      ...this.getGridRows(this.outerGrid),
      ...this.getGridRows(this.innerGrid)
    ]
    for (const container of panelContainers) {
      const area = `${this.PANEL_CONTAINER_PREFIX}${container.gridArea}`
      const used = usedAreas.find((usedArea) => usedArea.includes(area))
      if (!used) container.remove()
    }
  }

  static createElementFromTemplate<T extends HTMLElement = HTMLElement>(template: string) {
    const temp = document.createElement("div");
    temp.innerHTML = template;
    const element = temp.firstElementChild as T;
    temp.remove();
    return element;
  }

  static generateRandomId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }

    return id;
  }

  getPanelsContainer(area: GridAreas) {
    const { panels: panelContainers } = this.containers
    const container = panelContainers.find((container) => container.gridArea === area)
    if (!container) {
      throw new Error(`UIManager: ${this.PANEL_CONTAINER_PREFIX}${area} wasn't define in --bim-grid--tpl`)
    }
    return container
  }

  getToolbarsContainer(area: GridAreas) {
    const { toolbars } = this.containers
    const container = toolbars.find((container) => container.gridArea === area)
    if (!container) {
      throw new Error(`UIManager: ${this.GRID_TOOLBAR_PREFIX}${area} wasn't define in --bim-grid--tpl`)
    }
    return container
  }

  dispose() {
    this.innerGrid.remove()
    const outerGridParent = this.outerGrid.parentNode
    if (outerGridParent) {
      outerGridParent.append(this.viewport)
    }
    this.outerGrid.remove()
  }

  addPanel(gridArea: GridAreas, ...panels: Panel[]) {
    requestAnimationFrame(() => {
      for (const panel of panels) {
        const container = this.getPanelsContainer(gridArea)
        container.appendChild(panel)
      }
    })
  }

  addToolbar(gridArea: GridAreas, ...toolbars: Toolbar[]) {
    requestAnimationFrame(() => {
      for (const toolbar of toolbars) {
        const container = this.getToolbarsContainer(gridArea)
        container.appendChild(toolbar)
      }
    })
  }

  updateContainersDirection() {
    const toolbarContainers = document.querySelectorAll("bim-toolbars-container")
    for (const container of toolbarContainers) {
      
    }
    
    const panelContainers = document.querySelectorAll("bim-panels-container")
    for (const container of panelContainers) {
      
    }
  }

  setGridTemplate(grid: "outer" | "inner", template: string) {
    const element = grid === "inner" ? this.innerGrid : this.outerGrid
    const style = getComputedStyle(element)
    if (style.getPropertyValue('--bim-grid--tpl')) {
      element.style.setProperty('--bim-grid--tpl', template);
    }
    this.createPanelContainers()
  }
}