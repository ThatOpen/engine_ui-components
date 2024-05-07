import * as BUI from "@thatopen/ui";
import {
  ClassificationTreeUIState,
  classificationTreeTemplate,
} from "./src/template";

export const classificationTree = (state: ClassificationTreeUIState) => {
  const element = BUI.Component.create<BUI.Table, ClassificationTreeUIState>(
    classificationTreeTemplate,
    state,
  );

  return element;
};
