import * as BUI from "@thatopen/ui";
import { ItemsDataState, ItemsDataTableData } from "./types";

export const setDefaults = (
  _state: ItemsDataState,
  table: BUI.Table<ItemsDataTableData>,
) => {
  table.columns = [{ name: "Name", width: "12rem" }];
  table.hiddenColumns = ["modelId", "localId", "Actions", "type"]
  table.headersHidden = true;
};
