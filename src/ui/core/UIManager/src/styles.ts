import { css } from "lit";

const internalStyles = css`
  :host {
    flex: 1;
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 0.375rem;
    user-select: none;
    flex: 1;
  }

  :host(:not([vertical])) .parent {
    justify-content: space-between;
  }
  
  :host([vertical]) .parent {
    flex-direction: column;
  }

  .input {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    min-height: 1.75rem;
    min-width: 5rem;
    /* max-width: 20rem; */
    gap: var(--bim-input--g, 0.375rem);
    padding: var(--bim-input--p, 0);
    background-color: var(--bim-input--bgc, transparent);
    outline: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
    border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
  }

  :host(:not([vertical])) .input {
    flex: 1;
    /* max-width: 20rem; */
  }
  
  :host(:not([vertical])[label]) .input {
    max-width: 13rem;
  }
`

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 0.5rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(--bim-scrollbar--c, var(--bim-ui_color-main));
  }
  
  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, black);
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
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
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
      --bim-ui_bg-contrast-20: hsl(210 10% 85%);
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
    --bim-ui_bg-contrast-20: hsl(210 10% 85%);
    --bim-ui_bg-contrast-40: hsl(210 10% 60%);
    --bim-ui_bg-contrast-60: hsl(210 10% 40%);
    --bim-ui_bg-contrast-80: hsl(210 10% 20%);
    --bim-ui_bg-contrast-100: hsl(210 10% 5%);
  }

  /* Button */
  bim-toolbar:not([vertical]) bim-button[vertical] {
    --bim-icon--fz: var(--bim-ui_size-5xl);
    min-height: 3.75rem;
  }

  bim-toolbar-section[vertical] bim-button {
    --bim-button--jc: center;
  }
`

export const styles = {
  scrollbar,
  internalStyles,
  globalStyles
}