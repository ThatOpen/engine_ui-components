export interface TableRowData {
  [columnName: string]: string | number | boolean;
}

export interface TableData {
  data: TableRowData;
  children?: TableData[];
  id?: string;
}
