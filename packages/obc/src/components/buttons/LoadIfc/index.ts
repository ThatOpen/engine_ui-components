import * as BUI from "@thatopen/ui";
import { loadIfcTemplate, LoadIfcUIState } from "./src/template";

/**
 * This function creates a button component for loading IFC files.
 *
 * @param state - The state object containing necessary data for loading IFC files.
 * @returns A button component with the specified template and state.
 *
 * @remarks
 * The `loadIfc` function uses the `BUI.Component.create` method to create a button component.
 * The template and state are passed as arguments to the `create` method.
 * The created button component is then returned from the function.
 *
 */
export const loadIfc = (state: LoadIfcUIState) => {
  const element = BUI.Component.create<BUI.Button, LoadIfcUIState>(
    loadIfcTemplate,
    state,
  );

  return element;
};
