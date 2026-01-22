import { GridDividerInfo } from "./types";

/**
 * Calculates the CSS styles needed for a divider element. Handles positioning, transforms, and sizing based on divider type and grid gaps.
 * 
 * @param divider - The divider information
 * @param computedStyles - The computed styles of the grid element
 * @returns Object with CSS properties for the divider
 */
export function calculateDividerStyles(
  divider: GridDividerInfo,
  computedStyles: CSSStyleDeclaration
): Record<string, string> {
  const [colStart, rowStart] = divider.from;
  const [colEnd, rowEnd] = divider.to;

  const gapValues = computedStyles.gap.split(' ');
  const gapX = gapValues[1] || gapValues[0] || '0px';
  const gapY = gapValues[0] || '0px';
  
  const xTranslate = divider.type === "horizontal" 
    ? '0' 
    : `calc(-50% - ${gapX} / 2)`;

  const yTranslate = divider.type === "horizontal" 
    ? `calc(-50% - ${gapY} / 2)` 
    : '0';

  const styles: Record<string, string> = {
    "grid-column": `${colStart + 1} / ${colEnd + 1}`,
    "grid-row": `${rowStart + 1} / ${rowEnd + 1}`,
    "transform": `translate(${xTranslate}, ${yTranslate})`,
  };

  // Set size based on divider type
  const fontSize = parseFloat(computedStyles.fontSize);
  
  if (divider.type === "vertical") {
    styles.width = `${Math.max(parseFloat(gapX), fontSize)}px`;
  } else {
    styles.height = `${Math.max(parseFloat(gapY), fontSize)}px`;
  }

  return styles;
}
