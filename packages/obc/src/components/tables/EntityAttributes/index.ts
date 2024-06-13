import * as BUI from "@thatopen/ui";
import {
  EntityAttributesUIState,
  entityAttributesTemplate,
} from "./src/template";

/**
 * Creates a table component for displaying entity attributes.
 *
 * @param state - The initial state of the entity attributes table.
 * @returns A table component with the specified entity attributes template and state.
 */
export const entityAttributes = (state: EntityAttributesUIState) => {
  const element = BUI.Component.create<BUI.Table, EntityAttributesUIState>(
    entityAttributesTemplate,
    state,
  );

  return element;
};
