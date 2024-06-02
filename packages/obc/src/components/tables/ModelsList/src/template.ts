import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

export interface ModelsListUIState {
  components: OBC.Components;
  schemaTag?: boolean;
  viewDefinitionTag?: boolean;
}

export const modelsListTemplate = (state: ModelsListUIState) => {
  const { components, schemaTag, viewDefinitionTag } = state;

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

      let schemaTagTemplate: BUI.TemplateResult | undefined;
      const { schema } = model.ifcMetadata;
      if ((schemaTag === undefined || schemaTag === true) && schema) {
        schemaTagTemplate = BUI.html`
          <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${schema}</bim-label>
          `;
      }

      let viewDefinitionTagTemplate: BUI.TemplateResult | undefined;
      if (
        (viewDefinitionTag === undefined || viewDefinitionTag === true) &&
        "viewDefinition" in model.ifcMetadata
      ) {
        viewDefinitionTagTemplate = BUI.html`
          <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${model.ifcMetadata.viewDefinition}</bim-label>
        `;
      }

      const onDeleteClick = () => fragments.disposeGroup(model);

      const onHideClick = (e: Event) => {
        model.visible = !model.visible;
        const button = e.target as BUI.Button;
        button.icon = model.visible ? "mdi:eye" : "mdi:eye-off";
      };

      return BUI.html`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${value}</bim-label>
          </div>
          ${schemaTagTemplate}
          ${viewDefinitionTagTemplate}
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
