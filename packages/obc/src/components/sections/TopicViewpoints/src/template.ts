import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import { viewpointsList } from "../../../tables/ViewpointsList";
import {
  TopicViewpointsSectionActions,
  TopicViewpointsSectionUI,
} from "./types";

export const topicViewpointsSectionTemplate: BUI.StatefullComponent<
  TopicViewpointsSectionUI
> = (state, update) => {
  const { components, topic, world, linking } = state;

  const actions: TopicViewpointsSectionActions = {
    add: true,
    link: true,
    selectComponents: true,
    colorizeComponent: true,
    resetColors: true,
    updateCamera: true,
    delete: true,
    unlink: true,
    ...state.actions,
  };

  const viewpoints = components.get(OBC.Viewpoints);

  const [topicViewpoints, updateTopicViewpoints] = viewpointsList({
    components,
    topic,
    actions,
  });

  const searchBoxTemplate = () => {
    const onInput = (e: InputEvent) => {
      const input = e.target;
      if (!(input instanceof BUI.TextInput)) return;
      topicViewpoints.queryString = input.value;
    };

    return BUI.html`
      <bim-text-input placeholder="Search..." debounce="100" @input=${onInput}></bim-text-input> 
    `;
  };

  let linkingActionsTemplate;
  let regularActionsTemplate;

  if (linking) {
    topicViewpoints.selectableRows = true;
    updateTopicViewpoints({
      topic: undefined,
      actions: {
        delete: false,
        updateCamera: false,
        colorizeComponent: false,
        resetColors: false,
      },
    });

    const selection = topicViewpoints.data
      .filter((value) => {
        const { Guid } = value.data;
        if (typeof Guid !== "string") return false;
        return topic.viewpoints.has(Guid);
      })
      .map((entry) => entry.data);

    topicViewpoints.selection = new Set(selection);

    const onAcceptLink = () => {
      const selectedGuids = [...topicViewpoints.selection]
        .map(({ Guid }) => {
          if (typeof Guid !== "string") return null;
          if (viewpoints.list.has(Guid)) return Guid;
          return null;
        })
        .map((Guid) => Guid) as string[];
      topic.viewpoints.clear();
      topic.viewpoints.add(...selectedGuids);
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
    topicViewpoints.selectableRows = false;
    updateTopicViewpoints({
      topic,
      actions,
    });

    const onAddViewpoint = () => {
      if (!(topic && world && actions.add && !linking)) return;
      const viewpoint = viewpoints.create(world);
      topic.viewpoints.add(viewpoint.guid);
    };

    const onLinkTopics = () => {
      update({ linking: true });
    };

    const addBtnTemplate = BUI.html`<bim-button style="flex: 0" @click=${onAddViewpoint} .disabled=${!world} icon="mi:add"></bim-button>`;

    const linkBtnTemplate = BUI.html`<bim-button style="flex: 0" @click=${onLinkTopics} icon="tabler:link"></bim-button>`;

    regularActionsTemplate = BUI.html`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${searchBoxTemplate()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${actions.add ? addBtnTemplate : null}
          ${actions.link ? linkBtnTemplate : null}
        </div>
      </div> 
    `;
  }

  return BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${regularActionsTemplate}
      ${linkingActionsTemplate}
      ${topicViewpoints}
    </div> 
  `;
};
