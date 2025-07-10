import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  TopicsListState,
  TopicsListTableData,
  topicsListTemplate,
} from "./src";
import { setDefaults } from "./src/set-defaults";

/**
 * Creates a BCF Topics List component with the given UI state.
 *
 * @param state - The initial state of the BCF Topics List component.
 * @param autoUpdate - A flag indicating whether the component should automatically update based on events happening in the BCFTopic component.
 * Default value is `true`.
 *
 * @returns A tuple containing the created BCF Topics List component and a function to update it.
 */
export const topicsList = (state: TopicsListState, autoUpdate = true) => {
  const element = BUI.Component.create<
    BUI.Table<TopicsListTableData>,
    TopicsListState
  >(topicsListTemplate, state);

  const [table, updateTable] = element;
  setDefaults(state, table);

  if (autoUpdate) {
    const { components, topics } = state;
    const bcfTopics = components.get(OBC.BCFTopics);
    const updateCallback = () => updateTable();
    bcfTopics.list.onItemUpdated.add(updateCallback);
    bcfTopics.list.onItemDeleted.add(updateCallback);
    if (topics) {
      for (const topic of topics) {
        topic.relatedTopics.onItemAdded.add(updateCallback);
        topic.relatedTopics.onItemDeleted.add(updateCallback);
        topic.relatedTopics.onCleared.add(updateCallback);
      }
    } else {
      bcfTopics.list.onItemSet.add(updateCallback);
    }
  }

  return element;
};

export * from "./src";
