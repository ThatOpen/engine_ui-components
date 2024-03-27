import { css, html } from "lit";
import { UIComponent } from "../../UIComponent";

export class Grid extends UIComponent {
  static styles = css`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
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

  static properties = {
    floating: { type: Boolean, reflect: true },
  };

  static containerTags: { [name: string]: string } = {
    panels: "bim-panels-container",
    toolbars: "bim-toolbars-container",
  };

  declare floating: boolean;
  declare template: string;

  private _containers: { [type: string]: HTMLElement[] } = {};
  private _onLayoutChange = new Event("layout-change");

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

  cleanup() {
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

  createContainer(type: string, id: string) {
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

  setLayout(name: string) {
    const layout = this.layouts[name];
    if (!layout) {
      console.warn(`bim-grid: ${name} layout is not defined.`);
      return;
    }
    this.style.gridTemplate = layout;
    this.updateContainers();
    this.dispatchEvent(this._onLayoutChange);
  }

  isVerticalArea(area: string) {
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

  getContainer(type: string, id: string, force = true) {
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

  render() {
    return html` <slot @slotchange=${this.onSlotChange}></slot> `;
  }
}
