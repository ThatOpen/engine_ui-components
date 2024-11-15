import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
import { predefinedTypes as types } from "./src";

interface PredefinedTypesState {
  entity: number;
}

export const predefinedTypes = () => {
  const dropdown = BUI.Component.create<BUI.Dropdown, PredefinedTypesState>(
    (state: PredefinedTypesState) => {
      const { entity } = state;
      const entityTypes = types[entity];
      const onCreated = (e?: Element) => {
        if (!e) return;
        const dropdown = e as BUI.Dropdown;
        for (const type of entityTypes ?? []) {
          const option = document.createElement("bim-option");
          option.label = type;
          dropdown.append(option);
        }
      };
      return BUI.html`
        <bim-dropdown ${BUI.ref(onCreated)} label="Predefined Type"></bim-dropdown>
      `;
    },
    { entity: WEBIFC.IFCWALL },
  );

  return dropdown;
};
