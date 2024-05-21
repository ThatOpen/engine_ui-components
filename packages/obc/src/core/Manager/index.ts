import { Manager as BUIManager } from "@thatopen/ui";
import { World2D, ViewCube } from "..";

export class Manager {
  static init() {
    BUIManager.defineCustomElement("bim-view-cube", ViewCube);
    BUIManager.defineCustomElement("bim-world-2d", World2D);
  }
}
