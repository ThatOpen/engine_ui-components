import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ToolbarSection } from "./Section";
import { Manager } from "../../../core/Manager";

export class Toolbar extends LitElement {
  static styles = css`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: Boolean, attribute: "labels-hidden", reflect: true })
  labelsHidden = false;

  private _vertical = false;

  @property({ type: Boolean, reflect: true })
  set vertical(value: boolean) {
    this._vertical = value;
    this.updateSections();
  }

  get vertical() {
    return this._vertical;
  }

  private _managerID = Manager.newRandomId();

  private _hidden = false;

  set hidden(value: boolean) {
    this._hidden = value;
    this.dispatchEvent(new Event("hiddenchange"));
  }

  get hidden() {
    return this._hidden;
  }

  // private setActivationButton() {
  //   this.activationButton.draggable = Manager.config.draggableToolbars;
  //   this.activationButton.addEventListener(
  //     "click",
  //     () => (this.hidden = !this.hidden),
  //   );
  //   this.activationButton.setAttribute("data-ui-manager-id", this._managerID);
  //   this.activationButton.addEventListener("dragstart", (e) => {
  //     const id = this.getAttribute("data-ui-manager-id");
  //     if (e.dataTransfer && id) {
  //       e.dataTransfer.setData("id", id);
  //       e.dataTransfer.effectAllowed = "move";
  //     }
  //     const containers = document.querySelectorAll("bim-toolbars-container");
  //     for (const container of containers) {
  //       if (container === this.parentElement) continue;
  //       container.dropping = true;
  //     }
  //   });
  //   this.activationButton.addEventListener("dragend", (e) => {
  //     if (e.dataTransfer) e.dataTransfer.clearData();
  //     const containers = document.querySelectorAll("bim-toolbars-container");
  //     for (const container of containers) {
  //       container.dropping = false;
  //     }
  //   });
  // }

  private updateSections() {
    const children = this.children;
    for (const child of children) {
      if (child instanceof ToolbarSection) {
        child.labelHidden =
          this.vertical && !Manager.config.sectionLabelOnVerticalToolbar;
        child.vertical = this.vertical;
      }
    }
  }

  firstUpdated() {
    this.setAttribute("data-ui-manager-id", this._managerID);
  }

  render() {
    return html`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `;
  }
}
