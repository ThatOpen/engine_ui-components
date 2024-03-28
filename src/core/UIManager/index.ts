import * as components from "../components";
import { styles } from "./src/styles";

export interface UIManagerConfig {
  addGlobalStyles: boolean;
  sectionLabelOnVerticalToolbar: boolean;
  multiPanels: boolean; // Displays a dropdown to select an active panel in a bim-panels-container
  draggableToolbars: boolean;
  draggablePanels: boolean;
  logTagNamesOnRegistration: boolean;
}

export class UIManager {
  private static _config: Required<UIManagerConfig> = {
    addGlobalStyles: true,
    sectionLabelOnVerticalToolbar: false,
    multiPanels: false,
    draggableToolbars: true,
    draggablePanels: true,
    logTagNamesOnRegistration: false,
  };

  static set config(value: Partial<UIManagerConfig>) {
    this._config = { ...UIManager._config, ...value };
  }

  static get config(): Required<UIManagerConfig> {
    return UIManager._config;
  }

  private static addGlobalStyles() {
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

  private static getComponentTag(name: string) {
    const prefixedName = `bim-${name}`;
    const converted = prefixedName
      .replace(/([a-z0-9])([A-Z\d])/g, "$1-$2")
      .toLowerCase();
    return converted;
  }

  private static defineCustomElement(constructor: new () => HTMLElement) {
    const constructorName = constructor.prototype.constructor.name;
    const tagName = UIManager.getComponentTag(constructorName);
    if (UIManager.config.logTagNamesOnRegistration)
      console.log(`${constructorName} → ${tagName}`);
    if (!customElements.get(tagName))
      customElements.define(tagName, constructor);
  }

  static registerComponents() {
    UIManager.addGlobalStyles();
    for (const component in components) {
      const _components = components as any;
      const elementClass = _components[component] as new () => HTMLElement;
      UIManager.defineCustomElement(elementClass);
    }
  }

  static removeGlobalStyles() {
    const style = document.querySelector("style[id='bim-ui']");
    if (style) style.remove();
  }

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
