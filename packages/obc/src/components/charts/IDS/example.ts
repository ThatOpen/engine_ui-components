/* MD
  ## Visualizing IDS Validation Results 📊
  ---
  Ensuring data quality is essential in BIM. The Information Delivery Specification (IDS) is a buildingSMART standard for defining data requirements. This tutorial will guide you through a complete workflow: defining an IDS rule, validating a BIM model against it, and visualizing the pass/fail results in a dynamic, interactive chart.

  ### 📚 Importing the Required Libraries
  ---
  To build our validation dashboard, we'll need a few key libraries:

  - **`@thatopen/ui`**: Provides the UI components like panels and buttons.
  - **`@thatopen/components`**: The core library for the fundamental app structure.
  - **`@thatopen/components-front`**: Contains frontend-specific components like the `Highlighter`.
  - **`@thatopen/fragments-beta`**: The library that handles the geometry and data of the models.
  - **`three`**: The underlying 3D library.
  - **`@thatopen/ui-obc`**: Our library of specialized BIM components, including the `idsChart` we'll use.
*/

import * as OBC from "@thatopen/components";
import * as OBCF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import * as FRAGS from "@thatopen/fragments";
import * as THREE from "three";
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
  Our validation results will be linked to a 3D model, so we first need a place to display it. We'll set up a simple 3D world containing a scene, a camera, and a renderer.
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
  Next, we'll configure the `IfcLoader` and `FragmentsManager`. These components are essential for loading our BIM model and processing its geometry and data so that it can be rendered and, more importantly, audited against our IDS rules.
*/

const ifcLoader = components.get(OBC.IfcLoader);
ifcLoader.settings.autoSetWasm = false;
await ifcLoader.setup({
  wasm: { absolute: false, path: "https://unpkg.com/web-ifc@0.0.74/" },
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

world.camera.controls.addEventListener("update", () =>
  fragments.core.update(true),
);

/* MD
  ### 📜 Defining the IDS Specification
  ---
  This is the heart of our validation workflow. We'll use the `IDSSpecifications` component to programmatically define a data requirement. An IDS is made of "facets," which define what to check (applicability) and what to check for (requirements).

  In this example, we'll create a simple specification:
  - **Applicability**: Look for all elements of the type `IFCDOOR`.
  - **Requirement**: Check if they have a property named `FireRating` inside the `Pset_DoorCommon` property set.
*/

const ids = components.get(OBC.IDSSpecifications);

const spec = ids.create("Sample", ["IFC4"]);
spec.description =
  "All doors must have FireRating specified in Pset_DoorCommon";

const entity = new OBC.IDSEntity(components, {
  type: "simple",
  parameter: "IFCDOOR",
});

const property = new OBC.IDSProperty(
  components,
  {
    type: "simple",
    parameter: "Pset_DoorCommon",
  },
  { type: "simple", parameter: "FireRating" },
);

spec.applicability.add(entity);
spec.requirements.add(property);

/* MD
  ### 🚀 Loading the BIM Model
  ---
  With our validation rule defined, let's load the BIM model we want to test. We will listen for when the model is added to the `FragmentsManager` to continue with our logic.
*/

const name = "sample";

fragments.list.onItemSet.add(({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  fragments.core.update(true);
});

const fragPaths = ["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];
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
  ### ✅ Running the Validation & Visualizing Results
  ---
  Now that the model is loaded and the IDS is defined, let's run the test! We'll call `spec.test()` on our model. This will return a detailed result object.

  We'll then use a helper function, `ids.getModelIdMap()`, to easily get the IDs of all elements that passed and failed the validation. To provide immediate visual feedback, we'll use the `FragmentsManager` to highlight the passing elements in green and the failing ones in red directly in the 3D viewport.
*/

const idsResult = await spec.test([new RegExp(name)]);
const { fail, pass } = ids.getModelIdMap(idsResult);

const highlightPromises = [fragments.resetHighlight()];

highlightPromises.push(
  fragments.highlight(
    {
      customId: "green",
      color: new THREE.Color("green"),
      renderedFaces: FRAGS.RenderedFaces.ONE,
      opacity: 1,
      transparent: false,
    },
    pass,
  ),
);

highlightPromises.push(
  fragments.highlight(
    {
      customId: "red",
      color: new THREE.Color("red"),
      renderedFaces: FRAGS.RenderedFaces.ONE,
      opacity: 1,
      transparent: false,
    },
    fail,
  ),
);

highlightPromises.push(fragments.core.update(true));

await Promise.all(highlightPromises);

/* MD
	### 📈 Creating the IDS Chart
  ---
  With the validation complete, it's time to visualize the results. We'll use the `idsChart` factory, which is specifically designed for this purpose. We simply pass the `idsResult` object we obtained from the validation step, and the factory will generate charts that clearly display the number of passing, failing, and unchecked elements.
*/
const [pieChart] = BUIC.charts.idsChart({
  type: "pie",
  addLabels: true,
  idsResult,
  components,
});

const [barChart] = BUIC.charts.idsChart({
  type: "bar",
  addLabels: false,
  idsResult,
  components,
});

/* MD
  ### 🏷️ Adding Interactive Labels
  ---
  To complement our charts, we'll add a `<bim-chart-legend>` component. This will act as a legend, showing the different result types (Pass, Fail, Unchecked). In a more advanced implementation, you could connect this to the `Highlighter` to allow users to toggle the visibility of element groups by clicking the labels.
*/

const labels = BUI.Component.create<BUI.ChartLegend>(() => {
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

/* MD
  ### ✨ Interacting with Chart Data
  ---
  Our charts also support further client-side interaction. To demonstrate, we'll create buttons that use the chart's built-in `highlight()`, `filterByValue()`, and `reset()` methods to dynamically explore the results without re-running the validation.
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
  Now, let's bring all our UI elements together. We'll create a `<bim-panel>` that neatly organizes our pie and bar charts, the legend, and our action buttons into a clean, professional-looking dashboard.
*/
const chartPanel = BUI.Component.create(() => {
  return BUI.html`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="IDS Result Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${pieChart}
      </bim-panel-section>
      <bim-panel-section label="IDS Result Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${barChart}
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

/* MD
  ### 🤝 Linking Chart Events to the 3D Model
  ---
  Although we've already highlighted the initial validation results, we also need to set up the `Highlighter` component. This ensures that future interactions (e.g., from clicking on chart segments, which can be implemented separately) can also be visually linked back to the 3D model.
*/

const highlighter = components.get(OBCF.Highlighter);
highlighter.setup({ world });

/* MD
  ### 🏁 Final Layout
  ---
  Finally, let's create a `<bim-grid>` element to define the overall layout of our application, placing our newly created validation dashboard alongside the 3D viewport.
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
  Excellent work! You've just built a complete, interactive IDS validation dashboard from scratch. You've learned how to define data requirements, test a BIM model, and visualize the pass/fail results with charts that are directly linked to the 3D view. This is a crucial tool for any data quality workflow, and you're now equipped to implement it in your own applications. Well done!
*/
