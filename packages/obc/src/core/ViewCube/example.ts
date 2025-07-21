/* MD
  ## 🧭 Navigating your 3D Scene with the ViewCube
  ---
  The ViewCube is a handy UI component that lets users quickly orient the camera in a 3D scene. In this tutorial, you'll learn how to add a ViewCube to your app, connect it to your camera, and let users interact with it to change their view.

  ### 🖖 Importing our Libraries

  We'll need:

  - `@thatopen-platform/ui-beta` for UI initialization.
  - `@thatopen-platform/components-beta` for the 3D engine and scene management.
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
