import * as BUI from "@thatopen/ui";
import { ConfigsUI, configsTemplate } from "./src/template";

/**
 * Creates an instance of ComponentsConfig component.
 *
 * @param state - The initial state for the ComponentsConfig component.
 * @returns A new instance of ComponentsConfig component.
 *
 */
export const configs = (state: ConfigsUI) => {
  const element = BUI.Component.create<BUI.Table, ConfigsUI>(
    configsTemplate,
    state,
  );

  return element;
};
