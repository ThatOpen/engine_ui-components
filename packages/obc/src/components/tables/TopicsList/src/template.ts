// eslint-disable-next-line import/no-extraneous-dependencies
import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";

interface DataStyles {
  [name: string]: { icon?: string; style?: Record<string, string> };
}

interface UserStyles {
  [email: string]: { name: string; picture?: string };
}

interface TopicDataStyles {
  priorities?: DataStyles;
  statuses?: DataStyles;
  types?: DataStyles;
  users?: UserStyles;
}

export interface BCFTopicsUI {
  components: OBC.Components;
  topics?: Iterable<OBC.Topic>;
  dataStyles?: TopicDataStyles;
  onTopicEnter?: (topic: OBC.Topic) => void | Promise<void>;
}

const defaultStyles: Required<TopicDataStyles> = {
  users: {
    "jhon.doe@example.com": { name: "Jhon Doe" },
  },
  priorities: {
    "On hold": {
      icon: "flowbite:circle-pause-outline",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#767676",
      },
    },
    Minor: {
      icon: "mingcute:arrows-down-fill",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#4CAF50",
      },
    },
    Normal: {
      icon: "fa6-solid:grip-lines",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FB8C00",
      },
    },
    Major: {
      icon: "mingcute:arrows-up-fill",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FF5252",
      },
    },
    Critical: {
      icon: "ph:warning",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FB8C00",
      },
    },
  },
  statuses: {
    Active: {
      icon: "prime:circle-fill",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
      },
    },
    "In Progress": {
      icon: "prime:circle-fill",
      style: {
        backgroundColor: "#fa89004d",
        "--bim-label--c": "#FB8C00",
        "--bim-icon--c": "#FB8C00",
      },
    },
    "In Review": {
      icon: "prime:circle-fill",
      style: {
        backgroundColor: "#9c6bff4d",
        "--bim-label--c": "#9D6BFF",
        "--bim-icon--c": "#9D6BFF",
      },
    },
    Done: {
      icon: "prime:circle-fill",
      style: {
        backgroundColor: "#4CAF504D",
        "--bim-label--c": "#4CAF50",
        "--bim-icon--c": "#4CAF50",
      },
    },
    Closed: {
      icon: "prime:circle-fill",
      style: {
        backgroundColor: "#414141",
        "--bim-label--c": "#727272",
        "--bim-icon--c": "#727272",
      },
    },
  },
  types: {
    Clash: {
      icon: "gg:close-r",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FB8C00",
      },
    },
    Issue: {
      icon: "mdi:bug-outline",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FF5252",
      },
    },
    Failure: {
      icon: "mdi:bug-outline",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FF5252",
      },
    },
    Inquiry: {
      icon: "majesticons:comment-line",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FF5252",
      },
    },
    Fault: {
      icon: "ph:warning",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FF5252",
      },
    },
    Remark: {
      icon: "ph:note-blank-bold",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#FB8C00",
      },
    },
    Request: {
      icon: "mynaui:edit-one",
      style: {
        backgroundColor: "var(--bim-ui_bg-contrast-20)",
        "--bim-icon--c": "#9D6BFF",
      },
    },
  },
};

const baseTagStyle = {
  padding: "0.25rem 0.5rem",
  borderRadius: "999px",
  "--bim-label--c": "var(--bim-ui_bg-contrast-100)",
};

const createAuthorTag = (value: string, styles?: Partial<TopicDataStyles>) => {
  const userStyles = styles?.users ?? defaultStyles.users;
  const labelStyles = userStyles[value];
  const name = labelStyles?.name ?? value;
  const words = name.trim().split(/\s+/);
  let firstLetter;
  let secondLetter;
  if (words[0] && words[0][0]) {
    firstLetter = words[0][0].toUpperCase();
    if (words[0][1]) secondLetter = words[0][1].toUpperCase();
  }
  if (words[1] && words[1][0]) {
    secondLetter = words[1][0].toUpperCase();
  }
  return BUI.html`
  <div style="display: flex; gap: 0.25rem; overflow: hidden;">
    ${
      !labelStyles?.picture && (firstLetter || secondLetter)
        ? BUI.html`
      <bim-label
        style=${BUI.styleMap({
          borderRadius: "999px",
          padding: "0.375rem",
          backgroundColor: "var(--bim-ui_bg-contrast-20)",
          aspectRatio: "1",
          fontSize: "0.7rem",
        })}>${firstLetter}${secondLetter}</bim-label>
      `
        : null
    }
    <bim-label .img=${labelStyles?.picture}>${name}</bim-label>
  </div>
`;
};

export const topicsListTemplate = (state: BCFTopicsUI) => {
  const { components, dataStyles: styles, onTopicEnter } = state;
  const bcfTopics = components.get(OBC.BCFTopics);
  const topics = state.topics ?? bcfTopics.list.values();
  const onTableCreated = (e?: Element) => {
    if (!e) return;
    const table = e as BUI.Table;
    table.hiddenColumns = ["Guid"];
    table.columns = ["Title"];
    table.selectableRows = true;
    table.dataTransform = {
      Title: (value, rowData) => {
        const { Guid } = rowData;
        if (typeof Guid !== "string") return value;
        const topic = bcfTopics.list.get(Guid);
        if (!topic) return value;
        return BUI.html`
        <div style="display: flex; overflow: hidden;">
          <style>
            #BBETO {
              background-color: transparent
            }
  
            #BBETO:hover {
              --bim-label--c: var(--bim-ui_accent-base)
            }
          </style> 
          <bim-button @click=${() => {
            if (onTopicEnter) onTopicEnter(topic);
          }} id="BBETO" icon="iconamoon:enter-duotone"></bim-button>
          <bim-label>${value}</bim-label>
        </div>`;
      },
      Priority: (value) => {
        if (typeof value !== "string") return value;
        const priorityStyles = styles?.priorities ?? defaultStyles.priorities;
        const labelStyles = priorityStyles[value];
        return BUI.html`
          <bim-label
            .icon=${labelStyles?.icon}
            style=${BUI.styleMap({ ...baseTagStyle, ...labelStyles?.style })}
          >${value}
          </bim-label>
        `;
      },
      Status: (value) => {
        if (typeof value !== "string") return value;
        const statusStyles = styles?.statuses ?? defaultStyles.statuses;
        const labelStyle = statusStyles[value];
        return BUI.html`
          <bim-label
            .icon=${labelStyle?.icon}
            style=${BUI.styleMap({ ...baseTagStyle, ...labelStyle?.style })}
          >${value}
          </bim-label>
        `;
      },
      Type: (value) => {
        if (typeof value !== "string") return value;
        const typesStyles = styles?.types ?? defaultStyles.types;
        const labelStyles = typesStyles[value];
        return BUI.html`
          <bim-label
            .icon=${labelStyles?.icon}
            style=${BUI.styleMap({ ...baseTagStyle, ...labelStyles?.style })}
          >${value}
          </bim-label>
        `;
      },
      Author: (value) => {
        if (typeof value !== "string") return value;
        return createAuthorTag(value, styles);
      },
      Assignee: (value) => {
        if (typeof value !== "string") return value;
        return createAuthorTag(value, styles);
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
    <bim-table @cellcreated=${({ detail }: any) => {
      const { cell } = detail;
      cell.style.marginLeft = "0";
    }} ${BUI.ref(onTableCreated)}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>`;
};
