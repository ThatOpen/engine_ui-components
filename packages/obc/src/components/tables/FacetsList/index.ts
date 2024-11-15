import * as BUI from "@thatopen/ui";
import { facetsListTemplate, FacetsListState } from "./src";

export const facetsList = (state: FacetsListState) => {
  const element = BUI.Component.create<BUI.Table, FacetsListState>(
    facetsListTemplate,
    state,
  );

  const table = element[0];
  table.hiddenColumns = ["Cardinality"];

  return element;
};
