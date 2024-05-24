/**
 * Heloooooooooo
 */
export interface HasValue {
  value: any;
  onValueChange: Event;
}

/**
 * Heloooooooooo
 */
export interface HasName {
  name?: string;
  label?: string;
}

// Query builder types
/**
 * Heloooooooooo
 */
export type QueryCondition = "=" | ">" | ">=" | "<" | "<=" | "?" | "/" | "#";

/**
 * Heloooooooooo
 */
export type QueryOperators = "&" | "|";

/**
 * Heloooooooooo
 */
export interface EntryQuery {
  operator?: QueryOperators;
  key: string;
  condition: QueryCondition;
  value: string | number | boolean;
}

/**
 * Heloooooooooo
 */
export interface QueryGroup {
  operator?: QueryOperators;
  queries: (EntryQuery | QueryGroup)[];
}

/**
 * Heloooooooooo
 */
export type Query = (EntryQuery | QueryGroup)[];

/**
 * Heloooooooooo
 */
export type ConditionFunctions = {
  [queryCondition in QueryCondition]: (
    leftValue: string | boolean | number,
    rightValue: string | boolean | number,
  ) => boolean;
};

// Initiator:
// $[]

// Operators:
// AND &
// OR |

// Conditions:
// equals =
// greater >
// greater than >=
// less <
// less than <=
// includes ?
// starts /
// match reg #

// Modifiers:
// negate !
// case sensitive !s

// Rules:
// 1. Enclose the value in '' is optional. The engine tries to guess the best it can the data type. If you really need to say for example 25 is a string and not a number, then you can enclose it in quotations: '25'.
// 2. You cannot negate greater, greater than, less, and less than.
// 3. In cases where you want to evaluate a condition for some keys with a common string in the name (for example: Name, LongName, etc), you can enclose the key in square brackets: [Name]?Wall

// Examples:
// $[Name=Lisa & Age=25]
// $[Name=Lisa & Age=25]
// $[Name?Lisa & (Age>25 & Age<30)]
// $[Entity?WALL & PredefinedType=SOLIDWALL & LoadBearing=true]

// All IfcWallStandardCase at Nivel 1
// type=IFCWALLSTANDARDCASE & (type=IFCBUILDINGSTOREY & Name=Nivel 1)
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

// All load bearing IfcWallStandardCase with 300 mm in the name at Nivel 2
// (type=IFCWALLSTANDARDCASE & Name?300mm) & (type=IFCPROPERTYSINGLEVALUE & Name=LoadBearing & NominalValue=true) & (type=IFCBUILDINGSTOREY & Name?Nivel 1)
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

// All slabs with a property set named Construction
// type=IFCSLAB & (type:IFCPROPERTYSET AND Name:Construction)
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
