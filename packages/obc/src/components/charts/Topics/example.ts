/* MD
  ## Visualizing BCF Topics 📋
  ---
  Effective project coordination relies on tracking issues, and the BIM Collaboration Format (BCF) is the industry standard for this. This tutorial will show you how to build a dynamic dashboard to visualize BCF topics, allowing you to easily analyze issue statuses, priorities, assignees, and more.

  ### 📚 Importing the Required Libraries
  ---
  To build our BCF dashboard, we'll need a few key libraries:

  - **`@thatopen/ui`**: Provides the UI components like panels, buttons, and grids.
  - **`@thatopen/components`**: The core library that gives us access to components like the `BCFTopics` manager.
  - **`uuid`**: A utility for generating unique identifiers, which are required for each BCF topic.
  - **`@thatopen/ui-obc`**: Our library of specialized BIM components, including the `topicsChart` and `topicsList` table we'll be using.
*/

import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
// eslint-disable-next-line import/no-unresolved
import * as THREE from "three";
import * as BUIC from "../..";

const components = new OBC.Components();

/* MD
  ### 📋 Initializing the UI
  ---
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
*/

BUI.Manager.init();

/* MD
  ### 🎲 Generating Sample BCF Data
  ---
  In a real application, you would load BCF data from a file or an API. For this example, we'll programmatically generate a set of 20 random topics. We'll use the `BCFTopics` component to create topics with realistic properties like status, priority, type, author, and creation dates. This will give us a nice dataset to visualize.
*/

const bcfTopics = components.get(OBC.BCFTopics);
bcfTopics.setup()

const types = ["Inquiry", "Remark", "Fault", "Request", "Clash"];
const statuses = ["Active", "In Progress", "Closed"];
const priorities = ["Minor", "Normal", "Major"];
const creationAuthors = ["Alice", "Bob", "Charlie", "David", "Eve"];
const assignedToList = ["Frank", "Grace", "Heidi", "Ivan", "Judy", undefined];
const stages = ["Coordination", "Execution", "Review", "Done", undefined];
const allLabels = [
  "Structural",
  "MEP",
  "Architectural",
  "Urgent",
  "RFC",
  "On-hold",
];

const getRandomElement = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomDate = (start: Date, end: Date): Date => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

const creationDates = Array.from({ length: 6 }, () =>
  getRandomDate(new Date(2023, 0, 1), new Date()),
);

const generateRandomTopic = (index: number) => {
  const creationDate = getRandomElement(creationDates);
  const modifiedDate =
    Math.random() > 0.5 ? getRandomDate(creationDate, new Date()) : undefined;

  return bcfTopics.create({
    guid: THREE.MathUtils.generateUUID(),
    type: getRandomElement(types),
    status: getRandomElement(statuses),
    title: `Topic ${index + 1}: Minor issue found on level ${(index % 3) + 1}`,
    priority: getRandomElement(priorities),
    index,
    labels: new Set(allLabels.filter(() => Math.random() > 0.7)),
    creationDate,
    creationAuthor: getRandomElement(creationAuthors),
    modifiedDate,
    modifiedAuthor: modifiedDate
      ? getRandomElement(creationAuthors)
      : undefined,

    assignedTo: getRandomElement(assignedToList),
    description: `This is a detailed description for topic ${index + 1}. It outlines the issue and the expected resolution.`,
    stage: getRandomElement(stages),
  });
};

const topics = Array.from({ length: 20 }, (_, i) => generateRandomTopic(i));

/* MD
	### 📊 Creating the Topics Charts
  ---
  Now, let's visualize our generated data. We'll use the `topicsChart` factory, which is specifically designed to work with BCF topic data. We'll pass our array of `topics` to the factory to create two chart instances: a pie chart and a bar chart. These charts will, by default, group the topics by their `status`.
*/

const [pieChart, updatePie] = BUIC.charts.topicsChart({
  components,
  type: "pie",
  addLabels: false,
});

const [barChart, updateBar] = BUIC.charts.topicsChart({
  components,
  type: "bar",
  addLabels: false,
});

pieChart.label = "Pie Chart Data";
barChart.label = "Bar Chart Data";

/* MD
  ### 📑 Adding a Legend and a Details Table
  ---
  To complement our charts, we'll add two more components:

  - A `<bim-chart-legend>` component to serve as a dynamic legend for our charts.
  - A `topicsList` table, created with a factory, to display the raw topic data in a clear, tabular format. This allows users to see the details behind the chart visualizations.
*/

const labels = BUI.Component.create<BUI.ChartLabel>(() => {
  return BUI.html`
    <bim-chart-legend>
      <bim-label slot="missing-data">No data to display</bim-label>
      <bim-label slot="no-chart">No chart attached</bim-label>
    </bim-chart-legend>
`;
});

pieChart.addEventListener("data-loaded", () => {
  labels.charts = [...labels.charts, pieChart];
});

barChart.addEventListener("data-loaded", () => {
  labels.charts = [...labels.charts, barChart];
});

const [topicsTable, updateTopicsTable] = BUIC.tables.topicsList({
  topics,
  components,
});

// Let's hide some columns as we don't need them
// for this tutorial.
topicsTable.hiddenColumns = ["Guid", "DueDate", "Actions"]

/* MD
  ### 🎛️ Creating Dynamic Controls
  ---
  To make our dashboard truly interactive, we'll add a set of controls. This is a key feature of the `topicsChart`.

  - **Group by Dropdown**: The `topicsChart` can group data by any topic property. We'll create a dropdown that allows the user to select a property (e.g., 'status', 'priority', 'creationAuthor'), and we'll call the `update` function on our charts to dynamically regroup and redisplay the data.
  - **Randomize Button**: This button will call our data generation function again to create a new set of topics, demonstrating how the charts and table can be updated with a completely new dataset.
  - **Filter/Highlight Buttons**: We'll also include the standard `highlight`, `filter`, and `reset` buttons to show how you can perform further client-side analysis on the displayed data.
*/

const onHighlight = ({ target }: { target: BUI.Button }) => {
  target.loading = true;

  pieChart.highlight((value) => {
    return value > 100;
  });

  target.loading = false;
};

const highlightButton = BUI.Component.create(() => {
  return BUI.html`
    <bim-button label="Highlight" @click=${onHighlight}></bim-button>
`;
});

const onFilter = ({ target }: { target: BUI.Button }) => {
  target.loading = true;

  pieChart.filterByValue(({value}) => {
    return value > 100;
  });

  target.loading = false;
};

const filterButton = BUI.Component.create(() => {
  return BUI.html`
    <bim-button label="Filter" @click=${onFilter}></bim-button>
`;
});

const onReset = ({ target }: { target: BUI.Button }) => {
  target.loading = true;

  pieChart.reset();

  target.loading = false;
};

const resetButton = BUI.Component.create(() => {
  return BUI.html`
    <bim-button label="Reset" @click=${onReset}></bim-button>
`;
});

const grouperDropdown = document.createElement("bim-dropdown") as BUI.Dropdown;
grouperDropdown.label = "Group by";
const properties = [
  "type",
  "status",
  "priority",
  "creationDate",
  "creationAuthor",
  "modifiedDate",
  "modifiedAuthor",
  "dueDate",
  "assignedTo",
  "stage",
];

for (const prop of properties) {
  const option = document.createElement("bim-option") as BUI.Option;
  option.label = prop;
  option.value = prop;
  grouperDropdown.appendChild(option);
}

grouperDropdown.addEventListener("change", () => {
  updateBar({
    grouper: grouperDropdown.value[0],
  });
  updatePie({
    grouper: grouperDropdown.value[0],
  });
  BUI.ContextMenu.removeMenus();
});

const randomizeButton = document.createElement("bim-button") as BUI.Button;
randomizeButton.label = "Randomize";
randomizeButton.addEventListener("click", () => {
  bcfTopics.list.clear()
  Array.from({ length: 20 }, (_, i) => generateRandomTopic(i));
  updateBar();
  updatePie();
  updateTopicsTable();
});

/* MD
  ### 🏗️ Assembling the Dashboard
  ---
  With all our individual components ready, it's time to assemble the final dashboard. We'll create two main panels:

  - A **left panel** containing our pie chart, bar chart, the legend, and all the interactive action buttons.
  - A **right panel** containing the detailed topics table.

  Finally, we'll use a `<bim-grid>` to arrange these two panels side-by-side, creating a clean, two-column dashboard layout.
*/

const leftPanel = BUI.Component.create(() => {
  return BUI.html`
    <bim-panel style="display: flex; flex-direction: column; height: 100%; gap: 1rem;">
      <bim-panel-section label="Topics Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${pieChart}
      </bim-panel-section>
      <bim-panel-section label="Topics Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${barChart}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${labels}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${grouperDropdown}
        ${randomizeButton}
        ${highlightButton}
        ${filterButton}
        ${resetButton}
      </bim-panel-section>
    </bim-panel>
  `;
});

const rightPanel = BUI.Component.create(() => {
  return BUI.html`
    <bim-panel>
      <bim-panel-section>
        ${topicsTable}
      </bim-panel-section>
    </bim-panel>
  `;
});

const app = document.createElement("bim-grid") as BUI.Grid<["main"]>;
app.layouts = {
  main: {
    template: `
    "leftPanel rightPanel"
    / 25rem 1fr
    `,
    elements: { leftPanel, rightPanel },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  ### 🎉 Congratulations!
  ---
  Fantastic! You've just built a complete, interactive BCF dashboard. You've learned how to generate sample data, visualize it with the `topicsChart`, display details in a `topicsList` table, and provide powerful dynamic controls for grouping and filtering. This is a perfect foundation for building tools to manage and analyze project issues in your own BIM applications. Great job!
*/
