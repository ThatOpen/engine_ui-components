import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "../../..";
import { entityForm } from "./src/entity-form";

BUI.Manager.init();

const components = new OBC.Components();
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
isExternalFacet.uri = "www.google.com";
isExternalFacet.value = { type: "pattern", parameter: "*." };

const uniformatFacet = new OBC.IDSClassification(components, {
  type: "simple",
  parameter: "Uniformat (2015)",
});

uniformatFacet.value = { type: "simple", parameter: "A.10" };
uniformatFacet.uri = "www.google.com";

const attributeFacet = new OBC.IDSAttribute(components, {
  type: "simple",
  parameter: "Name",
});

attributeFacet.value = { type: "simple", parameter: "MuroFachada_20cm" };

specification.applicability.add(ifcWallFacet, ifcSlabFacet);
specification.requirements.add(isExternalFacet, uniformatFacet, attributeFacet);

const [panel] = BUI.Component.create((_, update) => {
  const [specificationSection] = CUI.sections.specificationInformation({
    components,
    specification,
  });

  const [applicabilityTable] = CUI.tables.facetsList({
    components,
    facets: specification.applicability,
  });

  const [requirementsTable] = CUI.tables.facetsList({
    components,
    facets: specification.requirements,
  });

  const [entity] = entityForm({
    components,
    onSubmit: (facet) => {
      specification.applicability.add(facet);
      update();
    },
  });

  return BUI.html`
    <bim-panel style="width: 24rem">
      <bim-panel-section label="Information">
        ${specificationSection}
      </bim-panel-section>
      <bim-panel-section label="Applicability">
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
      <bim-panel-section label="Requirements">
        ${requirementsTable}
      </bim-panel-section>
    </bim-panel> 
  `;
}, {});

document.body.append(panel);
