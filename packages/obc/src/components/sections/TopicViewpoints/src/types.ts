import * as OBC from "@thatopen/components";
import { ViewpointUIActions } from "../../../tables/ViewpointsList/src/template";

export interface TopicViewpointsSectionActions extends ViewpointUIActions {
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
