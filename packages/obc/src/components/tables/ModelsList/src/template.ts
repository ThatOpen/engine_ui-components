import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { ModelsListState, ModelsListTableData } from "./types";

export const modelsListTemplate = (state: ModelsListState) => {
  const { components } = state;

  const missingDataMessage =
    state.missingDataMessage ?? "No models has been loaded yet";

  const fragments = components.get(OBC.FragmentsManager);

  const onCellCreated = ({
    detail,
  }: CustomEvent<BUI.CellCreatedEventDetail>) => {
    const { cell } = detail;
    cell.style.padding = "0.25rem 0";
  };

  const onTableCreated = async (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table<ModelsListTableData>;
    const rowGroups: BUI.TableGroupData<ModelsListTableData>[] = [];

    if (fragments.initialized) {
      for (const [, model] of fragments.list) {
        if (!(model && !model.isDeltaModel)) continue;
        const metadata = await model.getMetadata();
        const rowGroup: BUI.TableGroupData<ModelsListTableData> = {
          data: {
            Name: model.modelId,
            modelId: model.modelId,
            metadata: JSON.stringify(metadata),
          },
        };
        rowGroups.push(rowGroup);
      }
    }


    table.data = rowGroups;
  };

  return BUI.html`
    <bim-table ${BUI.ref(onTableCreated)} @cellcreated=${onCellCreated}>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        ${missingDataMessage}
      </bim-label>
    </bim-table>
  `;
};
