import * as BUI from "@thatopen/ui";
import {
  WorldsConfigurationUIState,
  worldsConfigurationTemplate,
} from "./src/template";

/**
 * Heloooooooooo
 */
export const worldsConfiguration = (state: WorldsConfigurationUIState) => {
  const element = BUI.Component.create<BUI.Table, WorldsConfigurationUIState>(
    worldsConfigurationTemplate,
    state,
  );

  return element;
};
