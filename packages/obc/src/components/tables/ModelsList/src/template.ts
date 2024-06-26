// eslint-disable-next-line import/no-extraneous-dependencies
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

export interface ModelsListUIState {
  components: OBC.Components;
  schemaTag?: boolean;
  viewDefinitionTag?: boolean;
}

export const modelsListTemplate = (state: ModelsListUIState) => {
  const { components } = state;

  const schemaTag = state.schemaTag ?? true;
  const viewDefinitionTag = state.viewDefinitionTag ?? true;

  const fragments = components.get(OBC.FragmentsManager);

  const table = document.createElement("bim-table");
  table.addEventListener("cellcreated", ({ detail }) => {
    const { cell } = detail;
    cell.style.padding = "0.25rem 0";
  });
  table.hiddenColumns = ["modelID"];
  table.headersHidden = true;

  const rowGroups: BUI.TableGroupData[] = [];
  for (const [, model] of fragments.groups) {
    if (!model) continue;
    const rowGroup: BUI.TableGroupData = {
      data: {
        Name: model.name || model.uuid,
        modelID: model.uuid,
      },
    };
    rowGroups.push(rowGroup);
  }

  table.dataTransform = {
    Name: (value, row) => {
      const { modelID } = row;
      if (typeof modelID !== "string") return value;
      const model = fragments.groups.get(modelID);
      if (!model) return modelID;
      const modelIdMap: FRAGS.FragmentIdMap = {};
      for (const item of model.items) {
        modelIdMap[item.id] = item.ids;
      }

      let schemaTagTemplate: BUI.TemplateResult | undefined;
      const { schema } = model.ifcMetadata;
      if (schemaTag && schema) {
        schemaTagTemplate = BUI.html`
          <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${schema}</bim-label>
          `;
      }

      let viewDefinitionTagTemplate: BUI.TemplateResult | undefined;
      if (viewDefinitionTag && "viewDefinition" in model.ifcMetadata) {
        const viewDefinition = model.ifcMetadata.viewDefinition as string;
        viewDefinitionTagTemplate = BUI.html`
          ${viewDefinition.split(",").map((definition) => {
            return BUI.html`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${definition}</bim-label>`;
          })}
        `;
      }

      const onDeleteClick = () => fragments.disposeGroup(model);

      const onHideClick = (e: Event) => {
        const hider = components.get(OBC.Hider);
        const button = e.target as BUI.Button;
        hider.set(button.hasAttribute("data-model-hidden"), modelIdMap);
        button.toggleAttribute("data-model-hidden");
        button.icon = button.hasAttribute("data-model-hidden")
          ? "mdi:eye-off"
          : "mdi:eye";
      };

      return BUI.html`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${value}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${schemaTagTemplate}
            ${viewDefinitionTagTemplate}
          </div>
        </div>
        <div style="display: flex; gap: var(--bim-ui_size-4xs); align-self: flex-start; flex-shrink: 0;">
          <bim-button @click=${onHideClick} icon="mdi:eye"></bim-button>
          <bim-button @click=${onDeleteClick} icon="mdi:delete"></bim-button>
        </div>
       </div>
      `;
    },
  };

  table.data = rowGroups;

  return BUI.html`
    <div>
      ${rowGroups.length === 0 ? BUI.html`<bim-label>No models has been loaded yet</bim-label>` : table}
    </div>
  `;
};
