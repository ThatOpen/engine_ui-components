import { TemplateResult, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Component } from "../../core/Component";
import { styles } from "../../core/Manager/src/styles";
import {
  TableData,
  TableGroupDeclaration,
  TableRowData,
  TableRowDeclaration,
} from "./src";
import { Manager } from "../../core/Manager";

export interface TableGroupValue {
  data: Record<string, any>;
  children?: TableGroupValue[];
  id: string;
}

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

  private _children = document.createElement("bim-table-children");
  private _columnsChange = new Event("columnschange");

  @state()
  private _filteredRows: TableGroupDeclaration[] = [];

  @property({
    type: Boolean,
    attribute: "headers-hidden",
    reflect: true,
  })
  headersHidden: boolean;

  @property({ type: String, attribute: "min-col-width", reflect: true })
  minColWidth: string;

  @property({ type: Array, attribute: false })
  set rows(data: TableGroupDeclaration[]) {
    for (const group of data) this.assignGroupDeclarationID(group);
    this._filteredRows = data;
    // this._columns = [];
    const computed = this.computeMissingColumns(this.data);
    if (computed) this.columns = this._columns;
  }

  get rows() {
    return this._filteredRows;
  }

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

  get value() {
    return this._children.data;
  }

  @property({ type: Array, attribute: false })
  data: TableData[] = [];

  declarations: Record<
    string,
    (
      value: string | number | boolean,
      data: TableRowData,
    ) => string | number | boolean | HTMLElement | (() => TemplateResult)
  > = {};

  constructor() {
    super();
    this.minColWidth = "4rem";
    this.headersHidden = false;
  }

  applyRowDeclaration(data: TableRowData) {
    const declaration: TableRowDeclaration = {};
    for (const key in data) {
      const rowDeclaration = this.declarations[key];
      if (rowDeclaration) {
        declaration[key] = rowDeclaration(data[key], data);
      } else {
        declaration[key] = data[key];
      }
    }
    return declaration;
  }

  private assignGroupDeclarationID(groupData: TableGroupDeclaration) {
    if (!groupData.id) groupData.id = Manager.newRandomId();
    if (groupData.children) {
      groupData.children.forEach((child) =>
        this.assignGroupDeclarationID(child),
      );
    }
  }

  private computeMissingColumns(row: TableData[]): boolean {
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

  async downloadData(fileName = "BIM Table Data") {
    const value = await this.value;
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
    tableGroups = this.data,
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
    target: TableData,
    tableGroups = this.data,
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

  filter(
    searchString: string,
    preserveStructure = false,
    data = this.data,
  ): TableData[] {
    const results: TableData[] = [];
    for (const row of data) {
      const valueFoundInData = Object.values(row.data).some((val) => {
        return String(val).toLowerCase().includes(searchString.toLowerCase());
      });

      if (valueFoundInData) {
        if (preserveStructure) {
          const rowToAdd: TableData = {
            data: row.data,
            id: row.id,
          };
          if (row.children) {
            const childResults = this.filter(searchString, true, row.children);
            if (childResults.length) rowToAdd.children = childResults;
          }
          results.push(rowToAdd);
        } else {
          results.push({ data: row.data, id: row.id });
          if (row.children) {
            const childResults = this.filter(searchString, false, row.children);
            results.push(...childResults);
          }
        }
      } else if (row.children) {
        const childResults = this.filter(
          searchString,
          preserveStructure,
          row.children,
        );
        if (preserveStructure && childResults.length) {
          results.push({
            data: row.data,
            id: row.id,
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
    this._children = children;
    children.table = this;
    children.data = this.data;
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
