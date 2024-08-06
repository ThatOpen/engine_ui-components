import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

export interface ClassificationTreeUIState {
  components: OBC.Components;
  classifications: (string | { system: string; label: string })[];
}

let table: BUI.Table;

export const classificationTreeTemplate = (
  state: ClassificationTreeUIState,
) => {
  const { components, classifications } = state;
  const classifier = components.get(OBC.Classifier);
  const hider = components.get(OBC.Hider);

  if (!table) {
    table = document.createElement("bim-table");
    table.headersHidden = true;
    table.hiddenColumns = ["system"];
    table.columns = ["Name", { name: "Actions", width: "auto" }];
    table.dataTransform = {
      Actions: (value, rowData) => {
        const { system, Name } = rowData;
        if (!(typeof system === "string" && typeof Name === "string"))
          return value;
        const groups = classifier.list[system];
        if (!(groups && groups[Name])) return value;
        const groupData = groups[Name];
        const { map: fragmentIdMap } = groupData;
        const onVisibilityChange = (e: Event) => {
          const input = e.target as BUI.Checkbox;
          hider.set(input.value, fragmentIdMap);
        };
        return BUI.html`
          <div>
            <bim-checkbox checked @change=${onVisibilityChange}></bim-checkbox>
          </div>
        `;
      },
    };
  }

  const rows: BUI.TableGroupData[] = [];

  for (const classification of classifications) {
    const system =
      typeof classification === "string"
        ? classification
        : classification.system;

    const label =
      typeof classification === "string"
        ? classification
        : classification.label;

    const groups = classifier.list[system];
    if (!groups) continue;
    rows.push({
      data: { Name: label, system },
      children: Object.keys(groups).map((group) => {
        return { data: { Name: group, system, Actions: "" } };
      }),
    });
  }

  table.data = rows;

  return BUI.html`${table}`;
};
