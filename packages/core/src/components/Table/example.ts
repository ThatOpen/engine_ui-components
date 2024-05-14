/* eslint-disable no-alert */
import { ref } from "lit/directives/ref.js";
import * as BUI from "../..";

BUI.Manager.registerComponents();

const table = document.body.querySelector<BUI.Table>("bim-table")!;

table.addEventListener("asd", () => {
  console.log("asd");
});

table.declarations = {
  Age: (value, data) => {
    const { Name } = data;
    if (Name === "Lisa") {
      const onChange = (e: Event) => {
        const input = e.target as BUI.NumberInput;
        data.Age = input.value;
      };
      return () => BUI.html`
        <bim-number-input @change=${onChange} slider min="23" value=${value} max="45"></bim-number-input>
      `;
    }
    if (Name === "Laura") {
      return () => {
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
      };
    }
    return value;
  },
  Career: (value, data) => {
    const { Name, Career } = data;
    if (Name === "Lisa") {
      return () => {
        return BUI.html`
          <bim-dropdown required>
            <bim-option label="Civil Engineer"></bim-option>
            <bim-option label="Architect"></bim-option>
          </bim-dropdown>
        `;
      };
    }
    if (Name === "Laura") {
      return `${Name} is ${Career}`;
    }
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
const preserveStructure = document.getElementById(
  "preserve-structure",
) as BUI.Checkbox;
searchBox.addEventListener("input", () => {
  if (searchBox.value !== "") {
    const result = table.filter(searchBox.value, preserveStructure.checked);
    // table.rows = table.applyDeclarations(result);
  } else {
    // table.rows = table.applyDeclarations(table.data);
  }
});

preserveStructure.addEventListener("change", () => {
  if (searchBox.value !== "") {
    const result = table.filter(searchBox.value, preserveStructure.checked);
    // table.rows = table.applyDeclarations(result);
  } else {
    // table.rows = table.applyDeclarations(table.data);
  }
});

// Optionally, use the columns property to control the columns order and width.
table.columns = [{ name: "Name", width: "10rem" }];

// You can add a new row programatically
const newRowBtn = document.getElementById("new-row") as BUI.Button;
newRowBtn.addEventListener("click", () => {
  const row = {
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
  table.rows = [...table.rows, row];
});

// You can get a resolved object with the current values of the table
const printBtn = document.getElementById("print-data") as BUI.Button;
printBtn.addEventListener("click", async () => {
  console.log(await table.value);
});

// You can download a JSON file with the current table data. This will let you recreate the table but with fixed values.
const downloadBtn = document.getElementById("download-data") as BUI.Button;
downloadBtn.addEventListener("click", () => {
  table.downloadData();
});
