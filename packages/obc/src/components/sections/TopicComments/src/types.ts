import * as OBC from "@thatopen/components";
import { TopicCommentsActions } from "../../../tables/TopicComments/src/template";
import { TopicUserStyles } from "../../../../utils/topics";

export interface TopicCommentsSectionActions extends TopicCommentsActions {
  add: boolean;
}

export interface TopicCommentsSectionUI {
  topic: OBC.Topic;
  showInput?: boolean;
  styles?: TopicUserStyles;
  actions?: Partial<TopicCommentsSectionActions>;
}
