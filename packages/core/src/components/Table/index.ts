import { LitElement, TemplateResult, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { styles } from "../../core/Manager/src/styles";
import {
  TableChildren,
  TableDataTransform,
  TableGroupingTransform,
  TableGroupData,
  TableLoadFunction,
  TableRow,
  TableRowData,
  TableRowTemplate,
  ColumnData,
  TableGroup,
  DataSelectedEventDetail,
} from "./src";
import { 
  groupTableData,
} from "./src/grouping";
import { DataSet, evalCondition, getQuery } from "../../core/utils";
import { loadingSkeleton } from "./src/loading-skeleton";
import { processingBar } from "./src/processing-bar";
import { ref } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";

/**
 * A custom table web component for BIM applications. HTML tag: bim-table
 */
export class Table<T extends TableRowData = TableRowData> extends LitElement {
  static flattenData<T extends TableRowData>(data: TableGroupData<T>[]) {
    const result: TableGroupData<T>[] = [];
  
    for (const group of data) {
      // Add the current group data (without children)
      result.push({ data: group.data });
      
      // Recursively flatten children if they exist
      if (group.children && group.children.length > 0) {
        result.push(...Table.flattenData(group.children));
      }
    }
    
    return result;
  }
  
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
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

  @state()
  private _value: TableGroupData<T>[] = [];

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

  private _columns: ColumnData<T>[] = [];

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
  set columns(value: (keyof T | ColumnData<T>)[]) {
    const columns: ColumnData<T>[] = [];
    for (const header of value) {
      const column =
        typeof header === "string"
          ? { name: header, width: `minmax(${this.minColWidth}, 1fr)` }
          : (header as ColumnData<T>);
      columns.push(column);
    }
    this._columns = columns;
    this.computeMissingColumns(this.data);
    this.dispatchEvent(new Event("columnschange"));
  }

  get columns(): ColumnData<T>[] {
    return this._columns;
  }

  private get _headerRowData() {
    const data: Partial<T> = {};
    for (const column of this.columns) {
      const { name } = column;
      (data[name] as any) = String(name);
    }
    return data;
  }

  private _textDelimiters = {
    comma: ",",
    tab: "\t",
  };

  /**
   * Returns the computed data including filters and groupings.
   *
   * @example
   * ```typescript
   * const tableValue = table.value;
   * console.log(tableValue);
   * ```
   */
  get value() {
    return this._value;
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
   * @example Simple Query
   * ```typescript
   * table.queryString = "example";
   * ```
   *
   * @example Complex Query
   * ```typescript
   * table.queryString = "column1="Jhon Doe" & column2=20";
   * ```
   */
  set queryString(_value: string | null) {
    this.toggleAttribute("data-processing", true);
    this._queryString = _value && _value.trim() !== "" ? _value.trim() : null;
    this.updateValue()
    this.toggleAttribute("data-processing", false);
  }

  get queryString() {
    return this._queryString;
  }

  private _data: TableGroupData<T>[] = [];

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
  set data(value: TableGroupData<T>[]) {
    this._data = value;
    this.updateValue()
    const computed = this.computeMissingColumns(value);
    if (computed) this.columns = this._columns;
  }

  get data() {
    return this._data;
  }

  get dataAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.data);
      });
    });
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
  dataTransform: TableDataTransform<T> = {};

  /**
   * An object of functions used to transform data values before they are used for grouping logic.
   * Each function is keyed by the column name and will be used to transform the value before grouping.
   * This allows creating custom grouping categories (e.g., grouping S1,S2,S3,S4 all under "S").
   *
   * @defaultValue An empty object.
   */
  @property({ attribute: false })
  groupingTransform: TableGroupingTransform<T> = {};

  @property({ type: Boolean, reflect: true, attribute: "selectable-rows" })
  selectableRows = false;

  selection = new DataSet<Partial<T>>();

  @property({ type: Boolean, attribute: "no-indentation", reflect: true })
  noIndentation = false;

  @property({ type: Boolean, attribute: "no-carets", reflect: true })
  noCarets = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  /**
   * Defines the columns to group by. Can be set as a comma-separated string attribute
   * or as an array of column names programmatically.
   * When the data changes, the grouping will be automatically reapplied.
   * 
   * @example
   * ```html
   * <bim-table grouped-by="Company,Job"></bim-table>
   * ```
   * 
   * @example
   * ```typescript
   * table.groupedBy = ['Company', 'Job'];
   * ```
   */
  @property({ 
    type: String, 
    attribute: "grouped-by", 
    reflect: true,
    converter: {
      toAttribute: (value: (keyof T)[]) => {
        return Array.isArray(value) && value.length > 0 ? value.join(',') : null;
      },
      fromAttribute: (value: string | null) => {
        return value && value.trim() !== '' ? value.split(',').map(col => col.trim()) : [];
      }
    }
  })

  set groupedBy(value: (keyof T)[]) {
    this._groupedBy = value;
    this.updateValue()
  }

  get groupedBy(): (keyof T)[] {
    return this._groupedBy;
  }

  private _groupedBy: (keyof T)[] = [];

  @state()
  private _errorLoading = false;

  private _defaultVisibility = true;

  /**
   * Determines the default visibility state for all columns.
   * When true, all columns are visible by default (except those in visibilityExceptions).
   * When false, all columns are hidden by default (except those in visibilityExceptions).
   * 
   * @defaultValue true
   * 
   * @example
   * ```typescript
   * // Hide all columns by default, show only exceptions
   * table.defaultVisibility = false;
   * table.visibilityExceptions = ['name', 'id'];
   * ```
   */
  @property({ 
    type: Boolean, 
    attribute: "columns-hidden", 
    reflect: true,
    converter: {
      toAttribute: (value: boolean) => {
        return value ? null : '';
      },
      fromAttribute: (value: string | null) => {
        // When columns-hidden attribute is present, defaultVisibility should be false
        return value === null;
      }
    }
  })
  set defaultVisibility(value: boolean) {
    this._defaultVisibility = value;
  }

  get defaultVisibility(): boolean {
    return this._defaultVisibility;
  }

  /**
   * Array of column names that should have the opposite visibility of defaultVisibility.
   * If defaultVisibility is true, these columns will be hidden.
   * If defaultVisibility is false, these columns will be visible.
   * Can be set as a comma-separated string attribute or as an array programmatically.
   * 
   * @example
   * ```html
   * <bim-table columns-hidden visibility-exceptions="name,id"></bim-table>
   * ```
   * 
   * @example
   * ```typescript
   * // Show only 'name' and 'id' columns, hide all others
   * table.defaultVisibility = false;
   * table.visibilityExceptions = ['name', 'id'];
   * ```
   * 
   * @example
   * ```typescript
   * // Show all columns except 'internalId' and 'metadata'
   * table.defaultVisibility = true;
   * table.visibilityExceptions = ['internalId', 'metadata'];
   * ```
   */
  private _visibilityExceptions: (keyof T)[] = [];

  @property({ 
    type: String, 
    attribute: "visibility-exceptions", 
    reflect: true,
    converter: {
      toAttribute: (value: (keyof T)[]) => {
        return Array.isArray(value) && value.length > 0 ? value.join(',') : null;
      },
      fromAttribute: (value: string | null) => {
        return value && value.trim() !== '' ? value.split(',').map(col => col.trim()) : [];
      }
    }
  })
  set visibilityExceptions(value: (keyof T)[]) {
    this._visibilityExceptions = value;
  }

  get visibilityExceptions(): (keyof T)[] {
    return this._visibilityExceptions;
  }

  /**
   * Sets the columns to be hidden from the table display.
   * @param value - Array of column keys to hide
   */
  set hiddenColumns(value: (keyof T)[]) {
    this.defaultVisibility = true
    this.visibilityExceptions = value
  }

  get hiddenColumns() {
    const allColumns = this.dataKeys;
    const hiddenColumns: (keyof T)[] = [];

    for (const column of allColumns) {
      const isException = this._visibilityExceptions.includes(column);
      const shouldBeHidden = this._defaultVisibility ? isException : !isException;
      
      if (shouldBeHidden) {
        hiddenColumns.push(column);
      }
    }

    return hiddenColumns;
  }

  /**
   * Sets the columns to be visible from the table display.
   * @param value - Array of column keys to show
   */
  set visibleColumns(value: (keyof T)[]) {
    this.defaultVisibility = false
    this.visibilityExceptions = value
  }

  get visibleColumns() {
    const allColumns = this.dataKeys;
    const visibleColumns: (keyof T)[] = [];

    for (const column of allColumns) {
      const isException = this._visibilityExceptions.includes(column);
      const shouldBeVisible = this._defaultVisibility ? !isException : isException;
      
      if (shouldBeVisible) {
        visibleColumns.push(column);
      }
    }

    return visibleColumns;
  }

  private emitDataSelected(detail: DataSelectedEventDetail) {
    this.dispatchEvent(new CustomEvent<DataSelectedEventDetail>("dataselected", {
      detail
    }))
  }

  private emitDataDeselected(detail: DataSelectedEventDetail) {
    this.dispatchEvent(new CustomEvent<DataSelectedEventDetail>("datadeselected", {
      detail
    }))
  }

  private emitDataCleared() {
    this.dispatchEvent(new Event("dataselectioncleared"))
  }

  constructor() {
    super()
    this.selection.onItemAdded.add((data) => this.emitDataSelected({data}))
    this.selection.onItemDeleted.add((data) => this.emitDataDeselected({data}))
    this.selection.onCleared.add(() => this.emitDataCleared())
  }

  private filterData(data = this.data) {
    let result: typeof this.data = []
    
    if (this.queryString) {
      const query = getQuery(this.queryString);
      if (query) {
        this.filterFunction = this._queryFilterFunction;
        result = this.filter(this.queryString, this.filterFunction, data);
      } else {
        this.filterFunction = this._stringFilterFunction;
        result = this.filter(this.queryString, this.filterFunction, data);
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
      result = data;
    }

    return result
  }

  private computeMissingColumns(row: TableGroupData<T>[]): boolean {
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

  defaultContentTemplate: (value: string | boolean | number, data: Partial<T>, group: TableGroup<T> | null) => TemplateResult = (value) => html`<bim-label style="white-space: normal; user-select: text;">${value}</bim-label>`

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

  /**
   * Returns all unique keys found in the table data and its children.
   * This method traverses through all data rows including nested children
   * to collect all possible column keys.
   * 
   * @returns An array of all unique keys found in the data
   * 
   * @example
   * ```typescript
   * const allKeys = table.getAllKeys();
   * console.log(allKeys); // ['Column1', 'Column2', 'NestedColumn', ...]
   * ```
   */
  get dataKeys() {
    const keys = new Set<keyof T>();
    
    const collectKeys = (data: TableGroupData<T>[]) => {
      for (const group of data) {
        // Collect keys from current level data
        for (const key in group.data) {
          keys.add(key);
        }
        
        // Recursively collect keys from children
        if (group.children) {
          collectKeys(group.children);
        }
      }
    };
    
    collectKeys(this.data);
    return Array.from(keys);
  }

  applyDataTransform(group: TableGroup<T> | null) {
    const declaration: TableRowTemplate<T> = {};
    if (!group) return declaration;
    const { data } = group.data;
    for (const key of Object.keys(this.dataTransform)) {
      const columnConfig = this.columns.find((column) => column.name === key);
      if (!(columnConfig && columnConfig.forceDataTransform)) continue;
      // TODO: Review data[key] as any. Is weird.
      if (!(key in data)) (data[key] as any) = "";
    }
    const _data = data as T;
    for (const key in _data) {
      const rowDeclaration = this.dataTransform[key];
      if (rowDeclaration) {
        declaration[key] = rowDeclaration(_data[key], data, group);
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
    target: Partial<T>,
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
    target: TableGroupData<T>,
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

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(new Event("connected"));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.dispatchEvent(new Event("disconnected"));
  }

  /**
   * The function to be executed when loading async data using Table.loadData
   */
  loadFunction?: TableLoadFunction<T>;

  /**
   * Asynchronously loads data into the table based on Table.loadFunction.
   * If the data is already available, just set it in Table.data.
   *
   * @param force - A boolean indicating whether to force loading even if the table already has data.
   *
   * @returns - A promise that resolves to a boolean indicating whether the data loading was successful.
   * If the promise resolves to `true`, the data loading was successful.
   * If the promise resolves to `false`, the data loading was not successful.
   *
   * @remarks - If the table already has data and `force` is `false`, the function resolves to `false` without making any changes.
   * If the table already has data and `force` is `true`, the existing data is discarded before loading the new data.
   * If an error occurs during data loading, the function sets the `errorLoadingMessage` property with the error message and resolves to `false`.
   */
  async loadData(force = false) {
    if (this._value.length !== 0 && !force) return false;
    if (!this.loadFunction) return false;
    this.loading = true;
    try {
      const data = await this.loadFunction();
      this.data = data;
      this.loading = false;
      this._errorLoading = false;
      return true;
    } catch (error: any) {
      this.loading = false;
      if (this._value.length !== 0) return false; // Do nothing in case the table already had values
      const errorSlot = this.querySelector("[slot='error-loading']");
      const errorMessageElement = errorSlot?.querySelector(
        "[data-table-element='error-message']",
      );
      if (
        error instanceof Error &&
        errorMessageElement &&
        error.message.trim() !== ""
      ) {
        errorMessageElement.textContent = error.message;
      }
      this._errorLoading = true;
      return false;
    }
  }

  /**
   * Groups the current table data by the specified columns.
   * Creates virtual grouped data without modifying the original table.data.
   * If data already has manual grouping (children), automatic grouping is skipped.
   * 
   * @param columns - Array of column names to group by
   * @returns The virtual grouped data structure or original data if manually grouped
   * 
   * @example
   * ```typescript
   * // Group by job
   * table.groupBy(['Job']);
   * 
   * // Group by company, then by job
   * table.groupBy(['Company', 'Job']);
   * ```
   */
  private groupData(data = this.data): TableGroupData<T>[] {
    const result = groupTableData(data, this.groupedBy, this.groupingTransform);
    return result
  }

  private updateValue() {
    const filteredData = this.filterData()
    const groupedData = this.groupData(filteredData)
    this._value = groupedData
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
  filterFunction?: (queryString: string, data: TableGroupData<T>) => boolean;

  private _stringFilterFunction = (
    queryString: string,
    data: TableGroupData<T>,
  ) => {
    const valueMatch = Object.values(data.data).some((val) => {
      return String(val).toLowerCase().includes(queryString.toLowerCase());
    });
    return valueMatch;
  };

  private _queryFilterFunction = (
    queryString: string,
    row: TableGroupData<T>,
  ) => {
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
          evalCondition(row.data[key]!, condition, value),
        );
        valueFoundInData = tests.some((test) => test);
      } else {
        valueFoundInData = evalCondition(row.data[key]!, condition, value);
      }
      if (!valueFoundInData) break;
    }
    return valueFoundInData;
  };

  private filter(
    queryString: string,
    filterFunction = this.filterFunction ?? this._stringFilterFunction,
    data = this.data,
  ): TableGroupData<T>[] {
    const results: TableGroupData<T>[] = [];
    for (const row of data) {
      const valueMatch = filterFunction(queryString, row);
      if (valueMatch) {
        if (this.preserveStructureOnFilter) {
          const rowToAdd: TableGroupData<T> = { data: row.data };
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

  private get _missingDataElement() {
    return this.querySelector("[slot='missing-data']");
  }

  /**
   * Renders the grouping message when the table is grouped.
   * Shows "Grouped By: Column1 > Column2" format.
   */
  private getGroupingMessageTemplate() {
    if (this.groupedBy.length === 0) {
      return nothing;
    }

    const groupingPath = this.groupedBy.join(' → ');
    
    return html`
      <bim-label part="grouping-message" style="
        background-color: var(--bim-ui_bg-contrast-10);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        padding: 0.5rem 0.75rem;
        font-weight: 500;
        display: block;
      ">
        Grouped By: ${groupingPath}
      </bim-label>
    `;
  }

  protected render() {
    if (this.loading) return loadingSkeleton();
    if (this._errorLoading) {
      return html`<slot name="error-loading"></slot>`;
    }

    if (this._value.length === 0 && this._missingDataElement) {
      return html`<slot name="missing-data"></slot>`;
    }

    const onHeaderCreated = (e?: Element) => {
      if (!e) return
      const header = e as TableRow<T>
      header.table = this;
      header.data = this._headerRowData;
      header.requestUpdate()
    }

    const onChildrenCreated = (e?: Element) => {
      if (!e) return
      const children = e as TableChildren<T>
      children.table = this;
      children.data = this.value;
      children.requestUpdate()
    }

    return html`
      <div class="parent">
        ${processingBar()}
        <div style="
          grid-area: Header;
          position: sticky;
          top: 0;
          z-index: 5;
        ">
          ${when(!this.headersHidden, () => html`<bim-table-row is-header style="background-color: var(--bim-ui_bg-contrast-20);" ${ref(onHeaderCreated)}></bim-table-row>`)}
          ${this.getGroupingMessageTemplate()}
        </div>
        <div style="overflow-x: hidden; grid-area: Body">
          <bim-table-children ${ref(onChildrenCreated)} style="grid-area: Body; background-color: transparent"></bim-table-children>
        </div>
      </div>
    `;
  }
}

export * from "./src";
