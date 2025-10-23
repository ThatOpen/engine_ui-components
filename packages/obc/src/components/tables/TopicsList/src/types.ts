import * as OBC from "@thatopen/components";
import { TopicStyles } from "../../../../utils";

export type TopicsListTableData = {
  Guid: string;
  Title: string;
  Status: string;
  Description: string;
  Author: string;
  Assignee: string;
  Date: string;
  DueDate: string;
  Type: string;
  Priority: string;
  Actions: string;
};

export interface TopicsListState {
  components: OBC.Components;
  topics?: Iterable<OBC.Topic>;
  dataStyles?: TopicStyles;
  missingDataMessage?: string;
}
