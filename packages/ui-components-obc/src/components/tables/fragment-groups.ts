import * as OBC from "openbim-components";
import * as BUI from "@thatopen/ui-components";
import { TemplateResult, html } from "lit";

interface FragmentGroupsUIState {
  manager: OBC.FragmentManager;
}

const template = (state: FragmentGroupsUIState) => {
  const { manager } = state;

  const labels: TemplateResult[] = [];
  for (const model of manager.groups) {
    labels.push(html`<bim-label label=${model.uuid}></bim-label>`);
  }

  return html`
    <bim-panel-section label="Models"> ${labels} </bim-panel-section>
  `;
};

export const fragmentGroupsListElement = (state: FragmentGroupsUIState) => {
  const { manager } = state;
  const [fragmentGroupsList, updateFragmentGroupsList]: [
    BUI.PanelSection,
    BUI.UpdateFunction<FragmentGroupsUIState>,
  ] = BUI.UIComponent.create<BUI.PanelSection, FragmentGroupsUIState>(
    template,
    state,
  );

  manager.onFragmentsLoaded.add(() => updateFragmentGroupsList());
  manager.onFragmentsDisposed.add(() => updateFragmentGroupsList());

  return fragmentGroupsList;
};
