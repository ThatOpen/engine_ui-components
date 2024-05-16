import * as BUI from "../..";
import { TableGroupData } from "../Table";
import { QueryCondition } from "../../core/types";
import { data } from "./data";

BUI.Manager.registerComponents();

const nameInput = document.querySelector<BUI.TextInput>(
  "bim-text-input[name='name']",
)!;

nameInput.addEventListener("input", () => {
  console.log("asd");
});

const preserveStructureOnFilter = true;

function evalCondition(
  left: string | boolean | number,
  condition: QueryCondition,
  right: string | boolean | number,
) {
  let result = false;
  switch (condition) {
    case "=":
      result = left === right;
      break;

    case "?":
      result = String(left).includes(String(right));
      break;

    default:
      break;
  }
  return result;
}

const validationFunction = (_query: string, data: TableGroupData) => {
  let valueFoundInData = true;
  const query = nameInput.query;

  for (const search of query) {
    if (!valueFoundInData) continue;
    if ("queries" in search) {
      valueFoundInData = false;
      continue;
    }
    const { key, condition, value } = search;
    valueFoundInData = evalCondition(data.data[key], condition, value);
  }

  return valueFoundInData;
};

function filter(query: string, data: TableGroupData[]): TableGroupData[] {
  const results: TableGroupData[] = [];
  for (const row of data) {
    const valueFoundInData = validationFunction(query, row);

    if (valueFoundInData) {
      if (preserveStructureOnFilter) {
        const rowToAdd: TableGroupData = { data: row.data };
        if (row.children) {
          const childResults = filter(query, row.children);
          if (childResults.length) rowToAdd.children = childResults;
        }
        results.push(rowToAdd);
      } else {
        results.push({ data: row.data });
        if (row.children) {
          const childResults = filter(query, row.children);
          results.push(...childResults);
        }
      }
    } else if (row.children) {
      const childResults = filter(query, row.children);
      if (preserveStructureOnFilter && childResults.length) {
        results.push({
          data: row.data,
          children: childResults,
        });
      } else {
        results.push(...childResults);
      }
    }
  }
  return results;
}

const getQuery = document.getElementById("get-query") as BUI.TextInput;
getQuery.addEventListener("click", () => {
  console.log(filter(nameInput.value, data));
});
