import * as OBC from "@thatopen/components";

export type ChartCategoriesState = {
  type: string;
  missingDataMessage?: string;
  modelIdMap: OBC.ModelIdMap;
  components: OBC.Components;
  addLabels?: boolean;
};
