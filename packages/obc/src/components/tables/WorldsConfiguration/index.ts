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
    const [table] = element;
    const updateTable = () => element[1]();
    const { components } = state;
    const worlds = components.get(OBC.Worlds);
    // worlds.onWorldCreated.add(updateTable);
    worlds.onDisposed.add(table.remove);
    for (const [, world] of worlds.list) {
      world.onDisposed.add(updateTable);
    }
    table.addEventListener("disconnected", () => {
      // worlds.onWorldCreated.remove(updateTable);
      worlds.onDisposed.remove(table.remove);
      for (const [, world] of worlds.list) {
        world.onDisposed.remove(updateTable);
      }
    });
  }

  return element;
};
