import { GridResizeState } from "./types";

export interface ResizeCalculation {
  newValue: number;
  oppositeValue: number;
}

/**
 * Calculates new sizes for a vertical resize operation.
 * 
 * @param state - The current resize state
 * @param dx - Delta X (horizontal movement)
 * @param col - Column index being resized
 * @param isLastCol - Whether this is the last column
 * @returns Object with new left and right column sizes
 */
export function calculateVerticalResize(
  state: GridResizeState,
  dx: number,
  col: number,
  isLastCol: boolean
): { left: number; right: number } {
  const left = parseFloat(state.colSizesComputed[col - 1]) || 0;
  const newLeftValue = left + dx;

  let newRightValue: number;
  if (isLastCol) {
    const currentRight = parseFloat(state.colSizesComputed[col]) || 0;
    newRightValue = currentRight - dx;
  } else {
    const right = parseFloat(state.colSizesComputed[col]) || 0;
    newRightValue = right - dx;
  }

  return { left: newLeftValue, right: newRightValue };
}

/**
 * Calculates new sizes for a horizontal resize operation.
 * 
 * @param state - The current resize state
 * @param dy - Delta Y (vertical movement)
 * @param row - Row index being resized
 * @param isLastRow - Whether this is the last row
 * @returns Object with new top and bottom row sizes
 */
export function calculateHorizontalResize(
  state: GridResizeState,
  dy: number,
  row: number,
  isLastRow: boolean
): { top: number; bottom: number } {
  const top = parseFloat(state.rowSizesComputed[row - 1]) || 0;
  const newTopValue = top + dy;

  let newBottomValue: number;
  if (isLastRow) {
    const currentBottom = parseFloat(state.rowSizesComputed[row]) || 0;
    newBottomValue = currentBottom - dy;
  } else {
    const bottom = parseFloat(state.rowSizesComputed[row]) || 0;
    newBottomValue = bottom - dy;
  }

  return { top: newTopValue, bottom: newBottomValue };
}

/**
 * Validates if a vertical resize operation is allowed. Prevents resizing if it would make an area smaller than the minimum size. Only blocks movement in the direction that would shrink an area below the minimum.
 * 
 * @param leftValue - New size for the left column
 * @param rightValue - New size for the right column
 * @param dx - Delta X (horizontal movement)
 * @param minSize - Minimum allowed size in pixels
 * @returns true if the resize is allowed, false otherwise
 */
export function validateVerticalResize(
  leftValue: number,
  rightValue: number,
  dx: number,
  minSize: number
): boolean {
  // Block if trying to make left column smaller than minimum
  if (leftValue < minSize && dx < 0) {
    return false;
  }
  
  // Block if trying to make right column smaller than minimum
  if (rightValue < minSize && dx > 0) {
    return false;
  }
  
  return true;
}

/**
 * Validates if a horizontal resize operation is allowed. Prevents resizing if it would make an area smaller than the minimum size. Only blocks movement in the direction that would shrink an area below the minimum.
 * 
 * @param topValue - New size for the top row
 * @param bottomValue - New size for the bottom row
 * @param dy - Delta Y (vertical movement)
 * @param minSize - Minimum allowed size in pixels
 * @returns true if the resize is allowed, false otherwise
 */
export function validateHorizontalResize(
  topValue: number,
  bottomValue: number,
  dy: number,
  minSize: number
): boolean {
  // Block if trying to make top row smaller than minimum
  if (topValue < minSize && dy < 0) {
    return false;
  }
  
  // Block if trying to make bottom row smaller than minimum
  if (bottomValue < minSize && dy > 0) {
    return false;
  }
  
  return true;
}
