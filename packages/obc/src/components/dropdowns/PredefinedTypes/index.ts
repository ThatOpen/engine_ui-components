import * as BUI from "@thatopen/ui";
import * as WEBIFC from "web-ifc";
import { predefinedTypes as types } from "./src";

interface PredefinedTypesState {
  entity: number;
}

export const predefinedTypes = (state: PredefinedTypesState) => {
  const dropdown = BUI.Component.create<BUI.Dropdown, PredefinedTypesState>(
    (state: PredefinedTypesState) => {
      const { entity } = state;
      const entityTypes = types[entity];
      return BUI.html`
      <bim-dropdown>
        ${entityTypes.map((predefinedType) => BUI.html`<bim-option label=${predefinedType}></bim-option>`)}
      </bim-dropdown>
    `;
    },
    state,
  );

  return dropdown;
};
