import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import {
  ClassificationTreeUIState,
  classificationTreeTemplate,
} from "./src/template";

/**
 * Creates a Classification Tree component with the given UI state.
 *
 * @param state - The initial state of the Classification Tree component.
 * @param autoUpdate - A flag indicating whether the component should automatically update when the FragmentsManager disposes its fragments.
 *                      Default value is `true`.
 *
 * @returns A tuple containing the created Classification Tree component and a function to update it.
 *          If `autoUpdate` is `true`, the function will update the component when the FragmentsManager disposes its fragments.
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
