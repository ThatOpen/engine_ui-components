import { styles } from "./src/styles";

export interface ManagerConfig {
  panelsContainerPrefix: string;
  toolbarsContainerPrefix: string;
  addGlobalStyles: boolean;
  sectionLabelOnVerticalToolbar: boolean;
  multiPanels: boolean; // Displays a dropdown to select an active panel in a bim-panels-container
  draggableToolbars: boolean;
  draggablePanels: boolean;
}

export class UIManager {
  private static _config: Required<ManagerConfig> = {
    panelsContainerPrefix: "panel-",
    toolbarsContainerPrefix: "toolbar-",
    addGlobalStyles: true,
    sectionLabelOnVerticalToolbar: false,
    multiPanels: false,
    draggableToolbars: true,
    draggablePanels: true,
  };

  static set config(value: Partial<ManagerConfig>) {
    this._config = { ...UIManager._config, ...value };
  }

  static get config(): Required<ManagerConfig> {
    return UIManager._config;
  }

  static addGlobalStyles() {
    if (!UIManager.config.addGlobalStyles) return;
    let style = document.querySelector("style[id='bim-ui']");
    if (style) return;
    style = document.createElement("style");
    style.id = "bim-ui";
    style.textContent = styles.globalStyles.cssText;
    const firstChild = document.head.firstChild;
    if (firstChild) {
      document.head.insertBefore(style, firstChild);
    } else {
      document.head.append(style);
    }
  }

  static removeGlobalStyles() {
    const style = document.querySelector("style[id='bim-ui']");
    if (style) style.remove();
  }

  // private verifyGridTemplate(grid: Grid) {
  //   const areas = grid.areas;
  //   if (grid === this.outerGrid && !areas.includes("viewport")) {
  //     throw new Error(
  //       "UIManager: outer grid must have a viewport area defined in its template.",
  //     );
  //   }
  //   if (grid === this.innerGrid && areas.includes("viewport")) {
  //     throw new Error(
  //       "UIManager: inner grid must not have a viewport area defined in its template.",
  //     );
  //   }
  //   const secondGridAreas =
  //     grid === this.outerGrid ? this.innerGrid.areas : this.outerGrid.areas;
  //   const allAreas = [...areas, ...secondGridAreas];
  //   const hasRepeatedAreas = allAreas.length !== new Set(allAreas).size;
  //   if (hasRepeatedAreas) {
  //     throw new Error(
  //       "UIManager: there are repeated areas between the outer and inner grid templates.",
  //     );
  //   }
  // }

  // private setupViewport() {
  //   const container = this.viewport.parentElement;
  //   if (!container) {
  //     throw new Error(
  //       "UIManager: viewport needs to have a parent to create a grid.",
  //     );
  //   }
  //   if (container !== this.outerGrid) {
  //     container.append(this.outerGrid);
  //     container.style.overflow = "auto";
  //     this.outerGrid.append(this.viewport);
  //   }
  //   this.viewport.style.position = "relative";
  //   this.viewport.style.minHeight = "0px";
  //   this.viewport.style.minWidth = "0px";
  //   this.viewport.style.gridArea = "viewport";
  //   this.viewport.append(this.innerGrid);
  //   this._viewportResizeObserver.observe(this.viewport);
  // }

  static createElementFromTemplate<T extends HTMLElement = HTMLElement>(
    template: string,
  ) {
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
}
