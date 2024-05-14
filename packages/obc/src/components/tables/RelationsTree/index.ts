import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { RelationsTreeUIState, relationsTreeTemplate } from "./src/template";

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
    const manager = components.get(OBC.FragmentManager);
    const indexer = components.get(OBC.IfcRelationsIndexer);
    const updateTree = () => updateElement({ models: manager.groups.values() });
    indexer.onRelationsIndexed.add(updateTree);
    manager.onFragmentsDisposed.add(updateTree);
  }

  return element;
};
