import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import {
  Component,
  Manager,
  StatefullComponent,
  StatelessComponent,
} from "../../core";
import {
  GridComponents,
  GridLayoutsDefinition,
  GridComponentDefinition,
  UpdateGridComponents,
} from "./src";

/**
 * A custom grid component for web applications.
 * @element bim-grid
 */
export class Grid<
  L extends string[] = [],
  E extends GridComponentDefinition = [],
> extends LitElement {
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
  layout?: L[number];

  private _layouts: GridLayoutsDefinition<L, E> = {} as GridLayoutsDefinition<
    L,
    E
  >;

  /**
   * Represents a collection of predefined grid layouts for the Grid component.
   * Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances or
   * Statefull/Stateless component definitions.
   * The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances.
   * The HTMLElement instances are used to populate the grid with content.
   * @remarks Once defined, the layout is meant to be immutable.
   */
  set layouts(value: GridLayoutsDefinition<L, E>) {
    this._layouts = value;
    this._templateIds.clear();
  }

  get layouts() {
    return this._layouts;
  }

  private _elements = {} as GridComponents<E>;

  set elements(value: GridComponents<E>) {
    this._elements = value;

    const result: {
      [area: string]: (state?: Record<string, any>) => void;
    } = {};

    for (const [name, value] of Object.entries(this.elements)) {
      if (!("template" in (value as any))) continue;
      result[name] = (state: any) => {
        const fn = this._updateFunctions[name];
        if (!fn) return;
        fn(state);
      };
    }

    this.updateComponent = result as UpdateGridComponents<E>;
  }

  get elements() {
    return this._elements;
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

  private _templateIds = new Map<
    StatefullComponent | StatelessComponent,
    string
  >();

  private _updateFunctions: {
    [element: string]: (state?: Record<string, any>) => void;
  } = {};

  private getTemplateId(template: StatefullComponent | StatelessComponent) {
    let id = this._templateIds.get(template);
    if (!id) {
      id = Manager.newRandomId();
      this._templateIds.set(template, id);
    }
    return id;
  }

  updateComponent = {} as UpdateGridComponents<E>;

  private cleanUpdateFunctions() {
    if (!this.layout) {
      this._updateFunctions = {};
      return;
    }

    const layout = this.layouts[this.layout];
    const areas = this.getLayoutAreas(layout);
    for (const name in this.elements) {
      if (areas.includes(name)) continue;
      delete this._updateFunctions[name];
    }
  }

  protected render() {
    if (this.layout) {
      if (this.layouts[this.layout]) {
        const layout = this.layouts[this.layout];
        const areas = this.getLayoutAreas(layout);
        const elements = areas
          .map((area: string) => {
            const element = (layout.elements?.[area as keyof E] ||
              this.elements[area as keyof E]) as
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
              const templateId = this.getTemplateId(template);

              const existingComponent = this.querySelector(
                `[data-grid-template-id="${templateId}"]`,
              );

              if (existingComponent) return existingComponent;

              const [component, updateComponent] = Component.create<
                HTMLElement,
                {}
              >(template, initialState);

              component.setAttribute("data-grid-template-id", templateId);

              component.style.gridArea = area;
              this._updateFunctions[area] = updateComponent;
              return component;
            }

            const templateId = this.getTemplateId(element);
            const existingComponent = this.querySelector(
              `[data-grid-template-id="${templateId}"]`,
            );

            if (existingComponent) return existingComponent;

            const component = Component.create(element);
            component.setAttribute(
              "data-grid-template-id",
              this.getTemplateId(element),
            );
            component.style.gridArea = area;
            return component;
          })
          .filter((element) => element !== null) as HTMLElement[];

        this.innerHTML = "";
        this.style.gridTemplate = layout.template;
        this.append(...elements);
        if (this._onLayoutChange) this.dispatchEvent(this._onLayoutChange);
      }
    } else {
      this.innerHTML = "";
      this.style.gridTemplate = "";
      if (this._onLayoutChange) this.dispatchEvent(this._onLayoutChange);
    }

    this.cleanUpdateFunctions();

    return html`<slot></slot>`;
  }
}

export * from "./src";
