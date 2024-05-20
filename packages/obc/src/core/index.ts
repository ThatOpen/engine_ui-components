import { Scene2D } from "./Scene2D";
import { ViewCube } from "./ViewCube";

declare global {
  interface HTMLElementTagNameMap {
    "bim-scene-2d": Scene2D;
    "bim-view-cube": ViewCube;
  }

  interface GlobalEventHandlersEventMap {
    rightclick: Event;
    leftclick: Event;
    topclick: Event;
    bottomclick: Event;
    frontclick: Event;
    backclick: Event;
  }
}

export { ViewCube, Scene2D };
export * from "./Manager";
