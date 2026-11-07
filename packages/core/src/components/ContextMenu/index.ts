import {
  computePosition,
  flip,
  shift,
  offset,
  inline,
  Placement,
} from "@floating-ui/dom";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { styles } from "../../core/Manager/src/styles";
import { Component } from "../../core";

/** One entry of a menu opened at the pointer ({@link ContextMenu.showAt}). */
export interface ContextMenuItem {
  label: string;
  icon?: string;
  /** What it does; the menu closes first. */
  action?: () => void;
  /** There, and not usable now. */
  disabled?: boolean;
  /** A line above it, setting it apart from the entries before. */
  separated?: boolean;
}

export class ContextMenu extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = [
    styles.scrollbar,
    css`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        transform-origin: top left;
        transform: scale(1);
        clip-path: circle(150% at top left);
        background-color: var(--bim-ui_bg-contrast-50);
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      ::slotted(bim-button) {
        background-color: transparent;
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
      }

      /* A menu at the pointer looks like the central toolbar (Antonio, 16-10):
         its background, border, corner and shadow. */
      :host([data-at-pointer]) {
        background-color: var(--bim-toolbar--bgc, var(--bim-ui_bg-contrast-10));
        border: var(--bim-toolbar--border, 1px solid var(--bim-ui_bg-contrast-20));
        border-radius: var(--bim-toolbar--bdrs, var(--bim-ui_size-2xs));
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        padding: 0.15rem;
        gap: 0.1rem;
      }
    `,
  ];

  private _previousContainer: HTMLElement | null = null;
  private _placement?: Placement;

  /**
   * A point on the screen (client pixels) the menu opens at, instead of beside
   * the element it is in: where a right click happened.
   */
  point?: { x: number; y: number };

  /**
   * Opens a menu at the pointer of this event (a right click: `contextmenu`)
   * with these entries, the one menu of every app (no app draws its own). It
   * closes when an entry is chosen, on Escape or on a click outside.
   * @returns the menu, already shown.
   */
  static showAt(event: { clientX: number; clientY: number; preventDefault?: () => void }, items: ContextMenuItem[]) {
    event.preventDefault?.();
    if ([...ContextMenu.dialog.children].some((one) => one instanceof ContextMenu)) ContextMenu.removeMenus();
    const menu = document.createElement("bim-context-menu") as ContextMenu;
    menu.point = { x: event.clientX, y: event.clientY };
    menu.placement = "bottom-start";
    menu.setAttribute("data-at-pointer", "");
    for (const item of items) {
      if (item.separated && menu.childElementCount > 0) {
        const line = document.createElement("div");
        line.style.cssText = "height:1px; margin:0.15rem 0.25rem; background:var(--bim-ui_bg-contrast-20);";
        menu.append(line);
      }
      const button = document.createElement("bim-button") as HTMLElement & { label: string; icon?: string; disabled: boolean };
      button.label = item.label;
      if (item.icon) button.icon = item.icon;
      button.disabled = !!item.disabled;
      button.setAttribute("data-entry", item.label);
      button.style.setProperty("--bim-button--bgc", "transparent");
      button.style.setProperty("--bim-button--jc", "flex-start");
      button.addEventListener("click", () => {
        if (item.disabled) return;
        ContextMenu.removeMenus();
        item.action?.();
      });
      menu.append(button);
    }
    document.body.append(menu);
    menu.visible = true;
    return menu;
  }

  @property({ type: String, reflect: true })
  get placement() {
    return this._placement;
  }

  set placement(value: Placement | undefined) {
    this._placement = value;
    this.updatePosition();
  }

  static dialog = Component.create<HTMLDialogElement>(() => {
    const onClick = (event: PointerEvent) => {
      if (event.target === ContextMenu.dialog) ContextMenu.removeMenus();
    };
    return html` <dialog
      @click=${onClick}
      @cancel=${() => ContextMenu.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`;
  });

  private static _closing?: ReturnType<typeof setTimeout>;

  static removeMenus() {
    for (const menu of [...ContextMenu.dialog.children]) {
      if (!(menu instanceof ContextMenu)) continue;
      menu.remove()
      // One opened at the pointer belongs nowhere: it goes for good.
      if (menu.point) menu._previousContainer = null;
      menu.visible = false;
    }
    clearTimeout(ContextMenu._closing);
    ContextMenu._closing = setTimeout(() => {
      ContextMenu.dialog.close();
      ContextMenu.dialog.remove();
    }, 310); // at the transition max speed
  }

  private _visible = false;

  @property({ type: Boolean, reflect: true })
  get visible() {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    if (value) {
      // A menu opened while another was closing keeps the dialog it is in.
      clearTimeout(ContextMenu._closing);
      if (!ContextMenu.dialog.parentElement) {
        document.body.append(ContextMenu.dialog);
      }
      this._previousContainer = this.parentElement;
      ContextMenu.dialog.style.top = `${window.scrollY || document.documentElement.scrollTop}px`;
      this.style.setProperty("display", "flex");
      ContextMenu.dialog.append(this);
      ContextMenu.dialog.showModal();
      this.updatePosition();
      this.dispatchEvent(new Event("visible"));
    } else {
      setTimeout(() => {
        if (!this._previousContainer && this.point) {
          this.remove();
          return;
        }
        this._previousContainer?.append(this);
        this._previousContainer = null;
        this.style.setProperty("display", "none");
        this.dispatchEvent(new Event("hidden"));
      }, 310); // at the transition max speed
    }
  }

  /**
   * Asynchronously updates the position of the context menu relative to a target element.
   * If no target element is provided, it attempts to use the parent node as the target.
   * The position is calculated using the `computePosition` function from `@floating-ui/dom`,
   * which considers various adjustments like offset, inline positioning, flipping, and shifting
   * to ensure the context menu is properly placed relative to the target element.
   *
   * @param [target] - The target element relative to which the context menu should be positioned.
   *                                 If not provided, the parent node is used as the target.
   * @returns A promise that resolves once the position has been updated. This method
   *                          does not explicitly return a value but updates the context menu's style
   *                          properties to position it on the screen.
   */
  async updatePosition() {
    if (!(this.visible && this._previousContainer)) return;
    const placement: Placement = this.placement ?? "right";
    const point = this.point;
    const reference = point
      ? {
          getBoundingClientRect: () =>
            ({ x: point.x, y: point.y, top: point.y, left: point.x, bottom: point.y, right: point.x, width: 0, height: 0 }) as DOMRect,
        }
      : this._previousContainer;
    const position = await computePosition(reference, this, {
      placement,
      middleware: point
        ? [offset(2), flip(), shift({ padding: 5 })]
        : [offset(10), inline(), flip(), shift({ padding: 5 })],
    });
    const { x, y } = position;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.visible) {
      this.style.setProperty("width", "auto");
      this.style.setProperty("height", "auto");
    } else {
      this.style.setProperty("display", "none");
      this.style.setProperty("width", "0");
      this.style.setProperty("height", "0");
    }
  }

  protected render() {
    return html` <slot></slot> `;
  }
}
