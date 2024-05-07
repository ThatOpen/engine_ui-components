import * as BUI from "@thatopen/ui";
import { loadIfcTemplate, LoadIfcUIState } from "./src/template";

export const loadIfc = (state: LoadIfcUIState) => {
  const element = BUI.Component.create<BUI.Button, LoadIfcUIState>(
    loadIfcTemplate,
    state,
  );

  return element;
};
