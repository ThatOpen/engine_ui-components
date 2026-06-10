import { LitElement, css, html, nothing, PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";
import { repeat } from "lit/directives/repeat.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "../../core/Manager/src/styles";
import { Option } from "../Option";
import { HasName, HasValue } from "../../core/types";
import { TextInput } from "../TextInput";

/**
 * A custom dropdown web component for BIM applications.
 */
export class Dropdown extends LitElement implements HasValue<unknown[]>, HasName {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-2xs);
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      :host(:focus-within:not([visible])) {
        --bim-input--olc: var(--bim-ui_bg-contrast-40);
      }

      /* --bim-dropdown--c: color of the trigger label and chevron. Default: --bim-ui_bg-contrast-100 */
      .input {
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
      }

      .input bim-label {
        pointer-events: none;
        overflow: hidden;
      }

      .input svg {
        flex-shrink: 0;
        fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
      }

      dialog {
        position: fixed;
        margin: 0;
        padding: 0.375rem 0;
        border: none;
        outline: none;
        border-radius: 4px;
        background-color: var(--bim-ui_bg-contrast-10);
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        display: none;
        flex-direction: column;
        transform-origin: top left;
      }

      dialog[open] {
        display: flex;
        animation: bim-dropdown-open 0.15s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      dialog::backdrop {
        background: transparent;
      }

      dialog bim-text-input {
        --bim-input--bgc: var(--bim-ui_bg-contrast-30);
        margin: 0 0.375rem 0.125rem;
      }

      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 0.5rem;
        padding: 0 0.5rem;
        min-height: 1.75rem;
        cursor: pointer;
        user-select: none;
        box-sizing: border-box;
      }

      .option:hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .option:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      .option.checked {
        --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
      }

      .option.checked svg {
        flex-shrink: 0;
        fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
      }

      .no-options {
        --bim-label--c: var(--bim-ui_bg-contrast-60);
        padding: 0.25rem 0.5rem;
      }

      :host([invalid]) {
        --bim-input--olc: var(--bim-ui_danger-base);
      }

      .validation-message {
        display: block;
        font-size: var(--bim-ui_size-base);
        color: var(--bim-ui_danger-base);
        padding: 2px var(--bim-ui_size-xs);
      }

      :host(:not([vertical])) .validation-message {
        text-align: right;
      }

      @keyframes bim-dropdown-open {
        from { opacity: 0; transform: scale(0.95); }
        to   { opacity: 1; transform: scale(1); }
      }

      @media (prefers-reduced-motion: reduce) {
        dialog[open] { animation: none; }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  name?: string;

  @property({ type: String, reflect: true })
  icon?: string;

  @property({ type: String, reflect: true })
  label?: string;

  @property({ type: Boolean, reflect: true })
  multiple = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: Boolean, reflect: true })
  vertical = false;

  @property({ type: String, reflect: true })
  placeholder?: string;

  multipleLabel?: (count: number) => string;

  @property({ type: Boolean, reflect: true, attribute: "search-box" })
  searchBox = false;

  private _visible = false;

  /**
   * Whether the dropdown list is open.
   * @example <bim-dropdown visible></bim-dropdown>
   */
  @property({ type: Boolean, reflect: true })
  set visible(value: boolean) {
    const old = this._visible;
    if (value === old) return;
    this._visible = value;
    if (value) {
      const dialog = this._dialog.value;
      if (!dialog) { this._visible = false; return; }
      dialog.showModal();
      this._updatePosition();
    } else {
      this._dialog.value?.close();
      this._resetState();
      this._trigger.value?.focus();
      this.dispatchEvent(new Event("close", { bubbles: true, composed: true }));
    }
    this.requestUpdate("visible", old);
  }

  get visible() {
    return this._visible;
  }

  @state() private _options: Option[] = [];
  @state() private _value: Set<Option> = new Set();
  @state() private _searchValue = "";

  private _dirty = false;
  private _currentValidation?: { valid: boolean; message?: string };
  private _validation?: (value: any[]) => { valid: boolean; message?: string };

  get validation() {
    return this._validation;
  }

  set validation(fn: ((value: any[]) => { valid: boolean; message?: string }) | undefined) {
    this._validation = fn;
    this.requestUpdate();
  }

  get isValid(): boolean {
    if (!this._dirty) return true;
    if (this.required && this.value.length === 0) return false;
    return this._currentValidation?.valid ?? true;
  }

  private get _validationMessage(): string | undefined {
    if (this.required && this.value.length === 0) return "This field is required.";
    return this._currentValidation?.message;
  }

  private get _hasVisibleOptions() {
    if (!this._searchValue) return this._options.length > 0;
    return this._options.some((o) =>
      (o.label ?? String(o.value) ?? "").toLowerCase().includes(this._searchValue),
    );
  }

  /**
   * The selected values in the dropdown.
   * @example dropdown.value = ['IfcWall', 'IfcSlab'];
   */
  set value(value: unknown[]) {
    const _value: Set<Option> = new Set();
    for (const v of value) {
      // Read children directly — avoids timing issues with _options state
      const opt = this._findOption(v);
      if (!opt) continue;
      _value.add(opt);
      if (!this.multiple && value.length === 1) break;
    }
    this._value = _value;
    this._updateOptionsState();
    this.dispatchEvent(new Event("change"));
  }

  get value() {
    return [...this._value]
      .filter((o) => o instanceof Option && o.checked)
      .map((o) => o.value);
  }

  /**
   * @deprecated Listen to the "change" event instead:
   * `dropdown.addEventListener("change", () => { ... })`
   */
  onValueChange = new Event("change");

  private _dialog = createRef<HTMLDialogElement>();
  private _trigger = createRef<HTMLDivElement>();
  private _mutationObserver = new MutationObserver(() => this._syncOptions());

  connectedCallback() {
    super.connectedCallback();
    this._mutationObserver.observe(this, { childList: true });
    customElements.whenDefined("bim-option").then(() => this._syncOptions());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._mutationObserver.disconnect();
  }

  protected override willUpdate(_changed: PropertyValues) {
    this._currentValidation = this._validation
      ? this._validation(this.value)
      : undefined;
  }

  protected override updated() {
    this.toggleAttribute("invalid", !this.isValid);
  }

  protected firstUpdated() {
    if (this._visible) {
      this._dialog.value?.showModal();
      this._updatePosition();
    }
  }

  private _syncOptions() {
    const options = Array.from(this.children).filter(
      (c) => c.tagName === "BIM-OPTION",
    ) as Option[];
    this._options = options;
    const newValue = new Set(options.filter((o) => o.hasAttribute("checked")));
    const valueChanged = [...this._value].some((o) => !newValue.has(o));
    this._value = newValue;
    if (valueChanged) this.dispatchEvent(new Event("change"));
  }

  private _findOption(value: any): Option | undefined {
    // Reads this.children directly so it works before _syncOptions fires
    for (const child of Array.from(this.children)) {
      if (!(child instanceof Option)) continue;
      if (child.label === value || child.value === value) return child;
    }
    return undefined;
  }

  private _updateOptionsState() {
    for (const child of Array.from(this.children)) {
      if (child instanceof Option) child.checked = this._value.has(child);
    }
  }

  private _updatePosition() {
    const dialog = this._dialog.value;
    const trigger = this._trigger.value;
    if (!dialog || !trigger) return;

    const gap = 4;
    const padding = 5;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const t = trigger.getBoundingClientRect();
    const m = dialog.getBoundingClientRect();

    let x = t.left;
    let y = t.bottom + gap;

    if (y + m.height > vh - padding) y = t.top - m.height - gap;
    if (x + m.width > vw - padding) x = t.right - m.width;

    x = Math.max(padding, Math.min(x, vw - m.width - padding));
    y = Math.max(padding, Math.min(y, vh - m.height - padding));

    dialog.style.minWidth = `${t.width}px`;
    dialog.style.left = `${x}px`;
    dialog.style.top = `${y}px`;
  }

  private _resetState() {
    this._searchValue = "";
    for (const child of Array.from(this.children)) {
      if (child instanceof Option) (child as HTMLElement).style.display = "";
    }
  }

  private _focusOption(index: number) {
    const options = [
      ...(this._dialog.value?.querySelectorAll<HTMLElement>(".option") ?? []),
    ];
    if (!options.length) return;
    const i = index < 0 ? options.length + index : index;
    options[Math.max(0, Math.min(i, options.length - 1))]?.focus();
  }

  private _openWithFocus() {
    this.visible = true;
    requestAnimationFrame(() => {
      const dialog = this._dialog.value;
      if (!dialog) return;
      const checked = dialog.querySelector<HTMLElement>(".option.checked");
      const first = dialog.querySelector<HTMLElement>(".option");
      (checked ?? first)?.focus();
    });
  }

  private _onTriggerKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (this.visible) this.visible = false;
      else this._openWithFocus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!this.visible) this._openWithFocus();
      else this._focusOption(0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!this.visible) this._openWithFocus();
      else this._focusOption(-1);
    }
  };

  private _onOptionKeydown = (e: KeyboardEvent, option: Option, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this._onOptionClick(option);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      this._focusOption(index + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      this._focusOption(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      this._focusOption(0);
    } else if (e.key === "End") {
      e.preventDefault();
      this._focusOption(-1);
    } else if (e.key === "Escape") {
      e.preventDefault();
      this.visible = false;
    }
  };

  private _onDialogClick = (e: MouseEvent) => {
    if (e.target === this._dialog.value) this.visible = false;
  };

  private _onCancel = (e: Event) => {
    e.preventDefault();
    this.visible = false;
  };

  private _onOptionClick = (option: Option) => {
    const selected = this._value.has(option);
    if (!this.multiple && !this.required && !selected) {
      this._value = new Set([option]);
    } else if (!this.multiple && !this.required && selected) {
      this._value = new Set([]);
    } else if (!this.multiple && this.required && !selected) {
      this._value = new Set([option]);
    } else if (!this.multiple && this.required && selected) {
      this._value = new Set([]);
    } else if (this.multiple && !this.required && !selected) {
      this._value = new Set([...this._value, option]);
    } else if (this.multiple && !this.required && selected) {
      this._value = new Set([...this._value].filter((v) => v !== option));
    } else if (this.multiple && this.required && !selected) {
      this._value = new Set([...this._value, option]);
    } else if (this.multiple && this.required && selected) {
      this._value = new Set([...this._value].filter((v) => v !== option));
    }
    this._dirty = true;
    this._updateOptionsState();
    this.dispatchEvent(new Event("change"));
  };

  private _onSearch = (e: Event) => {
    this._searchValue = ((e.target as TextInput).value ?? "").toLowerCase();
  };

  private _renderOption(option: Option, index: number) {
    const checked = this._value.has(option);
    const hidden = this._searchValue
      ? !(option.label ?? String(option.value) ?? "")
          .toLowerCase()
          .includes(this._searchValue)
      : false;

    if (hidden) return nothing;

    return html`
      <div
        class=${classMap({ option: true, checked })}
        role="option"
        aria-selected=${checked}
        tabindex="-1"
        @click=${() => this._onOptionClick(option)}
        @keydown=${(e: KeyboardEvent) => this._onOptionKeydown(e, option, index)}
      >
        <bim-label
          .icon=${option.icon}
          .img=${option.img}
          .vertical=${option.vertical}
        >${option.label}</bim-label>
        ${checked && !option.noMark
          ? html`<svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>`
          : nothing}
      </div>
    `;
  }

  protected render() {
    let inputLabel: string;
    let inputImg: string | undefined;
    let inputIcon: string | undefined;

    if (this._value.size === 0) {
      inputLabel = this.placeholder ?? "Select an option...";
    } else if (this._value.size === 1) {
      const option = [...this._value][0];
      inputLabel = option?.label ?? String(option?.value ?? "");
      inputImg = option?.img;
      inputIcon = option?.icon;
    } else {
      inputLabel = this.multipleLabel
        ? this.multipleLabel(this._value.size)
        : `Multiple (${this._value.size})`;
    }

    return html`
      <bim-input
        title=${this.label ?? ""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${ref(this._trigger)}
          class="input"
          tabindex="0"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded=${this.visible}
          aria-controls="bim-dropdown-listbox"
          aria-label=${this.label ?? "Dropdown"}
          @click=${() => (this.visible = !this.visible)}
          @keydown=${this._onTriggerKeydown}
        >
          <bim-label aria-hidden="true" .img=${inputImg} .icon=${inputIcon}>${inputLabel}</bim-label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </bim-input>
      ${!this.isValid && this._validationMessage
        ? html`<span class="validation-message">${this._validationMessage}</span>`
        : nothing}
      <dialog
        id="bim-dropdown-listbox"
        role="listbox"
        aria-label=${this.label ?? "Options"}
        aria-multiselectable=${this.multiple}
        ${ref(this._dialog)}
        @click=${this._onDialogClick}
        @cancel=${this._onCancel}
      >
        ${this.searchBox
          ? html`<bim-text-input
              @input=${this._onSearch}
              placeholder="Search..."
              debounce="200"
            ></bim-text-input>`
          : nothing}
        ${repeat(this._options, (o) => o, (o, i) => this._renderOption(o, i))}
        ${!this._hasVisibleOptions
          ? html`<bim-label class="no-options">No options found...</bim-label>`
          : nothing}
      </dialog>
    `;
  }
}
