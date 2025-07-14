import * as BUI from "@thatopen/ui";
import { ItemsDataState, ItemsDataTableData, itemsDataTemplate } from "./src";
import { setDefaults } from "./src/set-defaults";

/**
 * Creates an instance of ElementProperties component.
 *
 * @param state - The initial state for the ElementProperties component.
 * @returns A new instance of ElementProperties component.
 *
 */
export const itemsData = (state: ItemsDataState) => {
  const element = BUI.Component.create<
    BUI.Table<ItemsDataTableData>,
    ItemsDataState
  >(itemsDataTemplate, state);

  const [table] = element;
  setDefaults(state, table);

  return element;
};

export * from "./src";
