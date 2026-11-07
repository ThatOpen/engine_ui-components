import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";

/**
 * A small plate that SHOWS a value and takes no keyboard: a reading placed
 * over a drawing, a count beside a title, a state in a row. HTML tag: bim-badge
 *
 * It is display only on purpose. Whoever owns the value also owns how it is
 * typed (which keys, in what order, what Enter does), so the badge never takes
 * the focus and never reads a key: it is told what to show, and it says when
 * it has been pressed (the native `click`). Three states it can be shown in,
 * each reflected to an attribute:
 *
 * - `active`: it is the one being written or the one chosen among several;
 * - `locked`: its value is fixed and will not follow what it measures;
 * - `invalid`: what it holds cannot be kept (a fixed value that no longer fits).
 */
export class Badge extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      gap: var(--bim-badge--gap, 0.25rem);
      padding: var(--bim-badge--p, 0.125rem 0.5rem);
      border-radius: var(--bim-badge--bdrs, 999px);
      border: 1px solid var(--bim-badge--bdc, var(--bim-ui_bg-contrast-40));
      background-color: var(--bim-badge--bgc, var(--bim-ui_bg-contrast-10));
      color: var(--bim-badge--c, var(--bim-ui_bg-contrast-100));
      font-size: var(--bim-badge--fz, var(--bim-ui_size-lg));
      font-weight: 600;
      line-height: 1.4;
      white-space: nowrap;
      user-select: none;
      cursor: default;
      transition:
        border-color var(--bim-ui_duration-fast, 0.15s),
        background-color var(--bim-ui_duration-fast, 0.15s);
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }

    :host([hidden]) {
      display: none;
    }

    :host([clickable]) {
      cursor: pointer;
    }

    :host([active]) {
      border-color: var(--bim-badge--active-bdc, var(--bim-ui_accent-base));
      outline: 1px solid var(--bim-badge--active-bdc, var(--bim-ui_accent-base));
    }

    :host([locked]) {
      background-color: var(--bim-badge--locked-bgc, var(--bim-ui_bg-contrast-20));
    }

    :host([invalid]) {
      border-color: var(--bim-badge--invalid-c, var(--bim-ui_error-base, #e05555));
      color: var(--bim-badge--invalid-c, var(--bim-ui_error-base, #e05555));
    }

    svg {
      width: 0.875em;
      height: 0.875em;
      fill: currentColor;
      flex-shrink: 0;
    }

    bim-icon {
      flex-shrink: 0;
    }
  `;

  /**
   * The text it shows. Set as a property or an attribute; with none, its slotted content is shown.
   * @example <bim-badge label="4.00 m"></bim-badge>
   */
  @property({ type: String })
  label?: string;

  /**
   * An icon shown before the text.
   * @example <bim-badge icon="mdi:ruler" label="4.00 m"></bim-badge>
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /** It is the one being written, or the one chosen among several. */
  @property({ type: Boolean, reflect: true })
  active = false;

  /** Its value is fixed: a padlock is shown beside it. */
  @property({ type: Boolean, reflect: true })
  locked = false;

  /** What it holds cannot be kept. */
  @property({ type: Boolean, reflect: true })
  invalid = false;

  /** It answers to being pressed (the pointer says so over it). The `click` is the native one. */
  @property({ type: Boolean, reflect: true })
  clickable = false;

  protected render() {
    const padlock = html`<svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
      />
    </svg>`;
    return html`
      ${this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : nothing}
      ${this.locked ? padlock : nothing}
      ${this.label !== undefined ? html`<span>${this.label}</span>` : html`<slot></slot>`}
    `;
  }
}
