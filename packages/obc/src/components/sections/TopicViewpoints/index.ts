import * as BUI from "@thatopen/ui";
import {
  topicViewpointsSectionTemplate,
  TopicViewpointsSectionUI,
} from "./src";

export const topicViewpoints = (state: TopicViewpointsSectionUI) => {
  const element = BUI.Component.create<
    HTMLDivElement,
    TopicViewpointsSectionUI
  >(topicViewpointsSectionTemplate, state);

  return element;
};
