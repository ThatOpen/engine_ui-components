import * as OBC from "@thatopen/components";
import { CommentsListActions } from "../../../tables/CommentsList";
import { TopicUserStyles } from "../../../../utils/topics";

export interface TopicCommentsSectionActions extends CommentsListActions {
  add: boolean;
}

export interface TopicCommentsSectionState {
  topic: OBC.Topic;
  showInput?: boolean;
  styles?: TopicUserStyles;
  actions?: Partial<TopicCommentsSectionActions>;
}
