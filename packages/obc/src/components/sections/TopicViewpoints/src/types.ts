import * as OBC from "@thatopen/components";
import { ViewpointsListActions } from "../../../tables/ViewpointsList";

export interface TopicViewpointsSectionActions extends ViewpointsListActions {
  add: boolean;
  link: boolean;
}

export interface TopicViewpointsSectionUI {
  components: OBC.Components;
  topic: OBC.Topic;
  linking?: boolean;
  world?: OBC.World;
  actions?: Partial<TopicViewpointsSectionActions>;
}
