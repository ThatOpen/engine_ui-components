import * as OBC from "@thatopen/components";
import { TopicStyles } from "../../../../utils/topics";

export interface TopicInformationSectionActions {
  update: boolean;
}

export interface TopicInformationSectionState {
  components: OBC.Components;
  topic: OBC.Topic;
  editing?: boolean;
  styles?: Partial<TopicStyles>;
  actions?: Partial<TopicInformationSectionActions>;
}
