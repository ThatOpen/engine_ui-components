import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

/**
 * A simple empty-state placeholder for BIM applications. HTML tag: bim-empty-state
 *
 * Shows a static illustration, a message, and an optional slot for a call to
 * action (usually a `bim-button`). The illustration is currently dark-theme
 * only (translucent white over transparent).
 */
export class EmptyState extends LitElement {
  private static readonly _illustration = html`<svg
    width="157"
    height="156"
    viewBox="0 0 157 156"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#bim-empty-state-clip)">
      <mask
        id="bim-empty-state-mask"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="157"
        height="156"
      >
        <ellipse cx="78.5" cy="78" rx="78.5" ry="78" fill="url(#bim-empty-state-radial)" />
      </mask>
      <g mask="url(#bim-empty-state-mask)">
        <path d="M2.33321 94.9001H34.2999C38.7803 94.9001 41.0205 94.9001 42.7318 94.0281C44.2371 93.2611 45.4609 92.0373 46.2279 90.532C47.0999 88.8207 47.0999 86.5805 47.0999 82.1V50.4353C47.0999 48.1467 47.0999 47.0024 46.8058 45.948C46.5453 45.0139 46.1172 44.135 45.5423 43.3541C44.8933 42.4726 43.9922 41.7672 42.1902 40.3565L28.9883 30.0212C27.6995 29.0123 27.0551 28.5078 26.3403 28.1493C25.7061 27.8311 25.0324 27.5988 24.3369 27.4583C23.5531 27.3 22.7347 27.3 21.098 27.3H2.33321C-2.14722 27.3 -4.38743 27.3 -6.09872 28.172C-7.60402 28.939 -8.82786 30.1628 -9.59485 31.6681C-10.4668 33.3794 -10.4668 35.6196 -10.4668 40.1V82.1001C-10.4668 86.5805 -10.4668 88.8207 -9.59485 90.532C-8.82786 92.0373 -7.60402 93.2611 -6.09872 94.0281C-4.38743 94.9001 -2.14722 94.9001 2.33321 94.9001Z" fill="#F8F8F8" fill-opacity="0.08" style="mix-blend-mode:luminosity" />
        <path d="M2.33321 94.9001H34.2999C38.7803 94.9001 41.0205 94.9001 42.7318 94.0281C44.2371 93.2611 45.4609 92.0373 46.2279 90.532C47.0999 88.8207 47.0999 86.5805 47.0999 82.1V50.4353C47.0999 48.1467 47.0999 47.0024 46.8058 45.948C46.5453 45.0139 46.1172 44.135 45.5423 43.3541C44.8933 42.4726 43.9922 41.7672 42.1902 40.3565L28.9883 30.0212C27.6995 29.0123 27.0551 28.5078 26.3403 28.1493C25.7061 27.8311 25.0324 27.5988 24.3369 27.4583C23.5531 27.3 22.7347 27.3 21.098 27.3H2.33321C-2.14722 27.3 -4.38743 27.3 -6.09872 28.172C-7.60402 28.939 -8.82786 30.1628 -9.59485 31.6681C-10.4668 33.3794 -10.4668 35.6196 -10.4668 40.1V82.1001C-10.4668 86.5805 -10.4668 88.8207 -9.59485 90.532C-8.82786 92.0373 -7.60402 93.2611 -6.09872 94.0281C-4.38743 94.9001 -2.14722 94.9001 2.33321 94.9001Z" stroke="white" stroke-opacity="0.15" stroke-width="1.5" />
        <path d="M154.667 61.0999H122.7C118.22 61.0999 115.98 61.0999 114.268 61.9719C112.763 62.7389 111.539 63.9627 110.772 65.468C109.9 67.1793 109.9 69.4195 109.9 73.9V105.565C109.9 107.853 109.9 108.998 110.194 110.052C110.455 110.986 110.883 111.865 111.458 112.646C112.107 113.527 113.008 114.233 114.81 115.644L128.012 125.979C129.3 126.988 129.945 127.492 130.66 127.851C131.294 128.169 131.968 128.401 132.663 128.542C133.447 128.7 134.265 128.7 135.902 128.7H154.667C159.147 128.7 161.387 128.7 163.099 127.828C164.604 127.061 165.828 125.837 166.595 124.332C167.467 122.621 167.467 120.38 167.467 115.9V73.8999C167.467 69.4195 167.467 67.1793 166.595 65.468C165.828 63.9627 164.604 62.7389 163.099 61.9719C161.387 61.0999 159.147 61.0999 154.667 61.0999Z" fill="#F8F8F8" fill-opacity="0.08" style="mix-blend-mode:luminosity" />
        <path d="M84.758 182H116.725C121.205 182 123.445 182 125.157 181.128C126.662 180.361 127.886 179.137 128.653 177.632C129.525 175.921 129.525 173.68 129.525 169.2V137.535C129.525 135.247 129.525 134.102 129.231 133.048C128.97 132.114 128.542 131.235 127.967 130.454C127.318 129.573 126.417 128.867 124.615 127.456L111.413 117.121C110.124 116.112 109.48 115.608 108.765 115.249C108.131 114.931 107.457 114.699 106.762 114.558C105.978 114.4 105.16 114.4 103.523 114.4H84.758C80.2776 114.4 78.0374 114.4 76.3261 115.272C74.8208 116.039 73.5969 117.263 72.83 118.768C71.958 120.479 71.958 122.72 71.958 127.2V169.2C71.958 173.68 71.958 175.921 72.83 177.632C73.5969 179.137 74.8208 180.361 76.3261 181.128C78.0374 182 80.2776 182 84.758 182Z" fill="#F8F8F8" fill-opacity="0.08" style="mix-blend-mode:luminosity" />
      </g>
      <path d="M63.2502 111.583H93.7502C98.2306 111.583 100.471 111.583 102.182 110.711C103.687 109.944 104.911 108.721 105.678 107.215C106.55 105.504 106.55 103.264 106.55 98.7833V67.3691C106.55 65.1068 106.55 63.9756 106.262 62.9315C106.007 62.0065 105.588 61.1349 105.024 60.3584C104.387 59.482 103.503 58.7763 101.735 57.3651L89.0157 47.2126C87.7173 46.1763 87.0681 45.6581 86.3455 45.2897C85.7044 44.9628 85.0221 44.7239 84.3172 44.5794C83.5226 44.4166 82.6919 44.4166 81.0307 44.4166H63.2502C58.7698 44.4166 56.5296 44.4166 54.8183 45.2886C53.313 46.0556 52.0891 47.2794 51.3221 48.7847C50.4502 50.496 50.4502 52.7362 50.4502 57.2166V98.7833C50.4502 103.264 50.4502 105.504 51.3221 107.215C52.0891 108.721 53.313 109.944 54.8183 110.711C56.5296 111.583 58.7698 111.583 63.2502 111.583Z" fill="#F8F8F8" fill-opacity="0.05" style="mix-blend-mode:luminosity" />
      <g filter="url(#bim-empty-state-shadow)">
        <path d="M62.6 109H94.4C97.7603 109 99.4405 109 100.724 108.346C101.853 107.771 102.771 106.853 103.346 105.724C104 104.44 104 102.76 104 99.4V67.0766C104 65.3954 104 64.5548 103.788 63.7778C103.599 63.0894 103.29 62.4402 102.873 61.8605C102.404 61.2062 101.751 60.677 100.445 59.6184L87.5178 49.1419C86.5385 48.3482 86.0489 47.9514 85.5023 47.6691C85.0175 47.4187 84.5007 47.2355 83.9664 47.1248C83.364 47 82.7338 47 81.4733 47H62.6C59.2397 47 57.5595 47 56.2761 47.654C55.1471 48.2292 54.2292 49.1471 53.654 50.2761C53 51.5595 53 53.2397 53 56.6V99.4C53 102.76 53 104.44 53.654 105.724C54.2292 106.853 55.1471 107.771 56.2761 108.346C57.5595 109 59.2397 109 62.6 109Z" fill="#F8F8F8" fill-opacity="0.08" style="mix-blend-mode:luminosity" />
        <path d="M62.6 109H94.4C97.7603 109 99.4405 109 100.724 108.346C101.853 107.771 102.771 106.853 103.346 105.724C104 104.44 104 102.76 104 99.4V67.0766C104 65.3954 104 64.5548 103.788 63.7778C103.599 63.0894 103.29 62.4402 102.873 61.8605C102.404 61.2062 101.751 60.677 100.445 59.6184L87.5178 49.1419C86.5385 48.3482 86.0489 47.9514 85.5023 47.6691C85.0175 47.4187 84.5007 47.2355 83.9664 47.1248C83.364 47 82.7338 47 81.4733 47H62.6C59.2397 47 57.5595 47 56.2761 47.654C55.1471 48.2292 54.2292 49.1471 53.654 50.2761C53 51.5595 53 53.2397 53 56.6V99.4C53 102.76 53 104.44 53.654 105.724C54.2292 106.853 55.1471 107.771 56.2761 108.346C57.5595 109 59.2397 109 62.6 109Z" stroke="white" stroke-opacity="0.18" stroke-width="1.5" />
      </g>
      <path d="M75.9031 85.0833C74.6481 85.0833 73.5803 84.6373 72.6998 83.7452C71.8192 82.8531 71.3789 81.7713 71.3789 80.5V75.5C71.3789 74.2286 71.8192 73.1468 72.6998 72.2548C73.5803 71.3627 74.6481 70.9166 75.9031 70.9166H80.8386C82.0936 70.9166 83.1613 71.3627 84.0419 72.2548C84.9225 73.1468 85.3628 74.2286 85.3628 75.5V80.5C85.3628 81.7713 84.9225 82.8531 84.0419 83.7452C83.1613 84.6373 82.0936 85.0833 80.8386 85.0833H75.9031ZM77.5483 79.2885L76.1721 77.8941C76.0582 77.7788 75.915 77.7198 75.7425 77.717C75.5702 77.7144 75.4244 77.7734 75.3051 77.8941C75.1859 78.015 75.1264 78.1613 75.1264 78.3333C75.1264 78.5052 75.1859 78.6516 75.3051 78.7725L77.0278 80.5177C77.1765 80.6682 77.35 80.7435 77.5483 80.7435C77.7465 80.7435 77.92 80.6682 78.0688 80.5177L81.7656 76.7725C81.8794 76.657 81.9377 76.512 81.9404 76.3373C81.943 76.1627 81.8848 76.015 81.7656 75.8941C81.6464 75.7734 81.5019 75.7131 81.3321 75.7131C81.1624 75.7131 81.0179 75.7734 80.8986 75.8941L77.5483 79.2885Z" fill="#F8F8F8" fill-opacity="0.85" />
    </g>
    <defs>
      <filter id="bim-empty-state-shadow" x="20.25" y="14.25" width="116.5" height="143.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="24" />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend mode="multiply" in2="BackgroundImageFix" result="bim-empty-state-shadow-blend" />
        <feBlend mode="normal" in="SourceGraphic" in2="bim-empty-state-shadow-blend" result="shape" />
      </filter>
      <radialGradient id="bim-empty-state-radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(78.5 78) rotate(90) scale(78 78.5)">
        <stop stop-color="#D9D9D9" />
        <stop offset="1" stop-color="#737373" stop-opacity="0" />
      </radialGradient>
      <clipPath id="bim-empty-state-clip">
        <rect width="157" height="156" fill="white" />
      </clipPath>
    </defs>
  </svg>`;

  static styles = css`
    :host {
      display: block;
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      height: 100%;
      min-height: 12rem;
      padding: 1rem;
      text-align: center;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .illustration {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }

    svg {
      width: 7.5rem;
      height: auto;
      opacity: 0.9;
      flex-shrink: 0;
    }

    bim-label.title {
      font-size: var(--bim-ui_size-lg);
      font-weight: 500;
    }

    bim-label.description {
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      max-width: 220px;
      white-space: normal;
    }
  `;

  /**
   * The title displayed below the illustration.
   * @type {String}
   * @default undefined
   * @example <bim-empty-state label="No model loaded."></bim-empty-state>
   */
  @property({ type: String, reflect: true })
  label?: string;

  /**
   * An optional secondary message displayed below the label.
   * @type {String}
   * @default undefined
   * @example <bim-empty-state label="No models" description="Load a model to get started."></bim-empty-state>
   */
  @property({ type: String, reflect: true })
  description?: string;

  protected render() {
    return html`
      <div class="parent">
        <div class="content">
          <div class="illustration">
            ${EmptyState._illustration}
            ${this.label ? html`<bim-label class="title">${this.label}</bim-label>` : null}
          </div>
          ${this.description ? html`<bim-label class="description">${this.description}</bim-label>` : null}
        </div>
        <slot></slot>
      </div>
    `;
  }
}
