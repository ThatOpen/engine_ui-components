import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { convertString } from "../../core/utils";
import { when } from "lit/directives/when.js";

/**
 * A custom label web component for BIM applications. HTML tag: bim-label
 */
export class Label extends LitElement {
  static styles = css`
    :host {
      --bim-icon--c: var(--bim-label--ic);
      box-sizing: border-box;
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-80));
      font-size: var(--bim-label--fz, var(--bim-ui_size-base));
      display: block;
      white-space: nowrap;
      transition: color var(--bim-ui_duration-fast, 0.15s),
                  opacity var(--bim-ui_duration-fast, 0.15s);
      user-select: var(--bim-label--us, none);
      overflow: hidden;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }

    /* :host([icon]) {
      line-height: 1;
    } */

    .parent {
      display: flex;
      align-items: center;
      gap: var(--bim-label--gap, 0.375rem);
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: var(--bim-label_img--bdrs, 100%);
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;

  /**
   * Specifies the image URL for the component. When set, an `<img>` element is rendered within the component.
   * @type {String}
   * @default undefined
   * @example <bim-label img="path/to/image.png">My Label</bim-label>
   */
  @property({ type: String })
  img?: string;

  /**
   * Controls the visibility of the label text.
   * @note Attribute presence (not value) controls this boolean.
   *       `setAttribute("label-hidden", "false")` makes labelHidden `true`.
   * @default false
   */
  @property({ type: Boolean, attribute: "label-hidden", reflect: true })
  labelHidden = false;

  /**
   * Specifies the icon to be displayed alongside the label.
   * @type {String}
   * @default undefined
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * Controls the visibility of the icon.
   * @note Attribute presence (not value) controls this boolean.
   * @default false
   */
  @property({ type: Boolean, attribute: "icon-hidden" })
  iconHidden = false;

  /**
   * Determines the orientation of the component. When `true`, contents are stacked vertically.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /**
   * Sets the label text programmatically, bypassing the slot.
   * Useful when building a dynamic UI via `document.createElement`.
   * @type {String}
   * @default undefined
   */
  @property({ type: String })
  label?: string;

  get value(): string | boolean | number | undefined {
    const text = (this.label ?? this.textContent)?.trim();
    if (!text) return undefined;
    return convertString(text);
  }

  protected updated() {
    const text = (this.label ?? this.textContent)?.trim() ?? "";
    if (this.labelHidden && text) {
      this.setAttribute("aria-label", text);
    } else {
      this.removeAttribute("aria-label");
    }
  }

  protected render() {
    const text = this.label ?? this.textContent ?? "";
    return html`
      <div class="parent" title=${text}>
        ${when(this.img, () => html`<img src=${this.img} alt=${text} />`)}
        ${when(!this.iconHidden && this.icon, () => html`<bim-icon .icon=${this.icon}></bim-icon>`)}
        ${this.label !== undefined
          ? this.label ? html`<p>${this.label}</p>` : nothing
          : html`<p><slot></slot></p>`}
      </div>
    `;
  }
}
