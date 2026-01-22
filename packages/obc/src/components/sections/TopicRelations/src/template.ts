import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { topicsList } from "../../../tables/TopicsList";
import {
  TopicRelationsSectionActions,
  TopicRelationsSectionsUI,
} from "./types";

export const topicRelationsSectionTemplate: BUI.StatefullComponent<
  TopicRelationsSectionsUI
> = (state, update) => {
  const { components, topic, linking } = state;

  const bcfTopics = components.get(OBC.BCFTopics);

  const actions: TopicRelationsSectionActions = {
    link: true,
    ...state.actions,
  };

  const [topicsTable, updateTopicsTable] = topicsList({
    components,
    topics: [...topic.relatedTopics]
      .map((guid) => bcfTopics.list.get(guid))
      .map((topic) => topic) as OBC.Topic[],
  });

  topicsTable.headersHidden = true;
  topicsTable.hiddenColumns = [
    "Guid",
    "Status",
    // "Title",
    "Description",
    "Author",
    "Assignee",
    "Date",
    "DueDate",
    "Type",
    "Priority",
  ];

  const searchBoxTemplate = () => {
    const onInput = (e: InputEvent) => {
      const input = e.target;
      if (!(input instanceof BUI.TextInput)) return;
      topicsTable.queryString = input.value;
    };

    return BUI.html`
      <bim-text-input placeholder="Search..." debounce="100" @input=${onInput}></bim-text-input> 
    `;
  };

  let linkingActionsTemplate;
  let regularActionsTemplate;

  if (linking) {
    topicsTable.selectableRows = true;
    updateTopicsTable({
      topics: undefined,
    });

    const selection = topicsTable.data
      .filter((value) => {
        const { Guid } = value.data;
        if (typeof Guid !== "string") return false;
        return topic.relatedTopics.has(Guid);
      })
      .map((entry) => entry.data);

    topicsTable.selection.add(...selection);

    const onAcceptLink = () => {
      const selectedGuids = [...topicsTable.selection]
        .map(({ Guid }) => {
          if (typeof Guid !== "string") return null;
          if (bcfTopics.list.has(Guid)) return Guid;
          return null;
        })
        .map((Guid) => Guid) as string[];
      topic.relatedTopics.clear();
      topic.relatedTopics.add(...selectedGuids);
      update({ linking: false });
    };

    const onCancelLink = () => {
      update({ linking: false });
    };

    const acceptBtnID = `btn-${BUI.Manager.newRandomId()}`;
    const cancelBtnID = `btn-${BUI.Manager.newRandomId()}`;

    linkingActionsTemplate = BUI.html`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${acceptBtnID}:hover {
            background-color: #329936;
          }  

          #${cancelBtnID} {
            background-color: transparent;
          }

          #${cancelBtnID}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${searchBoxTemplate()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${cancelBtnID} @click=${onCancelLink} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${acceptBtnID} @click=${onAcceptLink} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `;
  } else {
    topicsTable.selectableRows = false;

    const onLinkTopics = () => {
      update({ linking: true });
    };

    regularActionsTemplate = BUI.html`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${searchBoxTemplate()}
        ${actions.link ? BUI.html`<bim-button style="flex: 0" @click=${onLinkTopics} icon="tabler:link"></bim-button>` : null}
      </div> 
    `;
  }

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${regularActionsTemplate}
      ${linkingActionsTemplate}
      ${topicsTable}
    </div> 
  `;
};
