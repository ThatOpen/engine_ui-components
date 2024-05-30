import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  WorldsConfigurationUIState,
  worldsConfigurationTemplate,
} from "./src/template";

/**
 * Heloooooooooo
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
    const [table, updateTable] = element;
    const { components } = state;
    const worlds = components.get(OBC.Worlds);
    table.addEventListener("connected", () => {
      worlds.onDisposed.add(table.remove);
      for (const [, world] of worlds.list) {
        world.onDisposed.add(updateTable);
      }
    });
    table.addEventListener("disconnected", () => {
      worlds.onDisposed.remove(table.remove);
      for (const [, world] of worlds.list) {
        world.onDisposed.remove(updateTable);
      }
    });
  }

  return element;
};
