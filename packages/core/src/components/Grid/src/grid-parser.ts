/**
 * Splits a single grid row string into tokens, preserving content inside brackets or
 * parentheses as a single token. Treats "." as a null (empty cell).
 */
function tokenizeLine(line: string): (string | null)[] {
  const tokens: (string | null)[] = [];
  let current = "";
  let depth = 0;

  for (const char of line) {
    if (char === "[" || char === "(") {
      depth++;
      current += char;
    } else if (char === "]" || char === ")") {
      depth--;
      current += char;
    } else if (char === " " && depth === 0) {
      if (current !== "") {
        tokens.push(current === "." ? null : current);
        current = "";
      }
    } else {
      current += char;
    }
  }

  if (current !== "") {
    tokens.push(current === "." ? null : current);
  }

  return tokens;
}

/**
 * Parses a grid template string and returns a 2D matrix representation.
 * @param template - The grid template string to parse
 * @returns A 2D array where each cell contains the area name or null for empty cells
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
    if (inside === "") {
      gridMatrix.push([]);
      continue;
    }
    gridMatrix.push(tokenizeLine(inside));
  }

  // If no quoted strings found, try splitting by lines
  if (gridMatrix.length === 0) {
    const lines = template
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    for (const line of lines) {
      const cleaned = line.replace(/^["']|["']$/g, "").trim();
      if (!cleaned) continue;
      gridMatrix.push(tokenizeLine(cleaned));
    }
  }

  return gridMatrix;
}

/**
 * Extracts unique area names from a grid template string.
 * @param template - The grid template string
 * @returns An array of unique area names
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
  const matrix = parseGridTemplate(template);
  const seen = new Set<string>();
  for (const row of matrix) {
    for (const cell of row) {
      if (cell !== null && cell !== "") seen.add(cell);
    }
  }
  return [...seen];
}
