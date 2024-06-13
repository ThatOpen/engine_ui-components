import { Manager as BUIManager } from "@thatopen/ui";
import { World2D, ViewCube } from "..";


/**
 * Manager class is responsible for initializing the custom elements for the BIM application. It uses the BUIManager from "@thatopen/ui" to define custom elements for 2D and 3D views.
 */
export class Manager {
  /**
   * Initializes the custom elements for the BIM application.
   *
   * @remarks
   * This method should be called once during the application's initialization.
   *
   */
  static init() {
    BUIManager.defineCustomElement("bim-view-cube", ViewCube);
    BUIManager.defineCustomElement("bim-world-2d", World2D);
  }
}
