import { LitElement, css, html, render } from "lit";
import { property } from "lit/decorators.js";
import { Table } from "../index";
import { TableRow } from "./TableRow";
import { RowCreatedEventDetail, TableGroupData, TableRowData } from "./types";
import { TableChildren } from "./TableChildren";

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
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;

  private _children?: TableChildren<T>;

  data: TableGroupData<T> = { data: {} };

  @property({ type: Boolean, attribute: "children-hidden", reflect: true })
  childrenHidden = true;

  table = this.closest<Table<T>>("bim-table");

  connectedCallback() {
    super.connectedCallback();
    if (this.table && this.table.expanded) {
      this.childrenHidden = false;
    } else {
      this.childrenHidden = true;
    }
  }

  toggleChildren(force?: boolean, recursive = false) {
    if (!this._children) return;
    this.childrenHidden =
      typeof force === "undefined" ? !this.childrenHidden : !force;
    if (recursive) this._children.toggleGroups(force, recursive);

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
    const elementEnteringDuration = 900;
    const elementEnteringDelay = 50;
    const strokesDuration = 350;
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
          children?.renderRoot.querySelectorAll("bim-table-group");

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
    if (!this.table) throw new Error("TableGroup: parent table wasn't found!");

    const indentation = this.table.getGroupIndentation(this.data) ?? 0;

    const verticalBranchTemplate = html`
      ${!this.table.noIndentation
        ? html`
            <style>
              .branch-vertical {
                left: ${indentation +
                (this.table.selectableRows ? 1.9375 : 0.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `
        : null}
    `;

    const verticalBranchRow = document.createDocumentFragment();
    render(verticalBranchTemplate, verticalBranchRow);

    let horizontalBranch: HTMLDivElement | null = null;
    if (!this.table.noIndentation) {
      horizontalBranch = document.createElement("div");
      horizontalBranch.classList.add("branch", "branch-horizontal");
      horizontalBranch.style.left = `${indentation - 1 + (this.table.selectableRows ? 2.05 : 0.5625)}rem`;
    }

    let caret: HTMLDivElement | null = null;
    if (!this.table.noIndentation) {
      const childrenToggleCaret = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );

      childrenToggleCaret.setAttribute("height", "9.9");
      childrenToggleCaret.setAttribute("width", "7.5");
      childrenToggleCaret.setAttribute("viewBox", "0 0 4.6666672 7.7");

      const childrenHiddenCaretPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );

      childrenHiddenCaretPath.setAttribute(
        "d",
        "m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z",
      );

      childrenToggleCaret.append(childrenHiddenCaretPath);

      caret = document.createElement("div");
      caret.addEventListener("click", (e: Event) => {
        e.stopPropagation();
        this.toggleChildren();
      });
      caret.classList.add("caret");
      caret.style.left = `${(this.table.selectableRows ? 1.5 : 0.125) + indentation}rem`;
      caret.append(childrenToggleCaret);
    }

    // @ts-ignore
    const row = document.createElement("bim-table-row") as TableRow<T>;
    if (this.data.children) row.append(verticalBranchRow);

    row.table = this.table;
    row.data = this.data.data;
    this.table.dispatchEvent(
      new CustomEvent<RowCreatedEventDetail<T>>("rowcreated", {
        detail: { row },
      }),
    );

    if (caret && this.data.children) row.append(caret);
    if (indentation !== 0 && horizontalBranch) row.append(horizontalBranch);

    let children: TableChildren<T> | undefined;
    if (this.data.children) {
      // @ts-ignore
      children = document.createElement(
        "bim-table-children",
      ) as TableChildren<T>;
      this._children = children;
      children.table = this.table;
      children.data = this.data.children;
      const verticalBranchChildren = document.createDocumentFragment();
      render(verticalBranchTemplate, verticalBranchChildren);
      children.append(verticalBranchChildren);

      if (this.childrenHidden) children.setAttribute("hidden", "");
    }

    return html`
      <div class="parent">${row} ${!this.childrenHidden ? children : null}</div>
    `;
  }
}
