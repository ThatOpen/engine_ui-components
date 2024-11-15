import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { FacetsListState, FacetsListTableData } from "./types";
import { createEntityRow } from "./entity-row";
import { createPropertyRow } from "./property-row";
import { createClassificationRow } from "./classification-row";
import { createAttributeRow } from "./attribute-row";

const onCellCreated = ({
  detail,
}: CustomEvent<BUI.CellCreatedEventDetail<FacetsListTableData>>) => {
  const { cell } = detail;
  if (cell.column === "Name" && !cell.rowData.Value) {
    cell.style.gridColumn = "1 / -1";
  }
};

export const facetsListTemplate: BUI.StatefullComponent<FacetsListState> = (
  state,
) => {
  const { facets } = state;

  const onTableCreated = (e?: Element) => {
    if (!(e instanceof BUI.Table)) return;
    const table = e as BUI.Table<FacetsListTableData>;
    table.dataTransform = {
      Name: (value, rowData) => {
        const { Cardinality } = rowData;
        if (!Cardinality) return value;

        return BUI.html`
          <div style="display: flex; gap: 0.25rem; width: 100%; justify-content: space-between">
            <div style="display: flex; gap: 0.25rem; align-items: center">
              <bim-label>${value}</bim-label>
              <bim-label style="background-color: var(--bim-ui_accent-base); color: black; padding: 0 0.375rem; border-radius: 9999px;">${Cardinality}</bim-label>
            </div>
            <div style="display: flex">
             <bim-button icon="nrk:more">
              <bim-context-menu>
                <bim-button label="Edit"></bim-button> 
                <bim-button label="Delete"></bim-button> 
              </bim-context-menu> 
             </bim-button> 
            </div>
          </div>
        `;
      },
      Value: (value, rowData) => {
        const { Name } = rowData;

        if (Name === "URI") {
          const onClick = () => {
            const uri = value.startsWith("https") ? value : `https://${value}`;
            window.open(uri);
          };

          const btnId = `btn-${BUI.Manager.newRandomId()}`;
          return BUI.html`
            <div style="display: flex;">
              <style>
                #${btnId} {
                  background-color: transparent
                }

                #${btnId}:hover {
                  --bim-label--c: var(--bim-ui_accent-base)
                }
              </style>
              <bim-label>${value}</bim-label>
              <bim-button @click=${onClick} id=${btnId} icon="majesticons:open"></bim-button>
            </div>
          `;
        }

        return value;
      },
    };

    const data: BUI.TableGroupData<FacetsListTableData>[] = [];

    for (const facet of facets) {
      if (facet.facetType === "Entity") {
        const row = createEntityRow(facet as OBC.IDSEntity);
        data.push(row);
      }

      if (facet.facetType === "Property") {
        const row = createPropertyRow(facet as OBC.IDSProperty);
        data.push(row);
      }

      if (facet.facetType === "Classification") {
        const row = createClassificationRow(facet as OBC.IDSClassification);
        data.push(row);
      }

      if (facet.facetType === "Attribute") {
        const row = createAttributeRow(facet as OBC.IDSAttribute);
        data.push(row);
      }
    }

    table.data = data;
  };

  return BUI.html`
    <bim-table @cellcreated=${onCellCreated} ${BUI.ref(onTableCreated)} expanded headers-hidden>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no facets to display</bim-label>
    </bim-table>
  `;
};
