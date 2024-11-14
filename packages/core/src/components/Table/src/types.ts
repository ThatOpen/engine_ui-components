import { TemplateResult } from "lit";
import { TableCell, TableRow } from ".";

export type TableCellValue = string | number | boolean;

/**
 * Represents a row of data for a table.
 */
export type TableRowData<
  T extends Record<string, TableCellValue> = Record<string, TableCellValue>,
> = Record<keyof T, TableCellValue>;

export type CellRenderValue = TableCellValue | HTMLElement | TemplateResult;

/**
 * Represents a template for rendering a row of data in a table.
 */
export type TableRowTemplate<T extends TableRowData = TableRowData> = Partial<
  Record<keyof T, CellRenderValue>
>;

/**
 * Represents a group of table rows with optional children.
 */
export interface TableGroupData<T extends TableRowData = TableRowData> {
  data: Partial<T>;
  children?: TableGroupData<T>[];
}

/**
 * Represents a template for rendering a group of table rows in a table.
 */
export interface TableGroupTemplate<
  T extends TableRowTemplate = TableRowTemplate,
> {
  data: T;
  children?: TableGroupTemplate<T>[];
}

/**
 * Represents a transformation function for table data.
 */
export type TableDataTransform<T extends TableRowData = TableRowData> = {
  [K in keyof T]?: (value: T[K], data: Partial<T>) => CellRenderValue;
};

/**
 * Represents the detail of a cell created event.
 */
export interface CellCreatedEventDetail<T extends TableRowData = TableRowData> {
  cell: TableCell<T>;
}

/**
 * Represents the detail of a row created event.
 */
export interface RowCreatedEventDetail<T extends TableRowData = TableRowData> {
  row: TableRow<T>;
}

/**
 * Represents the detail of a row selected event.
 */
export interface RowSelectedEventDetail<T extends TableRowData = TableRowData> {
  data: Partial<T>;
}

/**
 * Represents the detail of a row deselected event.
 */
export interface RowDeselectedEventDetail<
  T extends TableRowData = TableRowData,
> {
  data: Partial<T>;
}

export type TableLoadFunction<T extends TableRowData = TableRowData> =
  () => Promise<TableGroupData<T>[]>;

/**
 * Represents a column in the table.
 *
 * @property name - The name of the column.
 * @property width - The width of the column.
 */
export interface ColumnData<T extends TableRowData = TableRowData> {
  /** The name of the column. */
  // name: keyof T extends string ? string : never;
  name: keyof T;

  /** The width of the column. */
  width: string;

  forceDataTransform?: boolean;
}
