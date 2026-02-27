import { css } from "lit";

const scrollbar = css`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`;

const globalStyles = css`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: #19191E; /* app background */
    --bim-ui_gray-1: #262528; /* bg dark search */
    --bim-ui_gray-2: #262629; /* card background */
    --bim-ui_gray-3: #2E2E2E; /* dark background */
    --bim-ui_gray-4: #323237; /* bg default tabs */
    --bim-ui_gray-5: #353538; /* tooltip windows */
    --bim-ui_gray-6: #3C3C41; /* button grey bg */
    --bim-ui_gray-7: #787878; /* default */
    --bim-ui_gray-8: #ADADAD; /* icon - secondary text */
    --bim-ui_gray-9: #d5d5d5;
    --bim-ui_gray-10: #f1f2f4;

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem; /* 6px */
    --bim-ui_size-3xs: 0.375rem; /* 6px */
    --bim-ui_size-2xs: 0.5rem; /* 8px */
    --bim-ui_size-xs: 0.625rem; /* 10px */
    --bim-ui_size-sm: 0.75rem; /* 12px */
    --bim-ui_size-base: 0.875rem; /* 14px */
    --bim-ui_size-lg: 1rem; /* 16px */
    --bim-ui_size-xl: 1.125rem; /* 18px */
    --bim-ui_size-2xl: 1.25rem; /* 20px */
    --bim-ui_size-3xl: 1.375rem; /* 22px */
    --bim-ui_size-4xl: 1.5rem; /* 24px */
    --bim-ui_size-5xl: 1.625rem; /* 26px */
    --bim-ui_size-6xl: 1.75rem; /* 28px */
    --bim-ui_size-7xl: 1.875rem; /* 30px */
    --bim-ui_size-8xl: 2rem; /* 32px */
    --bim-ui_size-9xl: 2.125rem; /* 34px */
    --bim-ui_size-10xl: 2.25rem; /* 36px */
    --bim-ui_size-11xl: 2.375rem; /* 38px */
    --bim-ui_size-12xl: 2.5rem; /* 40px */
    --bim-ui_size-13xl: 2.625rem; /* 42px */
    --bim-ui_size-14xl: 2.75rem; /* 44px */
    --bim-ui_size-15xl: 2.875rem; /* 46px */
    --bim-ui_size-16xl: 3rem; /* 48px */
    --bim-ui_size-17xl: 3.125rem; /* 50px */
    --bim-ui_size-18xl: 3.25rem; /* 52px */
    --bim-ui_size-19xl: 3.375rem; /* 54px */
    --bim-ui_size-20xl: 3.5rem; /* 56px */
    --bim-ui_size-21xl: 3.625rem; /* 58px */
    --bim-ui_size-22xl: 3.75rem; /* 60px */
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-70: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-90: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-70: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-90: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  .theme-transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: drop-shadow(0 0 10px var(--bim-ui_bg-base));
    z-index: 9999;
  }

  .theme-transition-overlay > div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bim-ui_bg-base);
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-70: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-90: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-70: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-90: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  @keyframes toggleOverlay {
    0%,
    99% {
      display: block;
    }

    100% {
      display: none;
    }
  }

  @keyframes toggleThemeAnimation {
    0% {
      clip-path: circle(0% at center top);
    }
    45%,
    55% {
      clip-path: circle(150% at center center);
    }
    100% {
      clip-path: circle(0% at center bottom);
    }
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`;

/**
 * Heloooooooooo
 */
export const styles = {
  scrollbar,
  globalStyles,
};
