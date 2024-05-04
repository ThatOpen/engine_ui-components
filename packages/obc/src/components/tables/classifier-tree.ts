import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

interface ClassifierTree {
  filter: Record<string, string[]>;
  children?: ClassifierTree[];
}

interface ClassifierTreeUIState {
  classifier: OBC.FragmentClassifier;
  groups: string[];
  name: string;
}

function extractGroupSystem(filter: { [key: string]: string[] }): string {
  const lastKey = Object.keys(filter).pop();
  return lastKey && filter[lastKey].length > 0 ? filter[lastKey][0] : "";
}

// Recursive function to transform ClassifierTree into TableRow
function convertToTableRows(treeNodes: ClassifierTree[]) {
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

export const classifierTreeTemplate = (state: ClassifierTreeUIState) => {
  const { classifier, groups, name } = state;
  const table = document.createElement("bim-table") as BUI.Table;
  table.headersHidden = true;

  const regenerate = (groupSystemNames: string[], baseFilter = {}) => {
    const systems = classifier.get();
    const currentSystemName = groupSystemNames[0]; // storeys
    const systemGroups = systems[currentSystemName];
    const groups: ClassifierTree[] = [];
    if (!currentSystemName || !systemGroups) return groups;
    for (const name in systemGroups) {
      const filter = { ...baseFilter, [currentSystemName]: [name] };
      const found = classifier.find(filter);
      const hasElements = Object.keys(found).length > 0;
      if (hasElements) {
        const subTree: ClassifierTree = { filter };
        subTree.children = regenerate(groupSystemNames.slice(1), filter);
        groups.push(subTree);
      }
    }
    return groups;
  };

  const tree = regenerate(groups);

  const rows = convertToTableRows(tree);

  table.rows = [
    {
      data: {
        "Group System": name,
      },
      children: rows,
    },
  ];

  return BUI.html`<div>${table}</div>`;
};

export const classifierTree = (state: ClassifierTreeUIState) => {
  const [element, updateElement] = BUI.Component.create<
    BUI.Table,
    ClassifierTreeUIState
  >(classifierTreeTemplate, state);

  return element;
};
