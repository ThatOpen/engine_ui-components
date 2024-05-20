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
      /* border-bottom: 1px solid var(--bim-ui_bg-contrast-20); */
    }
  `;

  @property({ type: Array, attribute: false })
  columns: ColumnData[];

  @property({ type: Object, attribute: false })
  data: TableRowData = {};

  @property({ type: Boolean, attribute: "is-header", reflect: true })
  isHeader: boolean;

  private get _columnNames() {
    const names = this.columns.map((column) => column.name);
    return names;
  }

  private get _columnWidths() {
    const widths = this.columns.map((column) => column.width);
    return widths;
  }

  private _table = this.closest<Table>("bim-table");

  set table(value: Table | null) {
    if (this._table) {
      this.columns = [];
      this._table.removeEventListener(
        "columnschange",
        this.onTableColumnsChange,
      );
    }
    this._table = value;
    if (this._table) {
      this.columns = this._table.columns;
      this._table.addEventListener("columnschange", this.onTableColumnsChange);
      this._table.addEventListener(
        "indentation",
        this.onTableIndentationColorChange,
      );
    }
  }

  get table() {
    return this._table;
  }

  constructor() {
    super();
    this.columns = [];
    this.isHeader = false;
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
      const value = declaration[column];
      let content;
      if (
        typeof value === "string" ||
        typeof value === "boolean" ||
        typeof value === "number"
      ) {
        content = html`<bim-label label="${value}"></bim-label>`;
      } else {
        content = value;
      }

      const isFirstCell = this._columnNames.indexOf(column) === 0;
      const style = `
        ${isFirstCell && !this.isHeader ? "justify-content: normal" : ""};
        ${isFirstCell && !this.isHeader ? `margin-left: ${indentation + 0.125}rem` : ""}
      `;

      const onCellCreated = (el?: Element) => {
        if (!el) return;
        const cell = el as TableCell;
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

    return html`
      <style>
        :host {
          grid-template-areas: "${this._columnNames.join(" ")}";
          grid-template-columns: ${this._columnWidths.join(" ")};
        }
      </style>
      ${cells}
      <slot></slot>
    `;
  }

  protected render() {
    return html`${cache(this._intersecting ? this.compute() : html``)}`;
  }
}
