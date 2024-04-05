// eslint-disable-next-line import/no-unresolved
import * as OBC from "openbim-components";
import { html } from "lit";
import { loadIfcBtn } from "../buttons";

export const importToolbarSection = (state: { viewer: OBC.Components }) => {
  const { viewer } = state;
  const ifcLoader = viewer.tools.get(OBC.FragmentIfcLoader);

  return html`
    <bim-toolbar label="Import" active>
      <bim-toolbar-section label="OpenBIM">
        ${loadIfcBtn({ loader: ifcLoader, scene: viewer.scene.get() })}
        <bim-toolbar-group>
          <bim-button label="BCF" icon="ri:todo-fill"></bim-button>
          <bim-button label="IDS" icon="ri:information-2-fill"></bim-button>
        </bim-toolbar-group>
      </bim-toolbar-section>
    </bim-toolbar>
  `;
};
