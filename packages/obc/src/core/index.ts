import { World2D } from "./World2D";
import { ViewCube } from "./ViewCube";
import { World } from "./World";

declare global {
  /**
   * Heloooooooooo
   */
  interface HTMLElementTagNameMap {
    "bim-world-2d": World2D;
    "bim-view-cube": ViewCube;
    "bim-world": World;
  }

  /**
   * Heloooooooooo
   */
  interface GlobalEventHandlersEventMap {
    rightclick: Event;
    leftclick: Event;
    topclick: Event;
    bottomclick: Event;
    frontclick: Event;
    backclick: Event;
  }
}

export { ViewCube, World2D, World };
export * from "./Manager";
