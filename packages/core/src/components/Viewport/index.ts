import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { Component } from "../../core/Component";

// HTML tag: bim-viewport
export class Viewport extends Component {
  static styles = css`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  private _onResize = new Event("resize");

  constructor() {
    super();
    const observer = new ResizeObserver(() => {
      setTimeout(() => {
        this.dispatchEvent(this._onResize);
      });
    });
    observer.observe(this);
  }

  firstUpdated() {
    if (this.style.gridArea === "" && this.name)
      this.style.gridArea = this.name;
  }

  protected render() {
    return html`
      <div class="parent">
        <slot></slot>
      </div>
    `;
  }
}
