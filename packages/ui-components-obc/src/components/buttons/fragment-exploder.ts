import * as OBC from "openbim-components";
import { html } from "lit";

interface FragmentExploderUIState {
  exploder: OBC.FragmentExploder;
}

const template = (state: FragmentExploderUIState) => {
  const { exploder } = state;

  return html`
    <bim-button
      label="Explode"
      icon="icon-park-solid:split-branch"
      @click=${exploder.enabled ? exploder.reset() : exploder.explode()}
    ></bim-button>
  `;
};
