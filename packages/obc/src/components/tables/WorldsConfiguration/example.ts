import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as CUI from "../..";

BUI.Manager.init();

const viewport = document.createElement("bim-viewport");

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create();
const sceneComponent = new OBC.SimpleScene(components);
sceneComponent.setup();
world.scene = sceneComponent;

const rendererComponent = new OBF.PostproductionRenderer(components, viewport);
world.renderer = rendererComponent;

const cameraComponent = new OBC.SimpleCamera(components);
world.camera = cameraComponent;
cameraComponent.controls.setLookAt(10, 5.5, 5, -4, -1, -6.5);

viewport.addEventListener("resize", () => {
  rendererComponent.resize();
  cameraComponent.updateAspect();
});

components.init();
rendererComponent.postproduction.enabled = true;
rendererComponent.postproduction.setPasses({ ao: true });

const grids = components.get(OBC.Grids);
grids.create(world);

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
const file = await fetch(
  "https://thatopen.github.io/engine_ui-components/resources/small.ifc",
);
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

const [worldsConfigurationTable] = CUI.tables.worldsConfiguration({
  components,
});

const worldsConfigPanel = BUI.Component.create(() => {
  const onSearch = (e: Event) => {
    const input = e.target as BUI.TextInput;
    worldsConfigurationTable.queryString =
      input.value !== "" ? input.value : null;
  };

  const expandTable = () => {
    worldsConfigurationTable.expanded = !worldsConfigurationTable.expanded;
  };

  return BUI.html`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${onSearch} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${expandTable} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${worldsConfigurationTable}
      </bim-panel-section>
    </bim-panel>
  `;
});

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "worldsConfigPanel viewport"
    /24rem 1fr
    `,
    elements: { worldsConfigPanel, viewport },
  },
};

app.layout = "main";
document.body.append(app);
