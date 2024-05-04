// eslint-disable-next-line import/no-extraneous-dependencies
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

interface FragmentGroupsUIState {
  manager: OBC.FragmentManager;
}

export const fragmentGroupsListTemplate = (state: FragmentGroupsUIState) => {
  const { manager } = state;

  const table = document.createElement("bim-table");
  table.columns = ["Model"];
  table.headersHidden = true;

  const rowGroups: BUI.TableGroupData[] = [];
  for (const [, model] of manager.groups) {
    if (!model) continue;
    const rowGroup: BUI.TableGroupData = {
      data: {
        Model: () => {
          const name = model.name || model.uuid;
          const onBtnClick = () => {
            manager.disposeGroup(model);
          };
          return BUI.html`
           <div style="display: flex; gap: 0.75rem;">
            <bim-label label="${name}"></bim-label>
            <bim-button @click=${onBtnClick} icon="mdi:delete"></bim-button>
           </div> 
          `;
        },
      },
    };
    rowGroups.push(rowGroup);
  }

  table.rows = rowGroups;

  return BUI.html`
    <div>
      ${rowGroups.length === 0 ? BUI.html`<bim-label label="No models has been loaded yet"></bim-label>` : table}
    </div>
  `;
};

export const fragmentGroupsList = (manager: OBC.FragmentManager) => {
  const [element, updateElement] = BUI.Component.create<
    BUI.Table,
    FragmentGroupsUIState
  >(fragmentGroupsListTemplate, { manager });

  manager.onFragmentsLoaded.add(() => updateElement());
  manager.onFragmentsDisposed.add(() => updateElement());

  return element;
};
