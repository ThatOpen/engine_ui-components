/* eslint import/no-extraneous-dependencies: 0 */
import * as THREE from "three";
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as CUI from "../..";

BUI.Manager.init();
CUI.Manager.init();

const components = new OBC.Components();

const worlds = components.get(OBC.Worlds);

const world = worlds.create<
  OBC.SimpleScene,
  OBC.OrthoPerspectiveCamera,
  OBF.RendererWith2D
>();

world.scene = new OBC.SimpleScene(components);
world.scene.setup();

const viewport = document.createElement("bim-viewport");
world.renderer = new OBF.RendererWith2D(components, viewport);

world.camera = new OBC.OrthoPerspectiveCamera(components);
// console.log(world.camera);

viewport.addEventListener("resize", () => {
  world.renderer?.resize();
  world.camera.updateAspect();
});

components.init();

const grids = components.get(OBC.Grids);
grids.create(world);

const fragments = components.get(OBC.FragmentsManager);

const file = await fetch(
  "https://thatopen.github.io/engine_ui-components/resources/frags/small_road.frag",
);
const data = await file.arrayBuffer();
const buffer = new Uint8Array(data);
const model = fragments.load(buffer);
world.scene.three.add(model);

// container.appendChild(world.renderer.three2D.domElement);

const navigator = new OBF.Civil3DNavigator(components);
navigator.world = world;
navigator.draw(model);

navigator.highlighter.hoverCurve.material.color.set(1, 1, 1);
const { material: hoverPointsMaterial } = navigator.highlighter.hoverPoints;
if (Array.isArray(hoverPointsMaterial)) {
  const material = hoverPointsMaterial[0];
  if ("color" in material) (material.color as THREE.Color).set(1, 1, 1);
} else if ("color" in hoverPointsMaterial) {
  (hoverPointsMaterial.color as THREE.Color).set(1, 1, 1);
}

const planNavigator = new OBF.CivilPlanNavigator(components);
const world2d = document.createElement("bim-world-2d");
world2d.components = components;
if (!world2d.world) {
  throw new Error("World not found!");
}

world2d.gridOffsetX = 10000;

planNavigator.world = world2d.world;

await planNavigator.draw(model);

planNavigator.onHighlight.add(({ mesh }) => {
  navigator.highlighter.select(mesh);

  const index = mesh.curve.index;
  const curve3d = mesh.curve.alignment.absolute[index];
  curve3d.mesh.geometry.computeBoundingSphere();
  const sphere = curve3d.mesh.geometry.boundingSphere;
  if (sphere) {
    world.camera.controls.fitToSphere(sphere, true);
  }
});

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "world2d" 2fr
    "container" 3fr
    `,
    elements: { world2d, container: viewport },
  },
};

app.layout = "main";
document.body.append(app);
