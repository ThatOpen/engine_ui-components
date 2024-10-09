import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as CUI from "../../..";

BUI.Manager.init();

const viewport = document.createElement("bim-viewport");

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create();
const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const rendererComponent = new OBC.SimpleRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;
cameraComponent.controls.setLookAt(10, 5.5, 5, -4, -1, -6.5);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
// const file = await fetch(
//   "https://thatopen.github.io/engine_ui-components/resources/small.ifc",
// );
// const buffer = await file.arrayBuffer();
// const typedArray = new Uint8Array(buffer);
// const model = await ifcLoader.load(typedArray);
// world.scene.three.add(model);

// const indexer = components.get(OBC.IfcRelationsIndexer);
// await indexer.process(model);

const highlighter = components.get(OBF.Highlighter);
highlighter.setup({ world });

const topics = components.get(OBC.BCFTopics);
// topics.config._config.strict.type = "None" as const;
topics.setup();
topics.config.author = "juan.hoyos4@gmail.com";

const clipper = components.get(OBC.Clipper);

const [propertiesTable] = CUI.tables.componentsConfig({
  components,
});

propertiesTable.preserveStructureOnFilter = true;

const leftPanel = BUI.Component.create(() => {
  const onTextInput = (e: Event) => {
    const input = e.target as BUI.TextInput;
    propertiesTable.queryString = input.value;
  };

  return BUI.html`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <bim-text-input @input=${onTextInput} placeholder="Search any config..." debounce="100"></bim-text-input>
        ${propertiesTable}
      </bim-panel-section>
    </bim-panel>
  `;
});

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "leftPanel viewport"
    /25rem 1fr
    `,
    elements: { leftPanel, viewport },
  },
};

app.layout = "main";
document.body.append(app);
