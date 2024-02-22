import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class Panel extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    :host {
      min-width: 20rem;
      max-width: 28rem;
    }

    .host {
      display: flex;
      flex-direction: column;
      pointer-events: auto;
      border-radius: var(--bim-panel--bdrs);
      background-color: var(--bim-panel--bgc);
      color: var(--bim-panel--c);
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
      font-size: var(--bim-panel--fz);
    }

    .host .sections {
      display: flex;
      flex-direction: column;
    }

    ::slotted(bim-panel-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-panel-section--bdc);
    }

    ::-webkit-scrollbar {
      width: 0.5rem;
      overflow: hidden;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9c6bff77;
      border-radius: 0.25rem;
    }
    
    ::-webkit-scrollbar-track {
      background-color: black;
    }
  `

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