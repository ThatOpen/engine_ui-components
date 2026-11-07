/**
 * The CSS variable a column's width is read through by every row of a table
 * (set on the table while a column is dragged; see TableCell).
 */
export const columnWidthVar = (column: string) =>
  `--bim-table-col-${String(column).replace(/[^a-zA-Z0-9_-]/g, "_")}`;
