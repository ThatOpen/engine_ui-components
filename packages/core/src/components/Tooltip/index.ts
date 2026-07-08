import { LitElement, css, html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import "iconify-icon";
import { computePosition, offset, inline, flip, shift, Placement } from "@floating-ui/dom";
import { Manager } from "../../core";

const VALID_PLACEMENTS: Placement[] = [
  "top", "top-start", "top-end",
  "right", "right-start", "right-end",
  "bottom", "bottom-start", "bottom-end",
  "left", "left-start", "left-end",
];

/**
 * A custom tooltip web component for BIM applications. HTML tag: bim-tooltip
 */
export class Tooltip extends LitElement {
  static styles = css`
    :host {
      position: absolute;
      background: var(--bim-ui_bg-contrast-10);
      border-radius: 4px;
      box-shadow: var(--bim-tooltip--shadow, 0 0 10px 3px rgba(0, 0, 0, 0.2));
      padding: var(--bim-tooltip--p, 0.75rem);
      max-width: var(--bim-tooltip--maxw, 20rem);
      font-size: var(--bim-tooltip--fs, var(--bim-ui_size-xs, 0.875rem));
      display: none;
    }
    :host([visible]) {
      display: flex;
    }
  `;

  private static _container: HTMLDivElement | null = null;

  // Always non-null: recreated on demand if a previous one was torn down
  // (see `_hide`), so callers never need to null-check `Tooltip.container`.
  private static get container() {
    if (!Tooltip._container) {
      Tooltip._container = document.createElement("div");
      Tooltip._container.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: visible;
        pointer-events: none;
        z-index: var(--bim-tooltip--z, 9999);
      `;
    }
    return Tooltip._container;
  }

  /**
   * Whether the tooltip is currently shown. Setting this directly (instead of
   * relying on hover/focus) drives the exact same show/hide path — moving the
   * element into the floating container and computing its position — so the
   * imperative and event-driven APIs stay consistent. The actual show/hide
   * side effects run in `updated()` (see below), not in a custom accessor:
   * reflecting a hand-written get/set pair through `@property` is a known
   * rough edge under legacy/experimental TS decorators, so the side effects
   * are kept on Lit's own, guaranteed-correct change-detection path instead.
   *
   * `visible` is reflected to an attribute; `render()` stays a static
   * template, so the extra attribute-changed round trip this causes on every
   * show/hide has no measurable render cost today. If `render()` ever grows
   * real work, reconsider moving the show/hide bookkeeping to a separate
   * `@state` field.
   */
  @property({ type: Boolean, reflect: true })
  visible = false;

  private _timeout?: number;

  /** Delay (ms) before the tooltip appears on hover/focus. Clamped to >= 0; invalid values fall back to the 800ms default. */
  @property({ type: Number, reflect: true })
  set timeout(value: number | undefined) {
    this._timeout = value === undefined || !Number.isFinite(value) ? undefined : Math.max(0, value);
  }

  get timeout(): number | undefined {
    return this._timeout;
  }

  private _placement?: Placement;

  /** Preferred placement relative to the anchor. Invalid values are ignored (with a console warning) instead of being forwarded to floating-ui. */
  @property({ type: String, reflect: true })
  set placement(value: Placement | undefined) {
    if (value !== undefined && !VALID_PLACEMENTS.includes(value)) {
      console.warn(`[bim-tooltip] Invalid placement "${value}". Ignored.`);
      this._placement = undefined;
      return;
    }
    this._placement = value;
  }

  get placement(): Placement | undefined {
    return this._placement;
  }

  private timeoutId?: ReturnType<typeof setTimeout>;
  private _previousContainer: HTMLElement | null = null;
  private _hostParent: HTMLElement | null = null;
  private _escapeListener?: (e: KeyboardEvent) => void;

  private _scheduleShow = () => {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.visible = true;
    }, this.timeout ?? 800);
  };

  private _cancelAndHide = () => {
    clearTimeout(this.timeoutId);
    this.visible = false;
  };

  private _onEscape = (e: KeyboardEvent) => {
    if (e.key !== "Escape") return;
    this.visible = false;
  };

  private async _show() {
    // Re-check `isConnected` (not just "has a parentElement") — if the
    // container was previously parked inside a `[data-context-dialog]` that
    // has since been removed, its parentElement reference is stale even
    // though it looks "attached".
    if (!Tooltip.container.isConnected) {
      const contextDialog = document.querySelector("[data-context-dialog]");
      if (contextDialog) contextDialog.append(Tooltip.container);
      else document.body.append(Tooltip.container);
    }
    // Captured synchronously, before the only `await` below, so a `_hide()`
    // that interleaves mid-flight (e.g. the mouse leaves while positioning is
    // still being computed) always has a correct container to restore to.
    this._previousContainer = this._hostParent;
    Tooltip.container.style.top = `${window.scrollY || document.documentElement.scrollTop}px`;
    Tooltip.container.append(this);

    if (!this._escapeListener) {
      this._escapeListener = this._onEscape;
      document.addEventListener("keydown", this._escapeListener);
    }

    try {
      await this._updatePosition();
    } catch (error) {
      console.error("[bim-tooltip] Failed to position tooltip.", error);
    }
  }

  private _hide() {
    if (this._escapeListener) {
      document.removeEventListener("keydown", this._escapeListener);
      this._escapeListener = undefined;
    }
    if (this._previousContainer) {
      this._previousContainer.append(this);
      this._previousContainer = null;
    }
    if (Tooltip.container.children.length === 0 && Tooltip.container.parentElement) {
      Tooltip.container.remove();
      Tooltip._container = null;
    }
  }

  private async _updatePosition(): Promise<void> {
    const parent = this._previousContainer;
    if (!parent) return;

    this.style.display = "block";
    this.style.visibility = "hidden";
    // Force a synchronous reflow instead of awaiting a full animation frame —
    // guarantees fresh layout for computePosition to measure, without the
    // ~16ms of visible latency `await new Promise(requestAnimationFrame)` cost.
    void this.offsetHeight;

    // `inline()` is meant for inline text anchors (e.g. a word mid-paragraph)
    // and produces wrong geometry against block-level anchors — only include
    // it when the anchor is actually laid out inline.
    const anchorDisplay = getComputedStyle(parent).display;
    const middleware = [offset(10), flip(), shift({ padding: 8 })];
    if (anchorDisplay.startsWith("inline")) middleware.push(inline());

    const { x, y } = await computePosition(parent, this, {
      placement: this.placement,
      middleware,
    });

    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
    // Remove our temporary overrides (rather than restoring a captured
    // "previous" value) so `:host([visible])`'s own `display: flex` rule is
    // always what takes over — no assumption about what `display` held before.
    this.style.removeProperty("display");
    this.style.removeProperty("visibility");
  }

  protected updated(changed: PropertyValues) {
    if (!changed.has("visible")) return;
    this.hidden = !this.visible; // native `hidden` semantics, alongside the CSS-driving `visible` attribute
    if (this.visible) void this._show();
    else this._hide();
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Moving this element into/out of `Tooltip.container` (in `_show`/`_hide`)
    // re-fires connectedCallback too — guard so the host binding only ever
    // happens once, on the FIRST real mount. Without this guard, the second
    // firing (right after the internal move) would re-capture `_hostParent`
    // as `Tooltip.container` itself, silently rebinding all the hover/focus
    // listeners to the floating container instead of the real anchor.
    if (this._hostParent) return;
    const parent = this.parentElement;
    if (!parent) return;
    this._hostParent = parent;
    if (!this.id) this.id = `bim-tooltip-${Manager.newRandomId()}`;
    this._hostParent.setAttribute("aria-describedby", this.id);
    this._hostParent.addEventListener("mouseenter", this._scheduleShow);
    this._hostParent.addEventListener("mouseleave", this._cancelAndHide);
    this._hostParent.addEventListener("focus", this._scheduleShow);
    this._hostParent.addEventListener("blur", this._cancelAndHide);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    // Same double-fire concern as above: defer the actual teardown to a
    // microtask and bail if the element is connected again by then — that
    // means this was just our own internal move, not a real removal.
    queueMicrotask(() => {
      if (this.isConnected) return;
      clearTimeout(this.timeoutId);
      if (this._escapeListener) {
        document.removeEventListener("keydown", this._escapeListener);
        this._escapeListener = undefined;
      }
      if (this._hostParent) {
        this._hostParent.removeEventListener("mouseenter", this._scheduleShow);
        this._hostParent.removeEventListener("mouseleave", this._cancelAndHide);
        this._hostParent.removeEventListener("focus", this._scheduleShow);
        this._hostParent.removeEventListener("blur", this._cancelAndHide);
        this._hostParent.removeAttribute("aria-describedby");
        this._hostParent = null;
      }
    });
  }

  protected render() {
    // Render the content through bim-label so the tooltip text picks up the
    // theme text color. The tooltip is reparented into a floating container on
    // the body, where a bare <slot> would inherit the document's default (near
    // black) and be unreadable on the dark tooltip surface.
    return html`<bim-label role="tooltip" aria-live="polite"><slot></slot></bim-label>`;
  }
}
