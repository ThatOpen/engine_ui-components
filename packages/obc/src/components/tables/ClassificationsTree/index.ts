import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  ClassificationTreeUIState,
  classificationTreeTemplate,
} from "./src/template";

/**
 * Heloooooooooo
 */
export const classificationTree = (
  state: ClassificationTreeUIState,
  autoUpdate = true,
) => {
  const element = BUI.Component.create<BUI.Table, ClassificationTreeUIState>(
    classificationTreeTemplate,
    state,
  );

  if (autoUpdate) {
    const { components } = state;
    const manager = components.get(OBC.FragmentsManager);
    const [, updateElement] = element;
    manager.onFragmentsDisposed.add(() => updateElement());
  }

  return element;
};
