import * as BUI from "@thatopen/ui";
import { defaultTopicStyles } from "../../../../utils/topics";
import {
  TopicCommentsSectionActions,
  TopicCommentsSectionState,
} from "./types";
import { commentsList } from "../../../tables/CommentsList";

export const topicCommentsSectionTemplate: BUI.StatefullComponent<
  TopicCommentsSectionState
> = (state, update) => {
  const { showInput, topic, styles } = state;

  const actions: TopicCommentsSectionActions = {
    add: true,
    delete: true,
    ...state.actions,
  };

  const textInputID = `input-${BUI.Manager.newRandomId()}`;
  const acceptBtnID = `btn-${BUI.Manager.newRandomId()}`;
  const cancelBtnID = `btn-${BUI.Manager.newRandomId()}`;

  const acceptBtn = () => {
    return document.getElementById(acceptBtnID) as BUI.Button | undefined;
  };

  const textInput = () => {
    return document.getElementById(textInputID) as BUI.TextInput | undefined;
  };

  const isInputValid = () => {
    const input = textInput();
    if (!input) return false;
    return input.value.trim().length > 0;
  };

  const onAddComment = () => {
    update({ showInput: true });
  };

  const onAccept = () => {
    const input = textInput();
    const isValid = isInputValid();
    if (!(input && isValid)) return;
    topic.createComment(input.value);
    update({ showInput: false });
  };

  const onCancel = () => {
    update({ showInput: false });
  };

  const onUpdateAcceptBtn = () => {
    const btn = acceptBtn();
    if (!btn) return;
    const input = textInput();
    if (!input) {
      btn.disabled = true;
      return;
    }
    btn.disabled = !isInputValid();
  };

  const addCommentBtnTemplate = BUI.html`
    ${
      actions.add
        ? BUI.html`<bim-button @click=${onAddComment} label="Add Comment" icon="majesticons:comment-line"></bim-button>`
        : null
    }
  `;

  const onKeyPress = (e: KeyboardEvent) => {
    if (!(e.code === "Enter" && e.ctrlKey)) return;
    onAccept();
  };

  const commentInputTemplate = BUI.html`
    <bim-text-input id=${textInputID} @input=${onUpdateAcceptBtn} @keypress=${onKeyPress} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${acceptBtnID} {
          background-color: #329936;
        }  

        #${cancelBtnID} {
          background-color: transparent;
        }

        #${cancelBtnID}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${cancelBtnID} @click=${onCancel} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${acceptBtnID} @click=${onAccept} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `;

  const [list] = commentsList({
    topic,
    actions,
    styles: styles ?? defaultTopicStyles.users,
  });

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${list}
      ${showInput ? commentInputTemplate : addCommentBtnTemplate}
    </div>
  `;
};
