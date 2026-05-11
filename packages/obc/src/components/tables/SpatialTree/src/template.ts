import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as BUI from "@thatopen/ui";
import { SpatialTreeItem } from "@thatopen/fragments";
import { SpatialTreeState, SpatialTreeData } from "./types";

const toArray = <T>(v: T | T[] | null): T[] => {
  if (v === null) return [];
  return Array.isArray(v) ? v : [v];
};

/**
 * Walks the spatial structure synchronously and pushes every node's
 * `localId` (when set) into `out`. Used by `computeRowData` to gather
 * every id up front so we can resolve names in a single batched
 * `getItemsData` call instead of one worker round-trip per node.
 */
const collectLocalIds = (
  structure: SpatialTreeItem,
  out: number[],
): void => {
  if (structure.localId !== null && structure.localId !== undefined) {
    out.push(structure.localId);
  }
  if (structure.children) {
    for (const child of structure.children) {
      collectLocalIds(child, out);
    }
  }
};

// Returns either a single row, an array of rows (when this node is itself
// removed and replaced by its expansion — `collapseCategories` case), or
// null when the structure has nothing to render.
//
// Sync — names for every localId must be pre-resolved into `nameByLocalId`
// before calling. Original implementation `await`-ed `item.getAttributes()`
// for each node which scaled to thousands of serial worker round-trips
// on real BIM models.
const buildModelTree = (
  model: FRAGS.FragmentsModel,
  structure: SpatialTreeItem,
  nameByLocalId: Map<number, string>,
  collapseSingleChildCategories = false,
  collapseCategories: Set<string> = new Set(),
):
  | BUI.TableGroupData<SpatialTreeData>
  | BUI.TableGroupData<SpatialTreeData>[]
  | null => {
  const { localId, category, children } = structure;
  if (category && children) {
    // Auto-collapse: drop the category-grouping row and promote its
    // children straight up to whatever wraps us. Each promoted child
    // (typically a named storey / space / etc.) keeps its own row;
    // the user can click to expand it. The dropped category is
    // stashed onto each promoted node that doesn't already carry one
    // so composite labels like "IFCBUILDINGSTOREY (Level B3)" still
    // render. We deliberately do NOT also flatten the named-instance
    // level — collapsing the storeys' contents in-place would mount
    // every wall/slab in the model the moment the tree loads.
    if (collapseCategories.has(category)) {
      const result: BUI.TableGroupData<SpatialTreeData>[] = [];
      for (const child of children) {
        const sub = buildModelTree(
          model,
          child,
          nameByLocalId,
          collapseSingleChildCategories,
          collapseCategories,
        );
        for (const r of toArray(sub)) {
          if (!r.data.category) {
            r.data = { ...r.data, category };
          }
          result.push(r);
        }
      }
      return result.length > 0 ? result : null;
    }
    if (collapseSingleChildCategories && children.length === 1) {
      const merged = buildModelTree(
        model,
        children[0],
        nameByLocalId,
        collapseSingleChildCategories,
        collapseCategories,
      );
      // The single child may itself have been auto-collapsed into a list.
      // Fall through to the normal "build a row, recurse children" path
      // for that case so we don't lose the parent category label.
      if (merged && !Array.isArray(merged)) {
        merged.data = { ...merged.data, category };
        return merged;
      }
      if (Array.isArray(merged)) {
        for (const r of merged) {
          if (!r.data.category) {
            r.data = { ...r.data, category };
          }
        }
        return merged;
      }
      return merged;
    }
    const row: BUI.TableGroupData<SpatialTreeData> = {
      data: {
        Name: category,
        category,
        modelId: model.modelId,
        children: JSON.stringify(children.map((item: any) => item.localId)),
      },
    };
    for (const child of children) {
      const sub = buildModelTree(
        model,
        child,
        nameByLocalId,
        collapseSingleChildCategories,
        collapseCategories,
      );
      for (const r of toArray(sub)) {
        if (!r.data.category) {
          r.data = { ...r.data, category };
        }
        if (!row.children) row.children = [];
        row.children.push(r);
      }
    }
    return row;
  }
  if (localId !== null && localId !== undefined) {
    const name = nameByLocalId.get(localId);
    if (name === undefined) return null;
    const row: BUI.TableGroupData<SpatialTreeData> = {
      data: {
        Name: name,
        modelId: model.modelId,
        localId,
      },
    };
    for (const child of children ?? []) {
      const sub = buildModelTree(
        model,
        child,
        nameByLocalId,
        collapseSingleChildCategories,
        collapseCategories,
      );
      for (const r of toArray(sub)) {
        if (!row.children) row.children = [];
        row.children.push(r);
      }
    }
    return row;
  }
  return null;
};

const computeRowData = async (
  models: Iterable<FRAGS.FragmentsModel>,
  collapseSingleChildCategories = false,
  collapseCategories: Set<string> = new Set(),
) => {
  const rows: BUI.TableGroupData[] = [];
  for (const model of models) {
    const structure = await model.getSpatialStructure();

    // Resolve every node's Name in ONE batched worker call rather
    // than one round-trip per node. For a BLOXHUB-sized model this
    // is the difference between a single ~ms call and thousands of
    // sequential awaits.
    const localIds: number[] = [];
    collectLocalIds(structure, localIds);
    const nameByLocalId = new Map<number, string>();
    if (localIds.length > 0) {
      const data = await model.getItemsData(localIds, {
        attributesDefault: false,
        attributes: ["Name"],
      });
      for (let i = 0; i < localIds.length; i++) {
        const entry = data[i];
        if (!entry) continue;
        const nameAttr = (entry as Record<string, unknown>).Name as
          | { value?: unknown }
          | undefined;
        const raw = nameAttr && "value" in nameAttr ? nameAttr.value : undefined;
        nameByLocalId.set(
          localIds[i],
          raw === undefined || raw === null ? "" : String(raw),
        );
      }
    }

    const tree = buildModelTree(
      model,
      structure,
      nameByLocalId,
      collapseSingleChildCategories,
      collapseCategories,
    );
    const treeRows = toArray(tree);
    if (treeRows.length === 0) continue;
    const modelData: BUI.TableGroupData<SpatialTreeData> = {
      data: {
        Name: model.modelId,
        modelId: model.modelId,
      },
      children: treeRows,
    };
    rows.push(modelData);
  }
  return rows;
};

export const spatialTreeTemplate = (state: SpatialTreeState) => {
  const {
    components,
    models,
    collapseSingleChildCategories = false,
    collapseCategories = [],
  } = state;
  const collapseCategoriesSet = new Set(collapseCategories);

  const selectHighlighterName = state.selectHighlighterName ?? "select";

  const onCellCreated = ({
    detail,
  }: CustomEvent<BUI.CellCreatedEventDetail<SpatialTreeData>>) => {
    const { cell } = detail;
    if (cell.column === "Name" && !cell.rowData.Name) {
      cell.style.gridColumn = "1 / -1";
    }
  };

  const onRowCreated = (
    e: CustomEvent<BUI.RowCreatedEventDetail<SpatialTreeData>>,
  ) => {
    e.stopImmediatePropagation();
    const { row } = e.detail;
    const highlighter = components.get(OBF.Highlighter);
    const fragments = components.get(OBC.FragmentsManager);
    row.onclick = async () => {
      if (!selectHighlighterName) return;
      const {
        data: { modelId, localId, children },
      } = row;
      if (!(modelId && (localId !== undefined || children))) return;
      const model = fragments.list.get(modelId);
      if (!model) return;
      if (localId !== undefined) {
        const childrenLocalIds = await model.getItemsChildren([localId]);
        const ids =
          childrenLocalIds.length !== 0
            ? new Set(childrenLocalIds)
            : new Set([localId]);
        const modelIdMap = { [modelId]: ids };
        // Let the highlighter's `zoomToSelection` flag (or any onHighlight
        // listener) decide whether to move the camera. The tree shouldn't
        // force zoom because:
        //  * multi-element rows would do thousands of bbox lookups, and
        //  * forcing zoom here while the consumer also zooms in
        //    `onHighlight` causes a double fitToSphere.
        highlighter.highlightByID(selectHighlighterName, modelIdMap, true);
      } else if (children) {
        const localIds = JSON.parse(children);
        const childrenLocalIds = await model.getItemsChildren(localIds);
        const ids =
          childrenLocalIds.length !== 0 ? childrenLocalIds : localIds;
        const modelIdMap = { [modelId]: ids };
        highlighter.highlightByID(selectHighlighterName, modelIdMap, true);
      }
    };
  };

  const onTableCreated = async (element?: Element) => {
    if (!element) return;
    const table = element as BUI.Table<SpatialTreeData>;

    table.loadFunction = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            computeRowData(
              models,
              collapseSingleChildCategories,
              collapseCategoriesSet,
            ),
          );
        });
      });
    };

    table.loadData(true);
  };

  return BUI.html`
    <bim-table @rowcreated=${onRowCreated} @cellcreated=${onCellCreated} ${BUI.ref(onTableCreated)} headers-hidden>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models available to display the spatial structure!
      </bim-label>
    </bim-table>
  `;
};
