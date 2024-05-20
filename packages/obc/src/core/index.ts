import { Scene2D } from "./Scene2D";
import { ViewCube } from "./ViewCube";
import { Viewer } from "./Viewer";

declare global {
  interface HTMLElementTagNameMap {
    "bim-scene-2d": Scene2D;
    "bim-view-cube": ViewCube;
    "bim-viewer": Viewer;
  }
}

export { ViewCube, Scene2D, Viewer };
