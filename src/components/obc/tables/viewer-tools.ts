// eslint-disable-next-line import/no-unresolved
import * as OBC from "openbim-components";
import { html } from "lit";

export const toolsPanelSection = (components: OBC.Components) => {
  const { tools } = components;

  const table = document.createElement("bim-table");
  requestAnimationFrame(() =>
    table.setIndentationColor(0, "var(--bim-ui_bg-contrast-20)"),
  );

  const { scene, camera, renderer, raycaster } = components;
  const coreComponents = [scene, camera, renderer, raycaster];

  for (const component of coreComponents) {
    if (component.isConfigurable() && component.tableGroupData) {
      table.rows = [...table.rows, component.tableGroupData];
    }
  }

  for (const name in tools.list) {
    const tool = tools.list[name];
    if (!(tool.isConfigurable() && tool.tableGroupData)) continue;
    table.rows = [...table.rows, tool.tableGroupData];
  }

  table.headersHidden = true;
  table.columns = [
    { name: "Name", width: "12rem" },
    // "Value",
    // { name: "Exposed", width: "7rem" }
  ];

  return html`
    <bim-panel-section label="Viewer Tools" icon="mdi:tools">
      ${table}
    </bim-panel-section>
  `;
};
