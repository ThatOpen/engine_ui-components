/* eslint-disable no-alert */
import { ref } from "lit/directives/ref.js";
import * as BUI from "../..";

BUI.UIManager.registerComponents();

const table = document.body.querySelector<BUI.Table>("bim-table")!;

table.rows = [
  {
    onRowCreated(row) {
      row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "var(--bim-ui_bg-contrast-20)";
      });

      row.addEventListener("mouseleave", () => {
        row.style.backgroundColor = "transparent";
      });
    },
    data: {
      Name: "Jhon",
      Age: "28",
      Career: "Civil Engineer",
      Comments: document.createElement("bim-text-input"),
    },
    children: [
      {
        data: {
          Name: "James",
          Age: "20",
          Career: "Unemployed",
          Comments: document.createElement("bim-text-input"),
        },
      },
      {
        data: {
          Name: "Lisa",
          Age: () => {
            return BUI.html`
              <bim-number-input slider min="23" value="27" max="45"></bim-number-input>
            `;
          },
          Career: () => {
            return BUI.html`
              <bim-dropdown required>
                <bim-option label="Civil Engineer"></bim-option>
                <bim-option label="Architect"></bim-option>
              </bim-dropdown>
            `;
          },
          Comments: document.createElement("bim-text-input"),
        },
      },
    ],
  },
  {
    data: {
      Name: "George",
      Age: "32",
      Career: "Architect",
      Comments: document.createElement("bim-text-input"),
    },
    children: [
      {
        data: {
          Name: "Laura",
          Age: (data) => {
            const onChange = (e: Event) => {
              const selectorInput = e.target as BUI.SelectorInput;
              alert(`${data.Name}'s age is ${selectorInput.value}.`);
            };

            return BUI.html`
              <bim-selector-input @change=${onChange}>
                <bim-option label="👶" value="3"></bim-option>
                <bim-option label="👨" value="32"></bim-option>
                <bim-option label="👴" value="80"></bim-option>
              </bim-selector-input>
            `;
          },
          get Career() {
            return `${this.Name} is studying`;
          },
          Comments: document.createElement("bim-text-input"),
        },
      },
      {
        data: (() => {
          const ageCareersMap: Record<string, any> = {
            12: "Too baby",
            20: "Is doing That Open Master!",
            35: "BIM Software Developer",
          };

          const defaultAge = Object.keys(ageCareersMap)[0];

          const [career, updateCareer] = BUI.UIComponent.create(
            (state: { career: string }) => {
              return BUI.html`<bim-label label=${state.career}></bim-label>`;
            },
            {
              career: ageCareersMap[defaultAge],
            },
          );

          let dropdownSet = false;
          const age = BUI.UIComponent.create(() => {
            const onChange = (e: Event) => {
              const dropdown = e.target as BUI.Dropdown;
              const value = dropdown.value[0] as string;
              const career = ageCareersMap[value];
              updateCareer({ career });
            };

            const onUpdated = (el: Element | undefined) => {
              if (!el || dropdownSet) return;
              const dropdown = el as BUI.Dropdown;
              for (const age in ageCareersMap) {
                const option = document.createElement("bim-option");
                option.label = age;
                dropdown.append(option);
              }
              dropdown.value = [defaultAge];
              dropdownSet = true;
            };

            return BUI.html`
              <bim-dropdown @change=${onChange} ${ref(onUpdated)}></bim-dropdown>
            `;
          });

          return {
            Name: "Elizabeth",
            Age: age,
            Career: career,
            Comments: document.createElement("bim-text-input"),
          };
        })(),
      },
    ],
  },
];

// Optionally, use the columns property to control the columns order and width.
table.columns = [{ name: "Name", width: "10rem" }, "Career", "Age"];

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
