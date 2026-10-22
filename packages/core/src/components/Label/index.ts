import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";
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
      flex-grow: var(--bim-label--p-grow, 0);
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    bim-icon {
      flex-shrink: 0;
      /* align-self: baseline; */
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: var(--bim-label_img--bdrs, 100%);
      margin-right: 0.125rem;
      flex-shrink: 0;
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

  /**
   * A tooltip for it, shown with the library's one tooltip (`bim-tooltip`): what it is or what it does, beyond its
   * label. Every hover text of the library goes through `bim-tooltip`; no component uses the browser's own `title`.
   */
  @property({ type: String })
  tooltip?: string;

  /** Its text is cut short by its box (an ellipsis): the whole of it is then its tooltip. */
  @state()
  private _cut = false;

  get value(): string | boolean | number | undefined {
    const text = (this.label ?? this.textContent)?.trim();
    if (!text) return undefined;
    return convertString(text);
  }

  /**
   * Labels waiting to be measured, ALL AT ONCE in the next frame.
   *
   * Reading `scrollWidth` forces a layout. Read in each label's `updated()`, a
   * table of a few hundred labels re-rendered in one go made a layout per label,
   * each invalidated by the label written before it: 3.3 s to close the CDE's
   * viewer (Antonio, 22-10, «se siente pesado»). Read together, after every write
   * of the batch, it is one layout.
   */
  private static _toMeasure = new Set<Label>();
  private static _measuring = false;
  private static _measureAll() {
    Label._measuring = false;
    const labels = [...Label._toMeasure].filter((label) => label.isConnected);
    Label._toMeasure.clear();
    // Every read first (one layout), then every write.
    const cuts = labels.map((label) => {
      const shown = label.renderRoot.querySelector("p");
      return !!shown && shown.scrollWidth > shown.clientWidth + 1;
    });
    labels.forEach((label, i) => {
      if (cuts[i] !== label._cut) label._cut = cuts[i];
    });
  }

  protected updated() {
    Label._toMeasure.add(this);
    if (!Label._measuring) {
      Label._measuring = true;
      requestAnimationFrame(() => Label._measureAll());
    }
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
      <div class="parent">
        ${this.tooltip || (this._cut && text) ? html`<bim-tooltip>${this.tooltip || text}</bim-tooltip>` : nothing}
        ${when(this.img, () => html`<img src=${this.img} alt=${text} />`)}
        ${when(!this.iconHidden && this.icon, () => html`<bim-icon .icon=${this.icon}></bim-icon>`)}
        ${this.label !== undefined
          ? this.label ? html`<p>${this.label}</p>` : nothing
          : html`<p><slot></slot></p>`}
      </div>
    `;
  }
}
