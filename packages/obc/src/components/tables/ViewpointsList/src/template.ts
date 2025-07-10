import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { ViewpointsListState } from "./types";

export const viewpointsListTemplate: BUI.StatefullComponent<
  ViewpointsListState
> = (state) => {
  const { components } = state;

  const missingDataMessage =
    state.missingDataMessage ?? "No viewpoints to display";

  const manager = components.get(OBC.Viewpoints);
  const viewpointIDs = state.topic?.viewpoints ?? manager.list.keys();
  const viewpoints: OBC.Viewpoint[] = [];
  for (const viewpointID of viewpointIDs) {
    const viewpoint = manager.list.get(viewpointID);
    if (viewpoint) viewpoints.push(viewpoint);
  }

  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table;
    table.data = viewpoints.map((viewpoint, index) => {
      return {
        data: {
          Guid: viewpoint.guid,
          Title: viewpoint.title ?? `Viewpoint ${state.topic ? index + 1 : ""}`,
          Actions: "",
        },
      };
    });
  };

  const onCellCreated = ({
    detail,
  }: {
    detail: BUI.CellCreatedEventDetail;
  }) => {
    const { cell } = detail;
    cell.style.padding = "0.25rem";
  };

  return BUI.html`
    <bim-table ${BUI.ref(onTableCreated)} @cellcreated=${onCellCreated}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${missingDataMessage}</bim-label>
    </bim-table>
  `;
};
