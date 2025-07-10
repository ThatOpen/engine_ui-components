import * as BUI from "@thatopen/ui";
import { TopicRelationsSectionsUI, topicRelationsSectionTemplate } from "./src";

export const topicRelations = (state: TopicRelationsSectionsUI) => {
  const element = BUI.Component.create<
    HTMLDivElement,
    TopicRelationsSectionsUI
  >(topicRelationsSectionTemplate, state);

  return element;
};

export * from "./src";
