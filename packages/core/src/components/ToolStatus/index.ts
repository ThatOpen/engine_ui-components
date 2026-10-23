import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";

/** One way to use a tool: the gesture or keys, and what it does. */
export interface ToolShortcut {
  /** The gesture or keys, as a person reads them: "Double click", "Enter", "Esc". */
  keys: string;
  /** What it does: "Add a point", "Close the area". */
  action: string;
}

/**
 * What a person is doing in a viewer, and how to do it. HTML tag: bim-tool-status
 *
 * The chip says the active tool's name (with its icon) and what to do now,
 * nothing more: always there and small. How the tool is used (its gestures and
 * keys, the keys on the left, what they do on the right) shows only while the
 * pointer is over the chip, in a panel of its own just under it, and goes when
 * the pointer leaves (Antonio, 17-10: open, it was too much to keep on the
 * view). A "?" in the chip says there is such help.
 *
 * The same piece in every app, so that a tool explains itself the same way
 * everywhere: an app does not draw its own. It takes the pointer only to be
 * hovered; a click goes nowhere.
 */
export class ToolStatus extends LitElement {
  static styles = css`
    :host {
      position: relative;
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
      pointer-events: auto;
      user-select: none;
      cursor: default;
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

    /* There is help to see: hover the chip. */
    .hint {
      flex: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      margin-right: -0.2rem;
      border-radius: 50%;
      border: 1px solid var(--bim-ui_bg-contrast-40);
      color: var(--bim-ui_bg-contrast-60);
      font-size: 0.65rem;
      font-weight: 700;
      line-height: 1;
    }

    :host(:hover) .hint {
      color: var(--bim-ui_bg-contrast-100);
      border-color: var(--bim-ui_bg-contrast-80);
    }

    .detail {
      white-space: normal;
      overflow-wrap: anywhere;
      color: var(--bim-ui_bg-contrast-80);
    }

    /* The help: a panel of its own, the chip's look, just under it. */
    .help {
      position: absolute;
      top: calc(100% + 0.5rem);
      z-index: 1;
      box-sizing: border-box;
      min-width: max(100%, 16rem);
      max-width: 24rem;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 0.6rem;
      /* One entry apart from the next (Antonio 23-10: «dejar cierta separación entre entradas o se confunde dónde acaba
         una explicación y empieza la siguiente»). */
      row-gap: 0.55rem;
      padding: 0.55rem 0.7rem;
      border-radius: 0.5rem;
      background: var(--bim-tool-status--bgc, var(--bim-ui_bg-contrast-10));
      border: 1px solid var(--bim-ui_bg-contrast-20);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      pointer-events: none;
    }

    .help.start {
      left: 0;
    }

    .help.end {
      right: 0;
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

  /** Whether the help is shown: while the pointer is over the chip. */
  @state()
  private _helping = false;

  /** The side the help hangs from: the chip's own side of the page. */
  @state()
  private _side: "start" | "end" = "start";

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("pointerenter", this._enter);
    this.addEventListener("pointerleave", this._leave);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("pointerenter", this._enter);
    this.removeEventListener("pointerleave", this._leave);
  }

  private _enter = () => {
    if (this.shortcuts.length === 0) return;
    const rect = this.getBoundingClientRect();
    const middle = (this.ownerDocument.defaultView?.innerWidth ?? 0) / 2;
    this._side = rect.left + rect.width / 2 > middle ? "end" : "start";
    this._helping = true;
  };

  private _leave = () => {
    this._helping = false;
  };

  protected render() {
    const helps = this.shortcuts.length > 0;
    return html`
      <div class="head">
        ${this.icon ? html`<bim-icon .icon=${this.icon}></bim-icon>` : nothing}
        <span class="name">${this.label}</span>
        ${helps ? html`<span class="hint" data-hint>?</span>` : nothing}
      </div>
      ${this.detail ? html`<div class="detail">${this.detail}</div>` : nothing}
      ${helps && this._helping
        ? html`<div class="help ${this._side}" data-help>
            ${this.shortcuts.map(
              (one) => html`<span class="keys">${one.keys}</span><span class="action">${one.action}</span>`,
            )}
          </div>`
        : nothing}
    `;
  }
}
