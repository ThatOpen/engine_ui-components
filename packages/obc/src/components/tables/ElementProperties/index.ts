import * as BUI from "@thatopen/ui";
import {
  ElementPropertiesUI,
  elementPropertiesTemplate,
} from "./src/template";

/**
 * Creates an instance of ElementProperties component.
 *
 * @param state - The initial state for the ElementProperties component.
 * @returns A new instance of ElementProperties component.
 *
 */
export const elementProperties = (state: ElementPropertiesUI) => {
  const element = BUI.Component.create<BUI.Table, ElementPropertiesUI>(
    elementPropertiesTemplate,
    state,
  );

  return element;
};
