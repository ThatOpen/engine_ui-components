// eslint-disable-next-line import/no-extraneous-dependencies
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";

export interface RelationsTreeUIState {
  components: OBC.Components;
  models: Iterable<FRAGS.FragmentsGroup>;
  selectHighlighterName?: string;
  hoverHighlighterName?: string;
  inverseAttributes?: OBC.InverseAttribute[];
  expressID?: number;
}

const getDecompositionTree = async (
  components: OBC.Components,
  model: FRAGS.FragmentsGroup,
  expressID: number,
  inverseAttributes: OBC.InverseAttribute[],
) => {
  const rows: BUI.TableGroupData[] = [];
  const indexer = components.get(OBC.IfcRelationsIndexer);

  const entityAttrs = await model.getProperties(expressID);
  if (!entityAttrs) return rows;
  const { type } = entityAttrs;
  const entityRow: BUI.TableGroupData = {
    data: {
      Entity: OBC.IfcCategoryMap[type],
      Name: entityAttrs.Name?.value,
      modelID: model.uuid,
    },
  };

  for (const attrName of inverseAttributes) {
    const relations = indexer.getEntityRelations(model, expressID, attrName);
    entityRow.data.expressID = expressID;
    if (!relations) continue;
    entityRow.data.relations = JSON.stringify(relations);
    for (const id of relations) {
      const decompositionRow = await getDecompositionTree(
        components,
        model,
        id,
        inverseAttributes,
      );
      if (!entityRow.children) entityRow.children = [];
      entityRow.children.push(...decompositionRow);
    }
  }

  rows.push(entityRow);

  return rows;
};

const computeRowData = async (
  components: OBC.Components,
  models: Iterable<FRAGS.FragmentsGroup>,
  inverseAttributes: OBC.InverseAttribute[],
  expressID?: number,
) => {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const rows: BUI.TableGroupData[] = [];
  for (const model of models) {
    let modelData: BUI.TableGroupData;
    if (expressID) {
      modelData = {
        data: {
          Entity: model.name !== "" ? model.name : model.uuid,
        },
        children: await getDecompositionTree(
          components,
          model,
          expressID,
          inverseAttributes,
        ),
      };
    } else {
      const modelRelations = indexer.relationMaps[model.uuid];
      const projectAttrs = await model.getAllPropertiesOfType(
        WEBIFC.IFCPROJECT,
      );
      if (!(modelRelations && projectAttrs)) continue;
      const { expressID } = Object.values(projectAttrs)[0];
      modelData = {
        data: {
          Entity: model.name !== "" ? model.name : model.uuid,
        },
        children: await getDecompositionTree(
          components,
          model,
          expressID,
          inverseAttributes,
        ),
      };
    }
    rows.push(modelData);
  }
  return rows;
};

let table: BUI.Table;

const getRowFragmentIdMap = (components: OBC.Components, row: BUI.TableRow) => {
  const fragments = components.get(OBC.FragmentsManager);
  const { modelID, expressID, relations } = row.data as {
    modelID: string;
    expressID: number;
    relations: string;
  };
  if (!(modelID && expressID)) return null;
  const model = fragments.groups.get(modelID);
  if (!model) return null;
  const fragmentIDMap = model.getFragmentMap([
    expressID,
    ...JSON.parse(relations ?? "[]"),
  ]);
  return fragmentIDMap;
};

export const relationsTreeTemplate = (state: RelationsTreeUIState) => {
  const {
    components,
    models,
    inverseAttributes,
    selectHighlighterName,
    hoverHighlighterName,
    expressID,
  } = state;

  if (!table) {
    table = document.createElement("bim-table");
    table.hiddenColumns = ["modelID", "expressID", "relations"];
    table.columns = ["Entity", "Name"];
    table.headersHidden = true;

    table.addEventListener("cellcreated", ({ detail }) => {
      const { cell } = detail;
      if (cell.column === "Entity" && !("Name" in cell.rowData)) {
        cell.style.gridColumn = "1 / -1";
      }
    });
  }

  table.addEventListener("rowcreated", (e) => {
    e.stopImmediatePropagation();
    const { row } = e.detail;
    const highlighter = components.get(OBF.Highlighter);
    row.onmouseover = () => {
      if (!hoverHighlighterName) return;
      const fragmentIDMap = getRowFragmentIdMap(components, row);
      if (!(fragmentIDMap && Object.keys(fragmentIDMap).length !== 0)) return;
      row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      highlighter.highlightByID(
        hoverHighlighterName,
        fragmentIDMap,
        true,
        false,
      );
    };

    row.onmouseout = () => {
      row.style.backgroundColor = "";
      highlighter.clear(hoverHighlighterName);
    };

    row.onclick = () => {
      if (!selectHighlighterName) return;
      const fragmentIDMap = getRowFragmentIdMap(components, row);
      if (!(fragmentIDMap && Object.keys(fragmentIDMap).length !== 0)) return;
      highlighter.highlightByID(
        selectHighlighterName,
        fragmentIDMap,
        true,
        true,
      );
    };
  });

  const _inverseAttributes: OBC.InverseAttribute[] = inverseAttributes ?? [
    "IsDecomposedBy",
    "ContainsElements",
  ];

  computeRowData(components, models, _inverseAttributes, expressID).then(
    (data) => (table.data = data),
  );

  return BUI.html`${table}`;
};
