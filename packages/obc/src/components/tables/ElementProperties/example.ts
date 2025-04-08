import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as CUI from "../..";
import { entityForm } from "../../sections/SpecificationInformation/src/entity-form";

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

/* MD 
  ## Displaying data the simplest way 🔥🔥
  ---
  What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!

  ### Loading a model and computing it's relations
  First things first... let's load a model 👇
  */

const ifcLoader = components.get(OBC.IfcLoader);
await ifcLoader.setup({
  autoSetWasm: false,
  wasm: { absolute: true, path: "https://unpkg.com/web-ifc@0.0.68/" },
});
const file = await fetch("/resources/school_str.ifc");
const buffer = await file.arrayBuffer();
const typedArray = new Uint8Array(buffer);
const model = await ifcLoader.load(typedArray);
world.scene.three.add(model);

/* MD
  :::tip

  You don't need to add the model into the scene to display its properties. However, as we are going to display the properties for each selected element, then having the model into the scene is obvious, right?

  :::

  Now, in order to get the most out of the properties table, you need to calculate the relations index of your model. To do it, you will need to use the [IfcRelationsIndexer](/Tutorials/Components/Core/IfcRelationsIndexer) component from `@thatopen/components` to speed up the process.
  */

const indexer = components.get(OBC.IfcRelationsIndexer);
await indexer.process(model);

/* MD
  Once the relations are processed, the `Element Properties` component has everything it needs in order to display the properties in a cool way 😎.

  ### Creating the properties table
  Let's create an instance of the functional component, like this:
  */

const ids = components.get(OBC.IDSSpecifications);
const specification = ids.create("Walls_LOI200", ["IFC4"]);
specification.description =
  "These are all the requirements for walls in Level of Information 200";

const ifcWallFacet = new OBC.IDSEntity(components, {
  type: "simple",
  parameter: "IFCWALL",
});

ifcWallFacet.predefinedType = {
  type: "enumeration",
  parameter: ["SOLIDWALL", "PARTITIONING", "SHEAR"],
};

const ifcSlabFacet = new OBC.IDSEntity(components, {
  type: "simple",
  parameter: "IFCSLAB",
});

const isExternalFacet = new OBC.IDSProperty(
  components,
  { type: "simple", parameter: "Pset_WallCommon" },
  { type: "simple", parameter: "IsExternal" },
);

isExternalFacet.dataType = "IFCBOOLEAN";
isExternalFacet.uri = "www.custom-cde.com/12398b";
isExternalFacet.value = { type: "pattern", parameter: "*." };

const uniformatFacet = new OBC.IDSClassification(components, {
  type: "simple",
  parameter: "Uniformat (2015)",
});

uniformatFacet.cardinality = "optional";
uniformatFacet.value = { type: "simple", parameter: "A.10" };
uniformatFacet.uri = "www.custom-cde.com/23570b9";

const attributeFacet = new OBC.IDSAttribute(components, {
  type: "simple",
  parameter: "Name",
});

attributeFacet.value = { type: "simple", parameter: "MuroFachada_20cm" };

specification.applicability.add(ifcWallFacet, ifcSlabFacet);
specification.requirements.add(isExternalFacet, uniformatFacet, attributeFacet);

const [panel] = BUI.Component.create((state, update) => {
  const { spec } = state;

  let specificationSection: Element | null = null;
  let applicabilitySection: Element | null = null;
  let requirementsSection: Element | null = null;
  let loadSpecificationSection: Element | null = null;

  if (spec) {
    const specificationInformation = CUI.sections.specificationInformation({
      components,
      specification,
    })[0];

    specificationSection = BUI.Component.create(
      () => BUI.html`
      <bim-panel-section label="Information" collapsed>
        ${specificationInformation}
      </bim-panel-section>
    `,
    );

    const applicabilityTable = CUI.tables.facetsList({
      components,
      facets: specification.applicability,
    })[0];

    applicabilityTable.expanded = false;

    applicabilitySection = BUI.Component.create(
      () => BUI.html`
        <bim-panel-section label="Applicability" collapsed>
          <div class="applicability" style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div style="display: flex; gap: 0.25rem">
              <bim-text-input placeholder="Search..."></bim-text-input>
              <bim-button style="flex: 0" icon="mingcute:add-fill">
                <bim-context-menu>
                  <bim-button label="Entity"></bim-button>
                  <bim-button label="Attribute"></bim-button>
                  <bim-button label="Property"></bim-button>
                  <bim-button label="Classification"></bim-button>
                </bim-context-menu> 
              </bim-button>
            </div>
            ${applicabilityTable}
          </div> 
        </bim-panel-section>
      `,
    );

    const requirementsTable = CUI.tables.facetsList({
      components,
      facets: specification.requirements,
    })[0];

    requirementsTable.expanded = false;

    requirementsSection = BUI.Component.create(
      () => BUI.html`
    <bim-panel-section label="Requirements" collapsed>
          ${requirementsTable}
        </bim-panel-section>
    `,
    );

    // const [entity] = entityForm({
    //   components,
    //   onSubmit: (facet) => {
    //     specification.applicability.add(facet);
    //     update();
    //   },
    // });
  } else {
    const onClick = ({ target }: { target: BUI.Button }) => {
      target.loading = true;
      setTimeout(() => {
        update({ spec: specification });
        target.loading = false;
      }, 200);
    };

    loadSpecificationSection = BUI.Component.create(
      () => BUI.html`
      <bim-panel-section label="Information Delivery Specification">
        <bim-button label="Load Specification" @click=${onClick}></bim-button>
      </bim-panel-section>
    `,
    );
  }

  return BUI.html`
      <bim-panel style="width: 24rem">
        ${loadSpecificationSection}
        ${specificationSection}
        ${applicabilitySection}
        ${requirementsSection}
      </bim-panel> 
    `;
}, {});

/* MD
  Finally, let's create a BIM Grid element and provide both the panel and the viewport to display everything.
  */

const app = document.createElement("bim-grid");
app.layouts = {
  main: {
    template: `
    "panel viewport"
    /auto 1fr
    `,
    elements: { panel, viewport },
  },
};

app.layout = "main";
document.body.append(app);

/* MD
  Congratulations! You have now created a fully working properties table for your app in less than 5 minutes of work. Keep going with more tutorials! 💪
  */
