import { Manager as BUIManager } from "@thatopen/ui";
import { Scene2D, ViewCube } from "..";

export class Manager {
  static init() {
    BUIManager.defineCustomElement("bim-view-cube", ViewCube);
    BUIManager.defineCustomElement("bim-scene-2d", Scene2D);
  }
}
