import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import "iconify-icon";

/**
 * A custom icon web component for BIM applications. HTML tag: bim-icon
 */
export class Icon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--bim-icon--sz, var(--bim-icon--fz, var(--bim-ui_size-xl)));
      height: var(--bim-icon--sz, var(--bim-icon--fz, var(--bim-ui_size-xl)));
    }

    iconify-icon {
      width: 100%;
      height: 100%;
      color: var(--bim-icon--c, currentColor);
      transition: color 0.15s, width 0.15s, height 0.15s;
      display: flex;
    }

    @media (prefers-reduced-motion: reduce) {
      iconify-icon {
        transition: none;
      }
    }
  `;

  /**
   * The icon identifier in `"collection:icon-name"` format (e.g. `"solar:settings-bold"`).
   * Uses the Iconify icon set — see https://iconify.design for available collections.
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * Accessible label for standalone (informative) icons. When set, the host receives
   * `role="img"` and the label is announced by screen readers. When absent, the icon
   * is treated as decorative and hidden from the accessibility tree.
   */
  @property({ type: String, attribute: "aria-label", reflect: true })
  ariaLabel: string | null = null;

  protected updated() {
    if (this.ariaLabel) {
      this.setAttribute("role", "img");
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.setAttribute("aria-hidden", "true");
    }
  }

  protected render() {
    if (!this.icon) return nothing;
    return html`
      <iconify-icon
        .icon=${this.icon}
        height="none"
        noobserver
        aria-hidden=${this.ariaLabel ? nothing : "true"}
      ></iconify-icon>
    `;
  }
}
