import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { modelsListTemplate, ModelsListUIState } from "./src/template";

/**
 * Heloooooooooo
 */
export const modelsList = (state: ModelsListUIState, autoUpdate = true) => {
  const element = BUI.Component.create<BUI.Table, ModelsListUIState>(
    modelsListTemplate,
    state,
  );

  if (autoUpdate) {
    const { components } = state;
    const manager = components.get(OBC.FragmentsManager);
    const [, updateElement] = element;
    manager.onFragmentsLoaded.add(() => setTimeout(() => updateElement()));
    manager.onFragmentsDisposed.add(() => updateElement());
  }

  return element;
};
