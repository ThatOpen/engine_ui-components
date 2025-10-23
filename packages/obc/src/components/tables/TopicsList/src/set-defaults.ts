import * as BUI from "@thatopen/ui";
import { TopicsListState, TopicsListTableData } from "./types";
import {
  baseTopicTagStyle,
  createAuthorTag,
  defaultTopicStyles,
} from "../../../../utils";

export const setDefaults = (
  state: TopicsListState,
  table: BUI.Table<TopicsListTableData>,
) => {
  const { dataStyles: styles } = state;

  if (table.hiddenColumns.length === 0) table.hiddenColumns = ["Guid", "Actions"];
  table.columns = ["Title"];

  table.dataTransform = {
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
      return createAuthorTag(value, styles?.users ?? defaultTopicStyles.users);
    },
    Assignee: (value) => {
      if (typeof value !== "string") return value;
      return createAuthorTag(value, styles?.users ?? defaultTopicStyles.users);
    },
  };
};
