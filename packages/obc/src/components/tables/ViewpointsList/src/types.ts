import * as OBC from "@thatopen/components";

export type ViewpointsListTableData = {
  Guid: string;
  Title: string;
  Actions: string;
};

export interface ViewpointsListActions {
  selectComponents: boolean;
  colorizeComponent: boolean;
  resetColors: boolean;
  updateCamera: boolean;
  delete: boolean;
  unlink: boolean;
}

export interface ViewpointsListState {
  components: OBC.Components;
  topic?: OBC.Topic;
  actions?: Partial<ViewpointsListActions>;
  onViewpointEnter?: (viewpoint: OBC.Viewpoint) => void | Promise<void>;
  missingDataMessage?: string;
}
