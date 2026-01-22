import * as BUI from "@thatopen/ui";
import { chartIDSTemplate, ChartTopicsState } from "./src";

/**
 * Creates a Categories Bar Chart components with the given UI state.
 *
 * @param state - The initial state of the Categories Chart component
 */
export const topicsChart = (state: ChartTopicsState) => {
  const element = BUI.Component.create<BUI.Chart, ChartTopicsState>(
    chartIDSTemplate,
    state,
  );

  return element;
};
