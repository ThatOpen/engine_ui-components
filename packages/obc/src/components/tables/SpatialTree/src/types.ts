import * as OBC from "@thatopen/components";
import * as FRAGS from "@thatopen/fragments";

export interface SpatialTreeState {
  components: OBC.Components;
  models: Iterable<FRAGS.FragmentsModel>;
  selectHighlighterName?: string;
}

export type SpatialTreeData = {
  modelId: string;
  localId: number;
  Name: string;
  children: string;
};
