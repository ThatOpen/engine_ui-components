import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { ChartTopicsState, Grouper } from "./types";

async function buildInput(
  topics: Iterable<OBC.Topic>,
  grouper: Grouper,
): Promise<BUI.ChartInputData> {
  const groupedData: { [key: string]: OBC.Topic[] } = {};

  for (const topic of topics) {
    let groupKey = topic[grouper] as any;

    if (groupKey === undefined || groupKey === null) {
      groupKey = "Not defined";
    } else if (groupKey instanceof Date) {
      groupKey = groupKey.toLocaleDateString();
    } else {
      groupKey = String(groupKey);
    }

    if (!groupedData[groupKey]) {
      groupedData[groupKey] = [];
    }
    groupedData[groupKey].push(topic);
  }

  const labels = Object.keys(groupedData);
  const dataValues: BUI.ChartInputValues[] = [];

  for (const label of labels) {
    const groupTopics = groupedData[label];
    dataValues.push({
      value: groupTopics.length,
      data: { topics: groupTopics.map(({guid}) => guid) },
    });
  }

  return {
    labels,
    datasets: {
      Topics: dataValues,
    },
  };
}

export const chartIDSTemplate: BUI.StatefullComponent<ChartTopicsState> = (
  state,
) => {
  const { components, type, addLabels = true, grouper = "stage" } = state;
  const filterFunction = state.filterFunction ?? (() => true)

  const bcfTopics = components.get(OBC.BCFTopics)
  const topics = [...bcfTopics.list.values()].filter(filterFunction)

  // let chartLabel: BUI.ChartLabel | undefined;
  // if (addLabels) {
  //   chartLabel = document.createElement("bim-chart-legend") as BUI.ChartLabel;
  // }

  const missingDataMessage =
    state.missingDataMessage ?? "No data in this chart.";

  const onChartCreated = async (e?: Element) => {
    if (!e) return;

    const chart = e as BUI.Chart;

    chart.loadFunction = async () => {
      return buildInput(topics, grouper);
    };

    await chart.loadData(true);

    if (addLabels) {
      const chartLabel = chart.querySelector(
        "[slot='labels']",
      ) as BUI.ChartLegend;
      if (chartLabel) {
        chartLabel.charts = [chart];
      }
    }
  };

  return BUI.html`
    <bim-chart ${BUI.ref(onChartCreated)} type=${type ?? "bar"}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${missingDataMessage}</bim-label>
      ${
        addLabels
          ? BUI.html`<bim-chart-legend slot="labels"></bim-chart-legend>`
          : ""
      }
    </bim-chart>
  `;
};
