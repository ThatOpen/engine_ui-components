import { TemplateResult, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";
import { Component } from "../../../core/Component";
import { Table, ColumnData } from "../index";
import { TableRowData } from "./types";
import { TableCell } from "./TableCell";

export interface CellCreatedEventDetail {
  cell: TableCell;
}

export interface TableRowDeclaration {
  [key: string]:
    | string
    | number
    | boolean
    | HTMLElement
    | ((rowData: TableRowDeclaration) => TemplateResult);
}

export class TableRow extends Component {
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
  private _cells: TableCell[] = [];

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

  get value() {
    const value: Record<string, any> = {};
    for (const cell of this._cells) {
      if (!cell.column) continue;
      value[cell.column] = cell.value;
    }
    return value;
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

  protected render() {
    const indentation = this.table?.getRowIndentation(this.data) ?? 0;
    const declaration = this.table?.applyRowDeclaration(this.data) ?? {};
    const cells: TemplateResult[] = [];
    for (const column in declaration) {
      const value = declaration[column];
      let content;
      if (typeof value === "function") {
        content = value(declaration);
      } else if (value instanceof HTMLElement) {
        content = value;
      } else {
        content = html`<bim-label label="${value}"></bim-label>`;
      }

      const isFirstCell = this._columnNames.indexOf(column) === 0;
      const style = `
        ${isFirstCell && !this.isHeader ? "justify-content: normal" : ""};
        ${isFirstCell && !this.isHeader ? `margin-left: ${indentation + 0.125}rem` : ""}
      `;

      this._cells = [];
      const onCellCreated = (el?: Element) => {
        if (!el) return;
        const cell = el as TableCell;
        this._cells.push(cell);
        setTimeout(() => {
          this.dispatchEvent(
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
}
