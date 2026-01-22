import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import { ChartAttributesState } from "./types";

async function buildAttributesInput(
  attribute: RegExp,
  category: RegExp,
  modelId: string,
  components: OBC.Components,
): Promise<BUI.ChartInputData> {
  const fragments = components.get(OBC.FragmentsManager);

  const model = fragments.list.get(modelId);
  if (!model) return { labels: [], datasets: {} };
  
  const uniqueValues = await model.getAttributesUniqueValues([
    {
      categories: [category],
      get: attribute,
    },
  ]);

  if (!uniqueValues) return { labels: [], datasets: {} };

  const labels = [];
  const values: BUI.ChartInputValues[] = [];

  for (const [_, data] of Object.entries(uniqueValues)) {
    for (const { value, localIds } of Object.values(data)) {
      labels.push(value);
      const count = localIds.length;
      values.push({
        value: count,
        data: { modelIdMap: { [modelId]: new Set(localIds) } },
      });
    }
  }

  return {
    labels,
    datasets: {
      [attribute.toString()]: values,
    },
  };
}

export const chartAttributesTemplate: BUI.StatefullComponent<
  ChartAttributesState
> = (state) => {
  const {
    type,
    attribute,
    category,
    modelId,
    components,
    addLabels = true,
  } = state;

  const highlight = { zoom: true, ...state.highlight }

  const fragments = components.get(OBC.FragmentsManager);
  const highlighter = components.get(OBF.Highlighter);
  const hider = components.get(OBC.Hider);

  const missingDataMessage =
    state.missingDataMessage ?? "No data in this chart.";

  const onChartCreated = async (e?: Element) => {
    if (!e) return;

    const chart = e as BUI.Chart;

    chart.loadFunction = async () => {
      return buildAttributesInput(attribute, category, modelId, components);
    };

    await chart.loadData(true);

    if (addLabels) {
      const chartLabel = chart.querySelector(
        "[slot='labels']",
      ) as BUI.ChartLegend;
      if (chartLabel) {
        chartLabel.charts = [chart];
      }

      (chartLabel as any).addEventListener(
        "label-click",
        async (event: CustomEvent) => {
          const { data, visibility } = event.detail;

          for (const info of data) {
            const { modelIdMap } = info;
            await hider.set(visibility, modelIdMap);
          }

          await fragments.core.update(true);
        },
      );
    }

    (chart as any).addEventListener(
      "sectionclick",
      async (data: CustomEvent<BUI.DataClickDetail>) => {
        const { values } = data.detail;
        const promises = [];

        for (const value of values) {
          const { data } = value;
          if (!data) continue;
          const { modelIdMap } = data;
          promises.push(
            highlighter.highlightByID("select", modelIdMap, true, highlight.zoom),
          );
        }

        await Promise.all(promises);
      },
    );
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
