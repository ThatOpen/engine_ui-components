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
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
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
      const childrenHiddenCaret = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );

      childrenHiddenCaret.setAttribute("height", "9.5");
      childrenHiddenCaret.setAttribute("width", "7.5");
      childrenHiddenCaret.setAttribute("viewBox", "0 0 4.6666672 7.3333333");

      const childrenHiddenCaretPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );

      childrenHiddenCaretPath.setAttribute(
        "d",
        "m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z",
      );

      childrenHiddenCaret.append(childrenHiddenCaretPath);

      const childrenVisibleCaret = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );

      childrenVisibleCaret.setAttribute("height", "6.5");
      childrenVisibleCaret.setAttribute("width", "9.5");
      childrenVisibleCaret.setAttribute("viewBox", "0 0 5.9111118 5.0175439");

      const childrenVisibleCaretPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );

      childrenVisibleCaretPath.setAttribute(
        "d",
        "M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z",
      );

      childrenVisibleCaret.append(childrenVisibleCaretPath);

      caret = document.createElement("div");
      caret.addEventListener("click", (e: Event) => {
        e.stopPropagation();
        this.toggleChildren();
      });
      caret.classList.add("caret");
      caret.style.left = `${(this.table.selectableRows ? 1.5 : 0.125) + indentation}rem`;
      if (this.childrenHidden) {
        caret.append(childrenHiddenCaret);
      } else {
        caret.append(childrenVisibleCaret);
      }
    }

    // @ts-ignore
    const row = document.createElement("bim-table-row") as TableRow<T>;
    if (this.data.children && !this.childrenHidden)
      row.append(verticalBranchRow);
    row.table = this.table;
    row.data = this.data.data;
    this.table.dispatchEvent(
      new CustomEvent<RowCreatedEventDetail<T>>("rowcreated", {
        detail: { row },
      }),
    );

    if (caret && this.data.children) row.append(caret);
    if (
      indentation !== 0 &&
      (!this.data.children || this.childrenHidden) &&
      horizontalBranch
    )
      row.append(horizontalBranch);

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
    }

    return html`
      <div class="parent">${row} ${!this.childrenHidden ? children : null}</div>
    `;
  }
}
