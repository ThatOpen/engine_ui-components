import * as BUI from "@thatopen/ui";
import { chartCategoriesTemplate, ChartCategoriesState } from "./src";

/**
 * Creates a Categories Bar Chart components with the given UI state.
 *
 * @param state - The initial state of the Categories Chart component
 */
export const categoriesChart = (state: ChartCategoriesState) => {
  const element = BUI.Component.create<BUI.Chart, ChartCategoriesState>(
    chartCategoriesTemplate,
    state,
  );

  return element;
};
