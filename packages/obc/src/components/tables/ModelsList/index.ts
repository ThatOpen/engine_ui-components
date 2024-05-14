import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import { modelsListTemplate, ModelsListUIState } from "./src/template";

export const modelsList = (state: ModelsListUIState, autoUpdate = false) => {
  const element = BUI.Component.create<BUI.Table, ModelsListUIState>(
    modelsListTemplate,
    state,
  );

  if (autoUpdate) {
    const { components } = state;
    const manager = components.get(OBC.FragmentManager);
    const [, updateElement] = element;
    manager.onFragmentsLoaded.add(() => setTimeout(() => updateElement()));
    manager.onFragmentsDisposed.add(() => updateElement());
  }

  return element;
};
