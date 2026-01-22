import * as BUI from "@thatopen/ui";
import { chartIDSTemplate, ChartIDSState } from "./src";

/**
 * Creates a Categories Bar Chart components with the given UI state.
 *
 * @param state - The initial state of the Categories Chart component
 */
export const idsChart = (state: ChartIDSState) => {
  const element = BUI.Component.create<BUI.Chart, ChartIDSState>(
    chartIDSTemplate,
    state,
  );

  return element;
};
