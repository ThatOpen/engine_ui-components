/* eslint-disable import/no-extraneous-dependencies */
import * as OBC from "@thatopen/components";
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";

const createIfcTaskRow = async (
  components: OBC.Components,
  model: FRAGS.FragmentsGroup,
  task: { [attribute: string]: any },
) => {
  const indexer = components.get(OBC.IfcRelationsIndexer);
  const row: BUI.TableGroupData = {
    data: { Name: task.Name?.value },
    children: [
      { data: { Name: "Identification", Value: task.Identification?.value } },
      { data: { Name: "Name", Value: task.Name?.value } },
      { data: { Name: "Description", Value: task.Description?.value } },
    ],
  };
  const nestings = indexer.getEntityRelations(
    model,
    task.expressID,
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

export const createTasksRow = async (
  components: OBC.Components,
  model: FRAGS.FragmentsGroup,
  tasks: { [attribute: string]: any }[],
) => {
  const rows: BUI.TableGroupData[] = [];
  for (const task of tasks) {
    const row = await createIfcTaskRow(components, model, task);
    rows.push(row);
  }

  const elementTasksRow: BUI.TableGroupData = {
    data: { Name: "Tasks" },
    children: rows,
  };

  return elementTasksRow;
};
