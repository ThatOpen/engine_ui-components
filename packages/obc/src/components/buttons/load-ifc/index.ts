import * as BUI from "@thatopen/ui";
import { loadIfcTemplate, LoadIfcState } from "./src";

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
export const loadIfc = (state: LoadIfcState) => {
  const element = BUI.Component.create<BUI.Button, LoadIfcState>(
    loadIfcTemplate,
    state,
  );

  return element;
};
