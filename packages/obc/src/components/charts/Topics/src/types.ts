import * as OBC from "@thatopen/components";

export type Grouper =
  | "type"
  | "status"
  | "priority"
  | "creationDate"
  | "creationAuthor"
  | "modifiedDate"
  | "modifiedAuthor"
  | "dueDate"
  | "assignedTo"
  | "stage";

export type ChartTopicsState = {
  components: OBC.Components,
  filterFunction?: (topic: OBC.Topic) => boolean
  type: string;
  missingDataMessage?: string;
  // topics: Iterable<OBC.Topic>;
  addLabels?: boolean;
  grouper?: Grouper;
};
