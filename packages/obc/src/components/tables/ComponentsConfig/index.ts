import * as BUI from "@thatopen/ui";
import { ComponentsConfigUI, componentsConfigTemplate } from "./src/template";

/**
 * Creates an instance of ComponentsConfig component.
 *
 * @param state - The initial state for the ComponentsConfig component.
 * @returns A new instance of ComponentsConfig component.
 *
 */
export const componentsConfig = (state: ComponentsConfigUI) => {
  const element = BUI.Component.create<BUI.Table, ComponentsConfigUI>(
    componentsConfigTemplate,
    state,
  );

  return element;
};
