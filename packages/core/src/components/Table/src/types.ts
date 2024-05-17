import { TemplateResult } from "lit";
import { TableCell, TableRow } from ".";

export interface TableRowData {
  [columnName: string]: string | number | boolean;
}

export interface TableRowTemplate {
  [columnName: string]:
    | string
    | number
    | boolean
    | HTMLElement
    | TemplateResult;
}

export interface TableGroupData {
  data: TableRowData;
  children?: TableGroupData[];
}

export interface TableGroupTemplate {
  data: TableRowTemplate;
  children?: TableGroupTemplate[];
}

export interface TableDefinition {
  [columnName: string]: (
    value: string | number | boolean,
    data: TableRowData,
  ) => string | number | boolean | HTMLElement | TemplateResult;
}

export interface CellCreatedEventDetail {
  cell: TableCell;
}

export interface RowCreatedEventDetail {
  row: TableRow;
}
