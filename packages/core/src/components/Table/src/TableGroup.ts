import { LitElement, TemplateResult, css, html, nothing } from "lit";
import { property } from "lit/decorators.js";
import { Table } from "../index";
import { TableRow } from "./TableRow";
import { RowCreatedEventDetail, TableGroupData, TableRowData } from "./types";
import { TableChildren } from "./TableChildren";
import { ref } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";
import { styleMap } from "lit/directives/style-map.js";

export class TableGroup<T extends TableRowData> extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
      transform-origin: top center;
      transform: scaleY(0);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      transform-origin: center left;
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;

  @property({ type: Boolean, attribute: "children-hidden", reflect: true })
  childrenHidden = true;

  table: Table<T> | null = null

  /**
   * Zero-based depth of this group in the table tree. Set by the parent
   * TableChildren when the group is constructed. Used together with
   * {@link Table.expandedLevels} to decide whether the group initialises
   * with its children expanded.
   */
  depth = 0;

  data: TableGroupData<T> = { data: {} };

  // True between a disconnect and the microtask that finalises it. A DOM move
  // (repeat() reordering) is a disconnect + reconnect in the same task, so a
  // reconnect while pending means "moved": state and data must be kept.
  private _disconnectPending = false;

  // The id this group was indexed under in the table (data is reset after disconnect).
  private _registeredId?: string;

  private _visualSyncPending = false;
  private _visualKey = "";

  get rowElement() {
    const root = this.shadowRoot;
    if (!root) return null;
    // @ts-ignore
    return root.querySelector("bim-table-row") as TableRow<T>;
  }

  get childrenElement() {
    const root = this.shadowRoot;
    if (!root) return null;
    // @ts-ignore
    return root.querySelector("bim-table-children") as TableChildren<T>;
  }

  private get _isChildrenEmpty() {
    return !(this.data.children && this.data.children.length !== 0);
  }

  private get _initialChildrenHidden() {
    if (!this.table) return true;
    const { expandedLevels } = this.table;
    if (typeof expandedLevels === "number") return this.depth >= expandedLevels;
    return !this.table.expanded;
  }

  connectedCallback() {
    super.connectedCallback();
    // Idempotent (a Set), so a group that is moved or re-attached is subscribed exactly once.
    this._registeredId = this.data.id;
    this.table?._registerGroup(this, this._registeredId);
    if (this._disconnectPending) {
      // Moved inside the DOM: keep the current expand/collapse state and data.
      this._disconnectPending = false;
      return;
    }
    const { id } = this.data;
    const remembered = id != null ? this.table?._expansionMemory.get(id) : undefined;
    this.childrenHidden = remembered ?? this._initialChildrenHidden;
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.table?._unregisterGroup(this, this._registeredId);
    this._disconnectPending = true;
    queueMicrotask(() => {
      if (!this._disconnectPending) return;
      this._disconnectPending = false;
      this.data = { data: {} };
    });
  }

  /**
   * Called by {@link TableChildren} when this element is reused for a row with the
   * same `id`. Takes the new data object and refreshes the row cells and the nested
   * children (which reconcile their own groups with the same rule). The expand/collapse
   * state is kept.
   */
  reuse(data: TableGroupData<T>, depth: number) {
    this.depth = depth;
    if (this.data === data) return;
    this.data = data;
    this._visualSyncPending = true;
    this.requestUpdate();
    this.refreshRow();
    this.childrenElement?.requestUpdate();
  }

  /**
   * Rebuilds this group's row cells from the current data (no element is recreated and
   * the intersection state is kept). With `deep`, also the rows of every child group
   * currently rendered, at every depth. Batched through Lit's `requestUpdate`.
   */
  refreshRow(deep = false) {
    this.rowElement?.requestUpdate();
    if (!deep) return;
    for (const child of this.childrenElement?.groupElements ?? []) {
      child.refreshRow(true);
    }
  }

  /**
   * Re-applies the table-level expansion (`expandedLevels` first, then `expanded`), the same
   * rule used when the group first connects. Does nothing if already in that state. It
   * does not animate: the state is set and the caret/branches are synced directly, which
   * keeps bulk changes cheap (a single caret click still animates through toggleChildren).
   */
  applyExpansion() {
    const hidden = this._initialChildrenHidden;
    if (hidden === this.childrenHidden) return;
    this.childrenHidden = hidden;
    this._visualSyncPending = true;
  }

  private get _showChildren() {
    const hasComputedChildren = this.data.children?.some(c => c._isComputedGroup) ?? false;
    return !this._isChildrenEmpty && (!this.table?.groupsOnly || hasComputedChildren);
  }

  // After a reuse the imperative caret/branch transforms (set in firstUpdated and by the
  // toggle animations) can disagree with the state, e.g. a group that gained children.
  private _syncVisuals() {
    const hidden = this.childrenHidden;
    const apply = (el: Element | null | undefined, transform: string) => {
      if (!(el instanceof HTMLElement)) return;
      el.getAnimations().forEach((animation) => animation.cancel());
      el.style.setProperty("transform", transform);
    };
    apply(this.renderRoot.querySelector(".caret"), `translateY(-50%) rotate(${hidden ? 0 : 90}deg)`);
    apply(this.renderRoot.querySelector("bim-table-row .branch-vertical"), `scaleY(${hidden ? 0 : 1})`);
    apply(this.renderRoot.querySelector("bim-table-row .branch-horizontal"), `scaleX(${hidden ? 1 : 0})`);
    apply(
      this.renderRoot.querySelector("bim-table-children")?.querySelector(".branch-vertical"),
      `scaleY(${hidden ? 0 : 1})`,
    );
  }

  protected updated() {
    const key = `${this._showChildren}|${this.childrenHidden}`;
    if (this._visualSyncPending && key !== this._visualKey) this._syncVisuals();
    this._visualSyncPending = false;
    this._visualKey = key;
  }

  toggleChildren(force?: boolean) {
    this.childrenHidden =
      typeof force === "undefined" ? !this.childrenHidden : !force;

    // Remember the user's choice by id (computed groups are not in the consumer data,
    // so their derived ids would be pruned on every data assignment: not remembered).
    const { id, _isComputedGroup } = this.data;
    if (id != null && !_isComputedGroup) {
      this.table?._expansionMemory.set(id, this.childrenHidden);
    }

    this.animateTableChildren(true); // set it to false to deactivate the animations
  }

  private animateTableChildren(active = true) {
    if (!active) {
      requestAnimationFrame(() => {
        const caret = this.renderRoot.querySelector(".caret") as HTMLElement;
        const rowVerticalBranch = this.renderRoot.querySelector(
          ".branch-vertical",
        ) as HTMLElement;
        const childrenVerticalBranch = this.renderRoot
          .querySelector("bim-table-children")
          ?.querySelector(".branch-vertical") as HTMLElement;

        caret.style.setProperty(
          "transform",
          `translateY(-50%) rotate(${this.childrenHidden ? "0" : "90"}deg)`,
        );
        rowVerticalBranch.style.setProperty(
          "transform",
          `scaleY(${this.childrenHidden ? "0" : "1"})`,
        );
        childrenVerticalBranch?.style.setProperty(
          "transform",
          `scaleY(${this.childrenHidden ? "0" : "1"})`,
        );
      });
      return;
    }

    // Setting editable animation timings
    const elementEnteringDuration = 500;
    const elementEnteringDelay = 0;
    const strokesDuration = 200;
    const crateDuration = 350;

    requestAnimationFrame(() => {
      // Targeting Elements
      const children = this.renderRoot.querySelector("bim-table-children");
      const caret = this.renderRoot.querySelector(".caret") as HTMLElement;
      const rowVerticalBranch = this.renderRoot.querySelector(
        ".branch-vertical",
      ) as HTMLElement;

      const childrenVerticalBranch = this.renderRoot
        .querySelector("bim-table-children")
        ?.querySelector(".branch-vertical") as HTMLElement;

      // Animation functions
      const childrenAnimFunc = () => {
        const extraChildren =
          children?.renderRoot?.querySelectorAll("bim-table-group");

        extraChildren?.forEach((child, index) => {
          child.style.setProperty("opacity", "0");
          child.style.setProperty("left", "-30px");

          const childAnimKeyframes = [
            {
              opacity: "0",
              left: "-30px",
            },
            {
              opacity: "1",
              left: "0",
            },
          ];

          child.animate(childAnimKeyframes, {
            duration: elementEnteringDuration / 2,
            delay: 50 + index * elementEnteringDelay,
            easing: "cubic-bezier(0.65, 0.05, 0.36, 1)",
            fill: "forwards",
          });
        });
      };

      const caretAnimFunc = () => {
        const caretAnimKeyframes = [
          { transform: "translateY(-50%) rotate(90deg)" },
          { transform: "translateY(-50%) rotate(0deg)" },
        ];

        caret?.animate(caretAnimKeyframes, {
          duration: crateDuration,
          easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          fill: "forwards",
          direction: this.childrenHidden ? "normal" : "reverse",
        });
      };

      const rowVerticalBranchAnimFunc = () => {
        const verticalBranchAnimKeyframes = [
          { transform: "scaleY(1)" },
          { transform: "scaleY(0)" },
        ];

        rowVerticalBranch?.animate(verticalBranchAnimKeyframes, {
          duration: strokesDuration,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          delay: elementEnteringDelay,
          fill: "forwards",
          direction: this.childrenHidden ? "normal" : "reverse",
        });
      };

      const rowHorizontalBranchesExceptionAnimFunc = () => {
        const neededBranch = this.renderRoot
          .querySelector("bim-table-row")
          ?.querySelector(".branch-horizontal") as HTMLElement;

        if (neededBranch) {
          neededBranch.style.setProperty("transform-origin", "center right");
          const exceptionalBranchAnimKeyframes = [
            { transform: "scaleX(0)" },
            { transform: "scaleX(1)" },
          ];

          neededBranch.animate(exceptionalBranchAnimKeyframes, {
            duration: strokesDuration,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            fill: "forwards",
            direction: this.childrenHidden ? "normal" : "reverse",
          });
        }
      };

      const childrenVerticalBranchAnimFunc = () => {
        const childrenVerticalBranchAnimKeyframes = [
          { transform: "scaleY(0)" },
          { transform: "scaleY(1)" },
        ];

        childrenVerticalBranch?.animate(childrenVerticalBranchAnimKeyframes, {
          duration: strokesDuration * 1.2,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
          delay: (elementEnteringDelay + strokesDuration) * 0.7,
        });
      };

      // Calling the animation functions
      childrenAnimFunc();
      caretAnimFunc();
      rowVerticalBranchAnimFunc();
      rowHorizontalBranchesExceptionAnimFunc();
      childrenVerticalBranchAnimFunc();
    });
  }

  protected firstUpdated() {
    const caret = this.renderRoot.querySelectorAll(".caret");

    caret.forEach((child) => {
      if (!this.childrenHidden) {
        const newChild = child as HTMLElement;
        newChild.style.setProperty(
          "transform",
          "translateY(-50%) rotate(90deg)",
        );

        const horizontalBranch = child.parentElement?.querySelector(
          ".branch-horizontal",
        ) as HTMLElement;
        if (horizontalBranch)
          horizontalBranch.style.setProperty("transform", "scaleX(0)");

        const verticalBranch =
          child.parentElement?.parentElement?.querySelectorAll(
            ".branch-vertical",
          );
        verticalBranch?.forEach((branch) => {
          const newBranch = branch as HTMLElement;
          newBranch.style.setProperty("transform", "scaleY(1)");
        });
      }
    });
  }

  protected render() {
    if (!this.table) return html`${nothing}`;

    const indentation = this.table.getGroupIndentation(this.data) ?? 0;

    let horizontalBranchTemplate: TemplateResult | undefined
    if (!this.table.noIndentation) {
      const styles = { left: `calc(${indentation - 1} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows ? 2.05 : 0.5625}rem)` }
      horizontalBranchTemplate = html`<div style=${styleMap(styles)} class="branch branch-horizontal"></div>`
    }

    const verticalBranchTemplate = html`
      ${!this.table.noIndentation
        ? html`
            <style>
              .branch-vertical {
                left: calc(${indentation} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows ? 1.9375 : 0.5625}rem);
              }
            </style>
            <div class="branch branch-vertical"></div>
          `
        : null}
    `;

    let caretTemplate: TemplateResult | undefined
    if (!this.table.noIndentation) {
      const toggleCaret = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );

      toggleCaret.setAttribute("height", "9.9");
      toggleCaret.setAttribute("width", "7.5");
      toggleCaret.setAttribute("viewBox", "0 0 4.6666672 7.7");

      if (this.table.noCarets) {
        const childrenToggleCaretDot = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );

        childrenToggleCaretDot.setAttribute("cx", "2.3333336");
        childrenToggleCaretDot.setAttribute("cy", "3.85");
        childrenToggleCaretDot.setAttribute("r", "2.5");

        toggleCaret.append(childrenToggleCaretDot);
      } else {
        const childrenHiddenCaretPath = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );

        childrenHiddenCaretPath.setAttribute(
          "d",
          "m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z",
        );

        toggleCaret.append(childrenHiddenCaretPath);
      }

      const styles = {
        left: `calc(${indentation} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows ? 1.5 : 0.125}rem)`,
        cursor: `${this.table.noCarets ? "unset" : "pointer"}`
      }

      const onClick = (e: Event) => {
        if (this.table?.noCarets) return
        e.stopPropagation()
        this.toggleChildren()
      }

      caretTemplate = html`<div @click=${onClick} style=${styleMap(styles)} class="caret">${toggleCaret}</div>`
    }

    const showChildren = this._showChildren;

    let childrenTemplate: TemplateResult | undefined
    if (showChildren && !this.childrenHidden) {
      const onChildrenCreated = (e?: Element) => {
        if (!e) return
        const children = e as TableChildren<T>
        children.table = this.table;
        children.group = this;
      }

      childrenTemplate = html`
        <bim-table-children ${ref(onChildrenCreated)}>${verticalBranchTemplate}</bim-table-children>
      `
    }

    const onRowCreated = (e?: Element) => {
      if (!e) return
      const row = e as TableRow<T>
      row.table = this.table;
      row.group = this;
      this.table?.dispatchEvent(
        new CustomEvent<RowCreatedEventDetail<T>>("rowcreated", {
          detail: { row },
        }),
      );
    }

    return html`
      <div class="parent">
        <bim-table-row ${ref(onRowCreated)}>
          ${when(showChildren, () => verticalBranchTemplate)}
          ${when(indentation !== 0, () => horizontalBranchTemplate)}
          ${when(!this.table.noIndentation && showChildren, () => caretTemplate)}
        </bim-table-row>
        ${childrenTemplate}
      </div>
    `;
  }
}
