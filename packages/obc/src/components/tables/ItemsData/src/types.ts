import * as OBC from "@thatopen/components";
import * as FRAGS from "@thatopen/fragments";

export type ModelIdMap = {
  [key: string]: Set<number>;
};

export type ItemsDataTableData = {
  modelId: string;
  localId: number;
  type: "item" | "relation" | "attribute";
  dataType: string;
  Name: string;
  Value: any;
  Actions: string;
};

/**
 * UI State to render an item data table
 */
export interface ItemsDataState {
  /**
   * The main entry point of @thatopen/components in your app
   */
  components: OBC.Components;
  /**
   * The collection of items per model to show its data in the table
   */
  modelIdMap: {
    [key: string]: Set<number>;
  };
  /**
   * Display a warning instead of the table in case there is no selection
   * @default true
   */
  emptySelectionWarning?: boolean;
  defaultItemNameKey?: string;
  itemsDataConfig?: FRAGS.ItemsDataConfig;
}
