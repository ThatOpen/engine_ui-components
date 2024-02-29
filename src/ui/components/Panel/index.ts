import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"
import { styles } from "../../core/UIManager/src/styles"

export class Panel extends UIComponent {
  static styles = [
    styles.scrollbar,
    css`
      * {
        margin: 0;
        padding: 0;
      }

      :host {
        min-width: 20rem;
      }

      .host {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        border-radius: var(--bim-panel--bdrs, var(--bim-ui_size-base));
        background-color: var(--bim-panel--bgc, var(--bim-ui_bg-base));
        color: var(--bim-panel--c, var(--bim-ui_bg-contrast-100));
      }

      .host .title {
        display: flex;
        padding: 1rem;
        justify-content: flex-start;
        align-items: center;
        font-weight: 500;
        column-gap: 0.5rem;
        user-select: none;
      }

      .host .title span,
      .host .title p {
        font-weight: 600;
        font-size: var(--bim-panel--fz, var(--bim-ui_size-sm));
      }

      .host .sections {
        display: flex;
        flex-direction: column;
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
  
  declare icon?: String
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
    const title = this.icon || this.name
    return html`
      <div class="host">
        ${title
          ? html`
            <div class="title">
              ${this.icon ? html`<span class="material-icons">${this.icon}</span>` : null}
              ${this.name ? html`<p>${this.name}</p>` : null}
            </div>
          `
          : null
        }
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `
  }
}