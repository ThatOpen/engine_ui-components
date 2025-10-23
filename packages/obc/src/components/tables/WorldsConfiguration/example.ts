// import * as BUI from "@thatopen/ui";
// import * as OBC from "@thatopen/components";
// import * as CUI from "../../..";
// import * as THREE from "three";

// BUI.Manager.init();
// CUI.Manager.init();

// const components = new OBC.Components();

// const fragments = components.get(OBC.FragmentsManager);
// fragments.init(
//   "/node_modules/@thatopen-platform/fragments-beta/dist/Worker/worker.mjs",
// );

// const worldElementA = document.createElement("bim-world");
// document.body.append(worldElementA);
// worldElementA.name = "main";
// worldElementA.components = components;

// await components.init();

// const worldA = worldElementA.world!;
// console.log(`Instance of camera: ${worldA.camera.three instanceof THREE.PerspectiveCamera}`);
// setTimeout(() => worldA.camera.updateAspect()); // Don't know a wait is needed for this to work
// worldA.camera.controls.addEventListener("update", () =>
//   fragments.core.update(true),
// );

// const ifcLoader = components.get(OBC.IfcLoader);
// ifcLoader.settings.autoSetWasm = false;
// ifcLoader.settings.wasm = {
//   path: "https://unpkg.com/web-ifc@0.0.72/",
//   absolute: false,
// };
// await ifcLoader.setup();

// async function loadIfc() {
//   const file = await fetch(
//     "https://thatopen.github.io/engine_components/resources/small.ifc",
//   );
//   const data = await file.arrayBuffer();
//   const buffer = new Uint8Array(data);
//   const model = await ifcLoader.load(buffer, false, "example");
//   await model.useCamera(worldA.camera.three);
//   console.log(model);
//   worldA.scene.three.add(model.object);
// }

// await loadIfc();

// const [worldsConfig] = CUI.tables.worldsConfiguration({
//   components
// });

// const worldsConfigPanel = BUI.Component.create(() => {
//   const onSearch = (e: Event) => {
//     const input = e.target as BUI.TextInput;
//     worldsConfig.queryString = input.value !== "" ? input.value : null;
//   };

//   const expandTable = () => {
//     worldsConfig.expanded = !worldsConfig.expanded;
//   };

//   return BUI.html`
//     <bim-panel label="App Config">
//       <bim-panel-section label="Worlds">
//         <div style="display: flex; gap: 0.5rem;">
//           <bim-text-input @input=${onSearch} placeholder="Search..."></bim-text-input>
//           <bim-button style="flex: 0;" @click=${expandTable} icon="eva:expand-outline"></bim-button>
//         </div>
//         ${worldsConfig}
//       </bim-panel-section>
//     </bim-panel>
//   `;
// });

// const app = document.createElement("bim-grid");
// app.layouts = {
//   main: {
//     template: `
//     "worldsConfigPanel"
//     /26rem 1fr
//     `,
//     elements: { worldsConfigPanel },
//   },
// };

// app.layout = "main";

// document.body.append(app);
