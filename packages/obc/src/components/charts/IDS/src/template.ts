import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as FRAGS from "@thatopen/fragments";
import * as THREE from "three";
import { ChartIDSState, GuidStatus, GuidsMap } from "./types";

const passed = "Passed";
const failed = "Failed";

async function buildResultInput(
  idsResults: OBC.IDSCheckResult[],
): Promise<BUI.ChartInputData> {
  const passedGuids: string[] = [];
  const failedGuids: string[] = [];
  const guidsMap: GuidsMap = {};

  for (const idsresult of idsResults) {
    for (const [modelId, results] of idsresult.entries()) {
      for (const result of results.values()) {
        const { guid, pass } = result;
        if (!guid) continue;
        if (pass) {
          passedGuids.push(guid);
        } else {
          failedGuids.push(guid);
        }
      }
      guidsMap[modelId] = { Passed: passedGuids, Failed: failedGuids };
    }
  }

  const passedValue: BUI.ChartInputValues = {
    value: passedGuids.length,
    data: { guids: passedGuids, guidsMap },
  };

  const failedValue: BUI.ChartInputValues = {
    value: failedGuids.length,
    data: { guids: failedGuids, guidsMap },
  };

  return {
    labels: [passed, failed],
    datasets: {
      "IDS Compliance": [passedValue, failedValue],
    },
  };
}

export const chartIDSTemplate: BUI.StatefullComponent<ChartIDSState> = (
  state,
) => {
  const { type, idsResult, components, addLabels = true } = state;

  const fragments = components.get(OBC.FragmentsManager);
  const highlighter = components.get(OBF.Highlighter);
  const hider = components.get(OBC.Hider);

  highlighter.styles.set(passed, {
    color: new THREE.Color("green"),
    renderedFaces: FRAGS.RenderedFaces.ONE,
    opacity: 1,
    transparent: false,
  });

  highlighter.styles.set(failed, {
    color: new THREE.Color("red"),
    renderedFaces: FRAGS.RenderedFaces.ONE,
    opacity: 1,
    transparent: false,
  });

  const missingDataMessage =
    state.missingDataMessage ?? "No data in this chart.";

  const onChartCreated = async (e?: Element) => {
    if (!e) return;

    const chart = e as BUI.Chart;

    chart.loadFunction = async () => {
      const results = Array.isArray(idsResult) ? idsResult : [idsResult];
      return buildResultInput(results);
    };

    chart.colors = ["green", "red"];
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
          const { label, data, visibility } = event.detail;
          const promises: Promise<void>[] = [];

          for (const info of data) {
            const { guidsMap } = info as { guidsMap: GuidsMap };
            for (const [modelId, tests] of Object.entries(guidsMap)) {
              const model = fragments.list.get(modelId);
              if (!model) continue;

              const guids = tests[label as keyof GuidStatus];
              if (!guids || guids.length === 0) continue;

              const promise = (async () => {
                const localIds = (await model.getLocalIdsByGuids(guids)).filter(
                  (guid) => guid !== null,
                );

                if (localIds.length === 0) return;

                const modelIdMap = { [modelId]: new Set(localIds) };
                await hider.set(visibility, modelIdMap as any);
              })();
              promises.push(promise);
            }
          }
          await Promise.all(promises);
        },
      );
    }

    (chart as any).addEventListener(
      "sectionclick",
      async (data: CustomEvent<BUI.DataClickDetail>) => {
        const { values, label } = data.detail;

        await highlighter.clear();

        for (const value of values) {
          const { data } = value;
          if (!data) continue;
          const { guids } = data;

          for (const [modelId, model] of fragments.list) {
            const localIds = (await model.getLocalIdsByGuids(guids)).filter(
              (value) => value !== null,
            );

            const modelIdMap = { [modelId]: new Set(localIds) };

            await highlighter.highlightByID(label, modelIdMap as any, true, false);
          }
        }
      },
    );
  };

  return BUI.html`
    <bim-chart ${BUI.ref(onChartCreated)} type=${type ?? "bar"} colorfulBars=${type === "bar"}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${missingDataMessage}</bim-label>
      ${
        addLabels
          ? BUI.html`<bim-chart-legend slot="labels"></bim-chart-legend>`
          : ""
      }
    </bim-chart>
  `;
};
