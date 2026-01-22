/**
 * Parses a grid template string and returns a 2D matrix representation.
 * Handles both quoted strings and newline-delimited formats.
 * 
 * @param template - The grid template string to parse
 * @returns A 2D array where each cell contains the area name or null for empty cells
 * 
 * @example
 * ```ts
 * const template = `
 *   "header header"
 *   "sidebar main"
 * `;
 * const matrix = parseGridTemplate(template);
 * // Returns: [['header', 'header'], ['sidebar', 'main']]
 * ```
 */
export function parseGridTemplate(template: string): (string | null)[][] {
  const gridMatrix: (string | null)[][] = [];
  const re = /(["'])(.*?)\1/g;
  let match;

  // Try to parse using quoted strings
  while ((match = re.exec(template)) !== null) {
    const inside = match[2].trim();
    if (inside === '') {
      gridMatrix.push([]);
      continue;
    }
    const tokens = inside.split(/\s+/).map(t => (t === '.' ? null : t));
    gridMatrix.push(tokens);
  }

  // If no quoted strings found, try splitting by lines
  if (gridMatrix.length === 0) {
    const lines = template
      .split(/\r?\n/)
      .map(l => l.trim())
      .filter(Boolean);
    
    for (const line of lines) {
      const cleaned = line.replace(/^["']|["']$/g, '').trim();
      if (!cleaned) continue;
      gridMatrix.push(cleaned.split(/\s+/).map(t => (t === '.' ? null : t)));
    }
  }

  return gridMatrix;
}

/**
 * Extracts unique area names from a grid template string.
 * Filters out empty cells (dots) and returns only unique area names.
 * 
 * @param template - The grid template string
 * @returns An array of unique area names
 * 
 * @example
 * ```ts
 * const template = `
 *   "header header"
 *   "sidebar main"
 * `;
 * const areas = extractUniqueAreas(template);
 * // Returns: ['header', 'sidebar', 'main']
 * ```
 */
export function extractUniqueAreas(template: string): string[] {
  const rows = template.split("\n").map((row) => row.trim());
  const areas = rows
    .map((row) => row.split('"')[1])
    .filter((area) => area !== undefined);
  
  const words: string[] = [];
  
  for (const area of areas) {
    // Split by spaces, but preserve content inside brackets
    let current = "";
    let bracketDepth = 0;
    
    for (let i = 0; i < area.length; i++) {
      const char = area[i];
      
      if (char === "[") {
        bracketDepth++;
        current += char;
      } else if (char === "]") {
        bracketDepth--;
        current += char;
      } else if (char === " " && bracketDepth === 0) {
        // Only split on spaces outside of brackets
        if (current !== "") {
          words.push(current);
          current = "";
        }
      } else {
        current += char;
      }
    }
    
    if (current !== "") {
      words.push(current);
    }
  }
  
  const uniqueAreas = [...new Set(words)].filter((area) => area !== "");
  return uniqueAreas;
}
