import { html } from "lit";

export const loadingSkeleton = () => {
  return html`
    <style>
      .chart-skeleton {
        display: flex;
        gap: 1rem;
        height: 100%;
        width: 100%;
      }

      .y-axis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 2.25rem; /* Space for x-axis labels and gap */
      }

      .y-label {
        height: 1rem;
        border-radius: 0.25rem;
        background-color: var(--bim-ui_bg-contrast-10);
        animation: bar-loading 1s linear infinite alternate;
      }

      .main-chart-area {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .bars-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        flex-grow: 1;
        gap: 0.5rem;
        padding: 0 1rem;
        border-left: 2px solid var(--bim-ui_bg-contrast-20);
        border-bottom: 2px solid var(--bim-ui_bg-contrast-20);
        position: relative;
      }

      .grid-lines {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .grid-line {
        width: 100%;
        height: 1px;
        background-color: var(--bim-ui_bg-contrast-10);
        opacity: 0.5;
      }

      .bar {
        flex: 1;
        background-color: var(--bim-ui_bg-contrast-10);
        animation: bar-loading 1s linear infinite alternate;
        z-index: 1; /* To appear above grid lines */
      }

      .x-axis {
        display: flex;
        justify-content: space-around;
        gap: 0.5rem;
        padding: 0 1rem;
        height: 1.25rem;
        margin-top: 1rem;
      }

      .x-label {
        flex: 1;
        height: 100%;
        border-radius: 0.25rem;
        background-color: var(--bim-ui_bg-contrast-10);
        animation: bar-loading 1s linear infinite alternate;
      }

      @keyframes bar-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div class="chart-skeleton">
      <div class="y-axis">
        <div class="y-label" style="width: 2.5rem"></div>
        <div class="y-label" style="width: 1.5rem"></div>
        <div class="y-label" style="width: 2rem"></div>
        <div class="y-label" style="width: 1rem"></div>
      </div>
      <div class="main-chart-area">
        <div class="bars-container">
          <div class="grid-lines">
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
          </div>
          <div class="bar" style="height: 60%"></div>
          <div class="bar" style="height: 30%"></div>
          <div class="bar" style="height: 80%"></div>
          <div class="bar" style="height: 50%"></div>
          <div class="bar" style="height: 90%"></div>
        </div>
        <div class="x-axis">
          <div class="x-label"></div>
          <div class="x-label"></div>
          <div class="x-label"></div>
          <div class="x-label"></div>
          <div class="x-label"></div>
        </div>
      </div>
    </div>
  `;
};
