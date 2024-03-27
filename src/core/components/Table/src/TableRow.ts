import { css, html } from "lit";
import { UIComponent } from "../../../UIComponent";
import { Table, ColumnData } from "../index";
import { UIManager } from "../../../UIManager";
import { TableCell } from "./TableCell";

interface TableComponentCell {
  template: string;
  onCreated?: (component: HTMLElement) => void;
}

export interface TableRowData {
  [key: string]: string | TableComponentCell;
}

export class TableRow extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      /* border-bottom: 1px solid var(--bim-ui_bg-contrast-20); */
    }
  `;

  static properties = {
    columns: { type: Object, attribute: false },
    data: { type: Object, attribute: false },
    isHeader: { type: Boolean, attribute: "is-header", reflect: true },
  };

  declare isHeader: boolean;
  declare columns: ColumnData[];
  declare data: TableRowData;

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
        "columns-change",
        this.onTableColumnsChange,
      );
    }
    this._table = value;
    if (this._table) {
      this.columns = this._table.columns;
      this._table.addEventListener("columns-change", this.onTableColumnsChange);
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
    this.data = {};
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

  render() {
    const indentation = this.table?.getRowIndentation(this.data) ?? 0;
    const cells: TableCell[] = [];
    for (const column in this.data) {
      const value = this.data[column];
      let content;
      if (typeof value === "string") {
        content = document.createElement("bim-label");
        content.label = value;
      } else {
        const { template, onCreated } = value;
        content = UIManager.createElementFromTemplate(template);
        if (onCreated) onCreated(content);
      }
      const cell = document.createElement("bim-table-cell");
      const isFirstCell = this._columnNames.indexOf(column) === 0;
      if (isFirstCell && !this.isHeader) {
        cell.style.justifyContent = "normal";
        cell.style.marginLeft = `${indentation + 0.125}rem`;
      }
      cell.column = column;
      cell.append(content);
      cell.table = this.table;
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
