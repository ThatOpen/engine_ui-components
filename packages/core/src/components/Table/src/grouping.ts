import { TableGroupData, TableRowData, TableGroupingTransform } from './types';
import { Table } from '..';

/**
 * Grouping system that creates hierarchies independent of groupBy column count.
 * The groupingTransform functions determine the hierarchy depth, not the groupBy array.
 * 
 * @param data - The table data to group (can be flat or already grouped)
 * @param groupByColumns - Array of column names to group by (in order of hierarchy)
 * @param groupingTransform - Transform functions that return string arrays for flexible hierarchies
 * @returns Grouped table data structure
 * 
 * @example
 * ```typescript
 * // Flexible hierarchy depth determined by transform function results:
 * groupingTransform: {
 *   State: (value) => {
 *     if (value === "S0") return ["Work in Progress"];
 *     if (value === "S1") return ["Shared Information", "S1 - Coordination"]; 
 *     if (value === "S1.1") return ["Shared Information", "S1 - Coordination", "S1.1 - Initial"];
 *   }
 * }
 * // Results in variable hierarchy depths: 1, 2, or 3 levels as needed
 * ```
 */
export function groupTableData<T extends TableRowData>(
  data: TableGroupData<T>[],
  groupByColumns: (keyof T)[],
  groupingTransform?: TableGroupingTransform<T>
): TableGroupData<T>[] { 
  if (groupByColumns.length === 0 || data.length === 0) return data;
  const flatData = Table.flattenData(data)
  return processColumnGrouping(flatData, groupByColumns, groupingTransform);
}

/**
 * Process grouping for columns recursively
 */
function processColumnGrouping<T extends TableRowData>(
  data: TableGroupData<T>[],
  columns: (keyof T)[],
  transforms?: TableGroupingTransform<T>
): TableGroupData<T>[] {
  if (columns.length === 0) return data;
  
  const [currentColumn, ...remainingColumns] = columns;
  const transformFn = transforms?.[currentColumn];
  
  if (transformFn) {
    return createHierarchicalGroups(data, currentColumn, transformFn, remainingColumns, transforms);
  }
  
  return createSimpleGroups(data, currentColumn, remainingColumns, transforms);
}

/**
 * Create hierarchical groups using transform functions
 */
function createHierarchicalGroups<T extends TableRowData>(
  data: TableGroupData<T>[],
  column: keyof T,
  transformFn: (value: T[keyof T], data: Partial<T>) => string[],
  remainingColumns: (keyof T)[],
  transforms?: TableGroupingTransform<T>
): TableGroupData<T>[] {
  // Collect hierarchy paths and group data by them
  const pathGroups = new Map<string, {
    path: string[];
    rows: TableGroupData<T>[];
  }>();
  
  for (const row of data) {
    const value = row.data[column];
    if (value === undefined) continue;
    
    const hierarchyPath = transformFn(value as T[keyof T], row.data);
    const pathKey = hierarchyPath.join('|');
    
    if (!pathGroups.has(pathKey)) {
      pathGroups.set(pathKey, { path: hierarchyPath, rows: [] });
    }
    pathGroups.get(pathKey)!.rows.push(row);
  }
  
  return buildHierarchyTree(pathGroups, column, remainingColumns, transforms);
}

/**
 * Build hierarchy tree from collected paths
 */
function buildHierarchyTree<T extends TableRowData>(
  pathGroups: Map<string, { path: string[]; rows: TableGroupData<T>[] }>,
  column: keyof T,
  remainingColumns: (keyof T)[],
  transforms?: TableGroupingTransform<T>
): TableGroupData<T>[] {
  const treeBuilder = new HierarchyTreeBuilder<T>();
  
  // Add all paths to the tree
  for (const { path, rows } of pathGroups.values()) {
    treeBuilder.addPath(path, rows, column);
  }
  
  // Convert tree to final structure and process remaining columns
  return treeBuilder.buildResult(remainingColumns, transforms);
}

/**
 * Create simple groups by column values
 */
function createSimpleGroups<T extends TableRowData>(
  data: TableGroupData<T>[],
  column: keyof T,
  remainingColumns: (keyof T)[],
  transforms?: TableGroupingTransform<T>
): TableGroupData<T>[] {
  const groups = new Map<any, TableGroupData<T>[]>();
  
  for (const row of data) {
    const value = row.data[column];
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value)!.push(row);
  }
  
  const result: TableGroupData<T>[] = [];
  for (const [value, rows] of groups) {
    const children = remainingColumns.length > 0 
      ? processColumnGrouping(rows, remainingColumns, transforms)
      : rows;
    
    result.push({
      data: { [column]: value } as Partial<T>,
      children,
      _isComputedGroup: true
    });
  }
  
  return result;
}

/**
 * Helper class to build hierarchy trees efficiently
 */
class HierarchyTreeBuilder<T extends TableRowData> {
  private tree = new Map<string, HierarchyNode<T>>();
  
  addPath(path: string[], rows: TableGroupData<T>[], column: keyof T): void {
    let currentLevel = this.tree;
    
    for (let i = 0; i < path.length; i++) {
      const levelKey = path[i];
      
      if (!currentLevel.has(levelKey)) {
        currentLevel.set(levelKey, {
          value: levelKey,
          column,
          children: new Map(),
          rows: []
        });
      }
      
      const node = currentLevel.get(levelKey)!;
      
      // If this is the final level, add the rows
      if (i === path.length - 1) {
        node.rows.push(...rows);
      }
      
      currentLevel = node.children;
    }
  }
  
  buildResult(
    remainingColumns: (keyof T)[],
    transforms?: TableGroupingTransform<T>
  ): TableGroupData<T>[] {
    return this.convertMapToResult(this.tree, remainingColumns, transforms);
  }
  
  private convertMapToResult(
    levelMap: Map<string, HierarchyNode<T>>,
    remainingColumns: (keyof T)[],
    transforms?: TableGroupingTransform<T>
  ): TableGroupData<T>[] {
    const result: TableGroupData<T>[] = [];
    
    for (const node of levelMap.values()) {
      const children: TableGroupData<T>[] = [];
      
      // Add sub-hierarchy children
      if (node.children.size > 0) {
        children.push(...this.convertMapToResult(node.children, remainingColumns, transforms));
      }
      
      // Add direct rows (processed with remaining columns if any)
      if (node.rows.length > 0) {
        const processedRows = remainingColumns.length > 0
          ? processColumnGrouping(node.rows, remainingColumns, transforms)
          : node.rows;
        children.push(...processedRows);
      }
      
      result.push({
        data: { [node.column]: node.value } as Partial<T>,
        children,
        _isComputedGroup: true
      });
    }
    
    return result;
  }
}

/**
 * Internal node structure for building hierarchy trees
 */
interface HierarchyNode<T extends TableRowData> {
  value: string;
  column: keyof T;
  children: Map<string, HierarchyNode<T>>;
  rows: TableGroupData<T>[];
}
