// eslint-disable-next-line import/no-unresolved
import * as OBC from "openbim-components";
import * as BUI from "@thatopen/ui-components";

export const toolsTable = (state: { components: OBC.Components }) => {
  const { components } = state;
  const { tools } = components;

  const table = document.createElement("bim-table");
  // requestAnimationFrame(() =>
  //   table.setIndentationColor(0, "var(--bim-ui_bg-contrast-20)"),
  // );

  const { scene, camera, renderer, raycaster } = components;
  const coreComponents = [scene, camera, renderer, raycaster];

  for (const component of coreComponents) {
    if ("tableGroupData" in component) {
      const configTableGroup = component.tableGroupData as BUI.TableGroupData;
      table.rows = [...table.rows, configTableGroup];
    }
  }

  for (const name in tools.list) {
    const tool = tools.list[name];
    if (!("tableGroupData" in tool)) continue;
    const configTableGroup = tool.tableGroupData as BUI.TableGroupData;
    table.rows = [...table.rows, configTableGroup];
  }

  table.headersHidden = true;
  table.columns = [
    { name: "Name", width: "9rem" },
    // "Value",
    // { name: "Exposed", width: "7rem" }
  ];

  return BUI.html` <bim-panel label="Settings">
    <bim-panel-section label="Tools" icon="tabler:hammer"
      >${table}
    </bim-panel-section>
  </bim-panel>`;
};
