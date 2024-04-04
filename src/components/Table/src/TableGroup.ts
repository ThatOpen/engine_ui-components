import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { UIComponent } from "../../../core/UIComponent";
import { Table } from "../index";
import { TableRow, TableRowData } from "./TableRow";
import { TableChildren } from "./TableChildren";

export interface TableGroupData {
  data: TableRowData;
  children?: TableGroupData[];
  id?: string;
  childrenHidden?: boolean;
}

export class TableGroup extends UIComponent {
  static styles = css`
    :host {
      position: relative;
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      top: 1rem;
      bottom: 1rem;
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

  static properties = {
    group: { type: Object, attribute: false },
    childrenHidden: {
      type: Boolean,
      attribute: "children-hidden",
      reflect: true,
    },
  };

  private _row = createRef<TableRow>();
  private _children = createRef<TableChildren>();
  private _branch = createRef<HTMLDivElement>();

  declare group: TableGroupData;
  declare childrenHidden: boolean;
  table = this.closest<Table>("bim-table");

  constructor() {
    super();
    this.group = { data: {} };
    this.childrenHidden = false;
  }

  firstUpdated() {
    const { value: row } = this._row;
    if (row) {
      row.data = this.group.data;
      row.table = this.table;
    }

    const { value: children } = this._children;
    if (children) {
      children.groups = this.group.children;
      children.table = this.table;
    }
  }

  render() {
    const indentation = this.table?.getGroupIndentation(this.group) ?? 0;

    const childrenTemplate = html`
      <bim-table-children
        ${ref(this._children)}
        .hidden=${this.childrenHidden}
      ></bim-table-children>
    `;

    const verticalBranchTemplate = html`
      <style>
        .branch-vertical {
          left: ${indentation + 0.5625}rem;
        }
      </style>
      <div class="branch branch-vertical" ${ref(this._branch)}></div>
    `;

    const horizontalBranchTemplate = html`
      <style>
        .branch-horizontal {
          left: ${indentation - 1 + 0.5625}rem;
        }
      </style>
      <div class="branch branch-horizontal"></div>
    `;

    const childrenHiddenCaret = html`
      <svg
        height="9.5"
        width="7.5"
        viewBox="0 0 4.6666672 7.3333333"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"
        />
      </svg>
    `;

    const childrenVisibleCaret = html`
      <svg
        height="6.5"
        width="9.5"
        viewBox="0 0 5.9111118 5.0175439"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"
        />
      </svg>
    `;

    const caretTemplate = html`
      <style>
        .caret {
          left: ${0.125 + indentation}rem;
        }
      </style>
      <div
        class="caret"
        @click=${() => (this.childrenHidden = !this.childrenHidden)}
      >
        ${this.childrenHidden ? childrenHiddenCaret : childrenVisibleCaret}
      </div>
    `;

    return html`
      ${this.group.children && !this.childrenHidden
        ? verticalBranchTemplate
        : null}
      <bim-table-row ${ref(this._row)}>
        ${this.group.children ? caretTemplate : null}
        ${indentation === 0 || (this.group.children && !this.childrenHidden)
          ? null
          : horizontalBranchTemplate}
      </bim-table-row>
      ${this.group.children ? childrenTemplate : null}
    `;
  }
}
