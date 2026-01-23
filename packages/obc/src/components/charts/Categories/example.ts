/* MD
  ## Visualizing BIM Data by Category 🏛️
  ---
  Understanding the composition of a BIM model is crucial. How many walls are there? What's the count of doors versus windows? This tutorial will show you how to use the `categoriesChart` to automatically generate charts that answer these questions, giving you a clear overview of your model's contents.

  ### 📚 Importing the Required Libraries
  ---
  To build our application, we'll need a few key libraries:

  - **`@thatopen/ui`**: Provides the UI components like panels, buttons, and grids that form our application's interface.
  - **`@thatopen/components`**: The core library that gives us the fundamental building blocks, like the `Components` manager and the ability to create 3D worlds.
  - **`@thatopen/components-front`**: Contains components tailored for frontend development, such as the `Highlighter`.
  - **`@thatopen/ui-obc`**: Our library of specialized BIM components, including the powerful `categoriesChart` we'll be using today.
*/

import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as BUIC from "../..";

/* MD
  ### 📋 Initializing the UI
  ---
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
*/

BUI.Manager.init();

/* MD
  ### 🌎 Setting Up the 3D World
  ---
  Since our charts will be visualizing data from a 3D model, we first need a place to display that model. We'll set up a simple 3D world containing a scene, a camera, and a renderer. This will be the canvas where our BIM model lives. If you're new to this, be sure to check out the "Worlds" tutorial for a detailed guide.
*/

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);
const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBC.SimpleRenderer
>();
world.name = "main";

const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const viewport = document.createElement("bim-viewport");
const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;
await world.camera.controls.setLookAt(65, 19, -27, 12.6, -5, -1.4);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

const grids = components.get(OBC.Grids);
grids.create(world);

components.init();

/* MD 
  ### 🧩 Configuring Loaders and Managers
  ---
  To get data from a BIM model, we first need to load it. Here, we'll set up the `IfcLoader` to handle IFC files and the `FragmentsManager` to process the model's geometry and data into an efficient format. These components work together to get our model into the scene and make its data accessible for our charts.
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup({
  wasm: { absolute: true, path: "https://unpkg.com/web-ifc@0.0.74/" },
});

const githubUrl =
  "https://thatopen.github.io/engine_fragment/resources/worker.mjs";
const fetchedUrl = await fetch(githubUrl);
const workerBlob = await fetchedUrl.blob();
const workerFile = new File([workerBlob], "worker.mjs", {
  type: "text/javascript",
});
const workerUrl = URL.createObjectURL(workerFile);
const fragments = components.get(OBC.FragmentsManager);
fragments.init(workerUrl);

world.camera.controls.addEventListener("update", () => fragments.core.update());

// Remove z fighting
fragments.core.models.materials.list.onItemSet.add(({ value: material }) => {
  if (!("isLodMaterial" in material && material.isLodMaterial)) {
    material.polygonOffset = true;
    material.polygonOffsetUnits = 1;
    material.polygonOffsetFactor = Math.random();
  }
});

/* MD
	### 📊 Creating the Category Charts
  ---
  Now, let's create the charts. We'll use the `categoriesChart` factory, which is specifically designed to create charts that visualize the distribution of elements by their IFC category. It automatically counts how many items belong to each category (e.g., IFCWALL, IFCDOOR, IFCWINDOW) and displays the results.

  We will create a pie chart and a bar chart instance. They will be populated with data later.
*/
const [pieChart, updatePie] = BUIC.charts.categoriesChart({
  type: "pie",
  addLabels: true,
  modelIdMap: {},
  components,
});

const [barChart, updateBar] = BUIC.charts.categoriesChart({
  type: "bar",
  addLabels: false,
  modelIdMap: {},
  components,
});

/* MD
  ### 🗺️ Mapping the Model Data
  ---
  Before the chart can count the categories, it needs to know which elements to consider. We'll create a helper function called `buildModelIdMap` that iterates through our loaded model fragments and gathers the IDs of all items that have geometry. This map of Model IDs to Element IDs will be the input for our charts.
*/

async function buildModelIdMap() {
  const modelIdMap: { [modelId: string]: Set<number> } = {};
  for (const [modelId, model] of fragments.list) {
    const localIds: number[] = [];
    const geometryItems = await model.getItemsWithGeometry();
    for (const item of geometryItems) {
      if (!item) continue;
      const localId = await item.getLocalId();

      if (!localId) continue;
      localIds.push(localId);

      modelIdMap[modelId] = new Set(localIds);
    }
  }
  return modelIdMap;
}

/* MD
  ### 🏷️ Adding Interactive Labels
  ---
  A chart is even better when it's interactive. We'll add a `<bim-chart-legend>` component to act as a dynamic legend. This component will automatically display the categories found in our charts. We will later connect this to the model to allow filtering by clicking on the labels.
*/

const labels = BUI.Component.create(() => {
  return BUI.html`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`;
}) as BUI.ChartLegend;

pieChart.addEventListener("data-loaded", () => {
  labels.charts = [...labels.charts, pieChart];
});

barChart.addEventListener("data-loaded", () => {
  labels.charts = [...labels.charts, barChart];
});

world.camera.controls.addEventListener("update", () =>
  fragments.core.update(true),
);

/* MD
  ### 🚀 Loading the Model & Populating the Charts
  ---
  Now, let's tie everything together. We'll listen for the `onItemSet` event on the `FragmentsManager`. When a new model is loaded, we'll execute our logic:

  1.  Add the model to our 3D world.
  2.  Call our `buildModelIdMap()` function to get all the element IDs.
  3.  Pass this map to our `updatePie()` and `updateBar()` functions.

  This will trigger the charts to process the data and display the count of elements for each category found in the model.
*/

fragments.list.onItemSet.add(async ({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  await fragments.core.update(true);

  const modelIdMap = await buildModelIdMap();
  updatePie({ modelIdMap });
  updateBar({ modelIdMap });

  pieChart.label = "Pie Chart Data";
  barChart.label = "Bar Chart Data";
});

/* MD
  ### ✨ Interacting with Chart Data
  ---
  Our charts come with built-in methods for easy data manipulation. To demonstrate this, we'll create three buttons:

  - **Highlight**: Uses the `highlight()` method to visually emphasize data points that meet a certain condition (e.g., values greater than 100).
  - **Filter**: Uses the `filterByValue()` method to hide data points that don't meet the condition.
  - **Reset**: Uses the `reset()` method to restore the chart to its original state.
*/

const onHighlight = ({ target }: { target: BUI.Button }) => {
  target.loading = true;

  pieChart.highlight((entry) => {
    if (!("value" in entry)) return false;
    return entry.value > 100;
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

  pieChart.filterByValue((entry) => {
    if (!("value" in entry)) return false;
    return entry.value > 100;
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

/* MD
  ### 🏗️ Assembling the UI Panel
  ---
  With all our components ready, it's time to put them together. We'll create a `<bim-panel>` to neatly organize our pie chart, bar chart, the interactive labels, and the action buttons into separate sections. This panel will serve as the main UI for our chart visualization.
*/
const chartPanel = BUI.Component.create(() => {
  const [loadFragBtn] = BUIC.buttons.loadFrag({ components });
  return BUI.html`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Categories Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${pieChart}
      </bim-panel-section>
      <bim-panel-section label="Categories Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${barChart}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${labels}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${loadFragBtn}
        ${highlightButton}
        ${filterButton}
        ${resetButton}
      </bim-panel-section> 
    </bim-panel>`;
});

/* MD
  ### 🤝 Linking Chart Events to the 3D Model
  ---
  To complete the integration, we'll set up the `Highlighter` component. This will allow interactions in our chart (like clicking a label or a chart segment) to visually affect the 3D model, creating a true two-way connection between the data and the geometry.
*/

const highlighter = components.get(OBCF.Highlighter);
highlighter.setup({ world });

/* MD
  ### 🏁 Final Layout
  ---
  Finally, let's create a `<bim-grid>` element to define the overall layout of our application, placing our newly created chart panel alongside the 3D viewport.
  */

const app = document.createElement("bim-grid") as BUI.Grid<["main"]>;
app.layouts = {
  main: {
    template: `
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,
    elements: { chartPanel, viewport },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  ### 🎉 Congratulations!
  ---
  You've successfully built a powerful BIM data visualization tool! You've learned how to use the `categoriesChart` to automatically generate charts from your model's data, link them with interactive labels, and display everything in a clean, professional-looking panel. You're now ready to bring powerful data insights to your own BIM applications. Keep up the great work!
*/
