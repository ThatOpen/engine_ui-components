import * as BUI from "@thatopen/ui";
import { topicCommentsSectionTemplate, TopicCommentsSectionUI } from "./src";

export const topicComments = (state: TopicCommentsSectionUI) => {
  const element = BUI.Component.create<HTMLDivElement, TopicCommentsSectionUI>(
    topicCommentsSectionTemplate,
    state,
  );

  return element;
};
