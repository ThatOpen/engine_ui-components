import { css, html } from "lit";
import { UIComponent } from "../../UIComponent";
import { ToolbarSection } from "../ToolbarSection";
import { Button } from "../Button";
import { UIManager } from "../../UIManager";
import { HasName } from "../../types";

export class Toolbar extends UIComponent implements HasName {
  static styles = css`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-4xs);
    }

    :host([active]) {
      display: block;
    }

    :host(:not([active])) {
      display: none;
    }

    .parent {
      display: flex;
      align-items: center;
    }

    :host([vertical]) .parent {
      flex-direction: column;
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

  static properties = {
    label: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    labelsHidden: { type: Boolean, attribute: "labels-hidden", reflect: true },
    vertical: { type: Boolean, reflect: true },
    gridArea: { type: String, attribute: false },
    active: { type: Boolean, reflect: true },
  };

  declare label: string;
  declare icon?: string;
  declare labelsHidden: boolean;

  private _managerID = UIManager.newRandomId();

  private _active = true;

  set active(value: boolean) {
    this._active = value;
    this.activationButton.active = value;
    if (value) {
      const parentChildren = this.parentElement?.children ?? [];
      for (const child of parentChildren) {
        if (child instanceof Toolbar && child !== this) {
          child.active = false;
        }
      }
    }
  }

  get active() {
    return this._active;
  }

  private _vertical = false;

  set vertical(value: boolean) {
    this._vertical = value;
    this.updateSections();
  }

  get vertical() {
    return this._vertical;
  }

  private _gridArea: string = "";

  get gridArea() {
    return this._gridArea;
  }

  set gridArea(value: string) {
    this._gridArea = value;
    this.style.gridArea = `toolbar-${value}`;
  }

  activationButton: Button = document.createElement("bim-button");

  constructor() {
    super();
    this.setAttribute("data-ui-manager-id", this._managerID);
    this.labelsHidden = false;
    this.active = false;
    this.label = "Toolbar";
    this.setActivationButton();
  }

  private setActivationButton() {
    this.activationButton.draggable = UIManager.config.draggableToolbars;
    this.activationButton.addEventListener(
      "click",
      () => (this.active = !this.active),
    );
    this.activationButton.setAttribute("data-ui-manager-id", this._managerID);
    this.activationButton.addEventListener("dragstart", (e) => {
      const id = this.getAttribute("data-ui-manager-id");
      if (e.dataTransfer && id) {
        e.dataTransfer.setData("id", id);
        e.dataTransfer.effectAllowed = "move";
      }
      const containers = document.querySelectorAll("bim-toolbars-container");
      for (const container of containers) {
        if (container === this.parentElement) continue;
        container.dropping = true;
      }
    });
    this.activationButton.addEventListener("dragend", (e) => {
      if (e.dataTransfer) e.dataTransfer.clearData();
      const containers = document.querySelectorAll("bim-toolbars-container");
      for (const container of containers) {
        container.dropping = false;
      }
    });
  }

  private updateSections() {
    const children = this.children;
    for (const child of children) {
      if (child instanceof ToolbarSection) {
        child.labelHidden =
          this.vertical && !UIManager.config.sectionLabelOnVerticalToolbar;
        child.vertical = this.vertical;
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.activationButton.remove();
  }

  render() {
    this.activationButton.label = this.label;
    this.activationButton.active = this.active;
    this.activationButton.icon = this.icon;
    return html`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `;
  }
}
