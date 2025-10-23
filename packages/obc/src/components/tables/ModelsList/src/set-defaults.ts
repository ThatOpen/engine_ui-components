import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { ModelsListState, ModelsListTableData } from "./types";

export const setDefaults = (
  state: ModelsListState,
  table: BUI.Table<ModelsListTableData>,
) => {
  const { components, actions, metaDataTags } = state;

  const fragments = components.get(OBC.FragmentsManager);
  const disposeBtn = actions?.dispose ?? true;
  const downloadBtn = actions?.download ?? true;
  const visibilityBtn = actions?.visibility ?? true;
  const tags = metaDataTags ?? [];

  // table.columns = [{ name: "Name", width: "12rem" }];
  table.hiddenColumns = ["modelId", "metadata"];
  table.headersHidden = true;
  table.noIndentation = true;
  table.dataTransform = {
    Name: (value, row) => {
      if (!fragments.initialized) return value
      const { modelId, metadata } = row;
      if (!modelId) return value;
      const model = fragments.list.get(modelId);
      if (!model) return modelId;

      const tagTemplates: BUI.TemplateResult[] = [];
      if (metadata) {
        const data = JSON.parse(metadata) as Record<string, any>;
        for (const tag of tags) {
          const value = data[tag];
          if (
            !(
              typeof value === "string" ||
              typeof value === "boolean" ||
              typeof value === "number"
            )
          )
            continue;
          const template = BUI.html`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${value}</bim-label>
            `;
          tagTemplates.push(template);
        }
      }

      let disposeTemplate: BUI.TemplateResult | undefined;
      if (disposeBtn) {
        const onDisposeClick = () => fragments.core.disposeModel(model.modelId);
        disposeTemplate = BUI.html`<bim-button @click=${onDisposeClick} icon="mdi:delete"></bim-button>`;
      }

      let visibilityTemplate: BUI.TemplateResult | undefined;
      if (visibilityBtn) {
        const onHide = async ({ target }: { target: BUI.Button }) => {
          target.loading = true;
          await model.setVisible(
            undefined,
            target.hasAttribute("data-model-hidden"),
          );
          await fragments.core.update(true);
          target.toggleAttribute("data-model-hidden");
          target.icon = target.hasAttribute("data-model-hidden")
            ? "mdi:eye-off"
            : "mdi:eye";
          target.loading = false;
        };
        visibilityTemplate = BUI.html`<bim-button @click=${onHide} icon="mdi:eye"></bim-button>`;
      }

      let downloadTemplate: BUI.TemplateResult | undefined;
      if (downloadBtn) {
        const onDownloadClick = async () => {
          const bytes = await model.getBuffer(false);
          const file = new File([bytes], `${model.modelId}.frag`);
          const a = document.createElement("a");
          a.href = URL.createObjectURL(file);
          a.download = file.name;
          a.click();
          URL.revokeObjectURL(a.href);
        };
        downloadTemplate = BUI.html`<bim-button @click=${onDownloadClick} icon="flowbite:download-solid"></bim-button>`;
      }

      return BUI.html`
       <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
          <div style="min-height: 1.75rem; overflow: auto; display: flex;">
            <bim-label style="white-space: normal;">${value}</bim-label>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
            ${tagTemplates}
          </div>
        </div>
        <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
          ${downloadTemplate}
          ${visibilityTemplate}
          ${disposeTemplate}
        </div>
       </div>
      `;
    },
  };
};
