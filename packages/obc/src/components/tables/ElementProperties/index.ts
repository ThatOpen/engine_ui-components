import * as BUI from "@thatopen/ui";
import {
  ElementPropertiesUIState,
  elementPropertiesTemplate,
} from "./src/template";

/**
 * Creates an instance of ElementProperties component.
 *
 * @param state - The initial state for the ElementProperties component.
 * @returns A new instance of ElementProperties component.
 *
 */
export const elementProperties = (state: ElementPropertiesUIState) => {
  const element = BUI.Component.create<BUI.Table, ElementPropertiesUIState>(
    elementPropertiesTemplate,
    state,
  );

  return element;
};
