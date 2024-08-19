import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { TopicPanelUI, topicDataTemplate } from "./src/template";

/**
 * Creates a Topic Panel component with the given UI state.
 *
 * @param state - The initial state of the Topic Panel component.
 * @param autoUpdate - A flag indicating whether the component should automatically update based on events happening in the BCFTopic component.
 * Default value is `true`.
 *
 * @returns A tuple containing the created Topic Panel component and a function to update it.
 */
export const topicData = (state: TopicPanelUI, autoUpdate = true) => {
  const element = BUI.Component.create<BUI.Table, TopicPanelUI>(
    topicDataTemplate,
    state,
  );

  if (autoUpdate) {
    const { components } = state;
    const [_, updateElement] = element;
    const bcfTopics = components.get(OBC.BCFTopics);
    bcfTopics.list.onItemUpdated.add(({ value: topicSet }) => {
      const { topic } = updateElement();
      const { guid } = topicSet;
      if (guid === topic?.guid) updateElement();
    });
  }

  return element;
};
