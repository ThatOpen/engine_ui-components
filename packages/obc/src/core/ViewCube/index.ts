import * as THREE from "three";
import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";

// HTML Tag: bim-view-cube
/**
 * Heloooooooooo
 */
export class ViewCube extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      z-index: 999;
      bottom: 1rem;
      right: 1rem;
    }

    .parent {
      perspective: 400px;
    }

    .cube {
      position: relative;
      transform-style: preserve-3d;
    }

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      user-select: none;
      align-items: center;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
      color: var(--bim-view-cube--c, white);
      font-size: var(--bim-view-cube--fz, --bim-ui_size-2xl);
    }

    .x-direction {
      // background-color: var(--bim-view-cube_x--bgc, #c93830DD);
      background-color: var(--bim-view-cube_x--bgc, #01a6bcde);
    }

    .x-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .y-direction {
      // background-color: var(--bim-view-cube_y--bgc, #54ff19DD);
      background-color: var(--bim-view-cube_y--bgc, #8d0ec8de);
    }

    .y-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .z-direction {
      // background-color: var(--bim-view-cube_z--bgc, #3041c9DD);
      background-color: var(--bim-view-cube_z--bgc, #2718afde);
    }

    .z-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .face-front {
      transform: rotateX(180deg);
    }

    .face-back {
      transform: rotateZ(180deg);
    }

    .face-top {
      transform: rotateX(90deg);
    }

    .face-bottom {
      transform: rotateX(270deg);
    }

    .face-right {
      transform: rotateY(-270deg) rotateX(180deg);
    }

    .face-left {
      transform: rotateY(-90deg) rotateX(180deg);
    }
  `;

  private _defaults = {
    size: 60,
  };

  @property({ type: Number, reflect: true })
  size?: number;

  @property({ type: String, attribute: "right-text", reflect: true })
  rightText?: string;

  @property({ type: String, attribute: "left-text", reflect: true })
  leftText?: string;

  @property({ type: String, attribute: "top-text", reflect: true })
  topText?: string;

  @property({ type: String, attribute: "bottom-text", reflect: true })
  bottomText?: string;

  @property({ type: String, attribute: "front-text", reflect: true })
  frontText?: string;

  @property({ type: String, attribute: "back-text", reflect: true })
  backText?: string;

  @state()
  private _cssMatrix3D = "";

  private _matrix = new THREE.Matrix4();
  private _onRightClick = new Event("rightclick");
  private _onLeftClick = new Event("leftclick");
  private _onTopClick = new Event("topclick");
  private _onBottomClick = new Event("bottomclick");
  private _onFrontClick = new Event("frontclick");
  private _onBackClick = new Event("backclick");

  private _camera: THREE.Camera | null = null;
  set camera(value: THREE.Camera | null) {
    this._camera = value;
    this.updateOrientation();
  }

  get camera() {
    return this._camera;
  }

  private _epsilon = (value: number) => {
    return Math.abs(value) < 1e-10 ? 0 : value;
  };

  updateOrientation() {
    if (!this.camera) return;
    this._matrix.extractRotation(this.camera.matrixWorldInverse);
    const { elements } = this._matrix;
    this._cssMatrix3D = `matrix3d(
      ${this._epsilon(elements[0])},
      ${this._epsilon(-elements[1])},
      ${this._epsilon(elements[2])},
      ${this._epsilon(elements[3])},
      ${this._epsilon(elements[4])},
      ${this._epsilon(-elements[5])},
      ${this._epsilon(elements[6])},
      ${this._epsilon(elements[7])},
      ${this._epsilon(elements[8])},
      ${this._epsilon(-elements[9])},
      ${this._epsilon(elements[10])},
      ${this._epsilon(elements[11])},
      ${this._epsilon(elements[12])},
      ${this._epsilon(-elements[13])},
      ${this._epsilon(elements[14])},
      ${this._epsilon(elements[15])})
    `;
  }

  protected render() {
    const size = this.size ?? this._defaults.size;
    return html`
      <style>
        .face,
        .cube {
          width: ${size}px;
          height: ${size}px;
          transform: translateZ(-300px) ${this._cssMatrix3D};
        }

        .face-right {
          translate: ${size / 2}px 0 0;
        }

        .face-left {
          translate: ${-size / 2}px 0 0;
        }

        .face-top {
          translate: 0 ${size / 2}px 0;
        }

        .face-bottom {
          translate: 0 ${-size / 2}px 0;
        }

        .face-front {
          translate: 0 0 ${size / 2}px;
        }

        .face-back {
          translate: 0 0 ${-size / 2}px;
        }
      </style>
      <div class="parent">
        <div class="cube">
          <div
            class="face x-direction face-right"
            @click=${() => this.dispatchEvent(this._onRightClick)}
          >
            ${this.rightText}
          </div>
          <div
            class="face x-direction face-left"
            @click=${() => this.dispatchEvent(this._onLeftClick)}
          >
            ${this.leftText}
          </div>
          <div
            class="face y-direction face-top"
            @click=${() => this.dispatchEvent(this._onTopClick)}
          >
            ${this.topText}
          </div>
          <div
            class="face y-direction face-bottom"
            @click=${() => this.dispatchEvent(this._onBottomClick)}
          >
            ${this.bottomText}
          </div>
          <div
            class="face z-direction face-front"
            @click=${() => this.dispatchEvent(this._onFrontClick)}
          >
            ${this.frontText}
          </div>
          <div
            class="face z-direction face-back"
            @click=${() => this.dispatchEvent(this._onBackClick)}
          >
            ${this.backText}
          </div>
        </div>
      </div>
    `;
  }
}
