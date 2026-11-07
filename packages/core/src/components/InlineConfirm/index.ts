import { LitElement, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";

/**
 * THE ONE INLINE CONFIRMATION (Antonio 23-10: «que la confirmación no sea otro modal, sino una confirmación inline. Creo
 * que ya tenemos otras confirmaciones inline, debería ser un componente de la librería de ui… para que todos usen LA
 * MISMA»). HTML tag: bim-inline-confirm
 *
 * A question and its two answers on one line, where the thing asked about is (a row of a list, a bar): the person says
 * yes or no there, and nothing opens over what they were doing (a modal asked from inside another took its place and
 * closed it). Esc is no.
 *
 * @fires accept - When the answer is yes.
 * @fires decline - When the answer is no (its button, or Esc).
 *
 * (Not `confirm` and `cancel`, and not bubbling: inside a modal, those are the modal's own, and a «no» said here closed
 * the modal it was asked in, a «yes» would have confirmed it.)
 */
export class InlineConfirm extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      min-width: 0;
    }

    bim-label.says {
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    bim-button {
      flex: 0 0 auto;
    }

    :host([danger]) bim-button.yes {
      --bim-button--bgc: var(--bim-ui_error-base, #d84343);
      --bim-button--c: #fff;
    }
  `;

  /** The question: «Archive «Ground floor»?». */
  @property({ type: String }) says = "Are you sure?";
  /** What yes does, on its button: «Archive», «Delete». */
  @property({ type: String, attribute: "confirm-label" }) confirmLabel = "Yes";
  @property({ type: String, attribute: "cancel-label" }) cancelLabel = "Cancel";
  /** An icon before the question. */
  @property({ type: String }) icon?: string;
  /** Yes takes something away: its button is the library's error colour. */
  @property({ type: Boolean, reflect: true }) danger = false;

  private keys = (event: KeyboardEvent) => {
    if (event.key !== "Escape") return;
    event.stopPropagation();
    this.answer("decline");
  };

  connectedCallback() {
    super.connectedCallback();
    addEventListener("keydown", this.keys, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    removeEventListener("keydown", this.keys, true);
  }

  private answer(what: "accept" | "decline") {
    this.dispatchEvent(new Event(what));
  }

  protected render() {
    return html`
      <bim-label class="says" .icon=${this.icon ?? nothing}>${this.says}</bim-label>
      <bim-button
        class="yes"
        data-confirm="yes"
        label=${this.confirmLabel}
        @click=${(event: Event) => {
          event.stopPropagation();
          this.answer("accept");
        }}
      ></bim-button>
      <bim-button
        data-confirm="no"
        label=${this.cancelLabel}
        @click=${(event: Event) => {
          event.stopPropagation();
          this.answer("decline");
        }}
      ></bim-button>
    `;
  }
}
