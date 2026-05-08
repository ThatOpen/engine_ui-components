import * as OBC from "@thatopen/components";
import * as FRAGS from "@thatopen/fragments";

export interface SpatialTreeState {
  components: OBC.Components;
  models: Iterable<FRAGS.FragmentsModel>;
  selectHighlighterName?: string;
  /**
   * When `true`, an IFC category row with exactly one child is merged with
   * that child: the merged row keeps the named instance's data and stashes
   * the dropped category on `SpatialTreeData.category`. Useful to flatten
   * the IFCPROJECT → IFCSITE → IFCBUILDING → IFCBUILDINGSTOREY chain into
   * named rows. Categories with multiple children (IFCWALL, IFCDOOR, …)
   * are left untouched.
   *
   * @defaultValue false
   */
  collapseSingleChildCategories?: boolean;
}

export type SpatialTreeData = {
  modelId: string;
  localId: number;
  Name: string;
  children: string;
  category: string;
};
