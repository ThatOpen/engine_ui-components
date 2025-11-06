import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { ItemsDataState, ItemsDataTableData, ModelIdMap } from "./types";

let itemsRowsCache: { [modelID: string]: Map<number, BUI.TableGroupData> } = {};

const attrMappings: Record<string, string> = {
  _category: "Category",
  _localId: "LocalId",
  _guid: "Guid",
};

const addDataToRow = (
  row: BUI.TableGroupData<ItemsDataTableData>,
  key: string,
  value: any,
) => {
  const dataRow: BUI.TableGroupData<ItemsDataTableData> = {
    data: {
      Name: key in attrMappings ? attrMappings[key] : key,
      Value: value,
    },
  };
  if (!row.children) row.children = [];
  row.children.push(dataRow);
};

const getItemRow = (
  modelId: string,
  propertyData: FRAGS.ItemData,
  state: Required<ItemsDataState>,
) => {
  if (!(modelId in itemsRowsCache)) itemsRowsCache[modelId] = new Map();
  const modelProcessings = itemsRowsCache[modelId];

  const localId = (propertyData._localId as FRAGS.ItemAttribute).value;

  if (modelProcessings.has(localId)) {
    return modelProcessings.get(localId)!;
  }

  const name = (propertyData[state.defaultItemNameKey] as FRAGS.ItemAttribute)
    ?.value;
  const category = (propertyData._category as FRAGS.ItemAttribute).value;

  const row: BUI.TableGroupData<ItemsDataTableData> = {
    data: {
      Name:
        name?.toString().length > 0
          ? name.toString()
          : category ?? String(localId),
    },
  };

  modelProcessings.set(localId, row);

  for (const key in propertyData) {
    const data = propertyData[key];
    if (!Array.isArray(data)) {
      addDataToRow(row, key, data.value);
    } else {
      const relRow: BUI.TableGroupData<ItemsDataTableData> = {
        data: {
          Name: key,
        },
      };
      if (!row.children) row.children = [];
      row.children.push(relRow);

      for (const item of data) {
        const relItemRow = getItemRow(modelId, item, state);
        if (!relRow.children) relRow.children = [];
        relRow.children.push(relItemRow);
      }
    }
  }

  return row;
};

const computeTableData = async (
  components: OBC.Components,
  modelIdMap: ModelIdMap,
  state: Required<ItemsDataState>,
) => {
  const fragments = components.get(OBC.FragmentsManager);
  if (Object.keys(modelIdMap).length === 0) itemsRowsCache = {};

  const rows: BUI.TableGroupData<ItemsDataTableData>[] = [];
  for (const modelId in modelIdMap) {
    const model = fragments.list.get(modelId);
    if (!model) continue;
    if (!(modelId in itemsRowsCache)) itemsRowsCache[modelId] = new Map();
    const modelProcessings = itemsRowsCache[modelId];
    const localIds = modelIdMap[modelId];
    for (const localId of localIds) {
      let elementRow = modelProcessings.get(localId);
      if (elementRow) {
        rows.push(elementRow);
        continue;
      }

      const [elementAttrs] = await model.getItemsData(
        [localId],
        state.itemsDataConfig,
      );

      elementRow = getItemRow(modelId, elementAttrs, state);
      rows.push(elementRow);
    }
  }
  return rows;
};

/**
 * Heloooooooooo
 */
export const itemsDataTemplate = (_state: ItemsDataState) => {
  const state: Required<ItemsDataState> = {
    emptySelectionWarning: true,
    defaultItemNameKey: "Name",
    itemsDataConfig: {
      attributesDefault: true,
      relationsDefault: { attributes: false, relations: false },
      relations: {
        IsDefinedBy: { attributes: true, relations: true },
        DefinesOcurrence: { attributes: false, relations: false },
        ContainedInStructure: { attributes: true, relations: true },
        ContainsElements: { attributes: false, relations: false },
        Decomposes: { attributes: false, relations: false },
      },
    },
    ..._state,
  };

  const { components, modelIdMap, emptySelectionWarning } = _state;

  const filteredModelIdMap = Object.keys(modelIdMap).reduce((acc, key) => {
    if (!key.includes('DELTA')) {
      acc[key] = modelIdMap[key];
    }
    return acc;
  }, {} as typeof modelIdMap);

  const onTableCreated = async (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table<ItemsDataTableData>;
    table.loadFunction = async () => {
      return computeTableData(components, modelIdMap, state);
    };

    const loaded = await table.loadData(true);
    if (loaded) table.dispatchEvent(new Event("datacomputed"));
  };

  const onCellCreated = ({
    detail,
  }: CustomEvent<BUI.CellCreatedEventDetail>) => {
    const { cell } = detail;
    const { Name, Value } = cell.rowData
    if (Name && Value === undefined) {
      setTimeout(() => {
        cell.style.gridColumn = "1 / -1";
      })
    }
  };

  return BUI.html`
    <bim-table @cellcreated=${onCellCreated} ${BUI.ref(onTableCreated)}>
      ${
        emptySelectionWarning
          ? BUI.html`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `
          : null
      }
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `;
};
