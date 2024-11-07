// eslint-disable-next-line import/no-extraneous-dependencies
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { createAuthorTag } from "../../../../utils/general";
import {
  TopicStyles,
  defaultTopicStyles,
  baseTopicTagStyle,
} from "../../../../utils/topics";

export interface BCFTopicsUI {
  components: OBC.Components;
  topics?: Iterable<OBC.Topic>;
  dataStyles?: TopicStyles;
  onTopicEnter?: (topic: OBC.Topic) => void | Promise<void>;
}

export const topicsListTemplate: BUI.StatefullComponent<BCFTopicsUI> = (
  state: BCFTopicsUI,
) => {
  const { components, dataStyles: styles, onTopicEnter } = state;
  const bcfTopics = components.get(OBC.BCFTopics);
  const topics = state.topics ?? bcfTopics.list.values();
  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table;
    if (table.hiddenColumns.length === 0) table.hiddenColumns = ["Guid"];
    table.columns = ["Title"];
    table.dataTransform = {
      Title: (value, rowData) => {
        const { Guid } = rowData;
        if (typeof Guid !== "string") return value;
        const topic = bcfTopics.list.get(Guid);
        if (!topic) return value;
        const buttonID = `btn-${BUI.Manager.newRandomId()}`;
        return BUI.html`
          <div style="display: flex; overflow: hidden;">
            <style>
              #${buttonID} {
                background-color: transparent
              }

              #${buttonID}:hover {
                --bim-label--c: var(--bim-ui_accent-base)
              }
            </style>
            <bim-button @click=${() => {
              if (onTopicEnter) onTopicEnter(topic);
            }} id=${buttonID} icon="iconamoon:enter-duotone"></bim-button>
            <bim-label>${value}</bim-label>
          </div>
        `;
      },
      Priority: (value) => {
        if (typeof value !== "string") return value;
        const priorityStyles =
          styles?.priorities ?? defaultTopicStyles.priorities;
        const labelStyles = priorityStyles[value];
        return BUI.html`
          <bim-label
            .icon=${labelStyles?.icon}
            style=${BUI.styleMap({ ...baseTopicTagStyle, ...labelStyles?.style })}
          >${value}
          </bim-label>
        `;
      },
      Status: (value) => {
        if (typeof value !== "string") return value;
        const statusStyles = styles?.statuses ?? defaultTopicStyles.statuses;
        const labelStyle = statusStyles[value];
        return BUI.html`
          <bim-label
            .icon=${labelStyle?.icon}
            style=${BUI.styleMap({ ...baseTopicTagStyle, ...labelStyle?.style })}
          >${value}
          </bim-label>
        `;
      },
      Type: (value) => {
        if (typeof value !== "string") return value;
        const typesStyles = styles?.types ?? defaultTopicStyles.types;
        const labelStyles = typesStyles[value];
        return BUI.html`
          <bim-label
            .icon=${labelStyles?.icon}
            style=${BUI.styleMap({ ...baseTopicTagStyle, ...labelStyles?.style })}
          >${value}
          </bim-label>
        `;
      },
      Author: (value) => {
        if (typeof value !== "string") return value;
        return createAuthorTag(
          value,
          styles?.users ?? defaultTopicStyles.users,
        );
      },
      Assignee: (value) => {
        if (typeof value !== "string") return value;
        return createAuthorTag(
          value,
          styles?.users ?? defaultTopicStyles.users,
        );
      },
    };

    table.data = [...topics].map((topic) => {
      return {
        data: {
          Guid: topic.guid,
          Title: topic.title,
          Status: topic.status,
          Description: topic.description ?? "",
          Author: topic.creationAuthor,
          Assignee: topic.assignedTo ?? "",
          Date: topic.creationDate.toDateString(),
          DueDate: topic.dueDate?.toDateString() ?? "",
          Type: topic.type,
          Priority: topic.priority ?? "",
        },
      };
    });
  };

  return BUI.html`
    <bim-table no-indentation ${BUI.ref(onTableCreated)}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `;
};
