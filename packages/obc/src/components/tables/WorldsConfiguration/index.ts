import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  WorldsConfigurationUIState,
  worldsConfigurationTemplate,
} from "./src/template";

/**
 * Creates a worlds configuration table component.
 *
 * @param state - The initial state of the worlds configuration table.
 * @param autoUpdate - A flag indicating whether the table should automatically update when worlds are created or disposed.
 *                      Default is `true`.
 *
 * @returns A tuple containing the table component and a function to update the table.
 *
 * @remarks
 * This function creates a table component for displaying and managing worlds configuration.
 * If `autoUpdate` is `true`, the table will automatically update when worlds are created or disposed.
 */
export const worldsConfiguration = (
  state: WorldsConfigurationUIState,
  autoUpdate = true,
) => {
  const element = BUI.Component.create<BUI.Table, WorldsConfigurationUIState>(
    worldsConfigurationTemplate,
    state,
  );

  if (autoUpdate) {
    const [, updateTable] = element;
    const { components } = state;
    const worlds = components.get(OBC.Worlds);
    // worlds.list.onItemSet.add(() => updateTable());
    worlds.list.onItemDeleted.add(() => updateTable());
  }

  return element;
};
