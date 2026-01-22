import * as BUI from "@thatopen/ui";
import { LabelsState, labelsTemplate } from "./src";

/**
 * Creates the labels for the given charts in the state.
 *
 * @param state - The initial state of the Categories Chart component
 */
export const labels = (state: LabelsState) => {
  const element = BUI.Component.create<BUI.ChartLegend, LabelsState>(
    labelsTemplate,
    state,
  );

  return element;
};
