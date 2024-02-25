import { css } from "lit";

const internalStyles = css`
  :host {
    flex: 1;
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    user-select: none;
    flex: 1;
  }

  :host(:not([vertical])) .parent {
    justify-content: space-between;
  }
  
  :host([vertical]) .parent {
    flex-direction: column;
  }
  
  :host(:not([vertical])) .input {
    flex: 1;
    max-width: 20rem;
  }
  
  :host(:not([vertical])[label]) .input {
    max-width: 13rem;
  }

  .input {
    box-sizing: border-box;
    display: flex;
    height: 1.75rem;
    min-width: 6rem;
  }
`

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 0.5rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(--bim-scrollbar--c);
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc);
  }
`

const globalStyles = css`
  :root { 
    /* Backgrounds */
    --bim-ui_bg-base: hsl(210 10% 5%);
    --bim-ui_bg-contrast-10: hsl(210 10% 10%);
    --bim-ui_bg-contrast-20: hsl(210 10% 20%);
    --bim-ui_bg-contrast-40: hsl(210 10% 40%);
    --bim-ui_bg-contrast-60: hsl(210 10% 60%);
    --bim-ui_bg-contrast-80: hsl(210 10% 80%);
    --bim-ui_bg-contrast-100: hsl(210 10% 95%);

    /* Colors */
    --bim-ui_color-main: #6528D7;
    --bim-ui_color-main-light: #9D6BFF;
    --bim-ui_color-accent: #BCF124;

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;

    /* Scrollbar */
    --bim-scrollbar--c: var(--bim-ui_color-main);
    --bim-scrollbar--bgc: black;

    /* Button */
    --bim-button--bdrs: var(--bim-ui_size-4xs);
    --bim-button--fz: var(--bim-ui_size-xs);
    --bim-button--c: var(--bim-ui_bg-contrast-100);
    --bim-button--bgc: var(--bim-ui_bg-contrast-20);
    --bim-button¡hover--c: var(--bim-ui_bg-contrast-100);
    --bim-button¡hover--bgc: var(--bim-ui_color-main);
    --bim-button¡active--c: var(--bim-ui_bg-contrast-100);
    --bim-button¡active--bgc: var(--bim-ui_color-main);

    /* Checkbox */
    --bim-checkbox--c: var(--bim-ui_color-main);
    --bim-checkbox--olw: 2px;
    --bim-checkbox--olc: var(--bim-ui_color-accent);

    /* ColorInput */
    --bim-color-input--c: var(--bim-ui_bg-contrast-100);
    --bim-color-input--bgc: var(--bim-ui_bg-contrast-20);
    --bim-color-input--bdrs: var(--bim-ui_size-4xs);

    /* Dropdown */
    --bim-dropdown--c: var(--bim-ui_bg-contrast-100);
    --bim-dropdown--fz: var(--bim-ui_size-xs);
    --bim-dropdown--bdrs: var(--bim-ui_size-4xs);
    --bim-dropdown--olw: 2px;
    --bim-dropdown--olc: transparent;
    --bim-dropdown--bgc: var(--bim-ui_bg-contrast-20);
    --bim-dropdown¡focus--c: var(--bim-ui_color-accent);
    --bim-dropdown¡selected--c: var(--bim-ui_color-main-light);
    --bim-dropdown_list--bgc: var(--bim-ui_bg-contrast-20);

    /* Icon */
    --bim-icon--fz: var(--bim-ui_size-base);

    /* InputLabel */
    --bim-input-label--fz: var(--bim-ui_size-sm);
    --bim-input-label--c: var(--bim-ui_bg-contrast-60);

    /* NumberInput */
    --bim-number-input--c: var(--bim-ui_bg-contrast-100);
    --bim-number-input--bdrs: var(--bim-ui_size-4xs);
    --bim-number-input--bgc: var(--bim-ui_bg-contrast-20);
    --bim-number-input--olc: transparent;
    --bim-number-input--olw: 2px;
    --bim-number-input--fz: var(--bim-ui_size-xs);
    --bim-number-input¡focus--c: var(--bim-ui_color-accent);
    --bim-number-input_affixes--c: var(--bim-ui_bg-contrast-60);
    --bim-number-input_affixes--fz: var(--bim-ui_size-xs);

    /* Panel */
    --bim-panel--bgc: var(--bim-ui_bg-base);
    --bim-panel--c: var(--bim-ui_bg-contrast-100);
    --bim-panel--fz: var(--bim-ui_size-sm);

    /* PanelSection */
    --bim-panel-section--fz: var(--bim-ui_size-sm);
    --bim-panel-section--c: var(--bim-ui_bg-contrast-80);
    --bim-panel-section--bdc: var(--bim-ui_bg-contrast-20);
    --bim-panel-section¡hover: var(--bim-ui_color-accent);

    /* SelectorInput */
    --bim-selector-input--bdrs: var(--bim-ui_size-4xs);
    --bim-selector-input--c: var(--bim-ui_bg-contrast-100);
    --bim-selector-input--bgc: var(--bim-ui_bg-contrast-20);
    --bim-selector-input¡hover--bgc: var(--bim-ui_bg-contrast-20);
    --bim-selector-input¡hover--c: var(--bim-ui_bg-contrast-100);
    --bim-selector-input¡selected--bgc: var(--bim-ui_color-main);
    --bim-selector-input¡selected--c: white;

    /* Table */
    --bim-table_header--bgc: var(--bim-ui_bg-contrast-20);
    --bim-table_header--c: var(--bim-ui_bg-contrast-100);
    --bim-table¡striped--c: var(--bim-ui_bg-contrast-10);

    /* Tag */

    /* ToolbarsContainer */
    --bim-toolbars-container--bgc: var(--bim-ui_bg-base);

    /* ToolbarSection */

    /* VectorInput */
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: hsl(210 10% 5%);
      --bim-ui_bg-contrast-10: hsl(210 10% 10%);
      --bim-ui_bg-contrast-20: hsl(210 10% 20%);
      --bim-ui_bg-contrast-40: hsl(210 10% 40%);
      --bim-ui_bg-contrast-60: hsl(210 10% 60%);
      --bim-ui_bg-contrast-80: hsl(210 10% 80%);
      --bim-ui_bg-contrast-100: hsl(210 10% 95%);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: hsl(210 10% 95%);
      --bim-ui_bg-contrast-10: hsl(210 10% 90%);
      --bim-ui_bg-contrast-20: hsl(210 10% 80%);
      --bim-ui_bg-contrast-40: hsl(210 10% 60%);
      --bim-ui_bg-contrast-60: hsl(210 10% 40%);
      --bim-ui_bg-contrast-80: hsl(210 10% 20%);
      --bim-ui_bg-contrast-100: hsl(210 10% 5%);
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: hsl(210 10% 5%);
    --bim-ui_bg-contrast-10: hsl(210 10% 10%);
    --bim-ui_bg-contrast-20: hsl(210 10% 20%);
    --bim-ui_bg-contrast-40: hsl(210 10% 40%);
    --bim-ui_bg-contrast-60: hsl(210 10% 60%);
    --bim-ui_bg-contrast-80: hsl(210 10% 80%);
    --bim-ui_bg-contrast-100: hsl(210 10% 95%);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: hsl(210 10% 95%);
    --bim-ui_bg-contrast-10: hsl(210 10% 90%);
    --bim-ui_bg-contrast-20: hsl(210 10% 80%);
    --bim-ui_bg-contrast-40: hsl(210 10% 60%);
    --bim-ui_bg-contrast-60: hsl(210 10% 40%);
    --bim-ui_bg-contrast-80: hsl(210 10% 20%);
    --bim-ui_bg-contrast-100: hsl(210 10% 5%);
  }

  /* Button */
  bim-toolbar-section bim-button {
    --bim-button--bgc: transparent;
  }

  /* Grid */
  bim-grid:not([floating]) {
    --bim-grid--bgc: var(--bim-ui_bg-contrast-20);
    --bim-grid--g: 1px;
    --bim-grid--tpl:
      "toolbar-a toolbar-a toolbar-a" auto
      "panel-a viewport panel-b" 1fr
      "panel-a viewport panel-b" 1fr
      / auto 1fr auto
    ;
  }
  
  bim-grid[floating] {
    --bim-grid--bgc: transparent;
    --bim-grid--p: 1.25rem;
    --bim-grid--g: 1rem;
    --bim-grid--tpl:
      "panel-c" auto
      "empty" 1fr
      "panel-d" auto
      / 1fr
    ;
  }

  /* Panel */
  bim-grid:not([floating]) {
    --bim-panel--bdrs: 0;
  }

  bim-grid[floating] {
    --bim-panel--bdrs: var(--bim-ui_size-base);
  }
  
  /* ToolbarsContainer */ 
  bim-grid:not([floating]) {
    --bim-toolbars-container--bdrs: 0;
    --bim-toolbars-container--jts: auto;
    --bim-toolbars-container_tabs--bgc: var(--bim-ui_bg-base)
  }
  
  bim-grid[floating] {
    --bim-toolbars-container--bdrs: var(--bim-ui_size-base);
    --bim-toolbars-container--olw: 1px;
    --bim-toolbars-container--olc: var(--bim-ui_bg-contrast-20);
    --bim-toolbars-container--jts: center;
    --bim-toolbars-container_tabs--bgc: transparent;
  }
`

export const styles = {
  scrollbar,
  internalStyles,
  globalStyles
}