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
  /**
   * Categories that should be skipped entirely in the rendered tree
   * regardless of how many children they have. Each listed category is
   * removed and its children are promoted up to its parent. The dropped
   * category is stashed on each promoted child's `SpatialTreeData.category`
   * if the child doesn't already carry one.
   *
   * Useful for hiding levels that add no navigational value once the user
   * is in the right building (e.g. `IFCBUILDINGSTOREY`, where the floor
   * itself rarely matters compared to the elements on it).
   *
   * @defaultValue []
   */
  collapseCategories?: string[];
}

export type SpatialTreeData = {
  modelId: string;
  localId: number;
  Name: string;
  children: string;
  category: string;
};
