import { css, html } from "lit";
import { property } from "lit/decorators.js";
import { UIComponent } from "../../core/UIComponent";

export class Viewport extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      display: block;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }

    .parent {
      position: relative;
      height: 100%;
    }
  `;

  @property({ type: String, reflect: true })
  name?: string;

  private _onResize = new Event("resize");

  constructor() {
    super();
    const observer = new ResizeObserver(() =>
      this.dispatchEvent(this._onResize),
    );
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
