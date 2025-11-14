/* eslint import/no-extraneous-dependencies: 0 */
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../../..";

BUI.Manager.init();
CUI.Manager.init();

const components = new OBC.Components();
const fragments = components.get(OBC.FragmentsManager);
fragments.init(
  "https://thatopen.github.io/engine_fragment/resources/worker.mjs",
);

const worldElementA = document.createElement("bim-world");
document.body.append(worldElementA);
worldElementA.name = "main";
worldElementA.components = components;

const worldElementB = document.createElement("bim-world");
document.body.append(worldElementB);
worldElementB.name = "secondary";
worldElementB.components = components;

await components.init(); // Despite init is not a promise, await makes the world components to be available. Weird.

const worldA = worldElementA.world!;
setTimeout(() => worldA.camera.updateAspect()); // Don't know a wait is needed for this to work
worldA.camera.controls.addEventListener("update", () =>
  fragments.core.update(true),
);

const worldB = worldElementB.world!;
setTimeout(() => worldB.camera.updateAspect()); // Don't know a wait is needed for this to work
worldB.camera.controls.addEventListener("update", () =>
  fragments.core.update(true),
);

const [loadBtn, updateLoadBtn] = CUI.buttons.loadIfc({
  components,
  worldName: worldElementA.name,
});

loadBtn.style.position = "absolute";
loadBtn.style.top = "1rem";
loadBtn.style.left = "1rem";

const worldSelector = BUI.Component.create<BUI.Dropdown>(() => {
  const onChange = (e: Event) => {
    const dropdown = e.target;
    if (!(dropdown instanceof BUI.Dropdown)) return;
    const [worldName] = dropdown.value;
    updateLoadBtn({ worldName });
  };

  return BUI.html`
    <bim-dropdown @change=${onChange} style="position: absolute; top: 4rem; left: 1rem">
      <bim-option label="First World" value="main" checked></bim-option>
      <bim-option label="Second World" value="secondary"></bim-option>
    </bim-dropdown>
    `;
});

document.body.append(loadBtn, worldSelector);
