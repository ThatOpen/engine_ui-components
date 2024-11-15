import * as OBC from "@thatopen/components";

export interface FacetsListState {
  components: OBC.Components;
  facets: Iterable<OBC.IDSFacet>;
}

export type FacetsListTableData = {
  Name: OBC.IDSFacetParameterName | OBC.IDSFacetType;
  Cardinality: string;
  Value: string;
};
