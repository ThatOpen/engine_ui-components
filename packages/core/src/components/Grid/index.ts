import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../core/Component";

// HTML tag: bim-grid
export class Grid extends Component {
  static styles = css`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    :host(:not([layout])) {
      display: none;
    }

    :host([floating]) {
      --bim-toolbars-container--olw: 1px;
      --bim-toolbars-container--olc: var(--bim-ui_bg-contrast-20);
      --bim-toolbars-container--js: center;
      --bim-toolbars-container--as: start;
      --bim-toolbars-container_tabs--bgc: transparent;
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
      --bim-toolbars-container--js: auto;
      --bim-toolbars-container--as: auto;
      --bim-toolbars-container_tabs--bgc: var(--bim-ui_bg-base);
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;

  /**
   * Indicates whether the grid should be displayed in a floating state. When set to true, the grid and its children may have different styling to indicate a floating state, such as being absolutely positioned and having pointer-events set to none. This property is reflected to an attribute, allowing it to be set directly in HTML.
   *
   * @type {Boolean}
   * @default false
   * @example <bim-grid floating></bim-grid>
   * @example
   * const grid = document.createElement('bim-grid');
   * grid.floating = true;
   * document.body.appendChild(grid);
   */
  @property({ type: Boolean, reflect: true })
  floating: boolean;

  private _layout?: string;

  /**
   * Represents the layout configuration of the grid. The layout is defined by a string identifier which corresponds to a predefined grid template in the `layouts` object of the Grid component. Setting this property updates the grid's template and triggers a reconfiguration of the grid's containers based on the new layout. If the specified layout is not defined, a warning is logged, and the layout remains unchanged. This property is reflected to an attribute, allowing it to be set directly in HTML. Changing the layout will dispatch a "layoutchange" event, which can be used to react to layout changes.
   *
   * @type {String}
   * @default undefined
   * @example <bim-grid layout="default"></bim-grid>
   * @example
   * const grid = document.createElement('bim-grid');
   * grid.layout = 'default';
   * document.body.appendChild(grid);
   */
  @property({ type: String, reflect: true })
  get layout() {
    return this._layout;
  }

  set layout(value: string | undefined) {
    if (value) {
      const template = this.layouts[value];
      if (!template) {
        console.warn(
          `bim-grid: "${value}" layout is not defined, "${this.layout}" layout remained.`,
        );
        return;
      }
      this.style.gridTemplate = template;
      this.updateContainers();
    } else {
      this.style.gridTemplate = "";
      this.cleanup();
    }
    this._layout = value;
    this.dispatchEvent(this._onLayoutChange);
  }

  static containerTags: { [name: string]: string } = {
    panels: "bim-panels-container",
    toolbars: "bim-toolbars-container",
  };

  private _containers: { [type: string]: HTMLElement[] } = {};
  private _onLayoutChange = new Event("layoutchange");

  layouts: { [name: string]: string } = {};
  childrenElements: Set<HTMLElement> = new Set();

  get rows() {
    const template = this.style.gridTemplate;
    const rows = template
      .trim()
      .split(/"([^"]*)"/)
      .map((value, index) => {
        if (index % 2 !== 0) {
          return value;
        }
        return null;
      })
      .filter((value) => value !== null) as string[];
    return rows;
  }

  get layoutAreas() {
    const areas = new Set<string>();
    for (const row of this.rows) {
      const columns = row.trim().split(/\s+/);
      for (const column of columns) areas.add(column);
    }
    return [...areas];
  }

  constructor() {
    super();
    this.floating = false;
  }

  static addContainerTag(type: string, tag: string) {
    Grid.containerTags[type] = tag;
  }

  private onSlotChange(e: any) {
    const children = e.target.assignedElements() as HTMLElement[];
    for (const child of children) {
      this.childrenElements.add(child);
      child.toggleAttribute("floating", this.floating);
      try {
        const isVertical = this.isVerticalArea(child.style.gridArea);
        if ("horizontal" in child) {
          child.horizontal = !isVertical;
        } else if ("vertical" in child) {
          child.vertical = isVertical;
        }
      } catch (err) {
        //
      }
    }
  }

  private updateContainers() {
    const { layoutAreas } = this;
    for (const area of layoutAreas) {
      if (!area.startsWith("c-")) continue;
      const type = area.split("-")[1];
      const id = area.split("-")[2];
      if (!id) {
        throw new Error(
          `bim-grid: you defined a container area without an id (${area})`,
        );
      }
      this.createContainer(type, id);
    }
    this.cleanup();
  }

  private cleanup() {
    const { layoutAreas } = this;
    for (const child of this.childrenElements) {
      const { gridArea } = child.style;
      if (layoutAreas.includes(gridArea)) {
        this.append(child);
      } else {
        child.remove();
      }
    }
  }

  private createContainer(type: string, id: string) {
    const area = `c-${type}-${id}`;
    if (!(type in this._containers)) this._containers[type] = [];
    const containers = this._containers[type];
    let container = containers.find((cont) => cont.style.gridArea === area);
    if (!container) {
      const tag = Grid.containerTags[type] ?? "div";
      container = document.createElement(tag);
      container.style.gridArea = area;
      containers.push(container);
      this.childrenElements.add(container);
    }
    return container;
  }

  private isVerticalArea(area: string) {
    const { rows } = this;
    const row = rows.find((row) => row.includes(area));
    if (!row)
      throw new Error(
        `${area} wasn't defined in the grid-template of this bim-grid`,
      );
    const index = rows.indexOf(row);
    const abovePanel = index > 0 && rows[index - 1].includes(area);
    const belowPanel =
      index < rows.length - 1 && rows[index + 1].includes(area);
    return abovePanel || belowPanel;
  }

  /**
   * Retrieves a container element based on the specified type and id. If the container does not exist and the `force` parameter is set to `true`, a new container will be created. This method is useful for managing dynamic grid layouts where containers might be added or removed based on application state.
   *
   * @param type - The type of the container to retrieve. This corresponds to a predefined category or classification of containers within the grid.
   * @param id - The unique identifier for the container within its type category. This is used to distinguish between multiple containers of the same type.
   * @param force - Determines whether a new container should be forcibly created if it does not already exist. If `true`, a new container will be created when no existing container matches the specified type and id.
   * @returns The container element that matches the specified type and id. If `force` is `true` and no matching container exists, a new container is created, added to the grid, and returned.
   * @throws Throws an error if `force` is `false` and either the container type is not defined in the grid or no container with the specified id exists within the specified type.
   */
  getContainer(type: string, id: string, force = false) {
    const gridArea = `c-${type}-${id}`;
    const containers = this._containers[type];
    if (force) {
      const container = this.createContainer(type, id);
      return container;
    }
    if (!containers) {
      throw new Error(
        `bim-grid: container of type "${type}" is not defined in this grid.`,
      );
    }
    const container = containers.find(
      (cont) => cont.style.gridArea === gridArea,
    );
    if (!container) {
      throw new Error(
        `bim-grid: there is no container with id "${id}" in this grid.`,
      );
    }
    return container;
  }

  protected render() {
    return html` <slot @slotchange=${this.onSlotChange}></slot> `;
  }
}
