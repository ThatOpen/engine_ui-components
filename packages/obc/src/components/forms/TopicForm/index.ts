import * as BUI from "@thatopen/ui";
import { TopicFormUI, createTopicTemplate } from "./src/template";

/**
 * Creates a Topic Form component with the given UI state.
 *
 * @param state - The initial state of the Topic Form component.
 *
 * @returns A tuple containing the created Topic Form component and a function to update it.
 */
export const createTopic = (state: TopicFormUI) => {
  const element = BUI.Component.create<BUI.Panel, TopicFormUI>(
    createTopicTemplate,
    state,
  );

  return element;
};
