import * as BUI from "@thatopen/ui";
import {
  CommentsListActions,
  CommentsListState,
  CommentsListTableData,
} from "./types";
import { createAuthorTag, defaultTopicStyles } from "../../../../utils";

export const setDefaults = (
  state: CommentsListState,
  table: BUI.Table<CommentsListTableData>,
) => {
  const { topic, styles } = state;

  const actions: CommentsListActions = { delete: true, ...state.actions };

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

      let deleteBtn: BUI.TemplateResult | undefined;
      if (actions.delete) {
        const buttonID = `btn-${BUI.Manager.newRandomId()}`;
        deleteBtn = BUI.html`
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
            <bim-button @click=${onDeleteClick} id=${buttonID} icon="majesticons:delete-bin"></bim-button>
          </div>
        `;
      }

      return BUI.html`
        <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
          <div style="display: flex; justify-content: space-between;">
            <div style="display: flex; gap: 0.375rem;">
              ${createAuthorTag(comment.author, styles ?? defaultTopicStyles.users)}
              <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${comment.date.toDateString()}</bim-label>
            </div>
            ${deleteBtn}
          </div>
          <bim-label style="margin-left: 1.7rem; white-space: normal">${comment.comment}</bim-label>
        </div>
      `;
    },
  };
};
