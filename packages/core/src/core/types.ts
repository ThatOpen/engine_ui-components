/**
 * Represents an object that has a value and an event for value changes.
 */
export interface HasValue {
  value: any;
  onValueChange: Event;
}

/**
 * Represents an object that has a name and an optional label.
 */
export interface HasName {
  name?: string;
  label?: string;
}

/**
 * Represents a condition used in query building.
 */
export type QueryCondition = "=" | ">" | ">=" | "<" | "<=" | "?" | "/" | "#";

/**
 * Represents an operator used in query building.
 */
export type QueryOperators = "&" | "|";

/**
 * Represents a single query condition.
 */
export interface EntryQuery {
  operator?: QueryOperators;
  key: string;
  condition: QueryCondition;
  value: string | number | boolean;
}

/**
 * Represents a group of queries with an operator.
 */
export interface QueryGroup {
  operator?: QueryOperators;
  queries: (EntryQuery | QueryGroup)[];
}

/**
 * Represents a query, which can be a single query or a group of queries.
 */
export type Query = (EntryQuery | QueryGroup)[];

/**
 * Represents a map of condition functions, where the key is a QueryCondition and the value is a function that evaluates the condition.
 */
export type ConditionFunctions = {
  [queryCondition in QueryCondition]: (
    leftValue: string | boolean | number,
    rightValue: string | boolean | number,
  ) => boolean;
};

//... rest of the code

/**
 * Represents a query for all IfcWallStandardCase at Nivel 1.
 * @example type=IFCWALLSTANDARDCASE & (type=IFCBUILDINGSTOREY & Name=Nivel 1)
 */
// @ts-ignore
const wallsAtLevel1: Query = [
  { key: "type", condition: "=", value: "WEBIFC.IFCWALLSTANDARDCASE" },
  {
    operator: "&",
    queries: [
      {
        key: "type",
        condition: "=",
        value: "WEBIFC.IFCBUILDINGSTOREY",
      },
      {
        operator: "&",
        key: "Name",
        condition: "=",
        value: "Nivel 1",
      },
    ],
  },
];

/**
 * Represents a query for all load bearing IfcWallStandardCase with 300 mm in the name at Nivel 2.
 * @example (type=IFCWALLSTANDARDCASE & Name?300mm) & (type=IFCPROPERTYSINGLEVALUE & Name=LoadBearing & NominalValue=true) & (type=IFCBUILDINGSTOREY & Name?Nivel 1)
 */
// @ts-ignore
const loadBearing300mmWallsAtLevel2: QueryGroup[] = [
  {
    queries: [
      {
        queries: [
          {
            key: "type",
            condition: "=",
            value: "WEBIFC.IFCWALLSTANDARDCASE",
          },
          {
            operator: "&",
            key: "Name",
            condition: "?",
            value: "300mm",
          },
        ],
      },
      {
        operator: "&",
        queries: [
          {
            key: "type",
            condition: "=",
            value: "WEBIFC.IFCPROPERTYSINGLEVALUE",
          },
          {
            operator: "&",
            key: "Name",
            condition: "=",
            value: "LoadBearing",
          },
          {
            operator: "&",
            key: "NominalValue",
            condition: "=",
            value: true,
          },
        ],
      },
      {
        operator: "&",
        queries: [
          {
            key: "type",
            condition: "=",
            value: "WEBIFC.IFCBUILDINGSTOREY",
          },
          {
            operator: "&",
            key: "Name",
            condition: "=",
            value: "Nivel 2",
          },
        ],
      },
    ],
  },
];

/**
 * Represents a query for all slabs with a property set named Construction.
 * @example type=IFCSLAB & (type:IFCPROPERTYSET AND Name:Construction)
 */
// @ts-ignore
const slabsWithConstructionPset: QueryGroup[] = [
  {
    queries: [
      { key: "type", condition: "=", value: "WEBIFC.IFCSLAB" },
      {
        operator: "&",
        queries: [
          {
            key: "type",
            condition: "=",
            value: "WEBIFC.IFCPROPERTYSET",
          },
          {
            operator: "&",
            key: "Name",
            condition: "=",
            value: "Construction",
          },
        ],
      },
    ],
  },
];