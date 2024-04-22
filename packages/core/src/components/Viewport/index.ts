import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";
import { Grid } from "../Grid";

export class Viewport extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      display: block;
      min-width: 0;
      min-height: 0;
    }

    .parent {
      position: relative;
      height: 100%;
    }
  `;

  static properties = {};

  private _onViewportResize = new Event("resize");

  grid = new Grid();

  constructor() {
    super();
    const observer = new ResizeObserver(() =>
      this.dispatchEvent(this._onViewportResize),
    );
    observer.observe(this);
    this.append(this.grid);
  }

  firstUpdated() {
    this.style.gridArea = "viewport";
    this.grid.floating = true;
  }

  render() {
    return html`
      <div class="parent">
        <slot></slot>
      </div>
    `;
  }
}
