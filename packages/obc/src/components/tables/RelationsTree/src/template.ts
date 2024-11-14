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
      expressID,
    },
  };

  for (const attrName of inverseAttributes) {
    const relations = indexer.getEntityRelations(model, expressID, attrName);
    if (!relations) continue;
    if (!entityRow.children) entityRow.children = [];
    entityRow.data.relations = JSON.stringify(relations);
    const entityGroups: any = {};
    for (const id of relations) {
      const decompositionRow = await getDecompositionTree(
        components,
        model,
        id,
        inverseAttributes,
      );
      for (const row of decompositionRow) {
        if (row.data.relations) {
          entityRow.children.push(row);
        } else {
          const data = model.data.get(id);
          if (!data) {
            entityRow.children.push(row);
            continue;
          }
          const type = data[1][1];
          const entity = OBC.IfcCategoryMap[type];
          if (!(entity in entityGroups)) entityGroups[entity] = [];
          row.data.Entity = row.data.Name;
          delete row.data.Name;
          entityGroups[entity].push(row);
        }
      }
    }

    for (const entity in entityGroups) {
      const children = entityGroups[entity];
      const relations = children.map((child: any) => child.data.expressID);
      const row: BUI.TableGroupData = {
        data: {
          Entity: entity,
          modelID: model.uuid,
          relations: JSON.stringify(relations),
        },
        children,
      };
      entityRow.children.push(row);
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

const getRowFragmentIdMap = (components: OBC.Components, rowData: any) => {
  const fragments = components.get(OBC.FragmentsManager);
  const { modelID, expressID, relations } = rowData as {
    modelID: string;
    expressID: number;
    relations: string;
  };
  if (!modelID) return null;
  const model = fragments.groups.get(modelID);
  if (!model) return null;
  const fragmentIDMap = model.getFragmentMap([
    expressID,
    ...JSON.parse(relations ?? "[]"),
  ]);
  return fragmentIDMap;
};

export const relationsTreeTemplate = (state: RelationsTreeUIState) => {
  const { components, models, expressID } = state;

  const selectHighlighterName = state.selectHighlighterName ?? "select";
  const hoverHighlighterName = state.hoverHighlighterName ?? "hover";

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
    const fragmentIDMap = getRowFragmentIdMap(components, row.data);
    if (!(fragmentIDMap && Object.keys(fragmentIDMap).length !== 0)) return;
    row.onmouseover = () => {
      if (!hoverHighlighterName) return;
      row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      highlighter.highlightByID(
        hoverHighlighterName,
        fragmentIDMap,
        true,
        false,
        highlighter.selection[selectHighlighterName] ?? {},
      );
    };

    row.onmouseout = () => {
      row.style.backgroundColor = "";
      highlighter.clear(hoverHighlighterName);
    };

    row.onclick = () => {
      if (!selectHighlighterName) return;
      highlighter.highlightByID(
        selectHighlighterName,
        fragmentIDMap,
        true,
        true,
      );
    };
  });

  const inverseAttributes: OBC.InverseAttribute[] = state.inverseAttributes ?? [
    "IsDecomposedBy",
    "ContainsElements",
  ];

  computeRowData(components, models, inverseAttributes, expressID).then(
    (data) => (table.data = data),
  );

  return BUI.html`${table}`;
};
