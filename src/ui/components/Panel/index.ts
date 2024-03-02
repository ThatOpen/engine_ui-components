import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"
import { styles } from "../../core/UIManager/src/styles"

export class Panel extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      :host {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-100));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        min-width: 20rem;
        display: flex;
        overflow: auto;
      }

      .host {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        border-radius: var(--bim-panel--bdrs, var(--bim-ui_size-base));
        background-color: var(--bim-panel--bgc, var(--bim-ui_bg-base));
        color: var(--bim-panel--c, var(--bim-ui_bg-contrast-100));
      }

      .host bim-label {
        font-weight: 600;
        padding: 1rem;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-panel-section--bdc, var(--bim-ui_bg-contrast-20));
      }
    `
  ]

  static properties = {
    icon: { type: String, reflect: true },
    name: { type: String, reflect: true },
  }
  
  declare icon?: string
  declare name?: string

  collapseSections() {
    const sections = this.querySelectorAll("bim-panel-section")
    for (const section of sections) {
      section.collapsed = true
    }
  }

  expandSections() {
    const sections = this.querySelectorAll("bim-panel-section")
    for (const section of sections) {
      section.collapsed = false
    }
  }

  render() {
    return html`
      <div class="host">
        ${this.name || this.icon ? html`<bim-label .label=${this.name} .icon=${this.icon}></bim-label>` : null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `
  }
}