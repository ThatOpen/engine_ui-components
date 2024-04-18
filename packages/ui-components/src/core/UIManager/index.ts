import * as components from "../../components";
import { styles } from "./src/styles";

export interface UIManagerConfig {
  sectionLabelOnVerticalToolbar: boolean;
  multiPanels: boolean; // Displays a dropdown to select an active panel in a bim-panels-container
  draggableToolbars: boolean;
  draggablePanels: boolean;
}

export class UIManager {
  private static _config: Required<UIManagerConfig> = {
    sectionLabelOnVerticalToolbar: false,
    multiPanels: false,
    draggableToolbars: true,
    draggablePanels: true,
  };

  static set config(value: Partial<UIManagerConfig>) {
    this._config = { ...UIManager._config, ...value };
  }

  static get config(): Required<UIManagerConfig> {
    return UIManager._config;
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

  static registerComponents() {
    UIManager.addGlobalStyles();
    UIManager.defineCustomElement("bim-button", components.Button);
    UIManager.defineCustomElement("bim-checkbox", components.Checkbox);
    UIManager.defineCustomElement("bim-color-input", components.ColorInput);
    UIManager.defineCustomElement("bim-context-menu", components.ContextMenu);
    UIManager.defineCustomElement("bim-dropdown", components.Dropdown);
    UIManager.defineCustomElement("bim-grid", components.Grid);
    UIManager.defineCustomElement("bim-icon", components.Icon);
    UIManager.defineCustomElement("bim-input", components.Input);
    UIManager.defineCustomElement("bim-label", components.Label);
    UIManager.defineCustomElement("bim-number-input", components.NumberInput);
    UIManager.defineCustomElement("bim-option", components.Option);
    UIManager.defineCustomElement("bim-panel", components.Panel);
    UIManager.defineCustomElement(
      "bim-panels-container",
      components.PanelsContainer,
    );
    UIManager.defineCustomElement("bim-panel-section", components.PanelSection);
    UIManager.defineCustomElement(
      "bim-selector-input",
      components.SelectorInput,
    );
    UIManager.defineCustomElement("bim-table", components.Table);
    UIManager.defineCustomElement("bim-table-cell", components.TableCell);
    UIManager.defineCustomElement(
      "bim-table-children",
      components.TableChildren,
    );
    UIManager.defineCustomElement("bim-table-group", components.TableGroup);
    UIManager.defineCustomElement("bim-table-row", components.TableRow);
    UIManager.defineCustomElement("bim-text-input", components.TextInput);
    UIManager.defineCustomElement("bim-toolbar", components.Toolbar);
    UIManager.defineCustomElement("bim-toolbar-group", components.ToolbarGroup);
    UIManager.defineCustomElement(
      "bim-toolbar-section",
      components.ToolbarSection,
    );
    UIManager.defineCustomElement(
      "bim-toolbars-container",
      components.ToolbarsContainer,
    );
    UIManager.defineCustomElement("bim-viewport", components.Viewport);
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
