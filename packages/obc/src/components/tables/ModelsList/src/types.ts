import * as OBC from "@thatopen/components";

export interface ModelsListState {
  components: OBC.Components;
  missingDataMessage?: string;
  metaDataTags?: string[];
  actions?: {
    visibility?: boolean;
    download?: boolean;
    dispose?: boolean;
  };
}

export type ModelsListTableData = {
  Name: string;
  modelId: string;
  metadata: string;
};
