import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class Panel extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    :host {
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      pointer-events: auto;
      min-width: 20rem;
      max-width: 28rem;
      background-color: black;
      color: white;
    }

    :host .title {
      display: flex;
      padding: 1rem;
      justify-content: flex-start;
      align-items: center;
      font-weight: 500;
      column-gap: 0.5rem;
      user-select: none;
    }

    :host .title span,
    :host .title p {
      font-size: 14px;
      line-height: 1rem;
    }

    :host .sections {
      display: flex;
      flex-direction: column;
    }

    ::slotted(bim-panel-section:not(:last-child)) {
      border-bottom: 1px solid #2e2e2e
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
    `
  }
}