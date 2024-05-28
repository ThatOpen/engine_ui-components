import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Table } from "../index";
import { RowCreatedEventDetail, TableGroupData } from "./types";
import { TableChildren } from "./TableChildren";

export class TableGroup extends LitElement {
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
      top: 1.125rem;
      bottom: 1.125rem;
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

  private _children?: TableChildren;

  // @property({ type: Object, attribute: false })
  data: TableGroupData = { data: {} };

  @property({ type: Boolean, attribute: "children-hidden", reflect: true })
  childrenHidden = true;

  table = this.closest<Table>("bim-table");

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
    const indentation = this.table?.getGroupIndentation(this.data) ?? 0;

    // const verticalBranch = document.createElement("div");
    // verticalBranch.classList.add("branch", "branch-vertical");
    // const verticalBranchStyle = document.createElement("style");
    // verticalBranchStyle.textContent = `
    //   .branch-vertical {
    //     left: ${indentation + 0.5625}rem;
    //   }
    // `;
    // verticalBranch.append(verticalBranchStyle);

    const verticalBranchTemplate = html`
      <style>
        .branch-vertical {
          left: ${indentation + 0.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `;

    const horizontalBranch = document.createElement("div");
    horizontalBranch.classList.add("branch", "branch-horizontal");
    horizontalBranch.style.left = `${indentation - 1 + 0.5625}rem`;

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

    const caret = document.createElement("div");
    caret.addEventListener("click", () => this.toggleChildren());
    caret.classList.add("caret");
    caret.style.left = `${0.125 + indentation}rem`;
    if (this.childrenHidden) {
      caret.append(childrenHiddenCaret);
    } else {
      caret.append(childrenVisibleCaret);
    }

    const row = document.createElement("bim-table-row");
    row.table = this.table;
    row.data = this.data.data;
    this.table?.dispatchEvent(
      new CustomEvent<RowCreatedEventDetail>("rowcreated", { detail: { row } }),
    );

    if (this.data.children) row.append(caret);
    if (indentation !== 0 && (!this.data.children || this.childrenHidden))
      row.append(horizontalBranch);

    let children: TableChildren | undefined;
    if (this.data.children) {
      children = document.createElement("bim-table-children");
      this._children = children;
      children.table = this.table;
      children.data = this.data.children;
    }

    return html`
      <div class="parent">
        ${this.data.children && !this.childrenHidden
          ? verticalBranchTemplate
          : null}
        ${row} ${!this.childrenHidden ? children : null}
      </div>
    `;
  }
}
