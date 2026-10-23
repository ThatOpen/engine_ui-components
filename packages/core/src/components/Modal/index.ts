import { LitElement, PropertyValues, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { styles } from "../../core/Manager/src/styles";

/**
 * A modal dialog web component for BIM applications. HTML tag: bim-modal
 *
 * @fires confirm - Fired when the user clicks the confirm button.
 * @fires cancel - Fired when the user clicks the cancel button or presses Escape.
 */
export class Modal extends LitElement {
  // (Its scrollbar the library's one, as every panel's: Antonio 23-10, «el scrollbar… igual que el del resto»).
  static styles = [styles.scrollbar, css`
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

    /* The dialog itself takes the focus as it opens (autofocus), not its first button: Cancel wore the purple ring of a
       button chosen by keyboard on every modal (Antonio 23-10, «quita el borde morado del botón cancel del modal»). */
    dialog:focus {
      outline: none;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(2px);
    }

    .header {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      box-sizing: border-box;
      height: 35px;
    }

    .header bim-label {
      flex: 1;
      font-weight: 600;
      font-size: 13px;
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
  `];

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
      if (!dialog.open) {
        dialog.showModal();
        // (Its own focus, not its first button's: see \`dialog:focus\`. \`autofocus\` alone left Cancel focused.)
        dialog.focus({ preventScroll: true });
      }
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

  /** Whether the press began on the dark around the box (its backdrop), not on the box. */
  private _pressedOutside = false;

  private _isOutside(e: MouseEvent) {
    const dialog = this._dialog.value;
    if (!dialog || e.target !== dialog) return false;
    const box = dialog.getBoundingClientRect();
    return e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom;
  }

  // A click on the dark around it closes it, as Cancel (Antonio 23-10: «al clicar en la zona oscura fuera del menú
  // debería cerrarse automáticamente»). Only a press AND a release out there: a drag that began inside (selecting text
  // in a field) and ended outside is no click away.
  private _onDialogPointerDown = (e: PointerEvent) => {
    this._pressedOutside = this._isOutside(e);
  };

  private _onDialogClick = (e: MouseEvent) => {
    const away = this._pressedOutside && this._isOutside(e);
    this._pressedOutside = false;
    if (away && !this.loading) this._cancel();
  };

  protected render() {
    return html`
      <dialog
        autofocus
        tabindex="-1"
        ${ref(this._dialog)}
        @cancel=${this._onDialogCancel}
        @close=${this._onDialogClose}
        @pointerdown=${this._onDialogPointerDown}
        @click=${this._onDialogClick}
      >
        ${this.label || this.icon ? html`
          <div class="header">
            <bim-label .icon=${this.icon}>${this.label ?? ""}</bim-label>
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
