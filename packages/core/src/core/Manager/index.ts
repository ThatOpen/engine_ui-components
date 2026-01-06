import * as components from "../../components";
import { styles } from "./src/styles";
import { loadIcons } from "iconify-icon";

/**
 * Configuration interface for the Manager class. Defines the properties and their types that can be configured for the Manager.
 */
export interface ManagerConfig {
  /**
   * Determines whether section labels should be displayed on the vertical toolbar.
   * Default value is `false`.
   */
  sectionLabelOnVerticalToolbar: boolean;

  // /**
  //  * Determines whether toolbars should be draggable.
  //  * Default value is `true`.
  //  */
  // draggableToolbars: boolean;

  // /**
  //  * Determines whether panels should be draggable.
  //  * Default value is `true`.
  //  */
  // draggablePanels: boolean;
}

/**
 * Manager class is responsible for initializing the BIM UI library, defining custom elements, and providing configuration options.
 *
 */
export class Manager {
  private static _config: Required<ManagerConfig> = {
    sectionLabelOnVerticalToolbar: false,
    // draggableToolbars: true,
    // draggablePanels: true,
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

  static preloadIcons(icons: string[], printLog = false) {
    loadIcons(icons, (loaded, missing, pending) => {
      if (printLog) {
        console.log(`Icons loaded:`, loaded);
        if (missing.length) console.warn(`Icons missing:`, missing);
        if (pending.length) console.info(`Icons pending:`, pending);
      }
    })
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

  /**
   * Initializes the BIM UI library by defining custom elements.
   * It ensures that all necessary styles and custom elements are registered for use in BIM UI components.
   *
   * @example
   * ```typescript
   * import { Manager } from "@thatopen/ui";
   * Manager.init();
   * ```
   */
  static init(querySelectorElements = "", animateOnLoad = true) {
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
    Manager.defineCustomElement("bim-tooltip", components.Tooltip);

    if (animateOnLoad) this.animateOnLoad(querySelectorElements);
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

  private static animateOnLoad(selectedElements: string = "") {
    // Elements Selectors
    const childrensSelector = `
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `;
    const components: HTMLElement[] = [];

    // Traversing first level shadow DOMs
    function querySelectorAllDeep(
      selector: string,
      root: Document | ShadowRoot = document,
      visited: Set<HTMLElement> = new Set(),
    ): HTMLElement[] {
      const elements: HTMLElement[] = [];
      const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));

      nodes.forEach((node) => {
        if (!visited.has(node)) {
          visited.add(node);
          elements.push(node);
        }
      });

      const shadowHosts = Array.from(
        root.querySelectorAll<HTMLElement>("*"),
      ).filter((el) => el.shadowRoot);

      shadowHosts.forEach((shadowHost) => {
        if (!visited.has(shadowHost)) {
          visited.add(shadowHost);
          elements.push(
            ...querySelectorAllDeep(selector, shadowHost.shadowRoot!, visited),
          );
        }
      });

      return elements;
    }

    requestAnimationFrame(() => {
      // you can use a regular querySelectorAll if needed, but that won't target shadowroot elements
      const childrenComponents = querySelectorAllDeep(
        selectedElements || childrensSelector,
      );

      // Setting the elements to be invisible at the start
      childrenComponents.forEach((element) => {
        const child = element as HTMLElement;
        let oldTransition = "auto";

        oldTransition = window
          .getComputedStyle(child)
          .getPropertyValue("transition");

        child.style.setProperty("opacity", "0");
        child.style.setProperty("transition", "none");
        requestAnimationFrame(() => {
          child.style.setProperty("transition", oldTransition);
        });

        components.push(child);
      });

      const onLoadHandler = () => {
        components.forEach((element) => {
          const child = element as HTMLElement;
          const delay =
            (child.getBoundingClientRect().x +
              child.getBoundingClientRect().y) /
            (window.innerWidth + window.innerHeight);

          const oldTransforms = window
            .getComputedStyle(child)
            .getPropertyValue("transform");

          const animationDuration = 400;
          const animationDelay = 200 + delay * 1000;

          child.animate(
            [
              {
                transform: "translateY(-20px)",
                opacity: "0",
              },
              {
                transform: "translateY(0)",
                opacity: "1",
              },
            ],
            {
              duration: animationDuration,
              easing: "ease-in-out",
              delay: animationDelay,
            },
          );

          // Used a setTimeout to cleanup the updated css additions once the animation ends
          setTimeout(() => {
            child.style.removeProperty("opacity");

            if (oldTransforms !== "none")
              child.style.setProperty("transform", oldTransforms);
            else child.style.removeProperty("transform");
          }, animationDelay + animationDuration);
        });
      };

      if (document.readyState === "complete") {
        // If the document is already loaded because of the cache, execute the handler immediately
        onLoadHandler();
      } else {
        // Otherwise, attach the handler to the load event
        window.addEventListener("load", onLoadHandler);
      }
    });
  }

  static toggleTheme(animate = true) {
    // Targetting the head HTML element
    const html = document.querySelector("html");
    if (!html) return;

    // Toggle the html theme
    const toggleTheme = () => {
      if (html.classList.contains("bim-ui-dark")) {
        html.classList.replace("bim-ui-dark", "bim-ui-light");
      } else if (html.classList.contains("bim-ui-light")) {
        html.classList.replace("bim-ui-light", "bim-ui-dark");
      } else {
        html.classList.add("bim-ui-light"); // if nothing was set at all!
      }
    };

    if (animate) {
      // The same as the CSS's toggleThemeAnimation duration
      const animDuration = 1000;

      // Creating and styling the overlay element
      const overlay = document.createElement("div");
      overlay.classList.add("theme-transition-overlay");

      // Added another div child to be able to create a shadow effect
      const overlayChild = document.createElement("div");
      overlay.appendChild(overlayChild);
      overlayChild.style.setProperty(
        "transition",
        `background-color ${animDuration / 3200}s`,
      );

      // Add the overlay to the DOM
      document.body.appendChild(overlay);

      // Setting the animation in JS to be controllable
      overlay.style.setProperty(
        "animation",
        `toggleOverlay ${animDuration / 1000}s ease-in forwards`,
      );
      overlayChild.style.setProperty(
        "animation",
        `toggleThemeAnimation ${animDuration / 1000}s ease forwards`,
      );

      setTimeout(() => {
        toggleTheme();
      }, animDuration / 4);

      // After the animation ends, clean things up
      setTimeout(() => {
        // Used a querySelectorAll in case it was added more than once
        const needsCleanup = document.body.querySelectorAll(
          ".theme-transition-overlay",
        );

        needsCleanup.forEach((child) => {
          document.body.removeChild(child);
        });
      }, animDuration);
    } else {
      toggleTheme();
    }
  }
}
