import * as WEBIFC from "web-ifc";
import { html } from "lit";
import { Table } from "@thatopen/ui-components";

interface Node {
  type: string;
  expressID: number;
  children: Node[];
}

const processNode = async (api: WEBIFC.IfcAPI, modelID: number, node: Node) => {
  const { Name, Tag } = await api.properties.getItemProperties(
    modelID,
    node.expressID,
  );

  const tableGroup: { data: any; children?: any } = { data: {} };

  tableGroup.data.Entity = Tag ? `${node.type} [${Tag.value}]` : node.type;

  if (Name) tableGroup.data.Name = Name.value;

  if (node.children.length > 0) {
    const children: { data: any; children?: any }[] = [];
    for (const child of node.children)
      children.push(await processNode(api, modelID, child));
    tableGroup.children = children;
  }

  return tableGroup;
};

export const spatialStructureTable = async (state: {
  api: WEBIFC.IfcAPI;
  modelID: number;
}) => {
  const { api, modelID } = state;

  const table = new Table();
  table.headersHidden = true;

  const spatialStructure = await api.properties.getSpatialStructure(modelID);

  table.rows = [await processNode(api, modelID, spatialStructure)];

  return html`${table}`;
};
