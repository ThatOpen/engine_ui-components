import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";

/** One way to use a tool: the gesture or keys, and what it does. */
export interface ToolShortcut {
  /** The gesture or keys, as a person reads them: "Double click", "Enter", "Esc". */
  keys: string;
  /** What it does: "Add a point", "Close the area". */
  action: string;
}

/** Where whether the help is folded is remembered: one choice for every tool and app. */
const FOLDED_KEY = "bim-tool-status:folded";

const readFolded = () => {
  try {
    return localStorage.getItem(FOLDED_KEY) === "1";
  } catch {
    return false;
  }
};

/**
 * What a person is doing in a viewer, and how to do it: the active tool's name
 * (with its icon), what to do now under it, and under that the tool's
 * shortcuts, one per line, the keys on the left and what they do on the right.
 * HTML tag: bim-tool-status
 *
 * The same piece in every app, so that a tool explains itself the same way
 * everywhere: an app does not draw its own. The shortcuts fold away from a
 * chevron beside the name (the step to do now is always said), and stays as it was left (for every tool and app:
 * whoever folds it once knows the tools).
 *
 * It takes no clicks but the chevron's: the rest lets the pointer through to
 * the drawing under it.
 */
export class ToolStatus extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      align-items: stretch;
      gap: 0.2rem;
      padding: 0.25rem 0.6rem;
      border-radius: 0.5rem;
      background: var(--bim-tool-status--bgc, var(--bim-ui_bg-contrast-10));
      border: 1px solid var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
      font: 400 var(--bim-tool-status--fs, 0.75rem) / 1.25 var(--bim-ui_font-family, "Plus Jakarta Sans", sans-serif);
      letter-spacing: 0.01em;
      pointer-events: none;
      user-select: none;
    }

    :host([hidden]) {
      display: none;
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      min-height: 1.1rem;
    }

    .head bim-icon {
      font-size: 0.8rem;
      color: var(--bim-ui_bg-contrast-80);
      flex: none;
    }

    .name {
      flex: 1;
    }

    .fold {
      pointer-events: auto;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      margin-right: -0.3rem;
      border-radius: 0.25rem;
      color: var(--bim-ui_bg-contrast-60);
      font-size: 0.75rem;
    }

    .fold:hover {
      color: var(--bim-ui_bg-contrast-100);
      background: var(--bim-ui_bg-contrast-20);
    }

    .detail {
      white-space: normal;
      overflow-wrap: anywhere;
      color: var(--bim-ui_bg-contrast-80);
    }

    .shortcuts {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 0.6rem;
      row-gap: 0.15rem;
      /* Its own sides too: in a box narrower than the list (an app that sets
         the HUD's width), the rows wrap inside it instead of touching its edges. */
      padding: 0.25rem 0.15rem 0.1rem;
      margin-top: 0.1rem;
      min-width: 0;
      border-top: 1px solid var(--bim-ui_bg-contrast-20);
    }

    .keys {
      color: var(--bim-ui_bg-contrast-100);
      font-weight: 600;
      white-space: nowrap;
    }

    .action {
      color: var(--bim-ui_bg-contrast-80);
      white-space: normal;
      min-width: 0;
      overflow-wrap: anywhere;
    }
  `;

  /** The tool's name. */
  @property({ type: String })
  label = "";

  /** The tool's icon, shown before its name. */
  @property({ type: String })
  icon?: string;

  /** What to do now, under the name (a step of the tool: «Click the second point»). */
  @property({ type: String })
  detail?: string;

  /** How the tool is used: each gesture or keys and what it does. */
  @property({ type: Array, attribute: false })
  shortcuts: ToolShortcut[] = [];

  /** Whether the shortcuts are folded away. Remembered across tools and apps. */
  @state()
  folded = readFolded();

  private _toggle = (event: Event) => {
    event.stopPropagation();
    this.folded = !this.folded;
    try {
      localStorage.setItem(FOLDED_KEY, this.folded ? "1" : "0");
    } catch {
      /* no storage: it stays as chosen while the page lives */
    }
    this.dispatchEvent(new Event("foldchange"));
  };

  protected render() {
    // The step is always said; what folds is the list of how to use it.
    const helps = this.shortcuts.length > 0;
    const open = helps && !this.folded;
    return html`
      <div class="head">
        ${this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : nothing}
        <span class="name">${this.label}</span>
        ${helps
          ? html`<span
              class="fold"
              data-action="fold"
              title=${open ? "Hide the help" : "Show how to use it"}
              @pointerdown=${(e: Event) => e.stopPropagation()}
              @click=${this._toggle}
              >${open ? "▴" : "▾"}</span
            >`
          : nothing}
      </div>
      ${this.detail ? html`<div class="detail">${this.detail}</div>` : nothing}
      ${open && this.shortcuts.length > 0
        ? html`<div class="shortcuts">
            ${this.shortcuts.map(
              (one) => html`<span class="keys">${one.keys}</span><span class="action">${one.action}</span>`,
            )}
          </div>`
        : nothing}
    `;
  }
}
