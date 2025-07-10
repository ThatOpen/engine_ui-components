import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  ViewpointsListState,
  ViewpointsListTableData,
  viewpointsListTemplate,
} from "./src";
import { setDefaults } from "./src/set-defaults";

/**
 * Creates a Viewpoints component with the given UI state.
 *
 * @param state - The initial state of the Viewpoints component.
 * @param autoUpdate - A flag indicating whether the component should automatically update based on events happening in the BCFTopic component.
 * Default value is `true`.
 *
 * @returns A tuple containing the created Viewpoints component and a function to update it.
 */
export const viewpointsList = (
  state: ViewpointsListState,
  autoUpdate = true,
) => {
  const element = BUI.Component.create<
    BUI.Table<ViewpointsListTableData>,
    ViewpointsListState
  >(viewpointsListTemplate, state);

  const [table, updateElement] = element;
  setDefaults(state, table);

  if (autoUpdate) {
    const { components, topic } = state;
    const manager = components.get(OBC.Viewpoints);
    manager.list.onItemUpdated.add(() => updateElement());
    manager.list.onItemDeleted.add(() => updateElement());
    manager.list.onCleared.add(() => updateElement());
    if (topic) {
      topic.viewpoints.onItemAdded.add(() => updateElement());
      topic.viewpoints.onItemDeleted.add(() => updateElement());
      topic.viewpoints.onCleared.add(() => updateElement());
    } else {
      manager.list.onItemSet.add(() => updateElement());
    }
  }

  return element;
};

export * from "./src";
