import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components";
import * as OBF from "@thatopen/components-front";
import * as THREE from "three";
import { LitElement, css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { property } from "lit/decorators.js";

/**
 * A world for BIM Apps. HTML tag: bim-viewer
 */
export class World extends LitElement {
  static styles = css``;

  @property({ type: String, reflect: true })
  name?: string;

  world: OBC.SimpleWorld<
    OBC.SimpleScene,
    OBC.OrthoPerspectiveCamera,
    OBF.PostproductionRenderer
  > | null = null;

  private _components: OBC.Components | null = null;
  set components(value: OBC.Components | null) {
    this._components = value;
    if (this.components) {
      const worlds = this.components.get(OBC.Worlds);
      this.world = worlds.create();
      this.world.name = this.name;
    } else {
      this.world?.dispose();
      this.world = null;
    }
  }

  get components() {
    return this._components;
  }

  private _viewport = createRef<BUI.Viewport>();

  connectedCallback() {
    super.connectedCallback();
    if (this.world) this.world.enabled = true;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.world) this.world.enabled = false;
  }

  firstUpdated() {
    const { value: viewport } = this._viewport;
    if (!(this.components && viewport && this.world)) return;

    const sceneComponent = new OBC.SimpleScene(this.components);
    this.world.scene = sceneComponent;
    sceneComponent.setup();
    sceneComponent.three.background = null;

    const rendererComponent = new OBF.PostproductionRenderer(
      this.components,
      viewport,
    );

    this.world.renderer = rendererComponent;

    const { postproduction } = rendererComponent;

    const cameraComponent = new OBC.OrthoPerspectiveCamera(this.components);
    this.world.camera = cameraComponent;

    const worldGrid = this.components.get(OBC.Grids).create(this.world);
    worldGrid.material.uniforms.uColor.value = new THREE.Color(0x424242);
    worldGrid.material.uniforms.uSize1.value = 2;
    worldGrid.material.uniforms.uSize2.value = 8;

    postproduction.enabled = true;
    postproduction.customEffects.excludedMeshes.push(worldGrid.three);
    postproduction.setPasses({ custom: true, ao: true, gamma: true });
    postproduction.customEffects.lineColor = 0x17191c;
  }

  private onSlotChange() {
    const event = new Event("slotchange");
    this.dispatchEvent(event);
  }

  protected render() {
    return html` <bim-viewport ${ref(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`;
  }
}
