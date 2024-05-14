import * as BUI from "@thatopen/ui";
import {
  spatialStructureTemplate,
  SpatialStructureUIState,
} from "./src/template";

export const spatialStructure = (state: SpatialStructureUIState) => {
  const element = BUI.Component.create<BUI.Table, SpatialStructureUIState>(
    spatialStructureTemplate,
    state,
  );

  return element;
};

export * from "./src/template";
