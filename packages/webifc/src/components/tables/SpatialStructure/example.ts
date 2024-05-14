import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";
import * as WUI from "../..";

BUI.Manager.registerComponents();

const ifcApi = new WEBIFC.IfcAPI();
ifcApi.SetWasmPath("https://unpkg.com/web-ifc@0.0.51/");
await ifcApi.Init();

const modelBuffer = await (
  await fetch("../../../../resources/small.ifc")
).arrayBuffer();

const modelID = ifcApi.OpenModel(new Uint8Array(modelBuffer));

const [table] = WUI.tables.spatialStructure({
  api: ifcApi,
  modelID,
});

document.body.append(table);
