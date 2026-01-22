import * as OBC from "@thatopen/components";

export type ChartIDSState = {
  type: string;
  missingDataMessage?: string;
  idsResult: OBC.IDSCheckResult | OBC.IDSCheckResult[];
  addLabels?: boolean;
  components: OBC.Components;
};

export type GuidStatus = { Passed: string[]; Failed: string[] };
export type GuidsMap = { [modelId: string]: GuidStatus };
