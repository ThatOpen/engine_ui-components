/* eslint-disable import/no-extraneous-dependencies */
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as FRAGS from "@thatopen/fragments";
import * as WEBIFC from "web-ifc";

export interface RelationsTreeUIState {
  components: OBC.Components;
  models: Iterable<FRAGS.FragmentsGroup>;
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
    },
  };

  for (const attrName of inverseAttributes) {
    const relations = indexer.getEntityRelations(model, expressID, attrName);
    if (!relations) continue;
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

export const relationsTreeTemplate = (state: RelationsTreeUIState) => {
  const { components, models, inverseAttributes, expressID } = state;
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
    table.addEventListener("cellcreated", ({ detail }) => {
      const parent = detail.cell.parentNode;
      if (!parent) return;
      const entityCell = parent.querySelector<BUI.TableCell>(
        "bim-table-cell[column='Entity']",
      );
      const nameCell = parent.querySelector<BUI.TableCell>(
        "bim-table-cell[column='Name']",
      );
      if (!nameCell?.data && entityCell) {
        entityCell.style.gridColumn = "1 / -1";
      }
    });
    table.columns = ["Entity", "Name"];
    table.data = rows;
  };

  return BUI.html`<bim-table ${BUI.ref(onCreated)} headers-hidden></bim-table>`;
};
