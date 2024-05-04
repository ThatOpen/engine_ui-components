import { Scene2D } from "./Scene2D";
import { ViewCube } from "./ViewCube";

declare global {
  interface HTMLElementTagNameMap {
    "bim-scene-2d": Scene2D;
    "bim-view-cube": ViewCube;
  }
}

export { ViewCube, Scene2D };
