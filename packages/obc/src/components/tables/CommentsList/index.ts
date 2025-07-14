import * as BUI from "@thatopen/ui";
import {
  CommentsListState,
  CommentsListTableData,
  commentsListTemplate,
} from "./src";
import { setDefaults } from "./src/set-defaults";

/**
 * Creates a Topic Comments List component with the given UI state.
 *
 * @param state - The initial state of the Topic Comments List component.
 * @param autoUpdate - A flag indicating whether the component should automatically update based on events happening in the BCFTopic component.
 * Default value is `true`.
 *
 * @returns A tuple containing the created Topic Comments List component and a function to update it.
 */
export const commentsList = (state: CommentsListState, autoUpdate = true) => {
  const element = BUI.Component.create<
    BUI.Table<CommentsListTableData>,
    CommentsListState
  >(commentsListTemplate, state);

  const [table, updateElement] = element;
  setDefaults(state, table);

  if (autoUpdate) {
    const { topic } = state;
    const updateFunction = () => updateElement();
    topic.comments.onItemSet.add(updateFunction);
    topic.comments.onItemUpdated.add(updateFunction);
    topic.comments.onItemDeleted.add(updateFunction);
    topic.comments.onCleared.add(updateFunction);
  }

  return element;
};

export * from "./src";
