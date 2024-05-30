/* eslint-disable import/no-extraneous-dependencies */
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as FRAGS from "@thatopen/fragments";
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
    expressID,
    selectHighlighterName,
    hoverHighlighterName,
  } = state;

  const _inverseAttributes: OBC.InverseAttribute[] = inverseAttributes ?? [
    "IsDecomposedBy",
    "ContainsElements",
  ];

  const onCreated = async (element?: Element) => {
    if (!element) return;
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
            _inverseAttributes,
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
            _inverseAttributes,
          ),
        };
      }
      rows.push(modelData);
    }

    const table = element as BUI.Table;

    table.addEventListener("rowcreated", ({ detail }) => {
      const { row } = detail;
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

    table.addEventListener("cellcreated", ({ detail }) => {
      const parent = detail.cell.parentNode;
      if (!parent) return;
      const entityCell = parent.querySelector<BUI.TableCell>(
        "bim-table-cell[column='Entity']",
      );
      const nameCell = parent.querySelector<BUI.TableCell>(
        "bim-table-cell[column='Name']",
      );
      if (entityCell && !nameCell) {
        entityCell.style.gridColumn = "1 / -1";
      }
    });

    table.hiddenColumns = ["modelID", "expressID", "relations"];
    table.columns = ["Entity", "Name"];
    table.data = rows;
  };

  return BUI.html`<bim-table ${BUI.ref(onCreated)} headers-hidden></bim-table>`;
};
