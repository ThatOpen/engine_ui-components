import * as THREE from "three";
import { LitElement, css, html } from "lit";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { property } from "lit/decorators.js";
import { Infinite2DGrid } from "./src/Infinite2DGrid";

// HTML tag: bim-scene-2d
export class Scene2D extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;

  private readonly _frustumSize = 50;

  private get _size() {
    const vector = new THREE.Vector2(this.clientWidth, this.clientHeight);
    return vector;
  }

  private get _aspect() {
    const { x, y } = this._size;
    const aspect = x / y;
    return aspect;
  }

  private _gridColor?: string;

  @property({ type: String, attribute: "grid-color", reflect: true })
  set gridColor(value: string | undefined) {
    this._gridColor = value;
    if (!value) return;
    const hex = Number(value.replace("#", "0x"));
    if (Number.isNaN(hex)) return;
    this.grid.material.color.setHex(hex);
  }

  get gridColor() {
    return this._gridColor;
  }

  private _gridScaleX?: number;

  @property({ type: Number, attribute: "grid-scale-x", reflect: true })
  set gridScaleX(value: number | undefined) {
    this._gridScaleX = value;
    if (value) this.grid.scaleX = value;
  }

  get gridScaleX() {
    return this._gridScaleX;
  }

  private _gridScaleY?: number;

  @property({ type: Number, attribute: "grid-scale-y", reflect: true })
  set gridScaleY(value: number | undefined) {
    this._gridScaleY = value;
    if (value) this.grid.scaleY = value;
  }

  get gridScaleY() {
    return this._gridScaleY;
  }

  readonly scene = new THREE.Scene();
  readonly camera = new THREE.OrthographicCamera();
  readonly renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  readonly renderer2D = new CSS2DRenderer();
  readonly controls = new OrbitControls(this.camera, this.renderer.domElement);
  readonly grid = new Infinite2DGrid(this.camera, this);

  private setupCamera() {
    this.camera.position.z = 10;
    this.controls.target.set(0, 0, 0);
    this.controls.enableRotate = false;
    this.controls.enableZoom = true;
    this.controls.addEventListener("change", () => this.grid.regenerate());
  }

  private setupScene() {
    const axesHelper = new THREE.AxesHelper(10);
    const ambientLight = new THREE.AmbientLight();
    this.scene.add(this.camera, axesHelper, ambientLight);
  }

  private setupRenderers() {
    // WebGL Renderer Setup
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.append(this.renderer.domElement);

    // CSS2D Renderer Setup
    this.renderer2D.domElement.style.position = "absolute";
    this.renderer2D.domElement.style.top = "0px";
    this.renderer2D.domElement.style.pointerEvents = "none";
    this.append(this.renderer2D.domElement);

    this.resize();
  }

  private resize = () => {
    const { x, y } = this._size;
    this.renderer.setSize(x, y);
    this.renderer2D.setSize(x, y);
    this.camera.left = (-this._frustumSize * this._aspect) / 2;
    this.camera.right = (this._frustumSize * this._aspect) / 2;
    this.camera.top = this._frustumSize / 2;
    this.camera.bottom = -this._frustumSize / 2;
    this.camera.updateProjectionMatrix();
    this.grid.regenerate();
  };

  private init() {
    const renderScene = () => {
      this.renderer.render(this.scene, this.camera);
      this.renderer2D.render(this.scene, this.camera);
      requestAnimationFrame(renderScene);
    };
    renderScene();
  }

  firstUpdated() {
    this.setupScene();
    this.setupRenderers();
    this.setupCamera();
    const gridObject = this.grid.get();
    this.scene.add(gridObject);
    const resizeObserver = new ResizeObserver(this.resize);
    resizeObserver.observe(this);
    this.init();
  }

  protected render() {
    return html`<slot></slot>`;
  }
}
