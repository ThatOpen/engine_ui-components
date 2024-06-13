import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { modelsListTemplate, ModelsListUIState } from "./src/template";

/**
 * Creates a table component for displaying a list of models.
 *
 * @param state - The initial state of the models list component.
 * @param autoUpdate - A flag indicating whether the component should automatically update when fragments are loaded or disposed.
 *                      Default value is `true`.
 *
 * @returns A tuple containing the table component element and a function to update the component.
 *
 * @remarks
 * This function creates a table component using the provided state and template.
 * If `autoUpdate` is set to `true`, the component will automatically update when fragments are loaded or disposed.
 */
export const modelsList = (state: ModelsListUIState, autoUpdate = true) => {
  const element = BUI.Component.create<BUI.Table, ModelsListUIState>(
    modelsListTemplate,
    state,
  );

  if (autoUpdate) {
    const { components } = state;
    const manager = components.get(OBC.FragmentsManager);
    const [, updateElement] = element;
    manager.onFragmentsLoaded.add(() => setTimeout(() => updateElement()));
    manager.onFragmentsDisposed.add(() => updateElement());
  }

  return element;
};
