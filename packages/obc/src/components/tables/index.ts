// import * as worldsConfiguration from "./WorldsConfiguration";
import * as spatialTree from "./SpatialTree";
import * as itemsData from "./ItemsData";
import * as modelsList from "./ModelsList";
import * as viewpointsList from "./ViewpointsList";
import * as topicsList from "./TopicsList";
import * as commentsList from "./CommentsList";

export const tables = {
  // ...worldsConfiguration,
  ...spatialTree,
  ...itemsData,
  ...modelsList,
  ...viewpointsList,
  ...topicsList,
  ...commentsList,
};
