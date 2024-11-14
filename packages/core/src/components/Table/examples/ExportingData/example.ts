/* MD
  ### Taking Your Data Elsewhere ⏬
  ---
  There are some situations in which is convenient to export information from your table, because you probably want to process it further in other places. Well, exporting data with the bim-table component is extremely simple and you will learn how to do it!

  ### 🖖 Initializing the Library and Setting the Table
  ---
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
  */

// You have to import from "@thatopen/ui"
import * as BUI from "../../../..";

BUI.Manager.init();

/* MD
  Once you have initialized the library, you can create a new table or get an existing from your HTML document. Let's create one programatically for this tutorial:
  */

type IfcElementsInfo = {
  Class: string;
  PredefinedType: string;
  Name: string;
  Description: string;
  LoadBearing: boolean;
  Area: number;
};

const table = document.createElement("bim-table") as BUI.Table<IfcElementsInfo>;
table.expanded = true;

table.data = [
  {
    data: {
      Class: "IfcWall",
      PredefinedType: "EXTERNAL",
      Name: "Exterior Wall",
      Description: "Main structural exterior wall",
      LoadBearing: true,
      Area: 45.5,
    },
    children: [
      {
        data: {
          Class: "IfcWindow",
          PredefinedType: "STANDARD",
          Name: "Office Window",
          Description: "Double-pane office window",
          LoadBearing: false,
          Area: 3.6,
        },
      },
    ],
  },
  {
    data: {
      Class: "IfcDoor",
      PredefinedType: "SINGLE_SWING_RIGHT",
      Name: "Entrance Door",
      Description: "Main entrance door",
      LoadBearing: false,
      Area: 2.1,
    },
  },
  {
    data: {
      Class: "IfcColumn",
      PredefinedType: "ROUND",
      Name: "Support Column",
      Description: "Load-bearing column in lobby",
      LoadBearing: true,
      Area: 1.2,
    },
  },
  {
    data: {
      Class: "IfcSlab",
      PredefinedType: "FLOOR",
      Name: "Main Floor Slab",
      Description: "Primary floor slab for ground level",
      LoadBearing: true,
      Area: 150.0,
    },
  },
];

/* MD
  ### Exporting Data 📄
  ---
  Exporting data from a bim-table is extremely simple, and just as the searching feature it can be done in very few lines of code. Now, talking about searching features, let's implement a searchbox really quick so you can also make queries and export the filtered information:
  */

const searchBox = BUI.Component.create<BUI.TextInput>(() => {
  const onInput = (e: Event) => {
    const input = e.target;
    if (!(input instanceof BUI.TextInput)) return;
    table.queryString = input.value;
  };

  return BUI.html`
   <bim-text-input @input=${onInput} placeholder="Search..."></bim-text-input> 
  `;
});

/* MD
  :::tip

  If you want to know more about searching in tables, take a look at the Table Searching tutorial 😉 Also, when you query the table and export the data, the exported information will be the result of the filter.

  :::

  Great! With the searchbox already implemented (not needed to export data), let's see how exporting works. The table includes a method to download the information right away in CSV, TSV or JSON; to make the export more dynamic, let's create a simple dropdown to choose the format and one text input to define the file name:
  */

const formatDropdown = BUI.Component.create<BUI.Dropdown>(
  () => BUI.html`
    <bim-dropdown required style="flex: 0">
      <bim-option label="CSV" value="csv" checked></bim-option>
      <bim-option label="TSV" value="tsv"></bim-option>
      <bim-option label="JSON" value="json"></bim-option>
    </bim-dropdown> 
  `,
);

const fileNameInput = BUI.Component.create<BUI.TextInput>(
  () =>
    BUI.html`<bim-text-input value="My Data" style="width: 4rem"></bim-text-input>`,
);

/* MD
  Then, it's time to create a simple button to download the information. We can proceed as follows:
  */

const downloadBtn = BUI.Component.create<BUI.Button>(() => {
  const onClick = () => {
    const format = formatDropdown.value[0] as "csv" | "tsv" | "json";
    if (format === undefined) return;
    const fileName =
      fileNameInput.value.trim() !== "" ? fileNameInput.value : undefined;
    table.downloadData(fileName, format);
  };

  return BUI.html`
    <bim-button @click=${onClick} label="Download" style="flex: 0"></bim-button>
  `;
});

/* MD
  Yes! As simple as that you are now able to download your data. Now, you may be wondering: what happens if I have nested data in my table? Well, it depends on you! By default, if you download the data in JSON the nestings will be there, so no problem at all. The situation is different when you export to CSV or TSV; in such case, by default the data will be exported flattened. However, you can modify the behavior and choose to include an extra column showing the indentation of each row based on its nesting position. To implement this in our table, let's create a very simple checkbox to toggle the functionality on and off:
  */

const indentationCheckbox = BUI.Component.create(() => {
  const onChange = (e: Event) => {
    const input = e.target;
    if (!(input instanceof BUI.Checkbox)) return;
    // Indentation in text doesn't have effect if you export to JSON
    table.indentationInText = input.checked;
  };

  return BUI.html`
   <bim-checkbox @change=${onChange} label="Include Indentation" inverted></bim-checkbox> 
  `;
});

/* MD
  Great! Just give it a try in the example and download the data with `Include Indentation` checked. You will notice a new column appears in the exported data showing the row indentation.

  ### Copying Data to The Clipboard 🤓
  ---
  I don't know about you, but in many situations I want to quickly copy some data and paste it somewhere else (cof cof, ChatGPT) to make something else without having to deal with files. While this is not exactly a feature of the bim-table, it can be implemented very easily like this:
  */

const copyBtn = BUI.Component.create(() => {
  const onClick = async () => {
    const format = formatDropdown.value[0] as "csv" | "tsv" | "json";
    if (format === undefined || format === "json") return;
    await navigator.clipboard.writeText(table[format]);
    window.alert("Table data copied as CSV in clipboard!");
  };

  return BUI.html`
   <bim-button @click=${onClick} label="Copy to Clipboard" style="flex: 0"></bim-button> 
  `;
});

/* MD
  Very cool, isn't? You can now copy your values and paste them anywhere really easy.

  ### 🔗 Putting Everything Together
  ---
  As everything is already setup, let's create a new component to hold everything and display them in the page. You can do it very easily as follows:
  */

const appContent = BUI.Component.create(
  () => BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.5rem">
        ${searchBox}
        ${fileNameInput}
        ${formatDropdown}
        ${indentationCheckbox}
        ${downloadBtn}
        ${copyBtn}
      </div> 
      ${table}
    </div>
  `,
);

document.body.append(appContent);

/* MD
  Congratulations! You already know how to export data from your bim-table component and take it anywhere you want. Don't hesitate into watching more tutorials, they're all free! 🚀
  */
