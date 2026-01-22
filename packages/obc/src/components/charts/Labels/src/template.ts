import * as BUI from "@thatopen/ui";
import { LabelsState } from "./types";

export const labelsTemplate: BUI.StatefullComponent<LabelsState> = (state) => {
  const { charts } = state;

  const missingDataMessage = state.missingDataMessage ?? "No charts attached";

  const onChartCreated = async (e?: Element) => {
    if (!e) return;

    const labels = e as BUI.ChartLegend;

    labels.charts = charts;
  };

  return BUI.html`
    <bim-chart-legend ${BUI.ref(onChartCreated)}>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">${missingDataMessage}</bim-label>
    </bim-chart-legend>
  `;
};
