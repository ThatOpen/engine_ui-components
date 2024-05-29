import { LitElement, TemplateResult, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";
import { cache } from "lit/directives/cache.js";
import { Table, ColumnData } from "../index";
import { TableRowData, CellCreatedEventDetail } from "./types";
import { TableCell } from "./TableCell";

export class TableRow extends LitElement {
  static styles = css`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
    }
  `;

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

  private _table = this.closest<Table>("bim-table");

  set table(value: Table | null) {
    if (this._table) {
      this.columns = [];
      this.hiddenColumns = [];
      this._table.removeEventListener(
        "columnschange",
        this.onTableColumnsChange,
      );
      this._table.removeEventListener(
        "columnshidden",
        this.onTableColumnsHidden,
      );
    }
    this._table = value;
    if (this._table) {
      this.columns = this._table.columns;
      this.hiddenColumns = this._table.hiddenColumns;
      this._table.addEventListener("columnschange", this.onTableColumnsChange);
      this._table.addEventListener("columnshidden", this.onTableColumnsHidden);
      this._table.addEventListener(
        "indentation",
        this.onTableIndentationColorChange,
      );
    }
  }

  get table() {
    return this._table;
  }

  private onTableIndentationColorChange = (e: any) => {
    if (!this.table) return;
    const detail = e.detail as { indentationLevel: number; color: string };
    const { indentationLevel, color } = detail;
    const indentation = this.table?.getRowIndentation(this.data);
    if (indentation === indentationLevel) {
      this.style.backgroundColor = color;
    }
  };

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
    { rootMargin: "10px" },
  );

  connectedCallback() {
    super.connectedCallback();
    this._observer.observe(this);
  }

  compute() {
    const indentation = this.table?.getRowIndentation(this.data) ?? 0;
    const declaration = !this.isHeader
      ? this.table?.computeRowDeclaration(this.data) ?? this.data
      : this.data;
    const cells: TemplateResult[] = [];
    for (const column in declaration) {
      if (this.hiddenColumns.includes(column)) continue;
      const value = declaration[column];
      let content;
      if (
        typeof value === "string" ||
        typeof value === "boolean" ||
        typeof value === "number"
      ) {
        content = html`<bim-label>${value}</bim-label>`;
      } else {
        content = value;
      }

      const isFirstCell = this._columnNames.indexOf(column) === 0;
      const style = `
        ${isFirstCell && !this.isHeader ? `margin-left: ${indentation + 0.125}rem` : ""}
      `;

      const onCellCreated = (el?: Element) => {
        if (!el) return;
        const cell = el as TableCell;
        const columnIndex = this._columnNames.indexOf(column);
        cell.setAttribute("data-column-index", String(columnIndex));
        cell.toggleAttribute("data-cell-header", this.isHeader);
        cell.rowData = this.data;
        setTimeout(() => {
          this.table?.dispatchEvent(
            new CustomEvent<CellCreatedEventDetail>("cellcreated", {
              detail: { cell },
            }),
          );
        });
      };

      const cell = html`
        <bim-table-cell ${ref(onCellCreated)} style="${style}" .column=${column}
          >${content}</bim-table-cell
        >
      `;

      cells.push(cell);
    }

    this.style.gridTemplateAreas = `"${this._columnNames.join(" ")}"`;
    this.style.gridTemplateColumns = `${this._columnWidths.join(" ")}`;

    return html`
      ${cells}
      <slot></slot>
    `;
  }

  protected render() {
    return html`${cache(this._intersecting ? this.compute() : html``)}`;
  }
}
