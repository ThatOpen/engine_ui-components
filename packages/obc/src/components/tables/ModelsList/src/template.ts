import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

export interface ModelsListUIState {
  components: OBC.Components;
}

export const modelsListTemplate = (state: ModelsListUIState) => {
  const { components } = state;

  const fragments = components.get(OBC.FragmentsManager);

  const table = document.createElement("bim-table");
  table.columns = ["Model"];
  table.headersHidden = true;

  const rowGroups: BUI.TableGroupData[] = [];
  for (const [, model] of fragments.groups) {
    if (!model) continue;
    const rowGroup: BUI.TableGroupData = {
      data: {
        Model: model.name || model.uuid,
        Actions: model.uuid,
      },
    };
    rowGroups.push(rowGroup);
  }

  table.dataTransform = {
    Actions: (modelID) => {
      if (typeof modelID !== "string") return modelID;
      const model = fragments.groups.get(modelID);
      if (!model) return modelID;
      const onDeleteClick = () => fragments.disposeGroup(model);

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
  };

  table.columns = ["Model", { name: "Actions", width: "auto" }];
  table.data = rowGroups;

  return BUI.html`
    <div>
      ${rowGroups.length === 0 ? BUI.html`<bim-label>No models has been loaded yet</bim-label>` : table}
    </div>
  `;
};
