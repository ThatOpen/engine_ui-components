import { LitElement, css, html, PropertyValues } from "lit";
import { property } from "lit/decorators.js";
import { Chart } from "../Chart";
import { LabelData, LabelEventData } from "./src";

/** A component that displays a legend for charts, allowing filtering by clicking on them. */
export class ChartLegend extends LitElement {
  /** The CSS styles for the component. */
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      padding: 0.5rem;
    }

    .parent {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
      /* height: 100%;
      width: 100%; */
    }
  `;

  /** The list of charts to which the labels are associated. */
  @property({ type: Array, attribute: false, hasChanged: () => true })
  charts: Chart[] = [];

  /** The internal, sanitized list of charts. */
  private _charts: Chart[] = [];

  /** The list of labels to be displayed. */
  labels: string[] = [];

  /** Processes the `charts` property before the component updates. */
  protected willUpdate(_changedProperties: PropertyValues<this>): void {
    const charts: Chart[] = [];
    if (this.charts) charts.push(...this.charts);
    // remove duplicates
    this._charts = [...new Set(charts)];
  }

  /** A helper method to create a map between chart labels and their corresponding colors. */
  private _getLabelColorMap(chart: Chart) {
    const labelColorMap: { [label: string]: string } = {};
    if (chart.colors) {
      this.labels.forEach((label, index) => {
        labelColorMap[label] = chart.colors![index % chart.colors!.length];
      });
    }
    return labelColorMap;
  }

  /** Gets the data associated with each label for the hide event. */
  private _getHideEventData() {
    const labelToData: LabelData = {};
    for (const index in this.labels) {
      const label = this.labels[index];
      const labelData = [];

      for (const dataset of Object.values(this._charts[0].inputData.datasets)) {
        labelData.push(dataset[index]?.data);
      }

      labelToData[label] = labelData;
    }

    return labelToData;
  }

  /** Renders the labels with their colors and click handlers. */
  protected render() {
    if (this._charts.length === 0 || !this._charts[0].data) {
      return html`<slot name="no-chart"></slot>`;
    }
    const chart = this._charts[0];
    this.labels = chart.inputData.labels;

    const labelColorMap = this._getLabelColorMap(chart);
    const labelToData = this._getHideEventData();

    if (this.labels.length === 0) {
      return html`<slot name="missing-data"></slot>`;
    }
    return html`
      <div class="parent">
        ${this.labels.map(
          (chartLabel) => html`
            <div style="display: flex; gap: 0.25rem; align-items: center;">
              <span
                style="
                display: inline-block;
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                background: ${labelColorMap[chartLabel] ?? "gray"};
              "
                aria-hidden="true"
              ></span>
              <bim-label
                @click=${(e: Event) => {
                  const label = e.currentTarget as HTMLElement;

                  const visible = label.style.textDecoration === "line-through";

                  label.style.textDecoration = visible
                    ? "none"
                    : "line-through";

                  const data = labelToData[chartLabel];
                  this.dispatchEvent(
                    new CustomEvent<LabelEventData>("label-click", {
                      detail: { label: chartLabel, data, visibility: visible },
                    }),
                  );

                  for (const chart of this._charts) {
                    chart.filterByLabel(chartLabel);
                  }
                }}
              >
                ${chartLabel}
              </bim-label>
            </div>
          `,
        )}
      </div>
    `;
  }
}

export * from "./src";
