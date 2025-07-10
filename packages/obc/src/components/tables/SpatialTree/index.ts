import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { SpatialTreeState, spatialTreeTemplate, SpatialTreeData } from "./src";

/**
 * Creates a relations tree component with the given state and optional auto-update feature.
 *
 * @param state - The initial state of the relations tree component.
 * @param autoUpdate - A flag indicating whether the component should automatically update when related data changes.
 *                      Default is `true`.
 *
 * @returns A tuple containing the root element of the relations tree component and a function to update the component's state.
 *
 * @remarks
 * This function creates a relations tree component using the provided state and optional auto-update feature.
 * If `autoUpdate` is `true`, the component will automatically update when related data changes, such as
 * when fragments are disposed or relations are indexed.
 *
 */
export const spatialTree = (state: SpatialTreeState, autoUpdate = true) => {
  const element = BUI.Component.create<
    BUI.Table<SpatialTreeData>,
    SpatialTreeState
  >(spatialTreeTemplate, state);

  const [table, update] = element;
  table.hiddenColumns = ["modelId", "localId", "children"];
  table.columns = ["Name"];
  table.headersHidden = true;

  if (autoUpdate) {
    const { components } = state;
    const fragments = components.get(OBC.FragmentsManager);
    fragments.list.onItemSet.add(() =>
      update({ models: fragments.list.values() }),
    );
    fragments.list.onItemDeleted.add(() => update());
  }

  return element;
};

export * from "./src";
