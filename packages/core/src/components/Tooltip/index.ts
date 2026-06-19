import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import "iconify-icon";
import { computePosition, offset, inline, flip, shift, Placement } from "@floating-ui/dom";

/**
 * A custom tooltip web component for BIM applications. HTML tag: bim-tooltip
 */
export class Tooltip extends LitElement {
  static styles = css`
    :host {
      --bim-tooltip--bgc: var(--bim-ui_bg-base);
      --bim-tooltip--c: var(--bim-ui_bg-contrast-100);
      --bim-tooltip--bdc: var(--bim-ui_bg-contrast-40);
      --bim-tooltip--bdrs: var(--bim-ui_size-4xs, 4px);
      --bim-tooltip--p: 0.25rem 0.5rem;
      --bim-tooltip--fz: 0.75rem;
      position: absolute;
      background: var(--bim-tooltip--bgc);
      color: var(--bim-tooltip--c);
      border: 1px solid var(--bim-tooltip--bdc);
      border-radius: var(--bim-tooltip--bdrs);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      padding: var(--bim-tooltip--p);
      font-size: var(--bim-tooltip--fz);
      font-weight: 500;
      line-height: 1.2;
      white-space: nowrap;
      display: none;
    }
    :host([visible]) {
      display: flex;
    }
  `;

  private static _container: HTMLDivElement | null = null;

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
        z-index: 9999;
      `;
    }
    return Tooltip._container;
  }

  @property({ type: Boolean, reflect: true })
  visible = false;

  @property({ type: Number, reflect: true })
  timeout?: number;

  @property({ type: String, reflect: true })
  placement?: Placement;

  private timeoutId?: number;
  private _previousContainer: HTMLElement | null = null;
  // The host element the tooltip belongs to (its parent before it gets reparented
  // into the global container). Listeners are bound here; we also watch it so the
  // tooltip self-heals if it gets removed while showing.
  private _host: HTMLElement | null = null;
  // Observes the host's parent so we detect the host being removed from the DOM
  // (e.g. a virtualized list re-rendering its rows) even after we've reparented
  // ourselves into the global container — otherwise the tooltip would orphan.
  private _hostObserver: MutationObserver | null = null;
  // True while WE are moving the element between the host and the global container.
  // A DOM move fires disconnectedCallback + connectedCallback, and without this flag
  // the disconnectedCallback teardown would instantly undo the show (clearing
  // `visible`, `_previousContainer`, the watch and the host listeners) — which is
  // exactly what made tooltips stop appearing.
  private _reparenting = false;
  // Set once the tooltip is actually visible AND positioned, on a later tick. The
  // global dismiss listeners only act once this is true, so the scroll/pointer/mutation
  // events that the show itself triggers (reparenting, layout) can't dismiss it.
  private _dismissArmed = false;

  private _showToolTip = async () => {
    this.timeoutId = setTimeout(async () => {
      if (!Tooltip.container.parentElement) {
        const contextDialog = document.querySelector("[data-context-dialog]");
        if (contextDialog) {
          contextDialog.append(Tooltip.container);
        } else {
          document.body.append(Tooltip.container);
        }
      }
      // Capture the real host BEFORE we move into the container, and guard the move
      // so disconnectedCallback doesn't treat it as a genuine removal.
      this._previousContainer = this.parentElement;
      Tooltip.container.style.top = `${window.scrollY || document.documentElement.scrollTop}px`;
      this._reparenting = true;
      Tooltip.container.append(this);
      this._reparenting = false;
      this.visible = true;
      // Start watching so the tooltip can never get stuck if the host disappears
      // or the page scrolls/clicks away while we're detached in the container.
      this._watchWhileVisible();
      await this.computePosition();
    }, this.timeout === undefined ? 800 : this.timeout) as unknown as number;
  };

  private _hideToolTip = () => {
    clearTimeout(this.timeoutId);
    this.visible = false;
    this._dismissArmed = false;
    this._unwatch();
    if (this._previousContainer && this._previousContainer.isConnected) {
      // Guard the move home too, so disconnectedCallback doesn't tear down the
      // host listeners (which would stop the tooltip ever showing again).
      this._reparenting = true;
      this._previousContainer.append(this);
      this._reparenting = false;
      this._previousContainer = null;
    } else {
      // The original parent is gone (e.g. its row was re-rendered away). Don't
      // try to re-home into a dead node — just detach from the global container.
      this._previousContainer = null;
      if (this.parentElement === Tooltip.container) {
        this._reparenting = true;
        this.remove();
        this._reparenting = false;
      }
    }
    // Remove container from body if no tooltips are visible
    if (Tooltip.container.children.length === 0 && Tooltip.container.parentElement) {
      Tooltip.container.remove();
    }
  };

  // While visible (and reparented into the global container), guard against every
  // way the tooltip could be left stranded: the host getting removed from the DOM,
  // a click anywhere, or the page scrolling. Any of these hides the tooltip.
  private _watchWhileVisible = () => {
    // Watch the host (the element the tooltip belongs to), not the global container.
    const host = this._previousContainer;
    if (host) {
      const hostParent = host.parentElement;
      if (hostParent) {
        this._hostObserver = new MutationObserver(() => {
          // Only react to the host being genuinely gone from the document — not to
          // unrelated sibling/subtree mutations (lists re-render constantly). And
          // never while we're still mid-show (dismiss not yet armed).
          if (this._dismissArmed && !host.isConnected) this._hideToolTip();
        });
        this._hostObserver.observe(hostParent, { childList: true, subtree: true });
      }
    }
    window.addEventListener("pointerdown", this._onGlobalDismiss, true);
    window.addEventListener("scroll", this._onGlobalDismiss, true);
    window.addEventListener("blur", this._onGlobalDismiss, true);
    // Arm dismissal only after the show settles, so the reparent/layout/scroll that
    // the show itself causes in this same frame can't immediately hide the tooltip.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (this.visible) this._dismissArmed = true;
      });
    });
  };

  private _unwatch = () => {
    if (this._hostObserver) {
      this._hostObserver.disconnect();
      this._hostObserver = null;
    }
    window.removeEventListener("pointerdown", this._onGlobalDismiss, true);
    window.removeEventListener("scroll", this._onGlobalDismiss, true);
    window.removeEventListener("blur", this._onGlobalDismiss, true);
  };

  private _onGlobalDismiss = () => {
    // Ignore the burst of events the show itself fires; only dismiss once armed.
    if (this._dismissArmed && this.visible) this._hideToolTip();
  };

  private async computePosition() {
    const parent = this._previousContainer || this.parentElement;
    if (!parent) return;

    const prevDisplay = this.style.display;
    this.style.display = "block";
    this.style.visibility = "hidden";

    await new Promise(requestAnimationFrame);

    const { x, y } = await computePosition(parent, this, {
      placement: this.placement,
      middleware: [offset(10), flip(), shift({ padding: 8 }), inline()],
    });

    Object.assign(this.style, {
      left: `${x}px`,
      top: `${y}px`,
      display: prevDisplay,
      visibility: "",
    });
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Only (re)bind to a real host. When we reparent ourselves into the global
    // container, connectedCallback fires again with that container as parent —
    // skip it so the hover listeners stay on the original host.
    const parent = this.parentElement;
    if (parent && parent !== Tooltip._container) {
      this._host = parent;
      parent.addEventListener("mouseenter", this._showToolTip);
      parent.addEventListener("mouseleave", this._hideToolTip);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    // A DOM move (host -> global container and back) fires this even though the
    // tooltip isn't really going away. When WE are the ones moving it, skip the
    // teardown — otherwise the show would be instantly undone (visible/host/watch
    // all cleared) and the tooltip would never appear.
    if (this._reparenting) return;
    // Genuine removal: clear any pending show timer, drop global guards/observer,
    // and unbind from the host. This fires when the tooltip element itself is
    // removed from the DOM (e.g. its host's innerHTML is replaced while hidden),
    // so it must never leave dangling listeners.
    clearTimeout(this.timeoutId);
    this._dismissArmed = false;
    this._unwatch();
    this.visible = false;
    this._previousContainer = null;
    const host = this._host;
    if (host) {
      host.removeEventListener("mouseenter", this._showToolTip);
      host.removeEventListener("mouseleave", this._hideToolTip);
      this._host = null;
    }
    // Tidy the shared container if we were the last visible tooltip.
    if (
      Tooltip._container &&
      Tooltip._container.children.length === 0 &&
      Tooltip._container.parentElement
    ) {
      Tooltip._container.remove();
    }
  }

  protected render() {
    return html`<div><slot></slot></div>`;
  }
}
