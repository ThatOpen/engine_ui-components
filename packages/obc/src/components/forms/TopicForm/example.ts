import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as CUI from "../..";

BUI.Manager.init();

const components = new OBC.Components();
const [newFormTopic] = CUI.forms.createTopic({
  components,
  onSubmit: (topic) => console.log(topic),
});

document.body.append(newFormTopic);
