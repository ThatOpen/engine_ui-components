import * as BUI from "@thatopen/ui";
import {
  EntityAttributesUIState,
  entityAttributesTemplate,
} from "./src/template";

export const entityAttributes = (state: EntityAttributesUIState) => {
  const element = BUI.Component.create<BUI.Table, EntityAttributesUIState>(
    entityAttributesTemplate,
    state,
  );

  return element;
};
