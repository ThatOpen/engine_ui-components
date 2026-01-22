import * as OBC from "@thatopen/components";

export type ChartAttributesState = {
  type: string;
  missingDataMessage?: string;
  attribute: RegExp;
  modelId: string;
  category: RegExp;
  components: OBC.Components;
  addLabels?: boolean;
  highlight?: { zoom?: boolean }
};
