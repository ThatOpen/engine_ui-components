import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";

export interface Node {
  type: string;
  expressID: number;
  children: Node[];
}

export interface SpatialStructureUIState {
  api: WEBIFC.IfcAPI;
  modelID: number;
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

export const spatialStructureTemplate = (state: SpatialStructureUIState) => {
  const { api, modelID } = state;

  const table = new BUI.Table();
  table.headersHidden = true;
  table.columns = [{ name: "Entity", width: "18rem" }];

  api.properties.getSpatialStructure(modelID).then((spatialStructure) => {
    processNode(api, modelID, spatialStructure).then((rows) => {
      table.rows = [rows];
    });
  });

  return BUI.html`<div>${table}</div>`;
};
