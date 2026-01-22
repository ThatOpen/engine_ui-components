import * as categoriesChart from "./Categories";
import * as idsChart from "./IDS";
import * as chartLabels from "./Labels";
import * as topicsChart from "./Topics";
import * as attributesChart from "./Attributes";

export const charts = {
  ...categoriesChart,
  ...idsChart,
  ...topicsChart,
  ...chartLabels,
  ...attributesChart,
};

export * from "./Categories/src/types";
export * from "./IDS/src/types";
export * from "./Topics/src/types";
export * from "./Labels/src/types";
export * from "./Attributes/src/types";
