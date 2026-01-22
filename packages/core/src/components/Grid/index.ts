import { LitElement, TemplateResult, css, html } from "lit";
import { property } from "lit/decorators.js";
import {
  Component,
  Manager,
  StatefullComponent,
  StatelessComponent,
} from "../../core";
import { Tabs } from "../Tabs/src/Tabs";
import { Tab } from "../Tabs/src/Tab";
import {
  GridComponents,
  GridLayoutsDefinition,
  GridComponentDefinition,
  UpdateGridComponents,
  ElementCreatedEventDetail,
  GridResizeState,
  extractUniqueAreas,
  parseGridTemplate,
  detectDividers,
  calculateDividerStyles,
  calculateVerticalResize,
  calculateHorizontalResize,
  validateVerticalResize,
  validateHorizontalResize,
} from "./src";
import { styleMap } from "lit/directives/style-map.js";

// TODO: prevent re-rendering when changing resizeable-areas
// TODO: save the new area sizes after resize

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

    .grid-divider {
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      user-select: none;
    }

    .grid-divider > div {
      transition: background-color 150ms ease-in-out;
    }
    
    .grid-divider:hover > div {
      background-color: var(--bim-ui_accent-base);
    }
    
    .divider-horizontal {
      /* background-color: #ff00003d; */
      transform: translateY(-50%);
      cursor: n-resize;
    }
    
    .divider-horizontal > div {
      height: 3px;
      width: 100%;
      /* transform: translateY(-50%); */
    }
    
    .divider-vertical {
      /* background-color: #ff00003d; */
      transform: translateX(-50%);
      cursor: e-resize;
    }
    
    .divider-vertical > div {
      width: 3px;
      height: 100%;
      /* transform: translateX(-50%); */
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

  /**
   * Enables resize functionality for grid areas.
   * When true, dividers will appear between areas allowing manual resizing.
   * Areas can be excluded from resizing using nonResizeableAreas.
   * 
   * @defaultValue false
   * 
   * @example
   * ```html
   * <bim-grid resizeable-areas></bim-grid>
   * ```
   * 
   * @example
   * ```typescript
   * grid.resizeableAreas = true;
   * grid.nonResizeableAreas = ['ribbon', 'statusBar']; // Lock specific areas
   * ```
   */
  @property({ 
    type: Boolean, 
    attribute: "areas-resizeable", 
    reflect: true
  })
  resizeableAreas = false;

  @property({type: Array, attribute: false})
  areasResizeExceptions: string[] = [];

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
    this._elements = value
    this.setUpdateFunctions()
  }

  get elements() {
    return this._elements
  }

  private getLayoutAreas(layout: { template: string }) {
    return extractUniqueAreas(layout.template);
  }

  private setUpdateFunctions() {
    const result: {
      [area: string]: (state?: Record<string, any>) => void;
    } = {};

    for (const [name, value] of Object.entries(this.elements)) {
      if (!("template" in (value as any))) continue;
      result[name] = (state: any) => {
        this._updateFunctions[name]?.(state)
      };
    }

    this.updateComponent = result as UpdateGridComponents<E>;
  }

  // connectedCallback() {
  //   super.connectedCallback()
  //   this.setUpdateFunctions()
  // }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._templateIds.clear()
    this._updateFunctions = {}
    this.updateComponent = {} as UpdateGridComponents<E>;
  }

  private _templateIds = new Map<
    StatefullComponent | StatelessComponent,
    string
  >();

  private _updateFunctions: {
    [element: string]: (state?: Record<string, any>) => void;
  } = {};

  private _slotNames = {
    notAllowed: "not-allowed",
    notFound: "not-found",
    emptyLayout: "empty-layout",
  };

  private getTemplateId(template: StatefullComponent | StatelessComponent) {
    let id = this._templateIds.get(template);
    if (!id) {
      id = Manager.newRandomId();
      this._templateIds.set(template, id);
    }
    return id;
  }

  private _colSizesRaw: string[] = []
  private _rowSizesRaw: string[] = []
  private _colSizesComputed: string[] = []
  private _rowSizesComputed: string[] = []
  private _start: GridResizeState | null = null

  layoutsResize: Record<string, {cols: string[], rows: string[]}> = {}

  private isAreaResizeable(areaName: string): boolean {
    // Si el área está en la lista de no redimensionables, siempre retornar false
    if (this.areasResizeExceptions.includes(areaName)) {
      return false;
    }
    // De lo contrario, retornar el valor de resizeableAreas
    return this.resizeableAreas;
  }

  private canResizeVerticalDivider(divider: { left?: string[], right?: string[] }): boolean {
    // Un divider vertical puede ser redimensionable solo si todas las áreas a ambos lados lo permiten
    const leftAreas = divider.left || [];
    const rightAreas = divider.right || [];
    
    // Todas las áreas de la izquierda deben ser redimensionables
    for (const area of leftAreas) {
      if (!this.isAreaResizeable(area)) return false;
    }
    
    // Todas las áreas de la derecha deben ser redimensionables
    for (const area of rightAreas) {
      if (!this.isAreaResizeable(area)) return false;
    }
    
    return true;
  }

  private canResizeHorizontalDivider(divider: { above?: string[], below?: string[] }): boolean {
    // Un divider horizontal puede ser redimensionable solo si todas las áreas arriba y abajo lo permiten
    const aboveAreas = divider.above || [];
    const belowAreas = divider.below || [];
    
    // Todas las áreas de arriba deben ser redimensionables
    for (const area of aboveAreas) {
      if (!this.isAreaResizeable(area)) return false;
    }
    
    // Todas las áreas de abajo deben ser redimensionables
    for (const area of belowAreas) {
      if (!this.isAreaResizeable(area)) return false;
    }
    
    return true;
  }

  private computeDividers() {
    if (!this.layout) return
    const areasString = this.layouts[this.layout]?.template
    if (!areasString) return
    
    const gridMatrix = parseGridTemplate(areasString);
    const dividers = detectDividers(gridMatrix);

    const computedStyles = getComputedStyle(this)
    const templates: TemplateResult[] = []
    
    for (const divider of dividers) {
      // Verificar si este divider puede ser redimensionable
      let canResize = false;
      if (divider.type === 'vertical') {
        canResize = this.canResizeVerticalDivider(divider);
      } else {
        canResize = this.canResizeHorizontalDivider(divider);
      }
      
      // Si no puede ser redimensionable, no crear el divider
      if (!canResize) continue;

      const onMouseDown = (e: MouseEvent) => {
        this._colSizesRaw = this.style.gridTemplateColumns.split(" ")
        this._rowSizesRaw = this.style.gridTemplateRows.split(" ")
        this._rowSizesComputed = computedStyles.gridTemplateRows.split(" ")
        this._colSizesComputed = computedStyles.gridTemplateColumns.split(" ")
        this._start = {
          x: e.clientX,
          y: e.clientY,
          divider,
          colSizesRaw: [...this._colSizesRaw],
          rowSizesRaw: [...this._rowSizesRaw],
          colSizesComputed: [...this._colSizesComputed],
          rowSizesComputed: [...this._rowSizesComputed]
        }

        window.addEventListener('mousemove', this._onMouseMove);
        window.addEventListener('mouseup', this._onMouseUp);
      }

      const onContextMenu = (e: Event) => {
        e.preventDefault()
      }

      const style = calculateDividerStyles(divider, computedStyles);

      const template = html`
        <div @mousedown=${onMouseDown} @contextmenu=${onContextMenu} class="grid-divider divider-${divider.type}" style=${styleMap(style)}>
          <div></div>
        </div>
      `

      templates.push(template)
    }

    return templates;
  }

  private _onMouseMove = (e: MouseEvent) => {
    if (!this._start) return;
    if (!this.layout) return;
    
    const dx = e.clientX - this._start.x;
    const dy = e.clientY - this._start.y;
    const d = this._start.divider;

    // Calcular el valor mínimo en píxeles (3rem)
    const computedStyles = getComputedStyle(this);
    const minSize = parseFloat(computedStyles.fontSize) * 3;

    if (d.type === 'vertical') {
      const col = d.from[0];
      const totalCols = this._colSizesRaw.length;
      const lastColIndex = totalCols - 1;
      const isLastCol = col === lastColIndex;
      
      // Calcular nuevos valores
      const sizes = calculateVerticalResize(this._start, dx, col, isLastCol);
      
      // Validar direccionalmente
      if (!validateVerticalResize(sizes.left, sizes.right, dx, minSize)) {
        return;
      }
      
      // Asegurar que los valores no sean menores al mínimo
      const finalLeftValue = Math.max(minSize, sizes.left);
      const finalRightValue = Math.max(minSize, sizes.right);
      
      // Aplicar los cambios
      this._colSizesRaw[col - 1] = `${finalLeftValue}px`;
      this._colSizesRaw[col] = isLastCol ? '1fr' : `${finalRightValue}px`;
      this.style.gridTemplateColumns = this._colSizesRaw.join(' ');
    }

    if (d.type === 'horizontal') {
      const row = d.from[1];
      const totalRows = this._rowSizesRaw.length;
      const lastRowIndex = totalRows - 1;
      const isLastRow = row === lastRowIndex;

      // Calcular nuevos valores
      const sizes = calculateHorizontalResize(this._start, dy, row, isLastRow);
      
      // Validar direccionalmente
      if (!validateHorizontalResize(sizes.top, sizes.bottom, dy, minSize)) {
        return;
      }
      
      // Asegurar que los valores no sean menores al mínimo
      const finalTopValue = Math.max(minSize, sizes.top);
      const finalBottomValue = Math.max(minSize, sizes.bottom);
      
      // Aplicar los cambios
      this._rowSizesRaw[row - 1] = `${finalTopValue}px`;
      this._rowSizesRaw[row] = isLastRow ? '1fr' : `${finalBottomValue}px`;
      this.style.gridTemplateRows = this._rowSizesRaw.join(' ');
    }

    this.layoutsResize[this.layout] = {
      cols: this._colSizesRaw,
      rows: this._rowSizesRaw,
    }
  };

  private _onMouseUp = () => {
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
    this._start = null;
  };

  updateComponent = {} as UpdateGridComponents<E>;

  private cleanUpdateFunctions() {
    if (!this.layout) {
      this._updateFunctions = {};
      return;
    }

    const layout = this.layouts[this.layout];
    const areas = this
      .getLayoutAreas(layout)
      .map(area => {
        const match = area.match(/\[([^\]]+)\]/);
        return match ? match[1].split(":")[0].split(",").map(s => s.trim()) : [area];
      })
      .flat()
    
    for (const name in this.elements) {
      if (areas.includes(name)) continue;
      delete this._updateFunctions[name];
    }
  }

  private clean() {
    this.style.gridTemplate = "";
    for (const child of [...this.children]) {
      if (
        Object.values(this._slotNames).some(
          (value) => child.getAttribute("slot") === value,
        )
      ) {
        continue;
      }
      child.remove();
    }

    this.cleanUpdateFunctions();
  }

  private emitElementCreation(detail: ElementCreatedEventDetail) {
    this.dispatchEvent(new CustomEvent<ElementCreatedEventDetail>("elementcreated", {
      detail
    }))
  }

  private emitLayoutChange = () => {
    this.dispatchEvent(new Event("layoutchange"))
  }

  private getSanitizedLayoutTemplate(template: string) {
    // Replace the entire area value that includes square brackets (e.g., space[elementA, elementB])
    // with just the area name (the part before the brackets)
    return template.replace(/\b(\w+)\[[^\]]+\]/g, '$1');
  }

  private createElementFromDefinition(
    elementKey: string,
    elementDefinition: HTMLElement | StatelessComponent | {
      template: StatefullComponent<any>;
      initialState: Record<string, any>;
    },
  ): HTMLElement | null {
    if (elementDefinition instanceof HTMLElement) {
      return elementDefinition;
    }

    if ("template" in elementDefinition) {
      const { template, initialState } = elementDefinition;
      const templateId = this.getTemplateId(template);

      const existingComponent = this.querySelector(
        `[data-grid-template-id="${templateId}"]`,
      ) as HTMLElement | null;

      if (existingComponent) {
        // Si el componente ya existe, asegurarnos de que su función de update
        // esté registrada con el elementKey actual (puede haber cambiado)
        // Buscar la función de update existente en _updateFunctions
        let updateFunc = this._updateFunctions[elementKey];
        
        if (!updateFunc) {
          // Buscar si hay otra clave que apunte al mismo template
          for (const [, func] of Object.entries(this._updateFunctions)) {
            const comp = this.querySelector(
              `[data-grid-template-id="${this.getTemplateId(template)}"]`,
            );
            if (comp === existingComponent) {
              updateFunc = func;
              break;
            }
          }
        }
        
        // Registrar la función con el elementKey actual
        if (updateFunc) {
          this._updateFunctions[elementKey] = updateFunc;
        }
        
        return existingComponent;
      }

      const [component, updateComponent] = Component.create<
        HTMLElement,
        {}
        >(template, initialState);
      
      component.setAttribute("data-grid-template-id", templateId);
      this._updateFunctions[elementKey] = updateComponent;
      return component;
    }

    const templateId = this.getTemplateId(elementDefinition);
    const existingComponent = this.querySelector(
      `[data-grid-template-id="${templateId}"]`,
    );

    if (existingComponent) return existingComponent as HTMLElement;

    const component = Component.create(elementDefinition);
    component.setAttribute(
      "data-grid-template-id",
      this.getTemplateId(elementDefinition),
    );
    return component;
  }

  protected render() {
    if (this.layout) {
      const layout = this.layouts[this.layout];
      if (layout) {
        const guard = layout.guard ?? (() => true);
        const isAllowed = guard();
        if (!isAllowed) {
          this.clean();
          return html`<slot name=${this._slotNames.notAllowed}></slot>`;
        }

        const areas = this.getLayoutAreas(layout);
        const elements = areas
          .map((area: string) => {
            // Extract area name and element keys with optional labels
            let areaName = area;
            let elementSpecs: Array<{ key: string; label?: string }> = [];
            const bracketMatch = area.match(/^([^\[]+)\[([^\]]+)\]$/);
            const hasBrackets = !!bracketMatch;
            
            if (bracketMatch) {
              areaName = bracketMatch[1];
              const elementsStr = bracketMatch[2];
              // Split by comma and parse each element for key:label format
              elementSpecs = elementsStr.split(",").map(elem => {
                const trimmed = elem.trim();
                const colonIndex = trimmed.indexOf(":");
                if (colonIndex > -1) {
                  const key = trimmed.substring(0, colonIndex).trim();
                  const label = trimmed.substring(colonIndex + 1).trim();
                  return { key, label: label || undefined };
                }
                return { key: trimmed };
              });
            } else {
              elementSpecs = [{ key: area }];
            }

            // If no brackets, render element directly (even if single element)
            if (!hasBrackets) {
              const elementKey = elementSpecs[0].key;
              const elementDefinition = (layout.elements?.[elementKey as keyof E] ||
                this.elements[elementKey as keyof E]) as
                | HTMLElement
                | StatelessComponent
                | {
                    template: StatefullComponent<any>;
                    initialState: Record<string, any>;
                  };

              if (!elementDefinition) return null;

              const component = this.createElementFromDefinition(
                elementKey,
                elementDefinition
              );

              if (!component) return null;

              this.emitElementCreation({name: elementKey, element: component});
              component.style.gridArea = area;
              return component;
            }

            // Has brackets: create tabs (even for single element)
            const tabsId = `tabs-${areaName}`;
            let tabsElement = this.querySelector(
              `[data-grid-tabs-id="${tabsId}"]`,
            ) as Tabs | null;

            if (!tabsElement) {
              tabsElement = document.createElement("bim-tabs") as Tabs;
              tabsElement.setAttribute("data-grid-tabs-id", tabsId);
              tabsElement.setAttribute("switchers-full", "");
            }

            // Use the area name (without brackets) for grid-area
            tabsElement.style.gridArea = areaName;

            // Create a tab for each element
            const tabs: Tab[] = [];
            for (const elemSpec of elementSpecs) {
              const elementKey = elemSpec.key;
              const tabLabel = elemSpec.label || elementKey;

              const elementDefinition = (layout.elements?.[elementKey as keyof E] ||
                this.elements[elementKey as keyof E]) as
                | HTMLElement
                | StatelessComponent
                | {
                    template: StatefullComponent<any>;
                    initialState: Record<string, any>;
                  };

              if (!elementDefinition) continue;

              const component = this.createElementFromDefinition(
                elementKey,
                elementDefinition
              );

              if (!component) continue;

              this.emitElementCreation({name: elementKey, element: component});

              // Create or reuse tab
              const tabId = `tab-${areaName}-${elementKey}`;
              let tab = tabsElement.querySelector(
                `[data-grid-tab-id="${tabId}"]`,
              ) as Tab | null;

              if (!tab) {
                tab = document.createElement("bim-tab") as Tab;
                tab.setAttribute("data-grid-tab-id", tabId);
                tab.name = elementKey;
              }

              // Update tab label (may have changed)
              tab.label = tabLabel;

              // Clear and append component
              tab.innerHTML = "";
              tab.appendChild(component);
              tabs.push(tab);
            }

            // Update tabs element with new tabs
            tabsElement.innerHTML = "";
            tabsElement.append(...tabs);

            return tabsElement;
          })
          .filter((element) => element !== null) as HTMLElement[];
        
        this.clean()
        this.style.gridTemplate = this.getSanitizedLayoutTemplate(layout.template);
        const resizeData = this.layoutsResize[this.layout]
        if (resizeData) {
          this.style.gridTemplateColumns = resizeData.cols.join(" ")
          this.style.gridTemplateRows = resizeData.rows.join(" ")
        }
        this.append(...elements);
        this.emitLayoutChange()
      } else {
        this.clean()
        return html`<slot name=${this._slotNames.notFound}></slot>`;
      }
    } else {
      this.clean();
      this.emitLayoutChange()
      return html`<slot name=${this._slotNames.emptyLayout}></slot>`;
    }

    return html`
      ${this.resizeableAreas ? this.computeDividers() : null}
      <slot></slot>
    `;
  }
}

export * from "./src";
