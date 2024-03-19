import { Grid } from "../../components/Grid";
import { Panel } from "../../components/Panel";
import { PanelsContainer } from "../../components/PanelsContainer";
import { Toolbar } from "../../components/Toolbar";
import { styles } from "./src/styles";
import { ToolbarsContainer } from "../../components/ToolbarsContainer";

// Do not manually update the gridArea of a container, it must remain constant.

export interface ManagerConfig {
  panelsContainerPrefix: string
  toolbarsContainerPrefix: string
  addGlobalStyles: boolean
  sectionLabelOnVerticalToolbar: boolean
  multiPanels: boolean //Displays a dropdown to select an active panel in a bim-panels-container
  draggableToolbars: boolean
  draggablePanels: boolean
  onViewportResize: () => void
}

type Area = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";

export class UIManager<GridArea extends string = Area> {
  private _viewportResizeObserver = new ResizeObserver(UIManager.config.onViewportResize)
  
  private containers: {
    panels: PanelsContainer[]
    toolbars: ToolbarsContainer[]
  } = { panels: [], toolbars: [] }

  // The grid surrounding the viewport.
  private _outerGrid: Grid | null = null
  get outerGrid() {
    if (!this._outerGrid) {
      const grid = document.createElement("bim-grid")
      grid.floating = false
      this._outerGrid = grid
      this.setupViewport()
    }
    return this._outerGrid
  }

  // The grid inside the viewport.
  private _innerGrid: Grid | null = null
  get innerGrid() {
    if (!this._innerGrid) {
      const grid = document.createElement("bim-grid")
      grid.floating = true
      this._innerGrid = grid
      this.setupViewport()
    }
    return this._innerGrid
  }

  private static _config: Required<ManagerConfig> = {
    panelsContainerPrefix: "panel-",
    toolbarsContainerPrefix: "toolbar-",
    addGlobalStyles: true,
    sectionLabelOnVerticalToolbar: false,
    multiPanels: false,
    draggableToolbars: true,
    draggablePanels: true,
    onViewportResize: () => { },
  }

  // The main working area of the app.
  viewport: HTMLElement

  static set config(value: Partial<ManagerConfig>) {
    this._config = {...UIManager._config, ...value}
  }

  static get config(): Required<ManagerConfig> {
    return UIManager._config
  }

  constructor(viewport: HTMLElement) {
    this.viewport = viewport
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

  private verifyGridTemplate(grid: Grid) {
    const areas = grid.areas
    if (grid === this.outerGrid && !areas.includes("viewport")) {
      throw new Error("UIManager: outer grid must have a viewport area defined in its template.")
    }
    if (grid === this.innerGrid && areas.includes("viewport")) {
      throw new Error("UIManager: inner grid must not have a viewport area defined in its template.")
    }
    const secondGridAreas = grid === this.outerGrid ? this.innerGrid.areas : this.outerGrid.areas
    const allAreas = [...areas, ...secondGridAreas]
    const hasRepeatedAreas = allAreas.length !== new Set(allAreas).size;
    if (hasRepeatedAreas) {
      throw new Error("UIManager: there are repeated areas between the outer and inner grid templates.")
    }
  }

  private setupViewport() {
    const container = this.viewport.parentElement
    if (!container) {
      throw new Error("UIManager: viewport needs to have a parent to create a grid.")
    }
    if (container !== this.outerGrid) {
      container.append(this.outerGrid)
      container.style.overflow = "auto"
      this.outerGrid.append(this.viewport)
    }
    this.viewport.style.position = "relative"
    this.viewport.style.minHeight = "0px";
    this.viewport.style.minWidth = "0px";
    this.viewport.style.gridArea = "viewport";
    this.viewport.append(this.innerGrid)
    this._viewportResizeObserver.observe(this.viewport)
  }

  private updateGridContainers(grid: Grid) {
    this.verifyGridTemplate(grid)
    for (const row of grid.rows) {
      const areas = row.trim().split(/\s+/);
      for (const area of areas) {
        const panelsContainer = this.containers.panels.find((container) => container.style.gridArea === area)
        const toolbarsContainer = this.containers.toolbars.find((container) => container.style.gridArea === area)
        if (panelsContainer) {
          grid.append(panelsContainer)
        } else if (toolbarsContainer) {
          grid.append(toolbarsContainer)
        } else if (area.startsWith(UIManager.config.panelsContainerPrefix)) {
          const container = document.createElement("bim-panels-container") as PanelsContainer
          container.style.gridArea = area
          this.containers.panels.push(container)
        } else if (area.startsWith(UIManager.config.toolbarsContainerPrefix)) {
          const container = document.createElement("bim-toolbars-container") as ToolbarsContainer
          container.style.gridArea = area
          this.containers.toolbars.push(container)
        }
      }
    }
  }

  static createElementFromTemplate<T extends HTMLElement = HTMLElement>(template: string) {
    const temp = document.createElement("div");
    temp.innerHTML = template;
    const element = temp.firstElementChild as T;
    temp.remove();
    return element;
  }

  static newRandomId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }

    return id;
  }

  // Gets a document element based on data-ui-id
  static getElement<T extends HTMLElement = HTMLElement>(id: string) {
    const element = document.querySelector<T>(`[data-ui-id='${id}']`)
    return element
  }

  dispose() {
    this.innerGrid.remove()
    this._innerGrid = null
    const outerGridParent = this.outerGrid.parentNode
    if (outerGridParent) outerGridParent.append(this.viewport)
    this.outerGrid.remove()
    this._outerGrid = null
    this.containers = { panels: [], toolbars: [] }
    this._viewportResizeObserver.unobserve(this.viewport)
    UIManager.config.onViewportResize()
  }

  getPanelsContainer(area: GridArea) {
    const { panels: panelContainers } = this.containers
    const container = panelContainers.find((container) => container.gridArea === area)
    if (!container) {
      throw new Error(`UIManager: ${UIManager.config.panelsContainerPrefix}${area} wasn't define in --bim-grid--tpl`)
    }
    return container
  }

  getToolbarsContainer(area: GridArea) {
    const { toolbars } = this.containers
    const container = toolbars.find((container) => container.gridArea === area)
    if (!container) {
      throw new Error(`UIManager: ${UIManager.config.toolbarsContainerPrefix}${area} wasn't define in --bim-grid--tpl`)
    }
    return container
  }

  addPanel(gridArea: GridArea, ...panels: Panel[]) {
    for (const panel of panels) {
      const container = this.getPanelsContainer(gridArea)
      container.appendChild(panel)
    }
  }

  addToolbar(gridArea: GridArea, ...toolbars: Toolbar[]) {
    for (const toolbar of toolbars) {
      const container = this.getToolbarsContainer(gridArea)
      container.appendChild(toolbar)
    }
  }

  setGridTemplate(grid: "outer" | "inner", template: string) {
    const element = grid === "inner" ? this.innerGrid : this.outerGrid
    element.style.gridTemplate = template
    this.updateGridContainers(element)
  }
}