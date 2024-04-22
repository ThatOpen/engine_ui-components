import * as meshTransform from "./transform";
import * as material from "./material";
import * as meshGraphics from "./mesh-graphics";

export const panelSections = {
  ...meshTransform,
  ...material,
  ...meshGraphics,
};
