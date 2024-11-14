import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component, StatefullComponent, StatelessComponent } from "../../core";
import {
  GridLayoutComponents,
  GridLayoutsDefinition,
  UpdateGridLayoutElements,
} from "./src";

/**
 * A custom grid component for web applications.
 * @element bim-grid
 */
export class Grid<T extends GridLayoutComponents = {}> extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;

  /**
   * Indicates whether the grid should be displayed in a floating state. When set to true, the grid and its children may have different styling to indicate a floating state, such as being absolutely positioned and having pointer-events set to none. This property is reflected to an attribute, allowing it to be set directly in HTML.
   *
   * @default false
   * @example <bim-grid floating></bim-grid>
   * @example
   * const grid = document.createElement('bim-grid');
   * grid.floating = true;
   * document.body.appendChild(grid);
   */
  @property({ type: Boolean, reflect: true })
  floating = false;

  /**
   * Represents the layout configuration of the grid. The layout is defined by a string identifier which corresponds to a predefined grid template in the `layouts` object of the Grid component. Setting this property updates the grid's template and triggers a reconfiguration of the grid's containers based on the new layout. If the specified layout is not defined, a warning is logged, and the layout remains unchanged. This property is reflected to an attribute, allowing it to be set directly in HTML. Changing the layout will dispatch a "layoutchange" event, which can be used to react to layout changes.
   *
   * @default undefined
   * @example <bim-grid layout="default"></bim-grid>
   * @example
   * const grid = document.createElement('bim-grid');
   * grid.layout = 'default';
   * document.body.appendChild(grid);
   */
  @property({ type: String, reflect: true })
  layout?: string;

  private _layouts: GridLayoutsDefinition<T> = {} as GridLayoutsDefinition<T>;

  /**
   * Represents a collection of predefined grid layouts for the Grid component.
   * Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances or
   * Statefull/Stateless component definitions.
   * The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances.
   * The HTMLElement instances are used to populate the grid with content.
   * @remarks Once defined, the layout is meant to be immutable.
   */
  set layouts(value: GridLayoutsDefinition<T>) {
    this._layouts = value;
    const result: {
      [layout: string]: {
        [area: string]: (state?: Record<string, any>) => void;
      };
    } = {};

    for (const [layoutName, layout] of Object.entries(value)) {
      for (const name in layout.elements) {
        if (!result[layoutName]) result[layoutName] = {};
        result[layoutName][name] = (state: any) => {
          const layoutFunctions = this._updateFunctions[layoutName];
          if (!layoutFunctions) return;
          const fn = layoutFunctions[name];
          if (!fn) return;
          fn(state);
        };
      }
    }

    this.updateComponent = result as UpdateGridLayoutElements<T>;
  }

  get layouts() {
    return this._layouts;
  }

  // private isVerticalArea(area: string) {
  //   const { rows } = this;
  //   const row = rows.find((row) => row.includes(area));
  //   if (!row)
  //     throw new Error(
  //       `${area} wasn't defined in the grid-template of this bim-grid`,
  //     );
  //   const index = rows.indexOf(row);
  //   const abovePanel = index > 0 && rows[index - 1].includes(area);
  //   const belowPanel =
  //     index < rows.length - 1 && rows[index + 1].includes(area);
  //   return abovePanel || belowPanel;
  // }

  private getLayoutAreas(layout: { template: string }) {
    const { template } = layout;
    const rows = template.split("\n").map((row) => row.trim());
    const areas = rows
      .map((row) => row.split('"')[1])
      .filter((area) => area !== undefined);
    const words = areas.flatMap((area) => area.split(/\s+/));
    const uniqueAreas = [...new Set(words)].filter((area) => area !== "");
    return uniqueAreas;
  }

  private _onLayoutChange?: Event;

  protected firstUpdated() {
    this._onLayoutChange = new Event("layoutchange");
  }

  private _updateFunctions: {
    [layout: string]: { [area: string]: (state?: Record<string, any>) => void };
  } = {};

  updateComponent?: UpdateGridLayoutElements<T>;

  protected render() {
    if (this.layout) {
      this._updateFunctions = {};
      if (this.layouts[this.layout]) {
        this.innerHTML = "";
        this._updateFunctions[this.layout] = {};
        const layoutUpdateFunctions = this._updateFunctions[this.layout];
        const layout = this.layouts[this.layout];
        const areas = this.getLayoutAreas(layout);
        const elements = areas
          .map((area: string) => {
            const element = (layout.elements as any)[area] as
              | HTMLElement
              | StatelessComponent
              | {
                  template: StatefullComponent<any>;
                  initialState: Record<string, any>;
                };

            if (!element) return null;

            if (element instanceof HTMLElement) {
              element.style.gridArea = area;
              return element;
            }

            if ("template" in element) {
              const { template, initialState } = element;
              const [component, updateComponent] = Component.create<
                HTMLElement,
                {}
              >(template, initialState);

              component.style.gridArea = area;
              layoutUpdateFunctions[area] = updateComponent;
              return component;
            }

            const component = Component.create(element);
            return component;
          })
          .filter((element) => !!element) as HTMLElement[];

        this.style.gridTemplate = layout.template;
        this.append(...elements);
        if (this._onLayoutChange) this.dispatchEvent(this._onLayoutChange);
      }
    } else {
      this._updateFunctions = {};
      this.innerHTML = "";
      this.style.gridTemplate = "";
      if (this._onLayoutChange) this.dispatchEvent(this._onLayoutChange);
    }
    return html`<slot></slot>`;
  }
}

export * from "./src";
