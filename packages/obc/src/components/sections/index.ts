import * as topicComments from "./TopicComments";
import * as topicInformation from "./TopicInformation";
import * as topicRelations from "./TopicRelations";
import * as topicViewpoints from "./TopicViewpoints";
// import * as specificationInformation from "./SpecificationInformation";

export const sections = {
  ...topicComments,
  ...topicInformation,
  ...topicRelations,
  ...topicViewpoints,
  // ...specificationInformation,
};

export * from "./TopicInformation/src";
export * from "./TopicComments/src";
export * from "./TopicRelations/src";
export * from "./TopicViewpoints/src";
