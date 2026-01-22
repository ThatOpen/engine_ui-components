import * as BUI from "@thatopen/ui";
import { chartAttributesTemplate, ChartAttributesState } from "./src";

/**
 * Creates a Categories Bar Chart components with the given UI state.
 *
 * @param state - The initial state of the Categories Chart component
 */
export const attributesChart = (state: ChartAttributesState) => {
  const element = BUI.Component.create<BUI.Chart, ChartAttributesState>(
    chartAttributesTemplate,
    state,
  );

  return element;
};
