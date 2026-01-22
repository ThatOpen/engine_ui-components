import { EntryQuery, Query, QueryCondition, QueryGroup } from "./types";

/**
 * Extracts and returns the value of an HTML element's attributes.
 * @param child - The HTML element to extract values from.
 * @param recursive - Whether to recursively extract values from child elements. Default is true.
 * @returns An object containing the extracted values.
 */
export const getElementValue = <
  T extends Record<string, any> = Record<string, any>,
>(
  child: HTMLElement,
  transform: { [K in keyof T]?: (value: any) => any } = {},
  recursive = true,
) => {
  let value = {} as T;
  for (const _child of child.children) {
    const child = _child as any;
    const key = (child.getAttribute("name") || child.getAttribute("label")) as
      | keyof T
      | null;
    const keyTransform = key ? transform[key] : undefined;
    if (key) {
      if (
        "value" in child &&
        typeof child.value !== "undefined" &&
        child.value !== null
      ) {
        const childValue = child.value;
        const isObject =
          typeof childValue === "object" && !Array.isArray(childValue);
        if (isObject && Object.keys(childValue).length === 0) continue;
        value[key] = keyTransform ? keyTransform(child.value) : child.value;
      } else if (recursive) {
        const childValue = getElementValue(child, transform);
        if (Object.keys(childValue).length === 0) continue;
        value[key] = keyTransform ? keyTransform(childValue) : childValue;
      }
    } else if (recursive) {
      value = { ...value, ...getElementValue(child, transform) };
    }
  }
  return value;
};

/**
 * Converts a string to a boolean, number, or string based on its value.
 * @param value - The string to convert.
 * @returns The converted value.
 */
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

/**
 * QueryString logic. Conditions with more than one symbol must be set first
 */
const conditions = [">=", "<=", "=", ">", "<", "?", "/", "#"];

/**
 * Parses a search query and returns an EntryQuery object.
 * @param search - The search query to parse.
 * @returns The parsed EntryQuery object.
 */
function parseSearch(search: string) {
  const condition = conditions.find(
    (condition) => search.split(condition).length === 2,
  ) as QueryCondition;
  const splitQuery = search.split(condition).map((value) => value.trim());
  const [key, _value] = splitQuery;
  const value =
    _value.startsWith("'") && _value.endsWith("'")
      ? _value.replace(/'/g, "")
      : convertString(_value);
  const entryQuery: EntryQuery = { key, condition, value };
  return entryQuery;
}

/**
 * Parses a query string and returns a Query object.
 * @param queryString - The query string to parse.
 * @returns The parsed Query object or null if parsing fails.
 */
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

/**
 * Evaluates a condition and returns the result.
 * @param left - The left operand.
 * @param condition - The condition to evaluate.
 * @param right - The right operand.
 * @returns The result of the evaluation.
 */
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

export class Event<T> {
  enabled = true;

  add(handler: (data: T) => void ) {
    this.handlers.push(handler);
  }

  remove(handler: (data: T) => void ) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }

  trigger = (data?: T) => {
    if (!this.enabled) return;
    const handlers = this.handlers.slice(0);
    for (const handler of handlers) {
      handler(data as any);
    }
  };

  reset() {
    this.handlers.length = 0;
  }

  private handlers: ((data: T) => void)[] = [];
}

export class DataSet<T> extends Set<T> {
  readonly onUpdated = new Event<undefined>();

  readonly onItemAdded = new Event<T>();

  readonly onBeforeDelete = new Event<T>();

  readonly onItemDeleted = new Event<T>();

  readonly onCleared = new Event();

  set eventsEnabled(value: boolean) {
    this.onUpdated.enabled = value;
    this.onItemAdded.enabled = value;
    this.onItemDeleted.enabled = value;
    this.onBeforeDelete.enabled = value;
    this.onCleared.enabled = value;
  }

  constructor(iterable?: Iterable<T> | null) {
    super(iterable);
  }

  clear() {
    for (const item of this) {
      this.onBeforeDelete.trigger(item);
    }
    super.clear();
    this.onCleared.trigger();
    this.onUpdated.trigger();
  }

  add(...value: T[]) {
    for (const item of value) {
      const existing = this.has(item);
      if (existing) continue;
      const guard = this.guard ?? (() => true);
      const isValid = guard(item);
      if (!isValid) continue;
      super.add(item);
      if (!this.onItemAdded) (this.onItemAdded as any) = new Event<T>();
      this.onItemAdded.trigger(item);
    }
    if (!this.onUpdated) (this.onUpdated as any) = new Event<undefined>();
    this.onUpdated.trigger();
    return this;
  }

  guard: (value: T) => boolean = () => true;
  deleteGuard: (value: T) => boolean = () => true;

  delete(value: T) {
    const exist = this.has(value);
    if (!exist) return false;
    if (!this.deleteGuard(value)) return false;
    this.onBeforeDelete.trigger(value);
    const deleted = super.delete(value);
    if (deleted) {
      this.onItemDeleted.trigger(value);
      this.onUpdated.trigger();
    }
    return deleted;
  }

  deleteIf(predicate: (value: T) => boolean) {
    for (const v of this) {
      if (predicate(v)) {
        this.delete(v);
      }
    }
  }

  getIndex(item: T) {
    let index = 0;
    for (const value of this) {
      if (value === item) return index;
      index++;
    }
    return -1;
  }

  dispose() {
    this.clear();
    this.onItemAdded.reset();
    this.onItemDeleted.reset();
    this.onCleared.reset();
    this.onBeforeDelete.reset();
    this.onUpdated.reset();
  }
}
