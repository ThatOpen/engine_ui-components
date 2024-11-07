import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { TopicUserStyles, defaultTopicStyles } from "../../../../utils/topics";
import { createAuthorTag } from "../../../../utils/general";

export interface TopicCommentsActions {
  delete: boolean;
}

export interface TopicCommentsUI {
  topic: OBC.Topic;
  viewpoint?: OBC.Viewpoint;
  styles?: TopicUserStyles;
  actions?: Partial<TopicCommentsActions>;
}

export const topicCommentsTemplate = (state: TopicCommentsUI) => {
  const { topic, styles, viewpoint } = state;

  const actions: TopicCommentsActions = { delete: true, ...state.actions };

  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table;
    table.headersHidden = true;
    table.hiddenColumns = ["guid", "author"];
    table.dataTransform = {
      Comment: (value, rowData) => {
        const { guid } = rowData;
        if (typeof guid !== "string") return value;
        const comment = topic.comments.get(guid);
        if (!comment) return value;
        const onDeleteClick = () => {
          topic.comments.delete(guid);
        };

        const buttonID = `btn-${BUI.Manager.newRandomId()}`;

        return BUI.html`
          <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; gap: 0.375rem;">
                ${createAuthorTag(comment.author, styles ?? defaultTopicStyles.users)}
                <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${comment.date.toDateString()}</bim-label>
              </div>
              <div>
                <style>
                  #${buttonID} {
                    background-color: transparent;
                    --bim-label--c: var(--bim-ui_bg-contrast-60)
                  }

                  #${buttonID}:hover {
                    --bim-label--c: #FF5252;
                  }
                </style>
                ${actions?.delete ? BUI.html`<bim-button @click=${onDeleteClick} id=${buttonID} icon="majesticons:delete-bin"></bim-button>` : null}
              </div>
            </div>
            <bim-label style="margin-left: 1.7rem; white-space: normal">${comment.comment}</bim-label>
          </div>
        `;
      },
    };

    let comments: Iterable<OBC.Comment> = topic.comments.values();
    if (viewpoint) {
      comments = [...topic.comments.values()].filter(
        (comment) => comment.viewpoint === viewpoint,
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
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label>
    </bim-table>
  `;
};
