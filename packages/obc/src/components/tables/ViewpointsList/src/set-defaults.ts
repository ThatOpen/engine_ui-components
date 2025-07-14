import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import {
  ViewpointsListState,
  ViewpointsListTableData,
  ViewpointsListActions,
} from "./types";

export const setDefaults = (
  state: ViewpointsListState,
  table: BUI.Table<ViewpointsListTableData>,
) => {
  const { components, topic } = state;

  table.noIndentation = true;
  table.headersHidden = true;
  table.hiddenColumns = ["Guid"];
  table.columns = ["Title", { name: "Actions", width: "auto" }];

  const actions: ViewpointsListActions = {
    selectComponents: true,
    colorizeComponent: true,
    resetColors: true,
    updateCamera: true,
    delete: true,
    unlink: !!topic,
    ...state.actions,
  };

  const manager = components.get(OBC.Viewpoints);

  table.dataTransform = {
    Actions: (_, rowData) => {
      const { Guid } = rowData;
      if (!(Guid && typeof Guid === "string")) return _;
      const viewpoint = manager.list.get(Guid);
      if (!viewpoint) return _;

      const onGo = async ({ target }: { target: BUI.Button }) => {
        target.loading = true;
        await viewpoint.go();
        target.loading = false;
      };

      let selectButton: BUI.TemplateResult | undefined;
      if (actions.selectComponents) {
        const onSelect = async ({ target }: { target: BUI.Button }) => {
          const fragments = components.get(OBC.FragmentsManager);
          const highlighter = components.get(OBF.Highlighter);
          if (!highlighter.isSetup) return;
          target.loading = true;
          const modelIdMap = await fragments.guidsToModelIdMap([
            ...viewpoint.selectionComponents,
          ]);
          await highlighter.highlightByID("select", modelIdMap);
          target.loading = false;
        };

        selectButton = BUI.html`
          <bim-button label="Select Components" @click=${onSelect}></bim-button>
        `;
      }

      let colorizeButton: BUI.TemplateResult | undefined;
      if (actions.colorizeComponent) {
        const onColorize = async ({ target }: { target: BUI.Button }) => {
          target.loading = true;
          await viewpoint.setColorizationState(true);
          target.loading = false;
        };

        colorizeButton = BUI.html`
          <bim-button label="Colorize Components" @click=${onColorize}></bim-button>
        `;
      }

      let resetColorsButton: BUI.TemplateResult | undefined;
      if (actions.resetColors) {
        const onReset = async ({ target }: { target: BUI.Button }) => {
          target.loading = true;
          await viewpoint.setColorizationState(false);
          target.loading = false;
        };

        resetColorsButton = BUI.html`
          <bim-button label="Reset Colors" @click=${onReset}></bim-button>
        `;
      }

      let updateCameraButton: BUI.TemplateResult | undefined;
      if (actions.updateCamera) {
        const onUpdate = () => viewpoint.updateCamera();
        updateCameraButton = BUI.html`
          <bim-button label="Update Camera" @click=${onUpdate}></bim-button>
        `;
      }

      let unlinkButton: BUI.TemplateResult | undefined;
      if (actions.unlink) {
        const onUnlink = () => topic?.viewpoints.delete(viewpoint.guid);
        unlinkButton = BUI.html`
          <bim-button label="Unlink" @click=${onUnlink}></bim-button>
        `;
      }

      let deleteButton: BUI.TemplateResult | undefined;
      if (actions.delete) {
        const onDelete = () => {
          manager.list.delete(viewpoint.guid);
          BUI.ContextMenu.removeMenus();
        };

        deleteButton = BUI.html`
          <bim-button label="Delete" @click=${onDelete}></bim-button>
        `;
      }

      let actionsButton: BUI.TemplateResult | undefined;
      if (Object.values(actions).includes(true)) {
        actionsButton = BUI.html`
          <bim-button icon="prime:ellipsis-v">
            <bim-context-menu>
              ${selectButton}
              ${colorizeButton}
              ${resetColorsButton}
              ${updateCameraButton}
              ${unlinkButton}
              ${deleteButton}
            </bim-context-menu>
          </bim-button>
        `;
      }

      return BUI.html`
        <bim-button icon="ph:eye-fill" @click=${onGo}></bim-button>
        ${actionsButton}
      `;
    },
  };
};
