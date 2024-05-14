/* eslint-disable no-alert */
import { ref } from "lit/directives/ref.js";
import * as BUI from "../..";

BUI.Manager.registerComponents();

const table = document.body.querySelector<BUI.Table>("bim-table")!;

table.definition = {
  Age: (value, data) => {
    const { Name } = data;
    if (Name === "Lisa") {
      const onChange = (e: Event) => {
        const input = e.target as BUI.NumberInput;
        data.Age = input.value;
      };
      return BUI.html`
        <bim-number-input @change=${onChange} slider min="23" value=${value} max="45"></bim-number-input>
      `;
    }
    if (Name === "Laura") {
      const onChange = (e: Event) => {
        const selectorInput = e.target as BUI.SelectorInput;
        alert(`${data.Name}'s age is ${selectorInput.value}.`);
        data.Age = selectorInput.value;
      };

      const onCreated = (e?: Element) => {
        if (!e) return;
        const input = e as BUI.SelectorInput;
        input.value = data.Age;
      };
      return BUI.html`
        <bim-selector-input ${ref(onCreated)} @change=${onChange}>
          <bim-option label="👶" value="3"></bim-option>
          <bim-option label="👨" value="32"></bim-option>
          <bim-option label="👴" value="80"></bim-option>
        </bim-selector-input>
      `;
    }
    return value;
  },
  Career: (value, data) => {
    const { Name, Career } = data;
    if (Name === "Lisa") {
      const onChange = (e: Event) => {
        const dropdown = e.target as BUI.Dropdown;
        data.Career = dropdown.value[0];
      };

      const onCreated = (e?: Element) => {
        if (!e) return;
        const dropdown = e as BUI.Dropdown;
        dropdown.value = [Career];
      };

      return BUI.html`
        <bim-dropdown required ${ref(onCreated)} @change=${onChange}>
          <bim-option label="Civil Engineer"></bim-option>
          <bim-option label="Architect"></bim-option>
        </bim-dropdown>
      `;
    }
    if (Name === "Laura") return `${Name} is ${Career}`;
    return value;
  },
  Comments: (value) => {
    if (typeof value !== "string") return value;
    const textInput = document.createElement("bim-text-input");
    textInput.value = value;
    return textInput;
  },
};

table.data = [
  {
    data: {
      Name: "Jhon",
      Age: 28,
      Career: "Civil Engineer",
      Comments: "",
    },
    children: [
      {
        data: {
          Name: "James",
          Age: 20,
          Career: "Unemployed",
          Comments: "",
        },
      },
      {
        data: {
          Name: "Lisa",
          Age: 25,
          Career: "Architect",
          Comments: "It's great!",
        },
      },
    ],
  },
  {
    data: {
      Name: "George",
      Age: 32,
      Career: "Architect",
      Comments: "",
    },
    children: [
      {
        data: {
          Name: "Laura",
          Age: 32,
          Career: "Studying",
          Comments: "",
        },
        children: [
          {
            data: {
              Name: "Elizabeth",
              Age: 12,
              Career: "Too baby",
              Comments: "",
            },
            children: [
              {
                data: {
                  Name: "Christina",
                  Age: 11,
                  Career: "N/A",
                  Comments: "",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

const searchBox = document.getElementById("search-box") as BUI.TextInput;
searchBox.addEventListener("input", () => {
  table.queryString = searchBox.value !== "" ? searchBox.value : null;
});

const preserveStructure = document.getElementById(
  "preserve-structure",
) as BUI.Checkbox;

table.preserveStructureOnFilter = preserveStructure.checked;

preserveStructure.addEventListener("change", () => {
  table.preserveStructureOnFilter = preserveStructure.checked;
});

// Optionally, use the columns property to control the columns order and width.
table.columns = [{ name: "Name", width: "10rem" }];

// You can add a new row programatically
const newRowBtn = document.getElementById("new-row") as BUI.Button;
newRowBtn.addEventListener("click", () => {
  const row: BUI.TableGroupData = {
    data: {
      Name: "Bart",
      Age: 2,
    },
    children: [
      {
        data: {
          Name: "Homer",
          Age: 80,
        },
      },
    ],
  };

  table.data = [...table.data, row];
});

// You can get an object with the current values of the table taking into account any filtering
const printBtn = document.getElementById("print-data") as BUI.Button;
printBtn.addEventListener("click", () => {
  console.log(table.value);
});

// You can download a JSON file with the current table data. This will let you recreate the table but with fixed values.
const downloadBtn = document.getElementById("download-data") as BUI.Button;
downloadBtn.addEventListener("click", () => {
  table.downloadData();
});
