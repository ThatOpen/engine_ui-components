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
      var(--bim-ui_bg-contrast-60)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-contrast-40));
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
    --bim-ui_size-4xs: 0.0625rem; /* 1px */
    --bim-ui_size-3xs: 0.1875rem; /* 3px */
    --bim-ui_size-2xs: 0.3125rem; /* 5px */
    --bim-ui_size-xs: 0.4375rem; /* 7px */
    --bim-ui_size-sm: 0.5625rem; /* 9px */
    --bim-ui_size-base: 0.6875rem; /* 11px */
    --bim-ui_size-lg: 0.8125rem; /* 13px */
    --bim-ui_size-xl: 0.9375rem; /* 15px */
    --bim-ui_size-2xl: 1.0625rem; /* 17px */
    --bim-ui_size-3xl: 1.1875rem; /* 19px */
    --bim-ui_size-4xl: 1.3125rem; /* 21px */
    --bim-ui_size-5xl: 1.4375rem; /* 23px */
    --bim-ui_size-6xl: 1.5625rem; /* 25px */
    --bim-ui_size-7xl: 1.6875rem; /* 27px */
    --bim-ui_size-8xl: 1.8125rem; /* 29px */
    --bim-ui_size-9xl: 1.9375rem; /* 31px */
    --bim-ui_size-10xl: 2.0625rem; /* 33px */
    --bim-ui_size-11xl: 2.1875rem; /* 35px */
    --bim-ui_size-12xl: 2.3125rem; /* 37px */
    --bim-ui_size-13xl: 2.4375rem; /* 39px */
    --bim-ui_size-14xl: 2.5625rem; /* 41px */
    --bim-ui_size-15xl: 2.6875rem; /* 43px */
    --bim-ui_size-16xl: 2.8125rem; /* 45px */
    --bim-ui_size-17xl: 2.9375rem; /* 47px */
    --bim-ui_size-18xl: 3.0625rem; /* 49px */
    --bim-ui_size-19xl: 3.1875rem; /* 51px */
    --bim-ui_size-20xl: 3.3125rem; /* 53px */
    --bim-ui_size-21xl: 3.4375rem; /* 55px */
    --bim-ui_size-22xl: 3.5625rem; /* 57px */
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
