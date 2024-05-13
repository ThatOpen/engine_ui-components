import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { RelationsTreeUIState, relationsTreeTemplate } from "./src/template";

export const relationsTree = (state: RelationsTreeUIState) => {
  const { components } = state;
  const manager = components.get(OBC.FragmentManager);
  const indexer = components.get(OBC.IfcRelationsIndexer);

  const element = BUI.Component.create<BUI.Table, RelationsTreeUIState>(
    relationsTreeTemplate,
    state,
  );

  const [, updateElement] = element;

  const updateTree = () => {
    updateElement({ models: manager.groups.values() });
  };

  indexer.onRelationsIndexed.add(updateTree);
  manager.onFragmentsDisposed.add(updateTree);

  return element;
};
