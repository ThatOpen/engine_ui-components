import * as BUI from "@thatopen/ui";
import {
  topicInformationSectionTemplate,
  TopicInformationSectionUI,
} from "./src";

export const topicInformation = (state: TopicInformationSectionUI) => {
  const element = BUI.Component.create<
    HTMLDivElement,
    TopicInformationSectionUI
  >(topicInformationSectionTemplate, state);

  return element;
};
