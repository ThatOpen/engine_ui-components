import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as WEBIFC from "web-ifc";
import { predefinedTypes } from "../../../dropdowns/PredefinedTypes";

export interface EntityEditingUI {
  components: OBC.Components;
  modelIdMap: { [modelID: string]: Set<number> };
}

const attrs: Record<string, { type: string }> = {
  Description: {
    type: "IfcText",
  },
  Name: {
    type: "IfcLabel",
  },
};

export const entityEditingTemplate = (state: EntityEditingUI) => {
  const { components, modelIdMap } = state;

  const fragments = components.get(OBC.FragmentsManager);
  const propsManager = components.get(OBC.IfcPropertiesManager);

  const onCreated = async (el?: Element) => {
    if (!el) return;
    const table = el as BUI.Table;
    table.hiddenColumns = [
      "expressID",
      "modelID",
      "valueType",
      "schema",
      "entityType",
    ];
    table.dataTransform = {
      Value: (value, rowData) => {
        const { modelID, expressID, Attribute, Value, entityType, schema } =
          rowData;
        if (typeof Attribute !== "string") return value;
        if (typeof entityType !== "number") return value;
        if (typeof schema !== "string") return value;
        if (typeof modelID !== "string") return value;
        if (typeof expressID !== "number") return value;

        const model = fragments.groups.get(modelID);
        if (!model) return value;

        let props: Record<string, any> | null = null;

        let valueType: string | number | boolean | undefined =
          rowData.valueType;

        let createdAttribute: Record<string, any> | undefined;

        if (typeof valueType !== "number") {
          const type = attrs[Attribute]?.type;
          if (!type) return value;
          const ifcNamespace = (WEBIFC as any)[schema];
          if (!ifcNamespace) return value;
          const constructor = ifcNamespace[type];
          if (!constructor) return value;
          createdAttribute = new constructor();
          if (!createdAttribute) return value;
          valueType = createdAttribute.type;
          if (createdAttribute.type === 1) createdAttribute.value = "";
        }

        if (valueType === 1) {
          const onInput = async (e: Event) => {
            const input = e.target as BUI.TextInput;
            if (!props) {
              props = await model.getProperties(expressID);
              if (!props) return;
              if (createdAttribute) props[Attribute] = createdAttribute;
            }
            const attr = props[Attribute];
            if (!attr) return;
            attr.value = input.value;
            await propsManager.setData(model, props);
          };
          return BUI.html`<bim-text-input @input=${onInput} value=${Value}></bim-text-input>`;
        }

        if (valueType === 3 && Attribute === "PredefinedType") {
          const [dropdown] = predefinedTypes({ entity: entityType });
          if (Value) dropdown.value = [Value];
          dropdown.addEventListener("change", async () => {
            if (!props) {
              props = await model.getProperties(expressID);
              if (!props) return;
              if (createdAttribute) props[Attribute] = createdAttribute;
            }
            const attr = props[Attribute];
            if (!attr) return;
            attr.value = dropdown.value[0];
            await propsManager.setData(model, props);
          });
          return dropdown;
        }

        if (valueType === 4) {
          return BUI.html`<bim-number-input value=${String(Value)}></bim-number-input>`;
        }

        return value;
      },
    };

    table.loadFunction = async () => {
      const data: BUI.TableGroupData[] = [];
      for (const modelID in modelIdMap) {
        const model = fragments.groups.get(modelID);
        if (!model) continue;
        const expressIDs = modelIdMap[modelID];
        for (const expressID of expressIDs) {
          const attrs = await model.getProperties(expressID);
          if (!attrs) continue;
          for (const [attr, value] of Object.entries(attrs)) {
            if (attr === "type") continue;
            if (attr === "expressID") continue;
            if (Array.isArray(value)) continue;
            if (value?.type === 5) continue;
            data.push({
              data: {
                modelID,
                expressID: attrs.expressID,
                Attribute: attr,
                Value: value?.value,
                valueType: value?.type,
                entityType: attrs.type,
                schema: OBC.IfcPropertiesManager.getIFCSchema(model),
              },
            });
          }
        }
      }
      return data;
    };

    table.loadData(true);
  };

  return BUI.html`<bim-table headers-hidden ${BUI.ref(onCreated)}></bim-table>`;
};
