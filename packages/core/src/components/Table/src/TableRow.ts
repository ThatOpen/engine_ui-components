import { LitElement, css, html, render } from "lit";
import { property, state } from "lit/decorators.js";
import { Table, ColumnData } from "../index";
import {
  TableRowData,
  CellCreatedEventDetail,
  RowSelectedEventDetail,
  RowDeselectedEventDetail,
} from "./types";
import { Checkbox } from "../../Checkbox";

export class TableRow extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;

  @property({ type: Boolean, reflect: true })
  selected = false;

  @property({ attribute: false })
  columns: ColumnData[] = [];

  @property({ attribute: false })
  hiddenColumns: string[] = [];

  @property({ attribute: false })
  data: TableRowData = {};

  @property({ type: Boolean, attribute: "is-header", reflect: true })
  isHeader = false;

  private get _columnNames() {
    const columns = this.columns.filter(
      (column) => !this.hiddenColumns.includes(column.name),
    );
    const names = columns.map((column) => column.name);
    return names;
  }

  private get _columnWidths() {
    const columns = this.columns.filter(
      (column) => !this.hiddenColumns.includes(column.name),
    );
    const widths = columns.map((column) => column.width);
    return widths;
  }

  table = this.closest<Table>("bim-table");

  private onTableColumnsChange = () => {
    if (!this.table) return;
    this.columns = this.table.columns;
  };

  private onTableColumnsHidden = () => {
    if (!this.table) return;
    this.hiddenColumns = this.table.hiddenColumns;
  };

  @state()
  private _intersecting?: boolean;

  private _observer = new IntersectionObserver(
    (entries) => {
      this._intersecting = entries[0].isIntersecting;
    },
    { rootMargin: "36px" },
  );

  private get _isSelected() {
    return this.table?.selection.has(this.data);
  }

  private onSelectionChange(e: Event) {
    if (!this.table) return;
    const target = e.target as Checkbox;
    this.selected = target.value;
    if (target.value) {
      this.table.selection.add(this.data);
      this.table.dispatchEvent(
        new CustomEvent<RowSelectedEventDetail>("rowselected", {
          detail: {
            data: this.data,
          },
        }),
      );
    } else {
      this.table.selection.delete(this.data);
      this.table.dispatchEvent(
        new CustomEvent<RowDeselectedEventDetail>("rowdeselected", {
          detail: {
            data: this.data,
          },
        }),
      );
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._observer.observe(this);
    if (!this.table) return;
    this.columns = this.table.columns;
    this.hiddenColumns = this.table.hiddenColumns;
    this.table.addEventListener("columnschange", this.onTableColumnsChange);
    this.table.addEventListener("columnshidden", this.onTableColumnsHidden);
    this.toggleAttribute("selected", this._isSelected);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._observer.unobserve(this);
    if (!this.table) return;
    this.columns = [];
    this.hiddenColumns = [];
    this.table.removeEventListener("columnschange", this.onTableColumnsChange);
    this.table.removeEventListener("columnshidden", this.onTableColumnsHidden);
    this.toggleAttribute("selected", false);
  }

  compute() {
    if (!this.table) throw new Error("TableRow: parent table wasn't found!");

    const indentation = this.table.getRowIndentation(this.data) ?? 0;
    const declaration = !this.isHeader
      ? this.table.applyDataTransform(this.data) ?? this.data
      : this.data;
    const cells: Element[] = [];
    for (const column in declaration) {
      if (this.hiddenColumns.includes(column)) continue;
      const value = declaration[column];
      let content: DocumentFragment | Element | undefined;
      if (
        typeof value === "string" ||
        typeof value === "boolean" ||
        typeof value === "number"
      ) {
        content = document.createElement("bim-label");
        content.textContent = String(value);
      } else if (value instanceof HTMLElement) {
        content = value;
      } else {
        content = document.createDocumentFragment();
        render(value, content);
      }

      if (!content) continue;

      const cell = document.createElement("bim-table-cell");
      cell.append(content);
      cell.column = column;
      if (this._columnNames.indexOf(column) === 0)
        cell.style.marginLeft = `${this.table.noIndentation ? 0 : indentation + 0.75}rem`;
      const columnIndex = this._columnNames.indexOf(column);
      cell.setAttribute("data-column-index", String(columnIndex));
      cell.toggleAttribute(
        "data-no-indentation",
        columnIndex === 0 && this.table.noIndentation,
      );
      cell.toggleAttribute("data-cell-header", this.isHeader);
      cell.rowData = this.data;
      this.table.dispatchEvent(
        new CustomEvent<CellCreatedEventDetail>("cellcreated", {
          detail: { cell },
        }),
      );

      cells.push(cell);
    }

    this.style.gridTemplateAreas = `"${this.table.selectableRows ? "Selection" : ""} ${this._columnNames.join(" ")}"`;
    this.style.gridTemplateColumns = `${this.table.selectableRows ? "1.6rem" : ""} ${this._columnWidths.join(" ")}`;

    return html`
      ${!this.isHeader && this.table.selectableRows
        ? html`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`
        : null}
      ${cells}
      <slot></slot>
    `;
  }

  protected render() {
    return html`${this._intersecting ? this.compute() : html``}`;
  }
}
