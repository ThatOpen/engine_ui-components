import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import { ChartCategoriesState } from "./types";

async function buildCategoriesInput(
  modelIdMap: OBC.ModelIdMap,
  components: OBC.Components,
): Promise<BUI.ChartInputData> {
  const fragments = components.get(OBC.FragmentsManager);

  const categoriesMap = new OBC.DataMap<string, number>();

  for (const [_, model] of fragments.list) {
    for (const [_, localIds] of Object.entries(modelIdMap)) {
      const itemsData = await model.getItemsData(Array.from(localIds));
      for (const itemData of itemsData) {
        if (!itemData) continue;
        if (!("value" in itemData._category)) continue;
        const category = itemData._category.value;

        const count = categoriesMap.get(category) ?? 0;
        categoriesMap.set(category, count + 1);
      }
    }
  }

  const labels = [...categoriesMap.keys()];
  const data = [...categoriesMap.values()].map((value) => ({ value }));

  return {
    labels,
    datasets: {
      Categories: data,
    },
  };
}

export const chartCategoriesTemplate: BUI.StatefullComponent<
  ChartCategoriesState
> = (state) => {
  const { type, modelIdMap, components, addLabels = true } = state;
  const fragments = components.get(OBC.FragmentsManager);
  const highlighter = components.get(OBF.Highlighter);
  const hider = components.get(OBC.Hider);

  const missingDataMessage =
    state.missingDataMessage ?? "No data in this chart.";

  const onChartCreated = async (e?: Element) => {
    if (!e) return;

    const chart = e as BUI.Chart;

    chart.loadFunction = async () => {
      return buildCategoriesInput(modelIdMap, components);
    };

    await chart.loadData(true);

    if (addLabels) {
      const chartLabel = chart.querySelector(
        "[slot='labels']",
      ) as BUI.ChartLegend;
      if (chartLabel) {
        chartLabel.charts = [chart];

        chartLabel.addEventListener("label-click", async (event: Event) => {
          const customEvent = event as CustomEvent<BUI.LabelEventData>;
          const { label, visibility } = customEvent.detail;
          const promises = [];

          for (const [modelId, model] of fragments.list) {
            const items = await model.getItemsOfCategories([new RegExp(label)]);

            const localIds = Object.values(items).flat();

            const modelIdMap = { [modelId]: new Set(localIds) };

            promises.push(hider.set(visibility, modelIdMap));
          }
          promises.push(fragments.core.update(true));

          await Promise.all(promises);
        });
      }
    }

    chart.addEventListener("sectionclick", async (event: Event) => {
      const customEvent = event as CustomEvent<BUI.DataClickDetail>;
      const { label } = customEvent.detail;
      for (const [modelId, model] of fragments.list) {
        const labelItems = await model.getItemsOfCategories([
          new RegExp(label),
        ]);
        const localIds = Object.values(labelItems).flat();

        const modelIdMap = { [modelId]: new Set(localIds) };

        highlighter.highlightByID("select", modelIdMap, true, true);
      }
    });
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
