import * as THREE from "three";
import { css, html } from "lit";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// @ts-ignore
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { UIComponent } from "../../UIComponent";
import { Infinite2dGrid } from "./src/Infinite2DGrid";

export class Scene2D extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;

  static properties = {
    gridScaleX: { type: Number, attribute: "grid-scale-x", reflect: true },
    gridScaleY: { type: Number, attribute: "grid-scale-y", reflect: true },
    gridColor: { type: String, attribute: "grid-color", reflect: true },
  };

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

  private _gridColor = "#000000";

  set gridColor(value: string) {
    const hex = Number(value.replace("#", "0x"));
    if (Number.isNaN(hex)) return;
    this._gridColor = value;
    this.grid.material.color.setHex(hex);
  }

  get gridColor() {
    return this._gridColor;
  }

  private _gridScaleX = 1;

  set gridScaleX(value: number) {
    this._gridScaleX = value;
    this.grid.scaleX = value;
  }

  get gridScaleX() {
    return this._gridScaleX;
  }

  private _gridScaleY = 1;

  set gridScaleY(value: number) {
    this._gridScaleY = value;
    this.grid.scaleY = value;
  }

  get gridScaleY() {
    return this._gridScaleY;
  }

  readonly scene = new THREE.Scene();
  readonly camera = new THREE.OrthographicCamera();
  readonly renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  readonly renderer2D = new CSS2DRenderer();
  readonly controls = new OrbitControls(this.camera, this.renderer.domElement);
  readonly grid = new Infinite2dGrid(this.camera, this);

  constructor() {
    super();
    this.setupScene();
    this.setupRenderers();
    this.setupCamera();
    this.setupGrid();
    const resizeObserver = new ResizeObserver(this.resize);
    resizeObserver.observe(this);
  }

  private setupGrid() {
    this.gridColor = "#2e3338";
    this.gridScaleX = 1;
    this.gridScaleY = 1;
    const gridObject = this.grid.get();
    this.scene.add(gridObject);
  }

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

  firstUpdated() {
    setTimeout(() => this.grid.regenerate());
    const renderScene = () => {
      this.renderer.render(this.scene, this.camera);
      this.renderer2D.render(this.scene, this.camera);
      requestAnimationFrame(renderScene);
    };
    renderScene();
  }

  render() {
    return html`<slot></slot>`;
  }
}
