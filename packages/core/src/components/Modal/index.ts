import { LitElement, PropertyValues, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * A modal dialog web component for BIM applications. HTML tag: bim-modal
 *
 * @fires confirm - Fired when the user clicks the confirm button.
 * @fires cancel - Fired when the user clicks the cancel button, presses Escape, or clicks the backdrop.
 */
export class Modal extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }

    dialog {
      padding: 0;
      border: none;
      border-radius: 0.75rem;
      background-color: var(--bim-modal--bg, var(--bim-ui_bg-contrast-10));
      color: var(--bim-modal--c, var(--bim-ui_bg-contrast-80));
      min-width: 20rem;
      max-width: min(90vw, 36rem);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(2px);
    }

    .header {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
    }

    .header bim-label {
      flex: 1;
      font-weight: 600;
      font-size: 0.875rem;
    }

    .content {
      padding: 1rem;
      max-height: 60vh;
      overflow-y: auto;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
    }
  `;

  /** Title displayed in the modal header. */
  @property({ type: String, reflect: true })
  label?: string;

  /** Icon displayed next to the title in the header. */
  @property({ type: String, reflect: true })
  icon?: string;

  /** Label for the confirm button. */
  @property({ type: String, attribute: "confirm-label" })
  confirmLabel = "Confirm";

  /** Label for the cancel button. */
  @property({ type: String, attribute: "cancel-label" })
  cancelLabel = "Cancel";

  /** Controls whether the modal is visible. */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Disables both buttons and shows a spinner on confirm while an async operation runs. */
  @property({ type: Boolean, reflect: true })
  loading = false;

  private _dialog = createRef<HTMLDialogElement>();

  protected updated(changed: PropertyValues) {
    super.updated(changed);
    if (!changed.has("open")) return;
    const dialog = this._dialog.value;
    if (!dialog) return;
    if (this.open) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }

  private _confirm() {
    this.dispatchEvent(new Event("confirm", { bubbles: true, composed: true }));
  }

  private _cancel() {
    this.open = false;
    this.dispatchEvent(new Event("cancel", { bubbles: true, composed: true }));
  }

  private _onDialogCancel(e: Event) {
    e.preventDefault();
    if (this.loading) return;
    this._cancel();
  }

  private _onDialogClose() {
    if (this.loading) {
      this._dialog.value?.showModal();
    }
  }

  private _onDialogClick(e: MouseEvent) {
    if (this.loading) return;
    const dialog = this._dialog.value;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isBackdrop =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (isBackdrop) this._cancel();
  }

  protected render() {
    return html`
      <dialog
        ${ref(this._dialog)}
        @cancel=${this._onDialogCancel}
        @close=${this._onDialogClose}
        @click=${this._onDialogClick}
      >
        ${this.label || this.icon ? html`
          <div class="header">
            <bim-label .icon=${this.icon ?? nothing}>${this.label ?? ""}</bim-label>
          </div>
        ` : nothing}
        <div class="content">
          <slot></slot>
        </div>
        <div class="footer">
          <bim-button
            label=${this.cancelLabel}
            ?disabled=${this.loading}
            @click=${this._cancel}>
          </bim-button>
          <bim-button
            label=${this.confirmLabel}
            .loading=${this.loading}
            ?disabled=${this.loading}
            style="background-color: var(--bim-ui_main-base);"
            @click=${this._confirm}>
          </bim-button>
        </div>
      </dialog>
    `;
  }
}
