export interface HasValue {
  value: any
  onValueChange: Event
}

export interface HasName {
  name?: string
  label?: string
}

// Query builder types

export type QueryConditions =
  | "is"
  | "includes"
  | "startsWith"
  | "endsWith"
  | "matches";

export type ConditionFunctions = {
  [queryCondition in QueryConditions]: (
    leftValue: string | boolean | number,
    rightValue: string | boolean | number
  ) => boolean;
};

export type QueryOperators = "AND" | "OR";

export interface EntryQuery {
  operator?: QueryOperators;
  key: string;
  condition: QueryConditions;
  value: string | number | boolean;
}

export interface QueryGroup {
  operator?: QueryOperators;
  queries: (EntryQuery | QueryGroup)[];
}