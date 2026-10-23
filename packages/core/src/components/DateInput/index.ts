import { LitElement, css, html, nothing } from "lit";
import { property, state } from "lit/decorators.js";

/** A day as it is written: `YYYY-MM-DD`. */
const iso = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const parse = (day: string | undefined | null): Date | null => {
  if (!day || !/^\d{4}-\d{2}-\d{2}/.test(day)) return null;
  const [y, m, d] = day.slice(0, 10).split("-").map(Number) as [number, number, number];
  const date = new Date(y, m - 1, d);
  return Number.isNaN(date.getTime()) ? null : date;
};

/**
 * THE ONE DATE INPUT (Antonio 23-10: «los selectores de fecha deberían ser un componente de selección de fecha serio, no
 * un input de texto… un componente ÚNICO centralizado de fecha, en la librería ui… que se use para cada vez que hay un
 * input de fecha. Debería soportar tanto fechas puntuales como rangos de fecha»). HTML tag: bim-date-input
 *
 * A field that says the day (or the two days) in words, and a month calendar under it: a click picks the day; with
 * `range`, a first click the start and a second the end, the days between lit. Days are written as `YYYY-MM-DD`:
 * `value` holds one; with `range`, `from` and `to` hold the two ends. Esc or a click elsewhere closes it; «Clear» says
 * no date. The chosen days wear the library's one accent.
 *
 * @fires change - When the day, or the range, changes.
 */
export class DateInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      user-select: none;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    bim-label.field-label {
      margin-top: var(--bim-input--label-mt, 0);
    }

    .trigger {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 0.375rem;
      height: 25px;
      min-width: 3rem;
      padding: 0 7px;
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
      border: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
      cursor: pointer;
      outline: none;
    }

    :host(:not([vertical])) .trigger {
      flex: 1;
    }

    :host(:not([vertical])[label]) .trigger {
      max-width: var(--bim-input--maxw, fit-content);
    }

    :host([open]) .trigger {
      border-color: var(--bim-ui_accent-base, var(--bim-ui_main-base));
    }

    :host([disabled]) .trigger {
      cursor: default;
      opacity: 0.6;
    }

    .trigger bim-label {
      flex: 1;
      pointer-events: none;
    }

    .placeholder {
      --bim-label--c: var(--bim-ui_bg-contrast-60);
    }

    .calendar {
      position: fixed;
      z-index: 1000;
      box-sizing: border-box;
      width: 15.5rem;
      padding: 0.5rem;
      border-radius: var(--bim-ui_size-2xs, 0.5rem);
      background: var(--bim-ui_bg-contrast-10);
      border: 1px solid var(--bim-ui_bg-contrast-20);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .month {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .month bim-label {
      flex: 1;
      text-align: center;
      font-weight: 600;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
    }

    .weekday {
      text-align: center;
      font-size: 0.7rem;
      color: var(--bim-ui_bg-contrast-60);
      padding: 0.15rem 0;
    }

    .day {
      box-sizing: border-box;
      height: 1.85rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.375rem;
      border: 1px solid transparent;
      font-size: 0.75rem;
      color: var(--bim-ui_bg-contrast-100);
      cursor: pointer;
      background: transparent;
      font-family: inherit;
    }

    .day:hover {
      background: var(--bim-ui_bg-contrast-30);
    }

    .day.other {
      color: var(--bim-ui_bg-contrast-40);
    }

    .day.today {
      border-color: var(--bim-ui_bg-contrast-60);
    }

    .day.between {
      background: color-mix(in srgb, var(--bim-ui_main-base) 30%, transparent);
      border-radius: 0;
    }

    .day.chosen {
      background: var(--bim-ui_main-base);
      color: var(--bim-ui_main-contrast, #fff);
    }

    .foot {
      display: flex;
      justify-content: space-between;
      gap: 0.375rem;
    }
  `;

  @property({ type: String, reflect: true }) label?: string;
  @property({ type: String, reflect: true }) icon?: string;
  @property({ type: Boolean, reflect: true }) vertical = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Two days, a start and an end, in place of one. */
  @property({ type: Boolean, reflect: true }) range = false;
  /** The day, `YYYY-MM-DD`; empty for none. */
  @property({ type: String }) value = "";
  /** With `range`: its first day, `YYYY-MM-DD`. */
  @property({ type: String }) from = "";
  /** With `range`: its last day, `YYYY-MM-DD`. */
  @property({ type: String }) to = "";
  @property({ type: String }) placeholder = "";
  /** A few words for its tooltip (the library's one, `bim-tooltip`). */
  @property({ attribute: false }) tooltip?: string;
  @property({ type: Boolean, reflect: true }) open = false;

  /** The month shown: its first day. */
  @state() private shown = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  @state() private at = { x: 0, y: 0 };
  /** With `range`, the first click made and the second awaited. */
  @state() private picking: string | null = null;

  private outside = (event: PointerEvent) => {
    if (!event.composedPath().includes(this)) this.close();
  };
  private keys = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      this.close();
    }
  };

  disconnectedCallback() {
    super.disconnectedCallback();
    this.close();
  }

  private toggle(trigger: HTMLElement) {
    if (this.disabled) return;
    if (this.open) return this.close();
    const box = trigger.getBoundingClientRect();
    const wide = 248;
    const tall = 300;
    this.at = {
      x: Math.max(4, Math.min(box.left, innerWidth - wide - 4)),
      y: box.bottom + tall + 4 > innerHeight ? Math.max(4, box.top - tall - 4) : box.bottom + 4,
    };
    const start = parse(this.range ? this.from : this.value) ?? new Date();
    this.shown = new Date(start.getFullYear(), start.getMonth(), 1);
    this.picking = null;
    this.open = true;
    addEventListener("pointerdown", this.outside, true);
    addEventListener("keydown", this.keys, true);
  }

  private close() {
    if (!this.open) return;
    this.open = false;
    this.picking = null;
    removeEventListener("pointerdown", this.outside, true);
    removeEventListener("keydown", this.keys, true);
  }

  private said() {
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }

  private pick(day: string) {
    if (!this.range) {
      this.value = day;
      this.said();
      this.close();
      return;
    }
    if (this.picking === null) {
      this.picking = day;
      this.from = day;
      this.to = "";
      return;
    }
    const [a, b] = [this.picking, day].sort();
    this.from = a!;
    this.to = b!;
    this.picking = null;
    this.said();
    this.close();
  }

  private clear() {
    if (this.range) {
      this.from = "";
      this.to = "";
    } else this.value = "";
    this.said();
    this.close();
  }

  /** The day, or the two, in words. */
  private inWords(): string | null {
    const word = (day: string) =>
      parse(day)?.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }) ?? null;
    if (!this.range) return this.value ? word(this.value) : null;
    if (!this.from && !this.to) return null;
    return `${this.from ? word(this.from) : "…"} → ${this.to ? word(this.to) : "…"}`;
  }

  private calendar() {
    const first = this.shown;
    // Weeks from Monday.
    const lead = (first.getDay() + 6) % 7;
    const start = new Date(first.getFullYear(), first.getMonth(), 1 - lead);
    const today = iso(new Date());
    const [from, to] = this.range ? [this.from, this.to || this.picking || ""] : [this.value, this.value];
    const days = Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
    const weekdays = Array.from({ length: 7 }, (_, i) =>
      new Date(2024, 0, 1 + i).toLocaleDateString(undefined, { weekday: "narrow" }),
    );
    const step = (months: number) => (this.shown = new Date(first.getFullYear(), first.getMonth() + months, 1));
    return html`<div class="calendar" style="left: ${this.at.x}px; top: ${this.at.y}px;" @pointerdown=${(e: Event) => e.stopPropagation()}>
      <div class="month">
        <bim-button icon="tabler:chevron-left" @click=${() => step(-1)}></bim-button>
        <bim-label>${first.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</bim-label>
        <bim-button icon="tabler:chevron-right" @click=${() => step(1)}></bim-button>
      </div>
      <div class="grid">
        ${weekdays.map((one) => html`<div class="weekday">${one}</div>`)}
        ${days.map((date) => {
          const day = iso(date);
          const chosen = day === from || day === to;
          const between = this.range && from && to && day > from && day < to;
          return html`<button
            class="day ${date.getMonth() !== first.getMonth() ? "other" : ""} ${day === today ? "today" : ""} ${chosen
              ? "chosen"
              : between
                ? "between"
                : ""}"
            data-day=${day}
            @click=${() => this.pick(day)}
          >
            ${date.getDate()}
          </button>`;
        })}
      </div>
      <div class="foot">
        <bim-button label="Today" @click=${() => {
          this.shown = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
          if (!this.range) this.pick(today);
        }}></bim-button>
        <bim-button label="Clear" @click=${() => this.clear()}></bim-button>
      </div>
    </div>`;
  }

  protected render() {
    const words = this.inWords();
    return html`
      <div class="parent">
        ${this.label || this.icon ? html`<bim-label class="field-label" .icon=${this.icon}>${this.label ?? ""}</bim-label>` : nothing}
        <div
          class="trigger"
          tabindex="0"
          role="button"
          aria-haspopup="dialog"
          aria-expanded=${this.open}
          @click=${(e: Event) => this.toggle(e.currentTarget as HTMLElement)}
          @keydown=${(e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              this.toggle(e.currentTarget as HTMLElement);
            }
          }}
        >
          ${this.tooltip ? html`<bim-tooltip>${this.tooltip}</bim-tooltip>` : nothing}
          <bim-icon icon="tabler:calendar"></bim-icon>
          ${words
            ? html`<bim-label>${words}</bim-label>`
            : html`<bim-label class="placeholder">${this.placeholder || (this.range ? "Pick a range" : "Pick a day")}</bim-label>`}
        </div>
      </div>
      ${this.open ? this.calendar() : nothing}
    `;
  }
}
