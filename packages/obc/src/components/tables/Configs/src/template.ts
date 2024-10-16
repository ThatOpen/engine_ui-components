import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as THREE from "three";

export interface ConfigsUI {
  components: OBC.Components;
}

const getValueFromKeyPath = (obj: Record<string, any>, keyPath: string) => {
  return keyPath.split(".").reduce((acc, key) => acc && acc[key], obj);
};

function setValueFromKeyPath(
  obj: Record<string, any>,
  keyPath: string,
  value: any,
) {
  const keys = keyPath.split(".");
  const lastKey = keys.pop();
  if (!lastKey) return;
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[lastKey] = value;
}

const isIterable = (obj: any) => {
  return (
    obj !== null &&
    typeof obj !== "string" &&
    typeof obj[Symbol.iterator] === "function"
  );
};

const camelCaseToTitle = (text: string) => {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

const serializeValue = (value: any) => {
  if (value instanceof THREE.Color) {
    return value.getHexString();
  }
  return value;
};

const createConfigRow = (
  uuid: string,
  name: string,
  controls: any,
  isChildConfig = false,
) => {
  const children: BUI.TableGroupData[] = [];
  for (const controlName in controls) {
    const data = controls[controlName];
    if (data.type === "None") continue;
    const keyName = isChildConfig ? `${name}.${controlName}` : controlName;
    if (typeof data.type === "string") {
      children.push({
        data: {
          uuid,
          key: keyName,
          Name: camelCaseToTitle(controlName),
          Type: data.type,
          Value: serializeValue(data.value),
        },
      });
    } else {
      const row = createConfigRow(uuid, controlName, data, true);
      children.push(row);
    }
  }

  const configRow: BUI.TableGroupData = {
    data: { Name: camelCaseToTitle(name) },
    children,
  };

  return configRow;
};

const onCellCreated = ({ detail }: CustomEvent<BUI.CellCreatedEventDetail>) => {
  const { cell } = detail;
  if (cell.column === "Name" && !("Value" in cell.rowData)) {
    cell.style.gridColumn = "1 / -1";
  }
};

export const configsTemplate = (state: ConfigsUI) => {
  const { components } = state;

  const configs = components.get(OBC.ConfigManager);

  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table;
    table.hiddenColumns = ["Type", "uuid", "key"];

    table.dataTransform = {
      Value: (_value, rowData) => {
        const { key, uuid, Type } = rowData;
        if (!(typeof key === "string" && typeof uuid === "string")) return "";
        const configs = components.get(OBC.ConfigManager);
        const config = configs.list.get(uuid) as any;
        if (!config) return "";

        const configValue = getValueFromKeyPath(config, key);

        if (Type === "Color" && configValue instanceof THREE.Color) {
          const value = _value as string;
          const onInputChange = (e: Event) => {
            const input = e.target as BUI.ColorInput;
            setValueFromKeyPath(config, key, new THREE.Color(input.color));
          };
          return BUI.html`
            <bim-color-input @input=${onInputChange} color=#${value}></bim-color-input>
            `;
        }

        if (Type === "Boolean" && typeof configValue === "boolean") {
          const value = _value as boolean;
          const onInputChange = (e: Event) => {
            const input = e.target as BUI.Checkbox;
            setValueFromKeyPath(config, key, input.value);
          };
          return BUI.html`
            <bim-checkbox @change=${onInputChange} .checked=${value}></bim-checkbox>
            `;
        }

        if (Type === "Text" && typeof configValue === "string") {
          const value = _value as string;
          const onInput = (e: Event) => {
            const input = e.target as BUI.TextInput;
            setValueFromKeyPath(config, key, input.value);
          };
          return BUI.html`
            <bim-text-input @input=${onInput} value=${value}></bim-text-input>
          `;
        }

        // if (Type === "Select") {
        //   const value = _value as string;
        //   return BUI.html`
        //     <bim-dropdown>
        //       <bim-option label="Hi there"></bim-option>
        //     </bim-dropdown>
        //   `;
        // }

        // if (Type === "TextSet" && isIterable(configValue)) {
        //   const value = _value as Iterable<any>;
        // }

        if (Type === "Number" && typeof configValue === "number") {
          const value = _value as number;
          const onInputChange = (e: Event) => {
            const input = e.target as BUI.NumberInput;
            setValueFromKeyPath(config, key, input.value);
          };
          return BUI.html`
            <bim-number-input @change=${onInputChange} value=${value}></bim-number-input>
          `;
        }

        return "";
      },
    };

    const data: BUI.TableGroupData[] = [];
    for (const [id, config] of configs.list.entries()) {
      // @ts-ignore
      const configRow = createConfigRow(id, config.name, config._config);
      data.push(configRow);
    }
    table.data = data;
  };

  return BUI.html`
    <bim-table ${BUI.ref(onTableCreated)} @cellcreated=${onCellCreated} headers-hidden expanded>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No components to configure
      </bim-label>
    </bim-table>
  `;
};
