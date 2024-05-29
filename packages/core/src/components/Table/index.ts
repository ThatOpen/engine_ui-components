import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { styles } from "../../core/Manager/src/styles";
import {
  TableDataTransform,
  TableGroupData,
  TableRowData,
  TableRowTemplate,
} from "./src";
import { evalCondition, getQuery } from "../../core/utils";

/**
 * Heloooooooooo
 */
export interface ColumnData {
  name: string;
  width: string;
}

/**
 * Heloooooooooo
 */
export class Table extends LitElement {
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

  /**
   * A boolean property that determines whether the table headers are hidden.
   *
   * @remarks
   * This property can be used to hide the table headers when needed.
   *
   * @defaultValue false
   *
   * @example
   * ```typescript
   * table.headersHidden = true;
   * ```
   * @example
   * ```html
   * <bim-table headers-hidden></bim-table>
   * ```
   */
  @property({
    type: Boolean,
    attribute: "headers-hidden",
    reflect: true,
  })
  headersHidden = false;

  @property({ type: String, attribute: "min-col-width", reflect: true })
  minColWidth = "4rem";

  private _columns: ColumnData[] = [];

  /**
   * Sets the columns for the table.
   * This property allows you to define the columns order for the table.
   * If this is not set, it will be computed from the `table.data` object.
   * The columns can be provided as an array of strings or objects of type `ColumnData`.
   * If the columns are provided as strings, they will be converted to `ColumnData` objects with a default width.
   *
   * @param value - An array of strings or objects of type `ColumnData`.
   *
   * @example
   * ```typescript
   * const columns: (string | ColumnData)[] = [
   *   "Column 1",
   *   "Column 2",
   *   { name: "Column 3", width: "200px" },
   * ];
   * table.columns = columns;
   * ```
   */
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

  private _textDelimiters = {
    comma: ",",
    tab: "\t",
  };

  /**
   * Getter for the `value` property.
   * Returns the filtered data if a search string is provided, otherwise returns the original data.
   *
   * @example
   * ```typescript
   * const tableValue = table.value;
   * console.log(tableValue); // Output: The filtered or original data.
   * ```
   */
  get value() {
    return this._filteredData;
  }

  private _expandedBeforeFilter?: boolean;
  private _queryString: string | null = null;

  /**
   * Sets the search string for filtering the table data.
   * This property allows you to filter the table data based on a search string.
   * If a search string is provided, the table will only display rows that match the search criteria.
   * The search criteria can be a simple string or a complex query.
   * If a simple string is provided, the table will filter rows based on the string's presence in any column.
   * If a complex query is provided, the table will filter rows based on the query's conditions and values.
   *
   * @example
   * ```typescript
   * table.queryString = "example";
   * ```
   *
   * @example
   * ```typescript
   * table.queryString = "column1="Jhon Doe" & column2=20";
   * ```
   */
  set queryString(_value: string | null) {
    this._queryString = _value && _value.trim() !== "" ? _value.trim() : null;
    this.updateFilteredData();
  }

  get queryString() {
    return this._queryString;
  }

  private _data: TableGroupData[] = [];

  /**
   * Sets the data for the table.
   * This property allows you to define the data that will be displayed in the table.
   * The data is expected to be an array of `TableGroupData` objects.
   * If the columns are not explicitly set, they will be computed from the `data` object.
   *
   * @param value - An array of `TableGroupData` objects representing the table data.
   *
   * @example
   * ```typescript
   * const data: TableGroupData[] = [
   *   { data: { "Column 1": "Value 1", "Column 2": "Value 2" } },
   *   { data: { "Column 1": "Value 3", "Column 2": "Value 4" } },
   * ];
   * table.data = data;
   * ```
   */
  @property({ type: Array, attribute: false })
  set data(value: TableGroupData[]) {
    this._data = value;
    this.updateFilteredData();
    const computed = this.computeMissingColumns(value);
    if (computed) this.columns = this._columns;
  }

  get data() {
    return this._data;
  }

  /**
   * A boolean property that determines whether the table is expanded or not.
   * When `true`, the table will be expanded to show all rows.
   * When `false`, the table will be collapsed to show only the top-level rows.
   *
   * @defaultValue false
   *
   * @example
   * ```typescript
   * table.expanded = true;
   * ```
   * @example
   * ```html
   * <bim-table expanded></bim-table>
   * ```
   */
  @property({ type: Boolean, reflect: true })
  expanded = false;

  /**
   * A boolean property that determines whether the table preserves its structure when filtering.
   * When `true`, the table will preserve its structure, showing only the filtered rows and their parents.
   * When `false`, the table will not preserve its structure, showing only the filtered rows.
   *
   * @defaultValue false
   *
   * @example
   * ```typescript
   * table.preserveStructureOnFilter = true;
   * ```
   */
  preserveStructureOnFilter = false;

  /**
   * A boolean property that determines whether the table indentation should be included in the exported text.
   *
   * @defaultValue false
   *
   * @example
   * ```typescript
   * table.indentationInText = true;
   * ```
   */
  indentationInText = false;

  /**
   * A property representing the rules for transforming table data.
   * The keys of the object are the column names, and the values are functions that define the transformation logic.
   *
   * @defaultValue An empty object.
   */
  dataTransform: TableDataTransform = {};

  private _onColumnsHidden = new Event("columnshidden");

  private _hiddenColumns: string[] = [];

  set hiddenColumns(value: string[]) {
    this._hiddenColumns = value;
    setTimeout(() => {
      this.dispatchEvent(this._onColumnsHidden);
    });
  }

  get hiddenColumns() {
    return this._hiddenColumns;
  }

  private updateFilteredData() {
    if (this.queryString) {
      const query = getQuery(this.queryString);
      if (query) {
        this.filterFunction = this._queryFilterFunction;
        this._filteredData = this.filter(this.queryString);
      } else {
        this.filterFunction = this._stringFilterFunction;
        this._filteredData = this.filter(this.queryString);
      }
      if (this.preserveStructureOnFilter) {
        if (this._expandedBeforeFilter === undefined) {
          this._expandedBeforeFilter = this.expanded;
        }
        this.expanded = true;
      }
    } else {
      if (
        this.preserveStructureOnFilter &&
        this._expandedBeforeFilter !== undefined
      ) {
        this.expanded = this._expandedBeforeFilter;
        this._expandedBeforeFilter = undefined;
      }
      this._filteredData = this.data;
    }
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

  private generateText(
    delimiter: "comma" | "tab" = "comma",
    data = this.value,
    indentation = "",
    isFirstRow = true,
  ) {
    const separator = this._textDelimiters[delimiter];

    let text = "";
    const columns = this.columns.map((column) => column.name);
    if (isFirstRow) {
      if (this.indentationInText) text += `Indentation${separator}`;
      const headerRow = `${columns.join(separator)}\n`;
      text += headerRow;
    }

    for (const [index, group] of data.entries()) {
      const { data, children } = group;
      const rowIndentation = this.indentationInText
        ? `${indentation}${index + 1}${separator}`
        : "";
      const rowValues = columns.map((column) => data[column] ?? "");
      const row = `${rowIndentation}${rowValues.join(separator)}\n`;
      text += row;

      if (children) {
        text += this.generateText(
          delimiter,
          group.children,
          `${indentation}${index + 1}.`,
          false,
        );
      }
    }

    return text;
  }

  /**
   * A getter function that generates a CSV (Comma Separated Values) representation of the table data.
   *
   * @returns A string containing the CSV representation of the table data.
   *
   * @example
   * ```typescript
   * const csvData = table.csv;
   * console.log(csvData); // Output: "Column 1,Column 2\nValue 1,Value 2\nValue 3,Value 4"
   * ```
   */
  get csv() {
    return this.generateText("comma");
  }

  /**
   * A getter function that generates a Tab Separated Values (TSV) representation of the table data.
   *
   * @returns A string containing the TSV representation of the table data.
   *
   * @example
   * ```typescript
   * const tsvData = table.tsv;
   * console.log(tsvData); // Output: "Column 1\tColumn 2\nValue 1\tValue 2\nValue 3\tValue 4"
   * ```
   */
  get tsv() {
    return this.generateText("tab");
  }

  computeRowDeclaration(data: TableRowData) {
    const declaration: TableRowTemplate = {};
    for (const key in data) {
      const rowDeclaration = this.dataTransform[key];
      if (rowDeclaration) {
        declaration[key] = rowDeclaration(data[key], data);
      } else {
        declaration[key] = data[key];
      }
    }
    return declaration;
  }

  /**
   * The `downloadData` method is used to download the table data in different formats.
   *
   * @param fileName - The name of the downloaded file. Default is "BIM Table Data".
   * @param format - The format of the downloaded file. Can be "json", "tsv", or "csv". Default is "json".
   *
   * @returns - This method does not return any value.
   *
   * @example
   * ```typescript
   * table.downloadData("MyTableData", "tsv");
   * ```
   */
  downloadData(
    fileName = "BIM Table Data",
    format: "json" | "tsv" | "csv" = "json",
  ) {
    let file: File | null = null;
    if (format === "json") {
      file = new File(
        [JSON.stringify(this.value, undefined, 2)],
        `${fileName}.json`,
      );
    }
    if (format === "csv") {
      file = new File([this.csv], `${fileName}.csv`);
    }
    if (format === "tsv") {
      file = new File([this.tsv], `${fileName}.tsv`);
    }
    if (!file) return;
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

  setIndentationColor(indentationLevel: number, color: string) {
    const event = new CustomEvent<{ indentationLevel: number; color: string }>(
      "indentation",
      { detail: { indentationLevel, color } },
    );
    this.dispatchEvent(event);
  }

  /**
   * A function type representing the filter function for the table.
   * This function is used to determine whether a given row of data should be included in the filtered results.
   *
   * @param queryString - The search string used to filter the data.
   * @param data - The data row to be filtered.
   *
   * @returns A boolean value indicating whether the data row should be included in the filtered results.
   * If the function returns `true`, the data row will be included in the filtered results.
   * If the function returns `false`, the data row will be excluded from the filtered results.
   */
  filterFunction?: (queryString: string, data: TableGroupData) => boolean;

  private _stringFilterFunction = (
    queryString: string,
    data: TableGroupData,
  ) => {
    const valueMatch = Object.values(data.data).some((val) => {
      return String(val).toLowerCase().includes(queryString.toLowerCase());
    });
    return valueMatch;
  };

  private _queryFilterFunction = (queryString: string, row: TableGroupData) => {
    let valueFoundInData = false;
    const query = getQuery(queryString) ?? [];
    for (const search of query) {
      if ("queries" in search) {
        valueFoundInData = false;
        break;
      }
      const { condition, value } = search;
      let { key } = search;
      if (key.startsWith("[") && key.endsWith("]")) {
        const _key = key.replace("[", "").replace("]", "");
        key = _key;
        const keys = Object.keys(row.data).filter((key) => key.includes(_key));
        const tests = keys.map((key) =>
          evalCondition(row.data[key], condition, value),
        );
        valueFoundInData = tests.some((test) => test);
      } else {
        valueFoundInData = evalCondition(row.data[key], condition, value);
      }
      if (!valueFoundInData) break;
    }
    return valueFoundInData;
  };

  private filter(
    queryString: string,
    filterFunction = this.filterFunction ?? this._stringFilterFunction,
    data = this.data,
  ): TableGroupData[] {
    const results: TableGroupData[] = [];
    for (const row of data) {
      const valueMatch = filterFunction(queryString, row);
      if (valueMatch) {
        if (this.preserveStructureOnFilter) {
          const rowToAdd: TableGroupData = { data: row.data };
          if (row.children) {
            const childResults = this.filter(
              queryString,
              filterFunction,
              row.children,
            );
            if (childResults.length) rowToAdd.children = childResults;
          }
          results.push(rowToAdd);
        } else {
          results.push({ data: row.data });
          if (row.children) {
            const childResults = this.filter(
              queryString,
              filterFunction,
              row.children,
            );
            results.push(...childResults);
          }
        }
      } else if (row.children) {
        const childResults = this.filter(
          queryString,
          filterFunction,
          row.children,
        );
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
