import { World2D } from "./World2D";
import { ViewCube } from "./ViewCube";

declare global {
  /**
   * Heloooooooooo
   */
  interface HTMLElementTagNameMap {
    "bim-world-2d": World2D;
    "bim-view-cube": ViewCube;
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

export { ViewCube, World2D };
export * from "./Manager";
