import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Component } from "../../core/Component";
import { styles } from "../../core/Manager/src/styles";
import {
  TableDefinition,
  TableGroupData,
  TableRowData,
  TableRowTemplate,
} from "./src";

export interface ColumnData {
  name: string;
  width: string;
}

export class Table extends Component {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-button--bgc: transparent;
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `,
  ];

  private _columnsChange = new Event("columnschange");

  @state()
  private _filteredData: TableGroupData[] = [];

  @property({
    type: Boolean,
    attribute: "headers-hidden",
    reflect: true,
  })
  headersHidden: boolean;

  @property({ type: String, attribute: "min-col-width", reflect: true })
  minColWidth: string;

  private _columns: ColumnData[] = [];

  @property({ type: Array, attribute: false })
  set columns(value: (string | ColumnData)[]) {
    const columns: ColumnData[] = [];
    for (const header of value) {
      const column =
        typeof header === "string"
          ? { name: header, width: `minmax(${this.minColWidth}, 1fr)` }
          : header;
      columns.push(column);
    }
    this._columns = columns;
    this.computeMissingColumns(this.data);
    this.dispatchEvent(this._columnsChange);
  }

  get columns(): ColumnData[] {
    return this._columns;
  }

  private get _headerRowData() {
    const data: TableRowData = {};
    for (const column of this.columns) {
      if (typeof column === "string") {
        data[column] = column;
      } else {
        const { name } = column;
        data[name] = name;
      }
    }
    return data;
  }

  private _queryString: string | null = null;
  get value() {
    if (this.queryString) return this._filteredData;
    return this.data;
  }

  @property({ type: String, attribute: "search-string", reflect: true })
  set queryString(value: string | null) {
    this._queryString = value;
    this.expanded = value ? this.preserveStructureOnFilter : false;
    this._filteredData = value ? this.filter(value) : this.data;
  }

  get queryString() {
    return this._queryString;
  }

  private _data: TableGroupData[] = [];

  @property({ type: Array, attribute: false })
  set data(value: TableGroupData[]) {
    this._data = value;
    // this._columns = [];
    const computed = this.computeMissingColumns(value);
    if (computed) this.columns = this._columns;
  }

  get data() {
    return this._data;
  }

  @property({ type: Boolean, reflect: true })
  expanded = false;

  preserveStructureOnFilter = false;
  definition: TableDefinition = {};

  constructor() {
    super();
    this.minColWidth = "4rem";
    this.headersHidden = false;
  }

  computeRowDeclaration(data: TableRowData) {
    const declaration: TableRowTemplate = {};
    for (const key in data) {
      const rowDeclaration = this.definition[key];
      if (rowDeclaration) {
        declaration[key] = rowDeclaration(data[key], data);
      } else {
        declaration[key] = data[key];
      }
    }
    return declaration;
  }

  private computeMissingColumns(row: TableGroupData[]): boolean {
    let computed = false;
    for (const data of row) {
      const { children, data: rowData } = data;
      for (const header in rowData) {
        const names = this._columns.map((column) => {
          return typeof column === "string" ? column : column.name;
        });
        if (!names.includes(header)) {
          this._columns.push({
            name: header,
            width: `minmax(${this.minColWidth}, 1fr)`,
          });
          computed = true;
        }
      }
      if (children) {
        const childrenComputed = this.computeMissingColumns(children);
        if (childrenComputed && !computed) computed = childrenComputed;
      }
    }
    return computed;
  }

  downloadData(fileName = "BIM Table Data") {
    const value = this.data;
    const file = new File(
      [JSON.stringify(value, undefined, 2)],
      `${fileName}.json`,
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  getRowIndentation(
    target: TableRowData,
    tableGroups = this.value,
    level = 0,
  ): number | null {
    for (const tableGroup of tableGroups) {
      if (tableGroup.data === target) return level;
      if (tableGroup.children) {
        const childLevel = this.getRowIndentation(
          target,
          tableGroup.children,
          level + 1,
        );
        if (childLevel !== null) return childLevel;
      }
    }
    return null;
  }

  getGroupIndentation(
    target: TableGroupData,
    tableGroups = this.value,
    level = 0,
  ): number | null {
    for (const tableGroup of tableGroups) {
      if (tableGroup === target) return level;
      if (tableGroup.children) {
        const childLevel = this.getGroupIndentation(
          target,
          tableGroup.children,
          level + 1,
        );
        if (childLevel !== null) return childLevel;
      }
    }
    return null;
  }

  /**
   *
   * @param indentationLevel
   * @param color Any valid CSS color value.
   */
  setIndentationColor(indentationLevel: number, color: string) {
    const event = new CustomEvent<{ indentationLevel: number; color: string }>(
      "indentation",
      { detail: { indentationLevel, color } },
    );
    this.dispatchEvent(event);
  }

  filter(queryString: string, data = this.data): TableGroupData[] {
    const results: TableGroupData[] = [];
    for (const row of data) {
      const valueFoundInData = Object.values(row.data).some((val) => {
        return String(val).toLowerCase().includes(queryString.toLowerCase());
      });

      if (valueFoundInData) {
        if (this.preserveStructureOnFilter) {
          const rowToAdd: TableGroupData = { data: row.data };
          if (row.children) {
            const childResults = this.filter(queryString, row.children);
            if (childResults.length) rowToAdd.children = childResults;
          }
          results.push(rowToAdd);
        } else {
          results.push({ data: row.data });
          if (row.children) {
            const childResults = this.filter(queryString, row.children);
            results.push(...childResults);
          }
        }
      } else if (row.children) {
        const childResults = this.filter(queryString, row.children);
        if (this.preserveStructureOnFilter && childResults.length) {
          results.push({
            data: row.data,
            children: childResults,
          });
        } else {
          results.push(...childResults);
        }
      }
    }
    return results;
  }

  protected render() {
    const header = document.createElement("bim-table-row");
    header.table = this;
    header.isHeader = true;
    header.data = this._headerRowData;
    header.style.gridArea = "Header";
    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "5";

    const children = document.createElement("bim-table-children");
    children.table = this;
    children.data = this.value;
    children.style.gridArea = "Body";
    children.style.backgroundColor = "transparent";

    return html`
      <div class="parent">
        ${!this.headersHidden ? header : null}
        <div style="overflow-x: hidden; grid-area: Body">${children}</div>
      </div>
    `;
  }
}

export * from "./src";
