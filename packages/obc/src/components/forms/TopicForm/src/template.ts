import * as BUI from "@thatopen/ui";
import { topicFormTemplate, TopicFormUI } from "../../../../utils/topics";

export const formTemplate = (state: TopicFormUI) => {
  return BUI.html`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${topicFormTemplate(state)}
    </bim-panel-section>
  `;
};
