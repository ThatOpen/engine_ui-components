import { GridDividerInfo } from "./types";

/**
 * Detects all dividers (vertical and horizontal) in a grid matrix.
 * A divider exists where two adjacent areas have different names.
 * 
 * @param gridMatrix - 2D array representing the grid structure
 * @returns Array of divider information including type, position, and adjacent areas
 */
export function detectDividers(gridMatrix: (string | null)[][]): GridDividerInfo[] {
  const dividers: GridDividerInfo[] = [];
  const rows = gridMatrix.length;
  const cols = gridMatrix[0]?.length || 0;

  // Detect vertical dividers (between adjacent columns)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const current = gridMatrix[r][c];
      const next = gridMatrix[r][c + 1];
      
      if (current !== next) {
        // Check if a vertical divider already exists at this column
        const existing = dividers.find(d =>
          d.type === "vertical" &&
          d.from[0] === c + 1 &&
          d.to[0] === c + 1 &&
          d.from[1] <= r && d.to[1] >= r
        );
        
        if (existing) {
          // Extend existing divider downward
          existing.to[1] = r + 1;
          if (existing.left && current) existing.left.push(current);
          if (existing.right && next) existing.right.push(next);
        } else {
          // Create new vertical divider
          dividers.push({
            type: "vertical",
            from: [c + 1, r],
            to: [c + 1, r + 1],
            left: current ? [current] : [],
            right: next ? [next] : []
          });
        }
      }
    }
  }

  // Detect horizontal dividers (between adjacent rows)
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols; c++) {
      const current = gridMatrix[r][c];
      const below = gridMatrix[r + 1][c];
      
      if (current !== below) {
        // Check if a horizontal divider already exists at this row
        const existing = dividers.find(d =>
          d.type === "horizontal" &&
          d.from[1] === r + 1 &&
          d.to[1] === r + 1 &&
          d.from[0] <= c && d.to[0] >= c
        );
        
        if (existing) {
          // Extend existing divider to the right
          existing.to[0] = c + 1;
          if (existing.above && current) existing.above.push(current);
          if (existing.below && below) existing.below.push(below);
        } else {
          // Create new horizontal divider
          dividers.push({
            type: "horizontal",
            from: [c, r + 1],
            to: [c + 1, r + 1],
            above: current ? [current] : [],
            below: below ? [below] : []
          });
        }
      }
    }
  }

  return deduplicateDividerAreas(dividers);
}

/**
 * Removes duplicate area names from divider area arrays.
 * Each adjacent area should only appear once in the divider's area list.
 * 
 * @param dividers - Array of dividers to deduplicate
 * @returns The same array with deduplicated area names
 */
export function deduplicateDividerAreas(dividers: GridDividerInfo[]): GridDividerInfo[] {
  for (const divider of dividers) {
    if (divider.left) divider.left = [...new Set(divider.left)];
    if (divider.right) divider.right = [...new Set(divider.right)];
    if (divider.above) divider.above = [...new Set(divider.above)];
    if (divider.below) divider.below = [...new Set(divider.below)];
  }
  return dividers;
}
