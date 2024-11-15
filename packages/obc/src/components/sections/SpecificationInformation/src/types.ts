import * as OBC from "@thatopen/components";

export interface IDSSpecInformationSectionActions {
  update: boolean;
}

export interface IDSSpecInformationSectionState {
  components: OBC.Components;
  specification: OBC.IDSSpecification;
  editing?: boolean;
  // styles?: Partial<TopicStyles>;
  actions?: Partial<IDSSpecInformationSectionActions>;
}
