import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  modelsListTemplate,
  ModelsListState,
  ModelsListTableData,
} from "./src";
import { setDefaults } from "./src/set-defaults";

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
export const modelsList = (state: ModelsListState, autoUpdate = true) => {
  const element = BUI.Component.create<
    BUI.Table<ModelsListTableData>,
    ModelsListState
  >(modelsListTemplate, state);

  const [table, update] = element;
  setDefaults(state, table);

  if (autoUpdate) {
    const { components } = state;
    const fragments = components.get(OBC.FragmentsManager);
    const updateFunction = () => setTimeout(() => update());
    fragments.list.onItemSet.add(updateFunction);
    fragments.list.onItemDeleted.add(updateFunction);
  }

  return element;
};

export * from "./src";
