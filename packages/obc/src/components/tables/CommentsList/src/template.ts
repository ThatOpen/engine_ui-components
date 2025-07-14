import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { CommentsListState, CommentsListTableData } from "./types";

export const commentsListTemplate: BUI.StatefullComponent<CommentsListState> = (
  state,
) => {
  const { topic, styles, viewpoint } = state;

  const missingDataMessage =
    state.missingDataMessage ?? "The topic has no comments";

  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table<CommentsListTableData>;

    let comments: Iterable<OBC.Comment> = topic.comments.values();
    if (viewpoint) {
      comments = [...topic.comments.values()].filter(
        (comment) => comment.viewpoint === viewpoint.guid,
      );
    }

    table.data = [...comments].map((comment) => {
      return {
        data: {
          guid: comment.guid,
          Comment: comment.comment,
          author: (() => {
            const userStyles = styles;
            if (!userStyles) return comment.author;
            const authorData = userStyles[comment.author];
            return authorData?.name ?? comment.author;
          })(),
        },
      };
    });
  };

  return BUI.html`
    <bim-table no-indentation ${BUI.ref(onTableCreated)}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">${missingDataMessage}</bim-label>
    </bim-table>
  `;
};
