import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { RelationsTreeUIState, relationsTreeTemplate } from "./src/template";

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
export const relationsTree = (
  state: RelationsTreeUIState,
  autoUpdate = true,
) => {
  const element = BUI.Component.create<BUI.Table, RelationsTreeUIState>(
    relationsTreeTemplate,
    state,
  );

  if (autoUpdate) {
    const [, updateElement] = element;
    const { components } = state;
    const manager = components.get(OBC.FragmentsManager);
    const indexer = components.get(OBC.IfcRelationsIndexer);
    const updateTree = () => updateElement({ models: manager.groups.values() });
    indexer.onRelationsIndexed.add(updateTree);
    manager.onFragmentsDisposed.add(updateTree);
  }

  return element;
};
