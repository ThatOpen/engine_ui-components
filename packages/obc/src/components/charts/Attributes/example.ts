/* MD
  ## Data-Driven Charts for BIM  BIM 🚀
  ---
  A great BIM application isn't just about viewing models; it's about understanding the data within them. Charts are a powerful way to visualize complex information, and in this tutorial, you'll learn how to create charts that are directly linked to your model's data.

  ### 📚 Importing the Required Libraries
  ---
  To build our application, we'll need a few key libraries:

  - **`@thatopen/ui`**: Provides the UI components like panels, buttons, and grids that form our application's interface.
  - **`@thatopen/components`**: The core library that gives us the fundamental building blocks, like the `Components` manager and the ability to create 3D worlds.
  - **`@thatopen/components-front`**: Contains components tailored for frontend development, such as the `Highlighter`.
  - **`@thatopen/ui-obc`**: Our library of specialized BIM components, including the powerful `attributesChart` we'll be using today.
*/

import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as OBCF from "@thatopen/components-front";
import * as BUIC from "../..";

/* MD
  ### 📋 Initializing the UI
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

world.camera.controls.addEventListener("rest", () =>
  fragments.core.update(true),
);

/* MD
	### 📊 Creating the Attribute Charts
  ---
  Here comes the magic. Instead of building charts from scratch, we'll use our powerful `attributesChart` factory. This function creates a `bim-chart` pre-configured to automatically extract and display data from your BIM models based on specified attributes.

  We'll create two instances: a pie chart and a bar chart. We'll initialize them with empty `attribute` and `category` filters, as we'll populate them dynamically once the model is loaded.
*/
const [pieChart, updatePie] = BUIC.charts.attributesChart({
  type: "pie",
  addLabels: false,
  attribute: /empty/,
  category: /empty/,
  modelId: "",
  components,
});

const [barChart, updateBar] = BUIC.charts.attributesChart({
  type: "bar",
  addLabels: false,
  attribute: /empty/,
  category: /empty/,
  modelId: "",
  components,
});

/* MD
  ### 🏷️ Adding Interactive Labels
  ---
  To make our charts interactive, we'll add a `<bim-chart-legend>` component. This will serve as a dynamic legend for our charts. We'll then connect its `label-click` event to the `Hider` component. This setup allows users to click on a label in the legend to instantly show or hide all the corresponding elements in the 3D model, providing a seamless link between the data visualization and the model itself.
*/

const labels = BUI.Component.create(() => {
  return BUI.html`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`;
}) as BUI.ChartLegend;

const hider = components.get(OBC.Hider);

(labels as any).addEventListener("label-click", async (event: CustomEvent) => {
  const { data, visibility } = event.detail;

  for (const info of data) {
    const { modelIdMap } = info;
    await hider.set(visibility, modelIdMap);
  }
});

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
  ### 🎣 Loading the Model and Populating the Charts
  ---
  This is where we connect the model to our charts. We'll listen for the `onItemSet` event on the `FragmentsManager`. As soon as our model is loaded, this event will fire.

  Inside the event handler, we'll call the `updatePie` and `updateBar` functions that we got from our factory. We'll pass them the attribute (`Name`) and category (`DOOR`) we want to analyze. This tells the charts to automatically find all elements matching the criteria, count them, and display the results. After that, we proceed to load a model fragment.
*/

fragments.list.onItemSet.add(async ({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  await fragments.core.update(true);

  updatePie({ attribute: /^Name$/, category: /COLUMN/, modelId: model.modelId });
  updateBar({ attribute: /^Name$/, category: /COLUMN/, modelId: model.modelId });

  pieChart.label = "Pie Chart Data";
  barChart.label = "Bar Chart Data";
});

const name = "sample";

const fragPaths = ["https://thatopen.github.io/engine_components/resources/frags/school_str.frag"];
await Promise.all(
  fragPaths.map(async (path) => {
    const modelId = path.split("/").pop()?.split(".").shift();
    if (!modelId) return null;
    const file = await fetch(path);
    const buffer = await file.arrayBuffer();
    return fragments.core.load(buffer, { modelId: name });
  }),
);

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
    if (!("value" in entry)) return false
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
    if (!("value" in entry)) return false
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
  With all our components ready, it's time to put them together. We'll create a `<bim-panel>` to neatly organize our chart, the interactive labels, and the action buttons into separate sections. This panel will serve as the main UI for our chart visualization.
*/
const chartPanel = BUI.Component.create(() => {
  return BUI.html`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Attributes Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${pieChart}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${labels}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${highlightButton}
        ${filterButton}
        ${resetButton}
      </bim-panel-section> 
    </bim-panel>`;
});

const highlighter = components.get(OBCF.Highlighter);
highlighter.setup({ world });

/* MD
  Finally, let's create a BIM Grid element and provide both the panel and the viewport to display everything.
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
  You've successfully built a powerful BIM data visualization tool! You've learned how to use the `attributesChart` to automatically analyze model data based on specific properties (like "Name" for all "DOORs"), link the chart to an interactive legend, and connect it all back to the 3D model for a seamless user experience. You're now ready to create insightful, attribute-based dashboards in your own BIM applications. Keep up the great work!
  */
