import * as BUI from "@thatopen/ui";
import {
  idsSpecInformationTemplate,
  IDSSpecInformationSectionState,
} from "./src";

export const specificationInformation = (
  state: IDSSpecInformationSectionState,
) => {
  const element = BUI.Component.create<
    HTMLDivElement,
    IDSSpecInformationSectionState
  >(idsSpecInformationTemplate, state);

  return element;
};
