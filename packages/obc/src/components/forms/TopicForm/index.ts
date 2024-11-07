import * as BUI from "@thatopen/ui";
import { formTemplate } from "./src/template";
import { TopicFormUI } from "../../../utils/topics";

/**
 * Creates a Topic Form component with the given UI state.
 *
 * @param state - The initial state of the Topic Form component.
 *
 * @returns A tuple containing the created Topic Form component and a function to update it.
 */
export const topic = (state: TopicFormUI) => {
  const element = BUI.Component.create<BUI.Panel, TopicFormUI>(
    formTemplate,
    state,
  );

  return element;
};
