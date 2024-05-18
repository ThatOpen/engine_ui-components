import * as THREE from "three";
import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import * as BUI from "@thatopen/ui";

export class ViewCube extends BUI.Component {
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
      transform: translateZ(-300px);
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
      background-color: var(--bim-ui_color-accent, white);
    }

    .y-direction {
      // background-color: var(--bim-view-cube_y--bgc, #54ff19DD);
      background-color: var(--bim-view-cube_y--bgc, #8d0ec8de);
    }

    .y-direction:hover {
      background-color: var(--bim-ui_color-accent, white);
    }

    .z-direction {
      // background-color: var(--bim-view-cube_z--bgc, #3041c9DD);
      background-color: var(--bim-view-cube_z--bgc, #2718afde);
    }

    .z-direction:hover {
      background-color: var(--bim-ui_color-accent, white);
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

  static properties = {
    size: { type: Number, reflect: true },
    rightText: { type: String, reflect: true },
    leftText: { type: String, attribute: "left-text", reflect: true },
    topText: { type: String, attribute: "top-text", reflect: true },
    bottomText: { type: String, attribute: "bottom-text", reflect: true },
    frontText: { type: String, attribute: "front-text", reflect: true },
    backText: { type: String, attribute: "back-text", reflect: true },
  };

  declare size: number;
  declare rightText: string;
  declare leftText: string;
  declare topText: string;
  declare bottomText: string;
  declare frontText: string;
  declare backText: string;

  private _matrix = new THREE.Matrix4();
  private _cube = createRef<HTMLDivElement>();
  private _onRightClick = new Event("rightclick");
  private _onLeftClick = new Event("leftclick");
  private _onTopClick = new Event("topclick");
  private _onBottomClick = new Event("bottomclick");
  private _onFrontClick = new Event("frontclick");
  private _onBackClick = new Event("backclick");

  private _epsilon = (value: number) => {
    return Math.abs(value) < 1e-10 ? 0 : value;
  };

  constructor() {
    super();
    this.size = 60;
  }

  private getCameraCSSMatrix(matrix: number[]) {
    return `matrix3d(
        ${this._epsilon(matrix[0])},
        ${this._epsilon(-matrix[1])},
        ${this._epsilon(matrix[2])},
        ${this._epsilon(matrix[3])},
        ${this._epsilon(matrix[4])},
        ${this._epsilon(-matrix[5])},
        ${this._epsilon(matrix[6])},
        ${this._epsilon(matrix[7])},
        ${this._epsilon(matrix[8])},
        ${this._epsilon(-matrix[9])},
        ${this._epsilon(matrix[10])},
        ${this._epsilon(matrix[11])},
        ${this._epsilon(matrix[12])},
        ${this._epsilon(-matrix[13])},
        ${this._epsilon(matrix[14])},
        ${this._epsilon(matrix[15])})
    `;
  }

  updateOrientation(matrix: number[]) {
    if (matrix.length !== 16) return;
    const { value: cube } = this._cube;
    if (!cube) return;
    this._matrix.extractRotation(new THREE.Matrix4().fromArray(matrix));
    const cssMatrix3D = this.getCameraCSSMatrix(this._matrix.elements);
    cube.style.transform = `translateZ(-300px) ${cssMatrix3D}`;
  }

  render() {
    return html`
      <style>
        .face,
        .cube {
          width: ${this.size}px;
          height: ${this.size}px;
        }

        .face-right {
          translate: ${this.size / 2}px 0 0;
        }

        .face-left {
          translate: ${-this.size / 2}px 0 0;
        }

        .face-top {
          translate: 0 ${this.size / 2}px 0;
        }

        .face-bottom {
          translate: 0 ${-this.size / 2}px 0;
        }

        .face-front {
          translate: 0 0 ${this.size / 2}px;
        }

        .face-back {
          translate: 0 0 ${-this.size / 2}px;
        }
      </style>
      <div class="parent">
        <div ${ref(this._cube)} class="cube">
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

customElements.define("bim-view-cube", ViewCube);
