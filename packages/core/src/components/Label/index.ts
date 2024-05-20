import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { convertString } from "../../core/utils";

// HTML tag: bim-label
export class Label extends LitElement {
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

  /**
   * Represents the text label of the component. This is the primary content displayed by the component.
   * When the `label` property changes, the displayed text updates to reflect the new value. If the label is hidden (controlled by `labelHidden`), changing this property will not affect the visibility of the label.
   * @type {String}
   * @default undefined
   * @example <bim-label label="Example Label"></bim-label>
   * @example
   * const labelComponent = document.createElement('bim-label');
   * labelComponent.label = 'Example Label';
   * document.body.appendChild(labelComponent);
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * Specifies the image URL for the component. When set, an `<img>` element is rendered within the component.
   * Changing this property updates the source of the image. If the property is not set or removed, the image will not be displayed.
   * @type {String}
   * @default undefined
   * @example <bim-label img="path/to/image.png"></bim-label>
   * @example
   * const labelComponent = document.createElement('bim-label');
   * labelComponent.img = 'path/to/image.png';
   * document.body.appendChild(labelComponent);
   */
  @property({ type: String, reflect: true })
  img?: string;

  /**
   * Controls the visibility of the label text. When `true`, the label text is not rendered to the user.
   * Changing this property to `true` hides the label text if it was previously visible. Setting it to `false` will show the label text if it is defined.
   * @type {Boolean}
   * @default false
   * @example <bim-label label-hidden></bim-label>
   * @example
   * const labelComponent = document.createElement('bim-label');
   * labelComponent.labelHidden = true;
   * document.body.appendChild(labelComponent);
   */
  @property({ type: Boolean, attribute: "label-hidden", reflect: true })
  labelHidden: boolean;

  /**
   * Specifies the icon to be used in the component. This property is intended for displaying an icon alongside the label or image.
   * When the `icon` property changes, the displayed icon updates accordingly. If the icon is hidden (controlled by `iconHidden`), changing this property will not affect the visibility of the icon.
   * Note: The actual rendering of the icon is managed by a nested `<bim-icon>` component in the shadow DOM.
   * @type {String}
   * @default undefined
   * @example <bim-label icon="example-icon"></bim-label>
   * @example
   * const labelComponent = document.createElement('bim-label');
   * labelComponent.icon = 'example-icon';
   * document.body.appendChild(labelComponent);
   */
  @property({ type: String, reflect: true })
  icon?: string;

  /**
   * Controls the visibility of the icon. When `true`, the icon is not rendered to the user.
   * Changing this property to `true` hides the icon if it was previously visible. Setting it to `false` will show the icon if it is defined.
   * Note: This does not affect the visibility of the label or image, only the icon.
   * @type {Boolean}
   * @default false
   * @example <bim-label icon-hidden></bim-label>
   * @example
   * const labelComponent = document.createElement('bim-label');
   * labelComponent.iconHidden = true;
   * document.body.appendChild(labelComponent);
   */
  @property({ type: Boolean, attribute: "icon-hidden", reflect: true })
  iconHidden: boolean;

  /**
   * Determines the orientation of the component. When `true`, the component's contents (label, image, and icon) are stacked vertically.
   * Changing this property affects the layout of the component, switching between a horizontal and vertical arrangement of its contents.
   * @type {Boolean}
   * @default false
   * @example <bim-label vertical></bim-label>
   * @example
   * const labelComponent = document.createElement('bim-label');
   * labelComponent.vertical = true;
   * document.body.appendChild(labelComponent);
   */
  @property({ type: Boolean, reflect: true })
  vertical: boolean;

  get value() {
    if (!this.label) return this.label;
    return convertString(this.label);
  }

  constructor() {
    super();
    this.iconHidden = false;
    this.labelHidden = false;
    this.vertical = false;
  }

  protected render() {
    return html`
      <div class="parent" .title=${this.label ?? ""}>
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
