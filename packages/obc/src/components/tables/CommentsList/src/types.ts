import * as OBC from "@thatopen/components";
import { TopicUserStyles } from "../../../../utils";

export interface CommentsListActions {
  delete: boolean;
}

export type CommentsListTableData = {
  guid: string;
  Comment: string;
  author: string;
};

export interface CommentsListState {
  topic: OBC.Topic;
  viewpoint?: OBC.Viewpoint;
  styles?: TopicUserStyles;
  actions?: Partial<CommentsListActions>;
  missingDataMessage?: string;
}
