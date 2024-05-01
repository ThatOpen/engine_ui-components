import * as WEBIFC from "web-ifc";
import * as BUI from "@thatopen/ui";
// import * as WUI from "../..";

BUI.Manager.registerComponents();

const ifcApi = new WEBIFC.IfcAPI();
ifcApi.SetWasmPath("https://unpkg.com/web-ifc@0.0.51/");
await ifcApi.Init();

const modelBuffer = await (
  await fetch("../../../../resources/structure.ifc")
).arrayBuffer();

const modelID = ifcApi.OpenModel(new Uint8Array(modelBuffer));

const attributesToInclude: (string | ((name: string) => boolean))[] = [
  "Name",
  "ContainedInStructure",
  "ForLayerSet",
  "LayerThickness",
  "HasProperties",
  "HasAssociations",
  "HasAssignments",
  "HasPropertySets",
  "PredefinedType",
  "Quantities",
  "ReferencedSource",
  "Identification",
  (name: string) => name.includes("Value"),
  (name: string) => name.startsWith("Material"),
  (name: string) => name.startsWith("Relating"),
  (name: string) => {
    const ignore = ["IsGroupedBy", "IsDecomposedBy"];
    return name.startsWith("Is") && !ignore.includes(name);
  },
];

const editable = false;

function processEntityAttributes(
  modelID: number,
  expressID: number,
  logAttributes = false,
): BUI.TableGroupData {
  const attributes = ifcApi.GetLine(modelID, expressID, false, true);

  if (logAttributes) console.log(attributes);

  const entityRow: BUI.TableGroupData = {
    data: {},
  };

  for (const name in attributes) {
    const nameIncluded = attributesToInclude
      .map((item) => {
        if (typeof item === "string") {
          return name === item;
        }
        return item(name);
      })
      .includes(true);
    if (!(name === "type" || nameIncluded)) continue;
    const attributeValue = attributes[name];
    if (!attributeValue) continue;
    if (attributeValue.type === 5) {
      if (!entityRow.children) entityRow.children = [];
      const row = processEntityAttributes(modelID, attributeValue.value);
      entityRow.children.push(row);
    } else if (
      typeof attributeValue === "object" &&
      !Array.isArray(attributeValue)
    ) {
      const { value, type } = attributeValue;
      if (editable) {
        if (type === 1 || type === 2 || type === 3) {
          const onInput = (e: Event) => {
            const input = e.target as BUI.NumberInput;
            attributeValue.value = input.value;
          };
          entityRow.data[name] = () => {
            return BUI.html`<bim-text-input @input=${onInput} value=${value}></bim-text-input>`;
          };
        } else {
          entityRow.data[name] = value;
        }
      } else if (type === 1 || type === 2 || type === 3) {
        entityRow.data[name] = () => {
          // const colors = ["#26685b", "#1b6698", "#cb3ea4", "#862f2f"];
          // const index = Math.floor(Math.random() * 4);
          // const backgroundColor = colors[index];
          let backgroundColor = "transparent";
          let color = "white";
          if (attributes.type === WEBIFC.IFCPROPERTYSET) {
            backgroundColor = "#bcf124";
            color = "black";
          }
          return BUI.html`<bim-label style="background-color: ${backgroundColor}; color: ${color}; padding: 0.125rem 0.25rem; border-radius: 0.25rem" label=${value}></bim-label>`;
        };
      } else {
        entityRow.data[name] = value;
      }
    } else if (Array.isArray(attributeValue)) {
      for (const item of attributeValue) {
        if (item.type !== 5) continue;
        if (!entityRow.children) entityRow.children = [];
        const row = processEntityAttributes(modelID, item.value);
        if ((row.data.Entity as string).startsWith("IfcRel")) {
          entityRow.children.push(...(row.children ?? []));
        } else {
          entityRow.children.push(row);
        }
      }
    } else if (name === "type") {
      entityRow.data.Entity = ifcApi.GetNameFromTypeCode(attributeValue);
    } else {
      entityRow.data[name] = attributeValue;
    }
  }

  return entityRow;
}

function processEntities(
  modelID: number,
  expressIDs: number[],
  logAttributes = false,
) {
  const groups: BUI.TableGroupData[] = [];
  for (const expressID of expressIDs) {
    const group = processEntityAttributes(modelID, expressID, logAttributes);
    groups.push(group);
  }
  return groups;
}

// const project = ifcApi.GetLineIDsWithType(modelID, WEBIFC.IFCPROJECT).get(0);

// const organization = ifcApi
//   .GetLineIDsWithType(modelID, WEBIFC.IFCORGANIZATION)
//   .get(0);

// const person = ifcApi.GetLineIDsWithType(modelID, WEBIFC.IFCPERSON).get(0);

// const site = ifcApi.GetLineIDsWithType(modelID, WEBIFC.IFCSITE).get(0);

// const basicData = [project, organization, person, site];

const wallIDs: number[] = [];
const wallIdsVector = ifcApi.GetLineIDsWithType(modelID, WEBIFC.IFCPILE);
for (let i = 0; i < wallIdsVector.size(); i++) {
  const expressID = wallIdsVector.get(i);
  wallIDs.push(expressID);
}

console.log("Walls:", wallIDs.length);

const processedAttributes = processEntities(modelID, wallIDs.slice(0, 1));

// const table = WUI.tables.spatialStructure({
//   api: ifcApi,
//   modelID,
// });

const table = document.createElement("bim-table");
table.columns = ["Entity"];
// @ts-ignore
table.rows = processedAttributes;

document.body.append(table);
