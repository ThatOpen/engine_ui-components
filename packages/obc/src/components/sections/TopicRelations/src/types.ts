import * as OBC from "@thatopen/components";

export interface TopicRelationsSectionActions {
  link: boolean;
}

export interface TopicRelationsSectionsUI {
  components: OBC.Components;
  topic: OBC.Topic;
  linking?: boolean;
  actions?: Partial<TopicRelationsSectionActions>;
}
