import * as BUI from "@thatopen/ui";
import {
  topicInformationSectionTemplate,
  TopicInformationSectionState,
} from "./src";

export const topicInformation = (state: TopicInformationSectionState) => {
  const element = BUI.Component.create<
    HTMLDivElement,
    TopicInformationSectionState
  >(topicInformationSectionTemplate, state);

  return element;
};

export * from "./src";
