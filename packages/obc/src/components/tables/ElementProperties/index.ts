import * as BUI from "@thatopen/ui";
import {
  ElementPropertiesUIState,
  elementPropertiesTemplate,
} from "./src/template";

/**
 * Heloooooooooo
 */
export const elementProperties = (state: ElementPropertiesUIState) => {
  const element = BUI.Component.create<BUI.Table, ElementPropertiesUIState>(
    elementPropertiesTemplate,
    state,
  );

  return element;
};
