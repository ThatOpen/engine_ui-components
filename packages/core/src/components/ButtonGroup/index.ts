import { LitElement, PropertyValues, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";

/**
 * A segmented control: a row of `<bim-button>` children where exactly one is
 * active at a time, joined into a single pill with a sliding indicator
 * behind the active one. HTML tag: bim-button-group
 *
 * Unlike `<bim-tabs>`, this does not switch content panels — each child is
 * just an option (a view mode, a filter) that changes how ONE shared piece
 * of content behaves, not a separate pane of its own. Use `<bim-tabs>` when
 * each option owns its own content; use this when they don't.
 *
 * The indicator reuses the exact tokens `<bim-tabs>`'s own indicator does
 * (`--bim-ui_duration-md`, `--bim-ui_ease-standard`, `--bim-ui_main-base`),
 * so a segmented control and a tab switcher never drift apart in feel even
 * though they're built for different jobs (motion-pass-2, 14-11: Jesús on
 * model-tree's Tree/Categories/Models switcher not matching `<bim-tabs>`).
 *
 * @example
 * ```html
 * <bim-button-group value="tree">
 *   <bim-button value="tree" label="Tree"></bim-button>
 *   <bim-button value="categories" label="Categories"></bim-button>
 *   <bim-button value="models" label="Models"></bim-button>
 * </bim-button-group>
 * ```
 *
 * @fires change - Fired with `{ value }` when a different button is picked.
 */
export class ButtonGroup extends LitElement {
  static styles = css`
    :host {
      display: flex;
    }

    .group {
      position: relative;
      display: flex;
      width: 100%;
    }

    /* Slides and resizes to the active button's own rect — same mechanics
       as bim-tabs' own indicator (_updateIndicator), so the two share one
       feel instead of two hand-tuned copies drifting apart. */
    .indicator {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      background-color: var(--bim-button-group--active-bgc, var(--bim-ui_main-base));
      transition: transform var(--bim-ui_duration-md) var(--bim-ui_ease-standard),
        width var(--bim-ui_duration-md) var(--bim-ui_ease-standard),
        border-radius var(--bim-ui_duration-md) var(--bim-ui_ease-standard);
      pointer-events: none;
    }

    .indicator[hidden] {
      display: none;
    }

    ::slotted(bim-button) {
      position: relative;
      z-index: 2;
      flex: 1 1 0;
      height: var(--bim-button-group--h, 1.7rem);
      /* The indicator supplies the active fill now, not each button's own
         (the rest of the app's bim-buttons keep their default). */
      --bim-button--bgc-active: transparent;
    }

    ::slotted(bim-button:first-child) {
      border-radius: var(--bim-button-group--bdrs, var(--bim-ui_size-2xs)) 0 0
        var(--bim-button-group--bdrs, var(--bim-ui_size-2xs));
    }

    ::slotted(bim-button:last-child) {
      border-radius: 0 var(--bim-button-group--bdrs, var(--bim-ui_size-2xs))
        var(--bim-button-group--bdrs, var(--bim-ui_size-2xs)) 0;
    }

    /* Source order matters: wins over the two rules above for a single child. */
    ::slotted(bim-button:only-child) {
      border-radius: var(--bim-button-group--bdrs, var(--bim-ui_size-2xs));
    }

    ::slotted(bim-button:not(:first-child):not(:last-child)) {
      border-radius: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .indicator {
        transition: none;
      }
    }
  `;

  /** The `value` of the currently active child `<bim-button>`. */
  @property({ type: String, reflect: true })
  value?: string;

  private _indicatorRef = createRef<HTMLDivElement>();
  private _indicatorPositioned = false;
  private _ro = new ResizeObserver(() => this._updateIndicator());
  private _bound = new WeakSet<Element>();

  constructor() {
    super();
    if (!this.hasAttribute("role")) this.setAttribute("role", "group");
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._ro.disconnect();
    for (const el of this.children) {
      if (el.tagName === "BIM-BUTTON") el.removeEventListener("click", this._onClick);
    }
  }

  protected updated(changed: PropertyValues) {
    super.updated(changed);
    if (changed.has("value")) {
      this._syncActive();
      this._updateIndicator();
    }
  }

  private _onClick = (e: Event) => {
    const btn = e.currentTarget as HTMLElement;
    const value = btn.getAttribute("value");
    if (value === null || value === this.value) return;
    this.value = value;
    this.dispatchEvent(new CustomEvent("change", { detail: { value }, bubbles: true, composed: true }));
  };

  private _onSlotChange = (e: Event) => {
    const slot = e.target as HTMLSlotElement;
    for (const el of slot.assignedElements()) {
      if (el.tagName !== "BIM-BUTTON" || this._bound.has(el)) continue;
      this._bound.add(el);
      el.addEventListener("click", this._onClick);
    }
    this._syncActive();
    this._updateIndicator();
  };

  private _syncActive() {
    for (const el of this.children) {
      if (el.tagName !== "BIM-BUTTON") continue;
      if (el.getAttribute("value") === this.value) el.setAttribute("active", "");
      else el.removeAttribute("active");
    }
  }

  /** Slides and resizes `.indicator` to match the active child's own rect. */
  private _updateIndicator() {
    const indicator = this._indicatorRef.value;
    if (!indicator) return;
    const active = this.querySelector<HTMLElement>("bim-button[active]");
    this._ro.disconnect();
    if (!active) {
      indicator.hidden = true;
      return;
    }
    indicator.hidden = false;
    this._ro.observe(active);
    // Rects, not offsetLeft/offsetWidth: `active` is slotted (projected from
    // the CONSUMER's light DOM, unlike bim-tabs' own `.switcher`s, which it
    // renders itself inside its own shadow root) — its offsetParent resolves
    // through the light DOM, not the flattened tree, and can land on some
    // unrelated positioned ancestor out there instead of `.group` here. Rects
    // always reflect the real rendered (flattened) position, slotted or not.
    const groupRect = indicator.parentElement!.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    indicator.style.transition = this._indicatorPositioned ? "" : "none";
    this._indicatorPositioned = true;
    indicator.style.width = `${activeRect.width}px`;
    indicator.style.transform = `translateX(${activeRect.left - groupRect.left}px)`;
    indicator.style.borderRadius = getComputedStyle(active).borderRadius;
  }

  protected render() {
    return html`
      <div class="group">
        <div class="indicator" ${ref(this._indicatorRef)} hidden aria-hidden="true"></div>
        <slot @slotchange=${this._onSlotChange}></slot>
      </div>
    `;
  }
}
