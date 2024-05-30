import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as CUI from "../..";

BUI.Manager.init();

const viewport = document.createElement("bim-viewport");

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBF.PostproductionRenderer
>();

world.name = "Default World";

world.scene = new OBC.SimpleScene(components);
world.scene.three.background = null;
world.scene.setup();

world.renderer = new OBF.PostproductionRenderer(components, viewport);
const { postproduction } = world.renderer;

world.camera = new OBC.SimpleCamera(components);
world.camera.controls.setLookAt(1.5, 1.4, 0.12, -3.5, -0.5, -7);

viewport.addEventListener("resize", () => {
  if (world.renderer) world.renderer.resize();
  world.camera.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
const worldGrid = grids.create(world);
worldGrid.material.uniforms.uColor.value = new THREE.Color("#4D4D4D");

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup();
const file = await fetch(
  "https://thatopen.github.io/engine_ui-components/resources/small.ifc",
);
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

postproduction.enabled = true;
postproduction.customEffects.excludedMeshes.push(worldGrid.three);
postproduction.setPasses({ ao: true });

const [worldsConfig] = CUI.tables.worldsConfiguration({
  components,
});

const worldsConfigPanel = BUI.Component.create(() => {
  const onSearch = (e: Event) => {
    const input = e.target as BUI.TextInput;
    worldsConfig.queryString = input.value !== "" ? input.value : null;
  };

  const expandTable = () => {
    worldsConfig.expanded = !worldsConfig.expanded;
  };

  return BUI.html`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${onSearch} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${expandTable} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${worldsConfig}
      </bim-panel-section>
    </bim-panel>
  `;
});

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "worldsConfigPanel viewport"
    /26rem 1fr
    `,
    elements: { worldsConfigPanel, viewport },
  },
};

app.layout = "main";
document.body.append(app);
