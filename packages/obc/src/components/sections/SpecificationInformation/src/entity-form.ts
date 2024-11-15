import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { entities } from "../../../dropdowns/IfcEntities";
import { predefinedTypes } from "../../../dropdowns/PredefinedTypes";

interface EntityFormState {
  components: OBC.Components;
  onSubmit?: (facet: OBC.IDSEntity) => void;
}

const formTransform = {
  name: (name: string[]) => {
    const value = Number(name[0]);
    const parameter: OBC.IDSSimpleParameter = {
      type: "simple",
      parameter: OBC.IfcElements[value],
    };
    return parameter;
  },
  predefinedType: (predefinedType: string[]) => {
    if (predefinedType.length === 0) return undefined;
    if (predefinedType.length === 1) {
      const parameter: OBC.IDSSimpleParameter = {
        type: "simple",
        parameter: predefinedType[0],
      };
      return parameter;
    }

    const parameter: OBC.IDSEnumerationParameter = {
      type: "enumeration",
      parameter: predefinedType,
    };
    return parameter;
  },
};

const template: BUI.StatefullComponent<EntityFormState> = (state) => {
  const { components } = state;
  const onSubmit = state.onSubmit ?? (() => {});

  const formID = `form-${BUI.Manager.newRandomId()}`;

  const onAccept = () => {
    const form = document.getElementById(formID);
    if (!form) return;
    const { name, predefinedType } = BUI.getElementValue(form, formTransform);
    const facet = new OBC.IDSEntity(components, name);
    facet.predefinedType = predefinedType;
    onSubmit(facet);
  };

  const [typesDropdown, updateTypesDropdown] = predefinedTypes();
  typesDropdown.name = "predefinedType";
  typesDropdown.vertical = true;
  typesDropdown.multiple = true;

  const entitiesDropdown = entities();
  entitiesDropdown.label = "IFC Entity *";
  entitiesDropdown.name = "name";
  entitiesDropdown.vertical = true;
  entitiesDropdown.required = true;

  entitiesDropdown.addEventListener("change", () => {
    const value = entitiesDropdown.value[0];
    if (value === undefined) return;
    updateTypesDropdown({ entity: value });
  });

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div id=${formID} style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${entitiesDropdown}
        ${typesDropdown}
      </div>
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        <bim-button style="flex: 0" label="Cancel"></bim-button>
        <bim-button @click=${onAccept} style="flex: 0" label="Accept"></bim-button>
      </div>
    </div>
  `;
};

export const entityForm = (state: EntityFormState) => {
  const element = BUI.Component.create<HTMLDivElement, EntityFormState>(
    template,
    state,
  );

  return element;
};
