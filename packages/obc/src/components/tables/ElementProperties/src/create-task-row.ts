/* eslint-disable import/no-extraneous-dependencies */
import * as OBC from "@thatopen/components";
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";

const createIfcTaskRow = async (
  components: OBC.Components,
  model: FRAGS.FragmentsGroup,
  attrs: { [attribute: string]: any },
) => {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const row: BUI.TableGroupData = {
    data: { Name: attrs.Name?.value },
    children: [
      { data: { Name: "Identification", Value: attrs.Identification?.value } },
      { data: { Name: "Name", Value: attrs.Name?.value } },
      { data: { Name: "Description", Value: attrs.Description?.value } },
    ],
  };
  const nestings = indexer.getEntityRelations(
    model,
    attrs.expressID,
    "IsNestedBy",
  );
  if (!nestings) return row;
  if (!row.children) row.children = [];
  const children: BUI.TableGroupData[] = [];
  row.children.push({ data: { Name: "Tasks" }, children });
  for (const nestID of nestings) {
    const nestAttrs = await model.getProperties(nestID);
    if (!nestAttrs) continue;
    const nestRow = await createIfcTaskRow(components, model, nestAttrs);
    children.push(nestRow);
  }
  return row;
};

export const getTasksRow = async (
  components: OBC.Components,
  model: FRAGS.FragmentsGroup,
  taskAttrs: { [attribute: string]: any }[],
) => {
  const rows: BUI.TableGroupData[] = [];
  for (const attrs of taskAttrs) {
    const row = await createIfcTaskRow(components, model, attrs);
    rows.push(row);
  }

  const elementTasksRow: BUI.TableGroupData = {
    data: { Name: "Tasks" },
    children: rows,
  };

  return elementTasksRow;
};
