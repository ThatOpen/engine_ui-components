import * as OBC from "openbim-components";
import * as BUI from "@thatopen/ui";

interface FragmentGroupsUIState {
  manager: OBC.FragmentManager;
}

export const fragmentGroupsListTemplate = (state: FragmentGroupsUIState) => {
  const { manager } = state;

  const labels = [];
  for (const model of manager.groups) {
    labels.push(BUI.html`<bim-label label=${model.uuid}></bim-label>`);
  }

  return BUI.html`<div>${labels}</div>`;
};

export const fragmentGroupsList = (manager: OBC.FragmentManager) => {
  const [element, updateElement] = BUI.UIComponent.create<
    BUI.Table,
    FragmentGroupsUIState
  >(fragmentGroupsListTemplate, { manager });

  manager.onFragmentsLoaded.add(() => updateElement());
  manager.onFragmentsDisposed.add(() => updateElement());

  return element;
};
