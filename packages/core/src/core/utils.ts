import { EntryQuery, Query, QueryCondition, QueryGroup } from "./types";

export const getElementValue = (child: HTMLElement, recursive = true) => {
  let value: Record<string, any> = {};
  for (const _child of child.children) {
    const child = _child as any;
    const key = child.getAttribute("name") || child.getAttribute("label");
    if (key) {
      if ("value" in child) {
        const childValue = child.value;
        const isObject =
          typeof childValue === "object" && !Array.isArray(childValue);
        if (isObject && Object.keys(childValue).length === 0) continue;
        value[key] = child.value;
      } else if (recursive) {
        const childValue = getElementValue(child);
        if (Object.keys(childValue).length === 0) continue;
        value[key] = childValue;
      }
    } else if (recursive) {
      value = { ...value, ...getElementValue(child) };
    }
  }
  return value;
};

export const convertString = (value: string) => {
  if (value === "true" || value === "false") {
    return value === "true";
  }
  // eslint-disable-next-line no-restricted-globals
  if (value && !isNaN(Number(value)) && value.trim() !== "") {
    return Number(value);
  }
  return value;
};

// QueryString logic
const conditions = ["=", ">", ">=", "<", "<=", "?", "/", "#"];

function parseSearch(search: string) {
  const condition = conditions.filter(
    (condition) => search.split(condition).length === 2,
  )[0] as QueryCondition;
  const splitQuery = search.split(condition).map((value) => value.trim());
  const [key, _value] = splitQuery;
  const value =
    _value.startsWith("'") && _value.endsWith("'")
      ? _value.replace(/'/g, "")
      : convertString(_value);
  const entryQuery: EntryQuery = { key, condition, value };
  return entryQuery;
}

export const getQuery = (queryString: string) => {
  try {
    const queryGroup: Query = [];
    const entryAndGroupQueries = queryString
      .split(/&(?![^()]*\))/)
      .map((value) => value.trim());

    for (const query of entryAndGroupQueries) {
      const isEntryQuery = !query.startsWith("(") && !query.endsWith(")");
      const isGroupQuery = query.startsWith("(") && query.endsWith(")");
      if (isEntryQuery) {
        const entryQuery = parseSearch(query);
        queryGroup.push(entryQuery);
      }
      if (isGroupQuery) {
        const cleanedQuery = query.replace(/^(\()|(\))$/g, "");
        const searches = cleanedQuery.split("&").map((search) => search.trim());
        const queries = searches.map((search, index) => {
          const entryQuery = parseSearch(search);
          if (index > 0) entryQuery.operator = "&";
          return entryQuery;
        });
        const group: QueryGroup = {
          operator: "&",
          queries,
        };
        queryGroup.push(group);
      }
    }
    return queryGroup;
  } catch (error) {
    return null;
  }
};

export const evalCondition = (
  left: string | boolean | number,
  condition: QueryCondition,
  right: string | boolean | number,
) => {
  let result = false;
  switch (condition) {
    case "=":
      result = left === right;
      break;

    case "?":
      result = String(left).includes(String(right));
      break;

    case "<":
      if (typeof left === "number" || typeof right === "number") {
        result = left < right;
      }
      break;

    case "<=":
      if (typeof left === "number" || typeof right === "number") {
        result = left <= right;
      }
      break;

    case ">":
      if (typeof left === "number" || typeof right === "number") {
        result = left > right;
      }
      break;

    case ">=":
      if (typeof left === "number" || typeof right === "number") {
        result = left >= right;
      }
      break;

    case "/":
      result = String(left).startsWith(String(right));
      break;

    default:
      break;
  }
  return result;
};
