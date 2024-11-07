import * as BUI from "@thatopen/ui";
import { createAuthorTag } from "../../../../utils/general";
import {
  baseTopicTagStyle,
  defaultTopicStyles,
  topicFormTemplate,
} from "../../../../utils/topics";
import {
  TopicInformationSectionActions,
  TopicInformationSectionUI,
} from "./types";

export const topicInformationSectionTemplate: BUI.StatefullComponent<
  TopicInformationSectionUI
> = (state, update) => {
  const { components, editing, topic, styles } = state;

  const actions: TopicInformationSectionActions = {
    update: true,
    ...state.actions,
  };

  const priorityStyles = styles?.priorities ?? defaultTopicStyles.priorities;
  const statusStyles = styles?.statuses ?? defaultTopicStyles.statuses;
  const typesStyles = styles?.types ?? defaultTopicStyles.types;

  let priorityStyle;
  if (topic?.priority) {
    priorityStyle = priorityStyles[topic.priority];
  }

  let typeStyle;
  if (topic?.type) {
    typeStyle = typesStyles[topic.type];
  }

  let statusStyle;
  if (topic?.type) {
    statusStyle = statusStyles[topic.status];
  }

  let formTemplate: BUI.TemplateResult | undefined;
  let sectionTemplate: BUI.TemplateResult | undefined;

  if (editing) {
    formTemplate = topicFormTemplate({
      components,
      topic,
      styles,
      onSubmit: () => {
        update({ editing: false });
      },
      onCancel: () => {
        update({ editing: false });
      },
    });
  } else {
    sectionTemplate = BUI.html`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${topic.title}</bim-label>
      </div>

      ${
        topic.description
          ? BUI.html`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${topic.description}</bim-label>
            </div>
          `
          : null
      }

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${statusStyle?.icon} style=${BUI.styleMap({ ...baseTopicTagStyle, ...statusStyle?.style })}
        >${topic.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${typeStyle?.icon} style=${BUI.styleMap({ ...baseTopicTagStyle, ...typeStyle?.style })}
        >${topic.type}
        </bim-label>
      </div>

      ${
        topic.priority
          ? BUI.html`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${priorityStyle?.icon} style=${BUI.styleMap({ ...baseTopicTagStyle, ...priorityStyle?.style })}
              >${topic.priority}
              </bim-label>
            </div>`
          : null
      }

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${createAuthorTag(topic.creationAuthor, styles?.users ?? defaultTopicStyles.users)}
      </div>

      ${
        topic.assignedTo
          ? BUI.html`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${createAuthorTag(topic.assignedTo, styles?.users ?? defaultTopicStyles.users)}
          </div>`
          : null
      }

      ${
        topic.dueDate
          ? BUI.html`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${topic.dueDate.toDateString()}</bim-label>
          </div>`
          : null
      }

      ${
        topic.modifiedAuthor
          ? BUI.html`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${createAuthorTag(topic.modifiedAuthor, styles?.users ?? defaultTopicStyles.users)}
          </div>`
          : null
      }

      ${
        topic.modifiedDate
          ? BUI.html`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${topic.modifiedDate.toDateString()}</bim-label>
            </div>`
          : null
      }

      ${
        topic.labels.size !== 0
          ? BUI.html`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${[...topic.labels].join(", ")}</bim-label>
          </div>`
          : null
      }

      ${
        actions.update
          ? BUI.html`
              <bim-button @click=${() => update({ editing: true })} label="Update Information" icon="tabler:refresh"></bim-button> 
            `
          : null
      }
    `;
  }

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${editing ? formTemplate : sectionTemplate}
    </div>
  `;
};
