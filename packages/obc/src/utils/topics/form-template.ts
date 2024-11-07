import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { createRef } from "lit/directives/ref.js";
import { TopicUserStyles } from "./types";

interface DataStyles {
  users: TopicUserStyles;
}

interface FormValue {
  title: string;
  status: string;
  type: string;
  priority: string;
  assignedTo: string;
  labels: Iterable<string>;
  stage: string;
  description: string;
}

/**
 * Represents the UI elements and configuration for a topic form in the OBC system.
 *
 * @interface TopicFormUI
 */
export interface TopicFormUI {
  /**
   * The main components entry point of your app.
   */
  components: OBC.Components;

  /**
   * The topic data to be used in the form. This can be undefined if no topic is being edited.
   */
  topic?: OBC.Topic;

  /**
   * The initial values for the form fields. Can be a partial raw topic object.
   */
  value?: Partial<FormValue>;

  /**
   * Callback function triggered when the form is submitted.
   *
   * @param {OBC.Topic} topic - The topic created/updated from the form.
   * @returns {void | Promise<void>} - A void or a promise that resolves to void.
   */
  onSubmit?: (topic: OBC.Topic) => void | Promise<void>;

  /**
   * Callback function triggered when the form is canceled.
   *
   * @returns {void | Promise<void>} - A void or a promise that resolves to void.
   */
  onCancel?: () => void | Promise<void>;

  /**
   * Custom styles for the form components.
   */
  styles?: Partial<DataStyles>;
}

const valueTransform: Record<string, (value: any) => any> = {
  dueDate: (value) => {
    if (!(typeof value === "string" && value.trim() !== "")) return undefined;
    return new Date(value);
  },
  status: (value) => {
    if (Array.isArray(value) && value.length !== 0) return value[0];
    return undefined;
  },
  type: (value) => {
    if (Array.isArray(value) && value.length !== 0) return value[0];
    return undefined;
  },
  priority: (value) => {
    if (Array.isArray(value) && value.length !== 0) return value[0];
    return undefined;
  },
  stage: (value) => {
    if (Array.isArray(value) && value.length !== 0) return value[0];
    return undefined;
  },
  assignedTo: (value) => {
    if (Array.isArray(value) && value.length !== 0) return value[0];
    return undefined;
  },
  labels: (value) => {
    if (Array.isArray(value)) return new Set(value);
    return undefined;
  },
};

export const topicFormTemplate = (state: TopicFormUI) => {
  const {
    components,
    topic,
    value,
    onCancel,
    onSubmit: _onSubmit,
    styles,
  } = state;
  const onSubmit = _onSubmit ?? (() => {});
  const bcfTopics = components.get(OBC.BCFTopics);

  const title = value?.title ?? topic?.title ?? OBC.Topic.default.title;
  const status = value?.status ?? topic?.status ?? OBC.Topic.default.status;
  const type = value?.type ?? topic?.type ?? OBC.Topic.default.type;
  const priority =
    value?.priority ?? topic?.priority ?? OBC.Topic.default.priority;
  const assignedTo =
    value?.assignedTo ?? topic?.assignedTo ?? OBC.Topic.default.assignedTo;
  const labels = value?.labels ?? topic?.labels ?? OBC.Topic.default.labels;
  const stage = value?.stage ?? topic?.stage ?? OBC.Topic.default.stage;
  const description =
    value?.description ?? topic?.description ?? OBC.Topic.default.description;
  const dueDate = topic?.dueDate
    ? topic.dueDate.toISOString().split("T")[0]
    : null;

  const statuses = new Set([...bcfTopics.config.statuses]);
  if (status) statuses.add(status);

  const types = new Set([...bcfTopics.config.types]);
  if (type) types.add(type);

  const priorities = new Set([...bcfTopics.config.priorities]);
  if (priority) priorities.add(priority);

  const users = new Set([...bcfTopics.config.users]);
  if (assignedTo) users.add(assignedTo);

  const labelsList = new Set([...bcfTopics.config.labels]);
  if (labels) {
    for (const label of labels) labelsList.add(label);
  }

  const stages = new Set([...bcfTopics.config.stages]);
  if (stage) stages.add(stage);

  const topicForm = createRef<HTMLDivElement>();

  const onAddTopic = async () => {
    const { value: form } = topicForm;
    if (!form) return;

    const topicData = BUI.getElementValue(
      form,
      valueTransform,
    ) as Partial<OBC.BCFTopic>;

    if (topic) {
      topic.set(topicData);
      await onSubmit(topic);
    } else {
      const newTopic = bcfTopics.create(topicData);
      await onSubmit(newTopic);
    }
  };

  const submitButton = createRef<BUI.Button>();
  const updateSubmitButton = (e: Event) => {
    const { value: button } = submitButton;
    if (!button) return;
    const input = e.target as BUI.TextInput;
    button.disabled = input.value.trim() === "";
  };

  const acceptBtnID = `btn-${BUI.Manager.newRandomId()}`;
  const cancelBtnID = `btn-${BUI.Manager.newRandomId()}`;

  return BUI.html`
    <div ${BUI.ref(topicForm)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${updateSubmitButton} vertical label="Title" name="title" .value=${title}></bim-text-input>
        ${
          topic
            ? BUI.html`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...statuses].map((s) => BUI.html`<bim-option label=${s} .checked=${status === s}></bim-option>`)}
            </bim-dropdown>`
            : BUI.html``
        }
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...types].map((t) => BUI.html`<bim-option label=${t} .checked=${type === t}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...priorities].map((p) => BUI.html`<bim-option label=${p} .checked=${priority === p}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...labelsList].map((l) => BUI.html`<bim-option label=${l} .checked=${labels ? [...labels].includes(l) : false}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...users].map((u) => {
            const userStyle = styles?.users ? styles.users[u] : null;
            const name = userStyle ? userStyle.name : u;
            const img = userStyle?.picture;
            return BUI.html`<bim-option label=${name} value=${u} .img=${img} .checked=${assignedTo === u}></bim-option>`;
          })}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${dueDate}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...stages].map((s) => BUI.html`<bim-option label=${s} .checked=${stage === s}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${description ?? null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${cancelBtnID} {
            background-color: transparent;
          }

          #${cancelBtnID}:hover {
            --bim-label--c: #FF5252;
          }

          #${acceptBtnID}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${cancelBtnID} style="flex: 0" @click=${onCancel} label="Cancel"></bim-button>
        <bim-button id=${acceptBtnID} style="flex: 0" @click=${onAddTopic} ${BUI.ref(submitButton)} label=${topic ? "Update Topic" : "Add Topic"} icon=${topic ? "tabler:refresh" : "mi:add"}></bim-button>
      </div>
    </div>
  `;
};
