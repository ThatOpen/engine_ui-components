import { css, html } from "lit"
import { UIComponent } from "../../core/UIComponent"

export class PanelSection extends UIComponent {
  static styles = css`
    * {
      margin: 0;
      padding: 0;
    }

    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0.75rem 1rem;
      row-gap: 0.75rem;
      border-color: #2e2e2e;
      border: none;
      pointer-events: auto;
    }

    :host .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(209 213 219);
      font-weight: 500;
      user-select: none;
      height: 1.5rem
    }

    :host(:not([fixed])) .header:hover {
      cursor: pointer;
      color: #bcf124;
    }

    :host(:not([fixed])) .header:hover svg {
      fill: #bcf124;
    }

    :host .title span,
    :host .header span {
      font-size: 16px;
      line-height: 1.25rem;
    }

    :host .title {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
    }

    :host .title p {
      font-size: 14px;
      line-height: 1rem;
    }

    :host .components-list {
      flex-direction: column;
      row-gap: 0.75rem;
    }
  `

  static properties = {
    icon: { type: String, reflect: true },
    name: { type: String, reflect: true },
    fixed: { type: Boolean, reflect: true },
    collapsed: { type: Boolean, reflect: true }
  }
  
  declare icon?: String
  declare name?: string
  declare fixed?: boolean
  declare collapsed?: boolean

  private onHeaderClick() {
    if (this.fixed) return;
    this.collapsed = !this.collapsed
  }

  render() {
    const header = this.icon || this.name || this.fixed

    const titleTemplate = html`
      <div class="title">
        ${ this.icon ? html`<span class="material-icons">${this.icon}</span>` : null }
        ${ this.name ? html`<p>${this.name}</p>` : null }
      </div>
    `

    const expandLessSVG = html`<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>`
    const expandMoreSVG = html`<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>`
    const expandIcon = this.collapsed ? expandLessSVG : expandMoreSVG

    const headerTemplate = html`
      <div class="header" @click=${this.onHeaderClick}>
        ${ this.icon || this.name ? titleTemplate : null }
        ${ !this.fixed ? expandIcon : null }
      </div>
    `
    
    return html`
      <style>
        :host .components-list {
          display: ${!this.fixed && this.collapsed ? "none" : "flex"} 
        }
      </style>
      ${ header ? headerTemplate : null }
      <div class="components-list">
        <slot></slot>
      </div>
    `
  }
}