import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { live } from "lit/directives/live.js";
import { when } from "lit/directives/when.js";

export interface SortableListItem {
  id: string;
  label: string;
  icon?: string;
}

/**
 * A sortable list component that lets users reorder items and toggle their
 * active/available status. HTML tag: bim-sortable-list
 *
 * Active items can be dragged to reorder. A checkbox on each active item moves
 * it to the Available section. A checkbox on each available item moves it back
 * to Active. When `sortOnly` is true the Available section is hidden and
 * checkboxes are removed — the list acts as a pure drag-to-reorder control.
 *
 * @fires change - Fired when the active set or order changes.
 *   `e.detail` is the ordered array of active item IDs (`string[]`).
 */
export class SortableList extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .fields-list {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      border-radius: 6px;
      user-select: none;
      min-height: 25px;
    }

    .field-item:hover {
      background: var(--bim-ui_bg-contrast-20);
    }

    .field-item--drag-over {
      border-top: 2px solid var(--bim-ui_accent-base);
      border-radius: 0;
    }

    .field-item--dragging {
      opacity: 0.4;
    }
  `;

  /**
   * The full list of items. All items start as active unless deactivated by
   * the user. When the list is updated, unknown IDs are dropped and new ones
   * are appended to the active set.
   * @type {SortableListItem[]}
   */
  @property({ attribute: false })
  set items(value: SortableListItem[]) {
    this._items = value;
    const ids = new Set(value.map((i) => i.id));
    this._activeIds = this._activeIds.filter((id) => ids.has(id));
    this._availableIds = this._availableIds.filter((id) => ids.has(id));
    const known = new Set([...this._activeIds, ...this._availableIds]);
    for (const item of value) {
      if (!known.has(item.id)) this._activeIds = [...this._activeIds, item.id];
    }
  }

  get items(): SortableListItem[] {
    return this._items;
  }

  /**
   * When true, hides the Available section and checkboxes. The list acts as a
   * pure drag-to-reorder control; all items remain active. Set via JavaScript
   * only — not reflected to an attribute.
   * @type {boolean}
   * @default false
   */
  @property({ attribute: false })
  sortOnly = false;

  private _items: SortableListItem[] = [];

  @state() private _activeIds: string[] = [];
  @state() private _availableIds: string[] = [];
  @state() private _dragIndex = -1;
  @state() private _dragOverIndex = -1;

  private _byId(id: string): SortableListItem | undefined {
    return this._items.find((i) => i.id === id);
  }

  private _activate(id: string) {
    this._availableIds = this._availableIds.filter((x) => x !== id);
    this._activeIds = [...this._activeIds, id];
    this._dispatchChange();
  }

  private _deactivate(id: string) {
    this._activeIds = this._activeIds.filter((x) => x !== id);
    this._availableIds = [...this._availableIds, id];
    this._dispatchChange();
  }

  private _onDragStart(e: DragEvent, index: number) {
    this._dragIndex = index;
    e.dataTransfer!.effectAllowed = "move";
    e.dataTransfer!.setData("text/plain", String(index));
  }

  private _onDragOver(e: DragEvent, index: number) {
    e.preventDefault();
    e.dataTransfer!.dropEffect = "move";
    if (this._dragOverIndex !== index) this._dragOverIndex = index;
  }

  private _onDrop(e: DragEvent, index: number) {
    e.preventDefault();
    const from = this._dragIndex;
    this._dragIndex = -1;
    this._dragOverIndex = -1;
    if (from === -1 || from === index) return;
    const next = [...this._activeIds];
    const [moved] = next.splice(from, 1);
    next.splice(index, 0, moved);
    this._activeIds = next;
    this._dispatchChange();
  }

  private _onDragEnd() {
    this._dragIndex = -1;
    this._dragOverIndex = -1;
  }

  private _dispatchChange() {
    this.dispatchEvent(
      new CustomEvent<string[]>("change", {
        detail: [...this._activeIds],
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected render() {
    const activeItems = this._activeIds
      .map((id) => this._byId(id))
      .filter(Boolean) as SortableListItem[];

    const availableItems = this._availableIds
      .map((id) => this._byId(id))
      .filter(Boolean) as SortableListItem[];

    return html`
      ${when(
        !this.sortOnly && activeItems.length > 0,
        () => html`<bim-label>Active</bim-label>`,
      )}

      <div class="fields-list">
        ${activeItems.map(
          (item, i) => html`
            <div
              class=${classMap({
                "field-item": true,
                "field-item--dragging": this._dragIndex === i,
                "field-item--drag-over":
                  this._dragOverIndex === i && this._dragIndex !== i,
              })}
              draggable="true"
              @dragstart=${(e: DragEvent) => this._onDragStart(e, i)}
              @dragover=${(e: DragEvent) => this._onDragOver(e, i)}
              @drop=${(e: DragEvent) => this._onDrop(e, i)}
              @dragend=${() => this._onDragEnd()}
            >
              <bim-label
                icon="tabler:grip-vertical"
                style="cursor:grab; color:var(--bim-ui_bg-contrast-60); flex-shrink:0;"
              ></bim-label>
              ${when(
                !this.sortOnly,
                () => html`
                  <bim-checkbox
                    .checked=${live(true)}
                    @change=${(e: Event) => {
                      e.stopPropagation();
                      this._deactivate(item.id);
                    }}
                  ></bim-checkbox>
                `,
              )}
              <bim-label .icon=${item.icon} style="flex:1;"
                >${item.label}</bim-label
              >
            </div>
          `,
        )}
      </div>

      ${when(
        !this.sortOnly && availableItems.length > 0,
        () => html`
          <bim-label>Available</bim-label>
          <div class="fields-list">
            ${availableItems.map(
              (item) => html`
                <div class="field-item">
                  <bim-checkbox
                    .checked=${live(false)}
                    @change=${(e: Event) => {
                      e.stopPropagation();
                      this._activate(item.id);
                    }}
                  ></bim-checkbox>
                  <bim-label .icon=${item.icon} style="flex:1;"
                    >${item.label}</bim-label
                  >
                </div>
              `,
            )}
          </div>
        `,
      )}
    `;
  }
}

customElements.define("bim-sortable-list", SortableList);
