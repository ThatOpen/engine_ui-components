import * as BUI from "@thatopen/ui";
import { EntityEditingUI, entityEditingTemplate } from "./src/template";

/**
 * Creates an instance of ElementProperties component.
 *
 * @param state - The initial state for the ElementProperties component.
 * @returns A new instance of ElementProperties component.
 *
 */
export const entityEditing = (state: EntityEditingUI) => {
  const element = BUI.Component.create<BUI.Table, EntityEditingUI>(
    entityEditingTemplate,
    state,
  );

  return element;
};
