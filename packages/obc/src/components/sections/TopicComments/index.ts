import * as BUI from "@thatopen/ui";
import { topicCommentsSectionTemplate, TopicCommentsSectionState } from "./src";

export const topicComments = (state: TopicCommentsSectionState) => {
  const element = BUI.Component.create<
    HTMLDivElement,
    TopicCommentsSectionState
  >(topicCommentsSectionTemplate, state);

  return element;
};

export * from "./src";
