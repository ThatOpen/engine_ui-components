import { css, html } from "lit";
import { UIComponent } from "../../core/UIComponent";

export class Tag extends UIComponent {
  static styles = css`
    :host {
      box-sizing: border-box;
      background-color: #1d7a42;
      border-radius: 99999px;
      padding: 0.25rem 0.875rem;
      font-size: 12px;
      text-wrap: nowrap;
      text-align: center;
      min-width: 4rem;
    }
  `

  static properties = {
    value: { type: String, reflect: true }
  }

  declare value?: string

  private _allowedTypes = [ "boolean", "number", "string" ]

  associateProperty(object: Record<string, any>, key: string) {
    const value = object[key]
    if (this._allowedTypes.includes(typeof value)) {
      const privateProperty = `_ui_${key}`
      const callback = (value: any) => this.value = String(value)
      Object.defineProperty(object, key, {
        get() {
          return this[privateProperty]
        },
        set(value: any) {
          this[privateProperty] = value
          callback(value)
        }
      })
    }
  }

  protected static _tableHostable = true

  render() {
    return html`${this.value}`
  }
}