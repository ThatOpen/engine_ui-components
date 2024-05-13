import * as modelsList from "./ModelsList";
import * as entityAttributes from "./EntityAttributes";
import * as classificationsTree from "./ClassificationsTree";
import * as elementProperties from "./ElementProperties";
import * as relationsTree from "./RelationsTree";

export const tables = {
  ...modelsList,
  ...entityAttributes,
  ...classificationsTree,
  ...elementProperties,
  ...relationsTree,
};
