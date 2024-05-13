import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

interface ClassificationTree {
  filter: Record<string, string[]>;
  children?: ClassificationTree[];
}

export interface ClassificationTreeUIState {
  components: OBC.Components;
  classifications: { [name: string]: string[] };
}

function extractGroupSystem(filter: { [key: string]: string[] }): string {
  const lastKey = Object.keys(filter).pop();
  return lastKey && filter[lastKey].length > 0 ? filter[lastKey][0] : "";
}

// Recursive function to transform ClassifierTree into TableRow
function convertToTableRows(treeNodes: ClassificationTree[]) {
  return treeNodes.map((node) => {
    const row: BUI.TableGroupData = {
      data: { "Group System": extractGroupSystem(node.filter) },
    };

    if (node.children && node.children.length > 0) {
      row.children = convertToTableRows(node.children);
    }

    return row;
  });
}

export const classificationTreeTemplate = (
  state: ClassificationTreeUIState,
) => {
  const { components, classifications } = state;
  const classifier = components.get(OBC.FragmentClassifier);

  const onTableCreated = (el?: Element) => {
    if (!el) return;
    const table = el as BUI.Table;
    const regenerate = (groupSystemNames: string[], baseFilter = {}) => {
      const systems = classifier.list;
      const currentSystemName = groupSystemNames[0]; // storeys
      const systemGroups = systems[currentSystemName];
      const groups: ClassificationTree[] = [];
      if (!currentSystemName || !systemGroups) return groups;
      for (const name in systemGroups) {
        const filter = { ...baseFilter, [currentSystemName]: [name] };
        const found = classifier.find(filter);
        const hasElements = Object.keys(found).length > 0;
        if (hasElements) {
          const subTree: ClassificationTree = { filter };
          subTree.children = regenerate(groupSystemNames.slice(1), filter);
          groups.push(subTree);
        }
      }
      return groups;
    };

    const rows: BUI.TableGroupData[] = [];

    for (const classification in classifications) {
      const groups = classifications[classification];
      const tree = regenerate(groups);
      const treeRows = convertToTableRows(tree);
      rows.push({
        data: {
          "Group System": classification,
        },
        children: treeRows,
      });
    }

    table.rows = rows;
  };

  return BUI.html`
  <div>
    ${
      Object.keys(classifications).length === 0
        ? BUI.html`<bim-label label="No classifications to show"></bim-label>`
        : BUI.html`<bim-table ${BUI.ref(onTableCreated)} headers-hidden></bim-table>`
    }
  </div>
  `;
};
