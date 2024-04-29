import { css, html } from "lit";
import { Component } from "../../core/Component";
import { Toolbar } from "../Toolbar";
import { Button } from "../Button";
import { styles } from "../../core/Manager/src/styles";

export class ToolbarsContainer extends Component {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        justify-self: var(--bim-toolbars-container--js);
        align-self: var(--bim-toolbars-container--as);
      }

      :host([dropping]) {
        justify-self: auto;
        align-self: auto;
      }

      /* Parent */

      .parent {
        display: flex;
        pointer-events: auto;
      }

      :host([floating]) .parent {
        align-items: center;
      }

      :host([vertical]) .parent {
        height: 100%;
        flex-direction: column;
      }

      :host(:not([vertical])) .parent {
        flex-direction: column;
      }

      /* Tabs container */

      .tabs {
        --bim-label--fz: var(--bim-ui_size-xs);
        --bim-label--c: var(--bim-ui_bg-contrast-100);
        --bim-button--bdrs: 0;
        --bim-button--bgc: var(--bim-ui_bg-base);
        display: flex;
        width: fit-content;
      }

      :host([tabs-hidden]) .tabs {
        display: none;
      }

      :host([floating]) .tabs {
        overflow: hidden;
        border-top-left-radius: var(
          --bim-toolbars-container--bdrs,
          var(--bim-ui_size-4xs)
        );
        border-top-right-radius: var(
          --bim-toolbars-container--bdrs,
          var(--bim-ui_size-4xs)
        );
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        outline: var(--bim-toolbars-container--olw) solid
          var(--bim-toolbars-container--olc);
      }

      :host([vertical]) .tabs {
        display: none;
        writing-mode: tb;
      }

      .tabs bim-button {
        font-weight: 600;
        height: var(--bim-ui_size-9xl);
      }

      .tabs bim-button:hover,
      .tabs bim-button[active] {
        --bim-label--c: white;
        background-color: var(--bim-ui_color-main);
      }

      /* Toolbars container */

      .toolbars {
        overflow: auto;
        display: flex;
        flex: 1;
        background-color: var(
          --bim-toolbars-container--bgc,
          var(--bim-ui_bg-base)
        );
      }

      :host([floating]:not([vertical])) .toolbars {
        width: 120%;
        justify-content: center;
      }

      :host([floating]) .toolbars {
        outline: var(--bim-toolbars-container--olw) solid
          var(--bim-toolbars-container--olc);
        border-radius: var(
          --bim-toolbars-container--bdrs,
          var(--bim-ui_size-4xs)
        );
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      }

      :host([floating][vertical]) .toolbars {
        border-radius: var(
          --bim-toolbars-container--bdrs,
          0 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs)
        );
      }

      :host([vertical]) .toolbars {
        flex-direction: column;
      }

      :host([tabs]) .toolbars {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      :host(:not([tabs-hidden]):not([floating])) .toolbars {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      /* More toolbars button */
      .parent > bim-button {
        --bim-button--bgc: var(--bim-ui_bg-base);
        --bim-button--bdrs: var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0 0;
        --bim-button--olw: 1px;
        --bim-button--olc: var(--bim-ui_bg-contrast-20);
        width: 100%;
      }

      :host(:not([floating])) .parent > bim-button {
        --bim-button--bdrs: 0;
      }

      /* Drop element */

      .drop-element {
        box-sizing: border-box;
        min-width: 2.75rem;
        width: 100%;
        min-height: 2.75rem;
        height: 100%;
        background-color: #6528d70d;
        border: 2px dashed var(--bim-ui_color-main);
        border-radius: 1rem;
        z-index: 1000;
      }
    `,
  ];

  static properties = {
    floating: { type: Boolean, reflect: true },
    vertical: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    tabsHidden: { type: Boolean, attribute: "tabs-hidden", reflect: true },
    dropping: { type: Boolean, reflect: true },
  };

  declare floating: boolean; // default: false
  declare tabsHidden: boolean; // default: false
  declare dropping: boolean; // default: false

  private _vertical = false;

  set vertical(value: boolean) {
    this._vertical = value;
    this.updateToolbars();
  }

  get vertical() {
    return this._vertical;
  }

  private updateToolbars() {
    let hasActivePanel = false;
    for (const child of this.children) {
      if (!(child instanceof Toolbar)) continue;
      if (hasActivePanel) {
        child.active = false;
      } else {
        hasActivePanel = child.active;
      }
      this._activationButtons.push(child.activationButton);
      child.vertical = this.vertical;
    }
    this.requestUpdate();
  }

  private _activationButtons: Button[] = [];

  private onDragOver = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.effectAllowed = "move";
  };

  private onDrop = (e: DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer?.getData("id");
    if (!id) return;
    const toolbar = document.querySelector(
      `bim-toolbar[data-ui-manager-id='${id}']`,
    );
    if (!toolbar) return;
    const toolbarIsChild = [...this.children].includes(toolbar);
    if (toolbarIsChild) return;
    this.append(toolbar);
  };

  constructor() {
    super();
    this.addEventListener("dragover", this.onDragOver);
    this.addEventListener("drop", this.onDrop);
  }

  render() {
    const tabsTemplate = html`<div class="tabs">
      ${this._activationButtons}
    </div>`;
    const toolbarsBtnTemplate = html`<bim-button style="flex-grow: 0;"
      >${this._activationButtons}</bim-button
    >`;
    const dropPlaceTemplate = html`<div class="drop-element"></div>`;

    return html`
      <div class="parent">
        ${!this.vertical ? tabsTemplate : null}
        ${this.vertical ? toolbarsBtnTemplate : null}
        ${this.dropping
          ? dropPlaceTemplate
          : html`
              <div class="toolbars">
                <slot @slotchange=${this.updateToolbars}></slot>
              </div>
            `}
      </div>
    `;
  }
}
