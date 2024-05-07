import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

export interface ModelsListUIState {
  components: OBC.Components;
}

export const modelsListTemplate = (state: ModelsListUIState) => {
  const { components } = state;

  const fragmentsManager = components.get(OBC.FragmentManager);

  const table = document.createElement("bim-table");
  table.columns = ["Model"];
  table.headersHidden = true;

  const rowGroups: BUI.TableGroupData[] = [];
  for (const [, model] of fragmentsManager.groups) {
    if (!model) continue;
    const rowGroup: BUI.TableGroupData = {
      data: {
        Model: model.name || model.uuid,
        Action: () => {
          const onDeleteClick = () => fragmentsManager.disposeGroup(model);

          const onHideClick = (e: Event) => {
            model.visible = !model.visible;
            const button = e.target as BUI.Button;
            button.icon = model.visible ? "mdi:eye" : "mdi:eye-off";
          };

          return BUI.html`
            <bim-button @click=${onHideClick} icon="mdi:eye"></bim-button>
            <bim-button @click=${onDeleteClick} icon="mdi:delete"></bim-button>
          `;
        },
      },
    };
    rowGroups.push(rowGroup);
  }

  table.columns = ["Model", { name: "Action", width: "auto" }];
  table.rows = rowGroups;

  return BUI.html`
    <div>
      ${rowGroups.length === 0 ? BUI.html`<bim-label label="No models has been loaded yet"></bim-label>` : table}
    </div>
  `;
};
