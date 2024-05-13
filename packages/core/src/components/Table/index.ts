import { css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { Component } from "../../core/Component";
import { styles } from "../../core/Manager/src/styles";
import { TableRowData } from "./src/TableRow";
import { TableGroupData } from "./src/TableGroup";
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
  private _filteredRows: TableGroupData[] = [];

  @property({
    type: Boolean,
    attribute: "headers-hidden",
    reflect: true,
  })
  headersHidden: boolean;

  @property({ type: String, attribute: "min-col-width", reflect: true })
  minColWidth: string;

  private _rows: TableGroupData[] = [];

  @property({ type: Array, attribute: false })
  set rows(data: TableGroupData[]) {
    for (const group of data) this.assignGroupDeclarationID(group);
    this._rows = data;
    this._filteredRows = data;
    // this._columns = [];
    const computed = this.computeMissingColumns(data);
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
    this.computeMissingColumns(this.rows);
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
    return new Promise<TableGroupValue[]>((resolve) => {
      setTimeout(async () => {
        resolve(await this._children.value);
      });
    });
  }

  constructor() {
    super();
    this.minColWidth = "4rem";
    this.headersHidden = false;
  }

  private assignGroupDeclarationID(groupData: TableGroupData) {
    if (!groupData.id) groupData.id = Manager.newRandomId();
    if (groupData.children) {
      groupData.children.forEach((child) =>
        this.assignGroupDeclarationID(child),
      );
    }
  }

  private getGroupDeclarationById(
    id: string,
    root: TableGroupData[] = this._rows,
  ): TableGroupData | undefined {
    for (const groupData of root) {
      if (groupData.id === id) {
        return groupData;
      }
      if (groupData.children) {
        const foundInChildren = this.getGroupDeclarationById(
          id,
          groupData.children,
        );
        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }
    return undefined;
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
    tableGroups = this.rows,
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
    tableGroups = this.rows,
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

  // private _searchString = "";
  // set searchString(value: string) {
  //   if (this._searchString === "") {
  //     this.value.then((snapshot) => {
  //       this._valueSnapshot = snapshot;
  //       this._searchString = value;
  //       this.filterByValue(value, true);
  //     });
  //   } else {
  //     this._searchString = value;
  //     this.filterByValue(value, true);
  //   }
  // }

  private _valueSnapshot: TableGroupValue[] = [];

  // @ts-ignore
  private filterRowsByValue(
    value: string,
    // eslint-disable-next-line default-param-last
    preserveStructure = false,
    rowValues?: TableGroupValue[],
  ): TableGroupData[] {
    const results: TableGroupData[] = [];
    const data = rowValues ?? this._valueSnapshot;
    for (const row of data) {
      const valueFoundInData = Object.values(row.data).some((val) => {
        if (Array.isArray(val)) return val.includes(value);
        return String(val) === value;
      });

      const rowDeclaration = this.getGroupDeclarationById(row.id);
      if (!rowDeclaration) return results;

      if (valueFoundInData) {
        if (preserveStructure) {
          const rowToAdd: TableGroupData = {
            data: rowDeclaration.data,
            id: rowDeclaration.id,
          };
          if (row.children) {
            const childResults = this.filterRowsByValue(
              value,
              true,
              row.children,
            );
            if (childResults.length) rowToAdd.children = childResults;
          }
          results.push(rowToAdd);
        } else {
          results.push({ data: rowDeclaration.data, id: rowDeclaration.id });
          if (row.children) {
            const childResults = this.filterRowsByValue(
              value,
              false,
              row.children,
            );
            results.push(...childResults);
          }
        }
      } else if (row.children) {
        const childResults = this.filterRowsByValue(
          value,
          preserveStructure,
          row.children,
        );
        if (preserveStructure && childResults.length) {
          results.push({
            data: rowDeclaration.data,
            id: rowDeclaration.id,
            children: childResults,
          });
        } else {
          results.push(...childResults);
        }
      }
    }
    return results;
  }

  // filterByValue(value: string, preserveStructure = false) {
  //   const result = this.filterRowsByValue(value, preserveStructure);
  //   console.log(result);
  //   this._filteredRows = result;
  // }

  protected render() {
    const header = document.createElement("bim-table-row");
    header.isHeader = true;
    header.data = this._headerRowData;
    header.table = this;
    header.style.gridArea = "Header";
    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "5";

    const children = document.createElement("bim-table-children");
    this._children = children;
    children.groups = this._filteredRows;
    children.table = this;
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
