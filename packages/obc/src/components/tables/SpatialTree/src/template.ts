import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import { SpatialTreeItem } from "@thatopen/fragments";
import { SpatialTreeState, SpatialTreeData } from "./types";

const getModelTree = async (
  model: FRAGS.FragmentsModel,
  structure: SpatialTreeItem,
) => {
  const { localId, category, children } = structure;
  if (category && children) {
    const row: BUI.TableGroupData<SpatialTreeData> = {
      data: {
        Name: category,
        modelId: model.modelId,
        children: JSON.stringify(children.map((item: any) => item.localId)),
      },
    };
    for (const child of children) {
      const childRow = await getModelTree(model, child);
      if (!childRow) continue;
      if (!row.children) row.children = [];
      row.children.push(childRow);
    }
    return row;
  }
  if (localId !== null) {
    const item = model.getItem(localId);
    const attrs = await item.getAttributes();
    if (!attrs) return null;
    const row: BUI.TableGroupData<SpatialTreeData> = {
      data: {
        Name: String(attrs.getValue("Name")),
        modelId: model.modelId,
        localId,
      },
    };
    for (const child of children ?? []) {
      const childRow = await getModelTree(model, child);
      if (!childRow) continue;
      if (!row.children) row.children = [];
      row.children.push(childRow);
    }
    return row;
  }
  return null;
};

const computeRowData = async (models: Iterable<FRAGS.FragmentsModel>) => {
  const rows: BUI.TableGroupData[] = [];
  for (const model of models) {
    const structure = await model.getSpatialStructure();
    const tree = await getModelTree(model, structure);
    if (!tree) continue;
    const modelData: BUI.TableGroupData<SpatialTreeData> = {
      data: {
        Name: model.modelId,
        modelId: model.modelId,
      },
      children: [tree],
    };
    rows.push(modelData);
  }
  return rows;
};

export const spatialTreeTemplate = (state: SpatialTreeState) => {
  const { components, models } = state;

  const selectHighlighterName = state.selectHighlighterName ?? "select";

  const onCellCreated = ({
    detail,
  }: CustomEvent<BUI.CellCreatedEventDetail<SpatialTreeData>>) => {
    const { cell } = detail;
    if (cell.column === "Name" && !cell.rowData.Name) {
      cell.style.gridColumn = "1 / -1";
    }
  };

  const onRowCreated = (
    e: CustomEvent<BUI.RowCreatedEventDetail<SpatialTreeData>>,
  ) => {
    e.stopImmediatePropagation();
    const { row } = e.detail;
    const highlighter = components.get(OBF.Highlighter);
    const fragments = components.get(OBC.FragmentsManager);
    row.onclick = async () => {
      if (!selectHighlighterName) return;
      const {
        data: { modelId, localId, children },
      } = row;
      if (!(modelId && (localId !== undefined || children))) return;
      const model = fragments.list.get(modelId);
      if (!model) return;
      if (localId !== undefined) {
        const childrenLocalIds = await model.getItemsChildren([localId]);
        const modelIdMap = {
          [modelId]:
            childrenLocalIds.length !== 0
              ? new Set(childrenLocalIds)
              : new Set([localId]),
        };
        highlighter.highlightByID(
          selectHighlighterName,
          modelIdMap,
          true,
          true,
        );
      } else if (children) {
        const localIds = JSON.parse(children);
        const childrenLocalIds = await model.getItemsChildren(localIds);
        const modelIdMap = {
          [modelId]:
            childrenLocalIds.length !== 0 ? childrenLocalIds : localIds,
        };
        highlighter.highlightByID(
          selectHighlighterName,
          modelIdMap,
          true,
          true,
        );
      }
    };
  };

  const onTableCreated = async (element?: Element) => {
    if (!element) return;
    const table = element as BUI.Table<SpatialTreeData>;

    table.loadFunction = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(computeRowData(models));
        });
      });
    };

    table.loadData(true);
  };

  return BUI.html`
    <bim-table @rowcreated=${onRowCreated} @cellcreated=${onCellCreated} ${BUI.ref(onTableCreated)} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `;
};
