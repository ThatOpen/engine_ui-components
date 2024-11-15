// import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { IDSSpecInformationSectionState } from "./types";

export const idsSpecInformationTemplate: BUI.StatefullComponent<
  IDSSpecInformationSectionState
> = (state, update) => {
  const { specification, editing } = state;

  let formTemplate: BUI.TemplateResult | undefined;
  let sectionTemplate: BUI.TemplateResult | undefined;

  if (editing) {
    const acceptBtnID = `btn-${BUI.Manager.newRandomId()}`;
    const cancelBtnID = `btn-${BUI.Manager.newRandomId()}`;

    formTemplate = BUI.html`
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: flex; gap: 0.375rem">
          <bim-text-input @input=${() => {}} vertical label="Name" name="name" value=${specification.name}></bim-text-input>
        </div>

        <div style="justify-content: right; display: flex; gap: 0.375rem">
          <style>
            #${cancelBtnID} {
              background-color: transparent;
            }

            #${cancelBtnID}:hover {
              --bim-label--c: #FF5252;
            }

            #${acceptBtnID}:hover {
              background-color: #329936;
            }
          </style>
          <bim-button id=${cancelBtnID} style="flex: 0" @click=${() => {
            update({ editing: false });
          }} label="Cancel"></bim-button>
          <bim-button id=${acceptBtnID} style="flex: 0" @click=${() => {}} ${BUI.ref(() => {})} label=${specification ? "Update Specification" : "Add Specification"} icon=${specification ? "tabler:refresh" : "mi:add"}></bim-button>
        </div>
      </div> 
    `;
  } else {
    sectionTemplate = BUI.html`
      <div>
        <bim-label>Name</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${specification.name}</bim-label>
      </div>

      ${
        specification.description
          ? BUI.html`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${specification.description}</bim-label>
            </div>
          `
          : null
      }

      <div>
        <bim-label>IFC Versions</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">
          ${[...specification.ifcVersion].join(", ")}
        </bim-label>
      </div>

      
      ${
        specification.instructions
          ? BUI.html`
            <div>
              <bim-label>Instructions</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${specification.instructions}</bim-label>
            </div>
          `
          : null
      }

      ${
        true
          ? BUI.html`
              <bim-button @click=${() => update({ editing: true })} label="Update Information" icon="tabler:refresh"></bim-button> 
            `
          : null
      }
    `;
  }

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${formTemplate}
      ${sectionTemplate}
    </div>
  `;
};
