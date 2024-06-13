import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Infinite2DGrid } from "./src/Infinite2DGrid";

/**
 * A custom 2D Scene component for BIM applications. HTML tag: bim-world-2d
 */
export class World2D extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;

  private _gridColor?: string;

  @property({ type: String, attribute: "grid-color", reflect: true })
  set gridColor(value: string | undefined) {
    this._gridColor = value;
    if (!(value && this._grid)) return;
    const hex = Number(value.replace("#", "0x"));
    if (Number.isNaN(hex)) return;
    this._grid.material.color.setHex(hex);
  }

  get gridColor() {
    return this._gridColor;
  }

  private _gridScaleX?: number;

  @property({ type: Number, attribute: "grid-scale-x", reflect: true })
  set gridScaleX(value: number | undefined) {
    this._gridScaleX = value;
    if (value && this._grid) this._grid.scaleX = value;
  }

  get gridScaleX() {
    return this._gridScaleX;
  }

  private _gridScaleY?: number;

  @property({ type: Number, attribute: "grid-scale-y", reflect: true })
  set gridScaleY(value: number | undefined) {
    this._gridScaleY = value;
    if (value && this._grid) this._grid.scaleY = value;
  }

  get gridScaleY() {
    return this._gridScaleY;
  }

  private _grid: Infinite2DGrid | null = null;

  set components(components: OBC.Components) {
    this.dispose();
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create<
      OBC.SimpleScene,
      OBC.OrthoPerspectiveCamera,
      OBF.RendererWith2D
    >();

    this._world = world;

    world.scene = new OBC.SimpleScene(components);
    world.scene.setup();

    world.renderer = new OBF.RendererWith2D(components, this);

    const cameraComponent = new OBC.OrthoPerspectiveCamera(components);
    world.camera = cameraComponent;

    const grid = new Infinite2DGrid(cameraComponent.threeOrtho, this);
    this._grid = grid;
    world.scene.three.add(grid.get());
    cameraComponent.controls.addEventListener("update", () =>
      grid.regenerate(),
    );

    setTimeout(async () => {
      world.camera.updateAspect();
      cameraComponent.set("Plan");
      await cameraComponent.controls.setLookAt(0, 0, 100, 0, 0, 0);
      await cameraComponent.projection.set("Orthographic");
      cameraComponent.controls.dollySpeed = 3;
      cameraComponent.controls.draggingSmoothTime = 0.085;
      cameraComponent.controls.maxZoom = 1000;
      cameraComponent.controls.zoom(4);
    });
  }

  private _world: OBC.SimpleWorld<
    OBC.SimpleScene,
    OBC.OrthoPerspectiveCamera,
    OBF.RendererWith2D
  > | null = null;

  get world() {
    return this._world;
  }

  private resize = () => {
    if (!(this._world && this._grid)) return;
    // this._world.renderer?.resize();
    // this._world.camera.updateAspect();
    this._grid.regenerate();
  };

  dispose() {
    this.world?.dispose();
    this._world = null;
    this._grid = null;
  }

  connectedCallback() {
    super.connectedCallback();
    const resizeObserver = new ResizeObserver(this.resize);
    resizeObserver.observe(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.dispose();
  }

  protected render() {
    return html`<slot></slot>`;
  }
}
