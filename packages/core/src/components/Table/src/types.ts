import { TemplateResult } from "lit";
import { TableCell, TableRow } from ".";

/**
 * Represents a row of data for a table.
 */
export interface TableRowData {
  [columnName: string]: string | number | boolean;
}

/**
 * Represents a template for rendering a row of data in a table.
 */
export interface TableRowTemplate {
  [columnName: string]:
    | string
    | number
    | boolean
    | HTMLElement
    | TemplateResult;
}

/**
 * Represents a group of table rows with optional children.
 */
export interface TableGroupData {
  data: TableRowData;
  children?: TableGroupData[];
}

/**
 * Represents a template for rendering a group of table rows in a table.
 */
export interface TableGroupTemplate {
  data: TableRowTemplate;
  children?: TableGroupTemplate[];
}

/**
 * Represents a transformation function for table data.
 */
export interface TableDataTransform {
  [columnName: string]: (
    value: string | number | boolean,
    data: TableRowData,
  ) => string | number | boolean | HTMLElement | TemplateResult;
}

/**
 * Represents the detail of a cell created event.
 */
export interface CellCreatedEventDetail {
  cell: TableCell;
}

/**
 * Represents the detail of a row created event.
 */
export interface RowCreatedEventDetail {
  row: TableRow;
}
