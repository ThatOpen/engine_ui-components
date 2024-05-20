import * as components from "../../components";
import { styles } from "./src/styles";

export interface ManagerConfig {
  sectionLabelOnVerticalToolbar: boolean;
  draggableToolbars: boolean;
  draggablePanels: boolean;
}

export class Manager {
  private static _config: Required<ManagerConfig> = {
    sectionLabelOnVerticalToolbar: false,
    draggableToolbars: true,
    draggablePanels: true,
  };

  static set config(value: Partial<ManagerConfig>) {
    this._config = { ...Manager._config, ...value };
  }

  static get config(): Required<ManagerConfig> {
    return Manager._config;
  }

  private static addGlobalStyles() {
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

  static defineCustomElement(tag: string, constructor: new () => HTMLElement) {
    if (!customElements.get(tag)) customElements.define(tag, constructor);
  }

  /**
   * @deprecated Use `Manager.init()` instead.
   */
  static registerComponents() {
    Manager.init();
  }

  static init() {
    Manager.addGlobalStyles();
    Manager.defineCustomElement("bim-button", components.Button);
    Manager.defineCustomElement("bim-checkbox", components.Checkbox);
    Manager.defineCustomElement("bim-color-input", components.ColorInput);
    Manager.defineCustomElement("bim-context-menu", components.ContextMenu);
    Manager.defineCustomElement("bim-dropdown", components.Dropdown);
    Manager.defineCustomElement("bim-grid", components.Grid);
    Manager.defineCustomElement("bim-icon", components.Icon);
    Manager.defineCustomElement("bim-input", components.Input);
    Manager.defineCustomElement("bim-label", components.Label);
    Manager.defineCustomElement("bim-number-input", components.NumberInput);
    Manager.defineCustomElement("bim-option", components.Option);
    Manager.defineCustomElement("bim-panel", components.Panel);
    Manager.defineCustomElement("bim-panel-section", components.PanelSection);
    Manager.defineCustomElement("bim-selector", components.Selector);
    Manager.defineCustomElement("bim-table", components.Table);
    Manager.defineCustomElement("bim-tabs", components.Tabs);
    Manager.defineCustomElement("bim-tab", components.Tab);
    Manager.defineCustomElement("bim-table-cell", components.TableCell);
    Manager.defineCustomElement("bim-table-children", components.TableChildren);
    Manager.defineCustomElement("bim-table-group", components.TableGroup);
    Manager.defineCustomElement("bim-table-row", components.TableRow);
    Manager.defineCustomElement("bim-text-input", components.TextInput);
    Manager.defineCustomElement("bim-toolbar", components.Toolbar);
    Manager.defineCustomElement("bim-toolbar-group", components.ToolbarGroup);
    Manager.defineCustomElement(
      "bim-toolbar-section",
      components.ToolbarSection,
    );
    Manager.defineCustomElement("bim-viewport", components.Viewport);
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
