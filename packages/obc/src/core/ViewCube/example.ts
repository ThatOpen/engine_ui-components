/* MD
  ## 🧭 Navigating your 3D Scene with the ViewCube
  ---
  Users navigating a 3D BIM scene lose track of orientation as they orbit and pan — without a reference indicator, recovering a specific view like front or top requires manual camera adjustments.

  The ViewCube is a compact 3D orientation indicator that stays in sync with the camera and lets users snap to predefined views by clicking its faces.

  This tutorial covers creating a basic 3D world with scene, camera, and renderer; placing the ViewCube inside the viewport element and linking it to the camera; keeping it synchronized by calling the orientation update on every camera control event; and handling a face click event to reposition the camera to a specific look-at target with animation.

  By the end, you'll have a viewport with a ViewCube that tracks camera orientation in real time and snaps the view on click.

  ### 🖖 Importing our Libraries

  We'll need:

  - `@thatopen/ui` for UI initialization.
  - `@thatopen/components` for the 3D engine and scene management.
  - The local UI components package for extra UI features.
*/

import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";

/* MD
  ### 🚦 Initializing the UI

  As always, initialize the UI libraries at the start of your app:
*/

BUI.Manager.init();
CUI.Manager.init();

/* MD
  ### 🌎 Setting up a Simple 3D Scene

  Let's create a basic 3D world with a scene, camera, and renderer:
*/

const components = new OBC.Components();
const worlds = components.get(OBC.Worlds);
const world = worlds.create<
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBC.SimpleRenderer
>();

world.scene = new OBC.SimpleScene(components);
const viewport = document.createElement("bim-viewport");
world.renderer = new OBC.SimpleRenderer(components, viewport);

world.camera = new OBC.SimpleCamera(components);

/* MD
  ### ➕ Adding Grids and Initializing Components

  Optionally, add a grid to your scene and initialize all components:
*/

const grids = components.get(OBC.Grids);
grids.create(world);

components.init();

/* MD
  ### 🧊 Adding the ViewCube

  Now, let's add the ViewCube and connect it to the camera:
*/

const viewCube = document.createElement("bim-view-cube");
viewCube.camera = world.camera.three;
viewport.append(viewCube);

/* MD
  This attaches the ViewCube to your viewport and links it to your camera's Three.js instance.
  
  ### 🔄 Keeping the ViewCube in Sync

  To keep the ViewCube orientation updated as the camera moves, listen for camera control updates:
*/

world.camera.controls.addEventListener("update", () =>
  viewCube.updateOrientation(),
);

/* MD
  ### 🖱️ Handling ViewCube Interactions

  You can let users click on the ViewCube to change the camera's orientation. For example, set the camera to a specific view when the left face is clicked:
*/

viewCube.addEventListener("leftclick", () => {
  world.camera.controls.setLookAt(-10, 10, 0, 1, 10, 0, true);
});

/* MD
  ### 🖼️ Laying Out the UI

  Let's use a grid layout to display the viewport:
*/

const app = document.getElementById("app") as BUI.Grid;
app.layouts = {
  main: {
    template: `
      "viewport"
    `,
    elements: { viewport },
  },
};

/* MD
  ## 🎉 That's it!

  You now have a fully interactive ViewCube in your 3D scene, letting users easily orient themselves and explore your BIM models!
*/
