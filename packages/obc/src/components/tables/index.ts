import * as modelsList from "./ModelsList";
import * as entityAttributes from "./EntityAttributes";
import * as classificationsTree from "./ClassificationsTree";
import * as elementProperties from "./ElementProperties";
import * as relationsTree from "./RelationsTree";
import * as worldsConfiguration from "./WorldsConfiguration";
import * as topicsList from "./TopicsList";
import * as topicComments from "./TopicComments";
import * as viewpointsList from "./ViewpointsList";

export const tables = {
  ...modelsList,
  ...entityAttributes,
  ...classificationsTree,
  ...elementProperties,
  ...relationsTree,
  ...worldsConfiguration,
  ...topicsList,
  ...topicComments,
  ...viewpointsList,
};
