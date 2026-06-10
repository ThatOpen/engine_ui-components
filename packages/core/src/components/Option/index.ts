import { convertString } from "../../core/utils";

/**
 * Data node for dropdown and selector options. HTML tag: bim-option
 *
 * This element has no shadow DOM — it is a lightweight data holder.
 * Visual rendering is handled by the parent component (bim-dropdown, bim-selector).
 */
export class Option extends HTMLElement {
  private _value: string | number | boolean | object | undefined;

  get label(): string | undefined {
    return this.getAttribute("label") ?? undefined;
  }
  set label(v: string | undefined) {
    if (v != null) this.setAttribute("label", v);
    else this.removeAttribute("label");
  }

  get icon(): string | undefined {
    return this.getAttribute("icon") ?? undefined;
  }
  set icon(v: string | undefined) {
    if (v != null) this.setAttribute("icon", v);
    else this.removeAttribute("icon");
  }

  get img(): string | undefined {
    return this.getAttribute("img") ?? undefined;
  }
  set img(v: string | undefined) {
    if (v != null) this.setAttribute("img", v);
    else this.removeAttribute("img");
  }

  get checked(): boolean {
    return this.hasAttribute("checked");
  }
  set checked(v: boolean) {
    if (v) this.setAttribute("checked", "");
    else this.removeAttribute("checked");
  }

  get noMark(): boolean {
    return this.hasAttribute("no-mark");
  }
  set noMark(v: boolean) {
    if (v) this.setAttribute("no-mark", "");
    else this.removeAttribute("no-mark");
  }

  get vertical(): boolean {
    return this.hasAttribute("vertical");
  }
  set vertical(v: boolean) {
    if (v) this.setAttribute("vertical", "");
    else this.removeAttribute("vertical");
  }

  get checkbox(): boolean {
    return this.hasAttribute("checkbox");
  }
  set checkbox(v: boolean) {
    if (v) this.setAttribute("checkbox", "");
    else this.removeAttribute("checkbox");
  }

  /**
   * The value of this option. Defaults to the label converted to its natural
   * JS type (boolean, number, or string) when not set explicitly.
   */
  get value(): string | number | boolean | object | undefined {
    if (this._value !== undefined) return this._value;
    const attr = this.getAttribute("value");
    if (attr !== null) return convertString(attr);
    if (!this.label) return undefined;
    return convertString(this.label);
  }
  set value(v: string | number | boolean | object) {
    this._value = v;
  }
}
