import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  ClassificationTreeUIState,
  classificationTreeTemplate,
} from "./src/template";

export const classificationTree = (state: ClassificationTreeUIState) => {
  const { components } = state;
  const manager = components.get(OBC.FragmentManager);

  const element = BUI.Component.create<BUI.Table, ClassificationTreeUIState>(
    classificationTreeTemplate,
    state,
  );

  const [, updateElement] = element;

  manager.onFragmentsDisposed.add(() => updateElement());

  return element;
};
