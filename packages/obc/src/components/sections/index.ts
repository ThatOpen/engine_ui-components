// import * as materials from "./materials-list";
import * as topicInformation from "./TopicInformation";
import * as topicComments from "./TopicComments";
import * as topicRelations from "./TopicRelations";
import * as topicViewpoints from "./TopicViewpoints";
import * as specificationInformation from "./SpecificationInformation";

export const sections = {
  // ...materials,
  ...topicInformation,
  ...topicComments,
  ...topicRelations,
  ...topicViewpoints,
  ...specificationInformation,
};

export * from "./TopicInformation/src/types";
export * from "./TopicComments/src/types";
export * from "./TopicRelations/src/types";
export * from "./TopicViewpoints/src/types";
export * from "./SpecificationInformation/src/types";
