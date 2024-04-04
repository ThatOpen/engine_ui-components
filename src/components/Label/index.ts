import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Label extends UIComponent {
  static styles = css`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    label {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.5)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;

  static properties = {
    label: { type: String, reflect: true },
    img: { type: String, reflect: true },
    labelHidden: { type: Boolean, attribute: "label-hidden", reflect: true },
    icon: { type: String, reflect: true },
    iconHidden: { type: Boolean, attribute: "icon-hidden", reflect: true },
    vertical: { type: Boolean, reflect: true },
  };

  declare icon?: string;
  declare img?: string;
  declare iconHidden: boolean;
  declare label?: string;
  declare labelHidden: boolean;
  declare vertical: boolean;

  connectedCallback() {
    super.connectedCallback();
    if (this.iconHidden === undefined) this.iconHidden = false;
    if (this.labelHidden === undefined) this.labelHidden = false;
    if (this.vertical === undefined) this.vertical = false;
  }

  render() {
    return html`
      <div class="parent" title=${this.label}>
        ${this.img
          ? html`<img .src=${this.img} .alt=${this.label || ""} />`
          : null}
        ${!this.iconHidden && this.icon
          ? html`<bim-icon .icon=${this.icon}></bim-icon>`
          : null}
        ${!this.labelHidden && this.label
          ? html`<label>${this.label}</label>`
          : null}
      </div>
    `;
  }
}
