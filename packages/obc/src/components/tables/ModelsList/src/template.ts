// eslint-disable-next-line import/no-extraneous-dependencies
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";

export interface ModelsListUIState {
  components: OBC.Components;
  tags?: {
    schema?: boolean;
    viewDefinition?: boolean;
  };
  actions?: {
    visibility?: boolean;
    download?: boolean;
    dispose?: boolean;
  };
}

export const modelsListTemplate = (state: ModelsListUIState) => {
  const { components, actions, tags } = state;

  const disposeBtn = actions?.dispose ?? true;
  const downloadBtn = actions?.download ?? true;
  const visibilityBtn = actions?.visibility ?? true;
  const schemaTag = tags?.schema ?? true;
  const viewDefinitionTag = tags?.viewDefinition ?? true;

  const fragments = components.get(OBC.FragmentsManager);

  const onCellCreated = ({
    detail,
  }: CustomEvent<BUI.CellCreatedEventDetail>) => {
    const { cell } = detail;
    cell.style.padding = "0.25rem 0";
  };

  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table;
    table.hiddenColumns = ["modelID"];
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

        let disposeTemplate: BUI.TemplateResult | undefined;
        if (disposeBtn) {
          const onDisposeClick = () => fragments.disposeGroup(model);
          disposeTemplate = BUI.html`<bim-button @click=${onDisposeClick} icon="mdi:delete"></bim-button>`;
        }

        let visibilityTemplate: BUI.TemplateResult | undefined;
        if (visibilityBtn) {
          const onHideClick = (e: Event) => {
            const hider = components.get(OBC.Hider);
            const button = e.target as BUI.Button;
            hider.set(button.hasAttribute("data-model-hidden"), modelIdMap);
            button.toggleAttribute("data-model-hidden");
            button.icon = button.hasAttribute("data-model-hidden")
              ? "mdi:eye-off"
              : "mdi:eye";
          };
          visibilityTemplate = BUI.html`<bim-button @click=${onHideClick} icon="mdi:eye"></bim-button>`;
        }

        let downloadTemplate: BUI.TemplateResult | undefined;
        if (downloadBtn) {
          const onSaveClick = () => {
            const input = document.createElement("input");
            input.type = "file";
            input.accept = ".ifc";
            input.multiple = false;
            input.addEventListener("change", async () => {
              if (!(input.files && input.files.length === 1)) return;
              const originalFile = input.files[0];
              const originalBuffer = await originalFile.arrayBuffer();
              const propsManager = components.get(OBC.IfcPropertiesManager);
              const modifiedBuffer = await propsManager.saveToIfc(
                model,
                new Uint8Array(originalBuffer),
              );
              const modifiedFile = new File(
                [modifiedBuffer],
                originalFile.name,
              );
              const a = document.createElement("a");
              a.href = URL.createObjectURL(modifiedFile);
              a.download = modifiedFile.name;
              a.click();
              URL.revokeObjectURL(a.href);
            });
            input.click();
          };
          downloadTemplate = BUI.html`<bim-button @click=${onSaveClick} icon="flowbite:download-solid"></bim-button>`;
        }

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
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${downloadTemplate}
            ${visibilityTemplate}
            ${disposeTemplate}
          </div>
         </div>
        `;
      },
    };

    table.data = rowGroups;
  };

  return BUI.html`
    <bim-table ${BUI.ref(onTableCreated)} @cellcreated=${onCellCreated} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `;
};
