import { css, html, LitElement, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { Chart as chartjs } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
// eslint-disable-next-line import/no-extraneous-dependencies
import colorLib from "@kurkle/color";
import {
  ChartInputData,
  ChartInputValues,
  DataClickDetail,
  ChartDataSet,
  Types,
  LinePointStyleType,
  LineFillType,
  ChartLoadFunction,
} from "./src/types";
import { Table } from "../Table";
import { loadingSkeleton } from "./src/loading-skeleton";

chartjs.register(ChartDataLabels);

/** A flexible and customizable chart component that acts as a wrapper around Chart.js. */
export class Chart extends LitElement {
  /**
   * CSS styles for the component.
   */
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 10rem;
      min-height: 10rem;
      padding: 1rem;
      box-sizing: border-box;
      flex: 1;
    }

    .parent {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;

  generateColor(index: number) {
    const hue = (index * 137.5) % 360; // Using golden angle
    return `hsl(${hue}, 70%, 50%)`;
  }

  /** The colors used for the chart datasets. If not enough colors are provided, new colors will be generated automatically. */
  @property({ type: Array })
  colors?: string[] = Array.from({ length: 20 }, (_, i) =>
    this.generateColor(i),
  );

  /** The type of chart to be displayed (e.g., 'bar', 'line', 'pie'). */
  @property({ type: String, reflect: true })
  type: Types | null = null;

  /** Specifies whether the x-axis should start at zero. */
  @property({ type: Boolean, reflect: true, attribute: "x-zero" })
  xBeginAtZero?: boolean = true;

  /** Specifies whether the y-axis should start at zero. */
  @property({ type: Boolean, reflect: true, attribute: "y-zero" })
  yBeginAtZero?: boolean = true;

  /** The axis to use for indexing the data ('x' or 'y'). */
  @property({ type: String, reflect: true, attribute: "index-axis" })
  indexAxis?: "x" | "y" = "x";

  /** Specifies whether the bars on the x-axis should be stacked. */
  @property({ type: Boolean, reflect: true, attribute: "x-stacked" })
  xStacked?: boolean;

  /** Specifies whether the bars on the y-axis should be stacked. */
  @property({ type: Boolean, reflect: true, attribute: "y-stacked" })
  yStacked?: boolean;

  /** When true, a loading skeleton is shown. */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** The border color of chart elements when hovered. */
  @property({ type: String, reflect: false })
  hoverBorderColor?: string = "#ffffffff";

  /** Human readable title shown in the chart */
  @property({ type: String, reflect: true })
  label?: string;

  /** The style of the points in a line chart (e.g., 'circle', 'rect'). */
  @property({ type: String, reflect: true, attribute: "point-style" })
  linePointStyle: LinePointStyleType = "circle";

  /** The radius of the points in a line chart. */
  @property({ type: Number, reflect: true })
  pointRadius: number = 10;

  /** Defines how to fill the area under the line in a line chart. */
  @property({ type: String, reflect: true })
  lineFill: LineFillType | false = false;

  /** Specifies whether the background of the chart elements should be transparent. */
  @property({
    type: Boolean,
    reflect: true,
    attribute: "transparent-background",
  })
  transparentBackground: boolean = true;

  /** Specifies whether to display labels on the chart data points. */
  @property({ type: Boolean, reflect: true })
  displayLabels: boolean = true;

  /** The color of the data labels shown on the chart. */
  @property({ type: String, reflect: true, attribute: "data-label-color" })
  dataLabelsColor: string = "#ffffffff";

  /** Specifies whether to draw smooth lines (tension > 0) in a line chart. */
  @property({ type: Boolean, reflect: true })
  smoothLine: boolean = false;

  /** The border color of the chart elements. */
  @property({ type: String, reflect: true })
  borderColor: string = "#000000";

  /** Current input data in library-friendly shape. Implementations should keep this in sync. */
  @property({ type: Object, attribute: false })
  inputData: ChartInputData = { labels: [], datasets: {} };

  /** Specifies whether each bar in a bar chart should have a different color. */
  @property({ type: Boolean, reflect: true })
  colorfulBars?: boolean = false;

  @state()
  private _errorLoading = false;

  /**
   * The function to be executed when loading async data using Chart.loadData
   */
  loadFunction?: ChartLoadFunction;

  /** Asynchronously loads chart data using the provided loadFunction. */
  async loadData(force = false) {
    if (this.inputData.labels.length !== 0 && !force) return false;
    if (!this.loadFunction) return false;
    this.loading = true;
    try {
      const data = await this.loadFunction();
      this.inputData = data;
      this.loading = false;
      this._errorLoading = false;
      this.dispatchEvent(new Event("data-loaded"));
      return true;
    } catch (error: any) {
      this.loading = false;
      if (this.inputData.labels.length !== 0) return false; // Do nothing in case the table already had values
      const errorSlot = this.querySelector("[slot='error-loading']");
      const errorMessageElement = errorSlot?.querySelector(
        "[data-chart-element='error-message']",
      );
      if (
        error instanceof Error &&
        errorMessageElement &&
        error.message.trim() !== ""
      ) {
        errorMessageElement.textContent = error.message;
      }
      this._errorLoading = true;
      return false;
    }
  }

  /** The Chart.js data object. */
  get data() {
    return this.chart!.data;
  }

  protected _options: typeof chartjs.prototype.options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
      datalabels: {
        display: this.displayLabels,
        color: this.dataLabelsColor,
        font: { weight: "bold", family: "Fira Code" },
      },
      title: {
        text: this.label,
        display: true,
      },
    },
    elements: {
      line: {
        tension: this.smoothLine ? 0.4 : 0,
      },
    },
  };

  protected _chartCfg = {
    type: this.type,
    data: {
      labels: [],
      datasets: [],
    },
    options: this._options,
  };

  /** The HTML canvas element where the chart is rendered. */
  protected readonly _canvas = document.createElement("canvas");

  /** Chart.js instance used by the concrete chart. */
  protected chart?: chartjs<Types>;

  /** Color generation function to get default colors */
  private _getDefaultColors(data: ChartInputData) {
    const datasetCount = Object.keys(data.datasets).length;
    const defaultColors = Array.from({ length: datasetCount }, (_, i) =>
      this.generateColor(i),
    );

    return defaultColors;
  }

  /**
   * Type guard to check if data is ScatterInputData
   */
  private isScatterData(
    data: ChartInputValues,
  ): data is { x: number; y: number; r?: number; data?: Record<string, any> } {
    return "x" in data && "y" in data;
  }

  /**
   * Parse the external input data shape into Chart.js data.
   */
  protected parseInputData(value: ChartInputData) {
    const { labels } = value;
    const colorSource =
      this.colors!.length < Object.keys(value.datasets).length
        ? this._getDefaultColors(value)
        : this.colors!;

    const datasets = Object.entries(value.datasets).map(
      ([datasetLabel, inputData], index) => {
        const color = colorSource[index % colorSource.length];

        const isScatterOrBubble =
          this.type === "scatter" || this.type === "bubble";
        const isBar = this.type === "bar";

        let backgroundColor: string | string[];

        if (isScatterOrBubble || (isBar && !this.colorfulBars)) {
          backgroundColor = this.transparentBackground
            ? this.transparentize(color)
            : color;
        } else {
          backgroundColor = this.transparentBackground
            ? colorSource.map((c) => this.transparentize(c))
            : colorSource;
        }

        const dataset: ChartDataSet = {
          label: datasetLabel,
          data: Object.values(inputData).map((info) => {
            // For scatter/bubble charts: extract x, y (and r for bubble)
            if (isScatterOrBubble) {
              if (this.isScatterData(info)) {
                const point: any = { x: info.x, y: info.y };
                if (this.type === "bubble" && info.r !== undefined) {
                  point.r = info.r;
                }
                return point;
              }
              // Fallback for invalid data
              return { x: 0, y: 0 };
            }
            // For other charts: extract value
            if (this.isScatterData(info)) {
              return 0;
            }
            return info.value;
          }),
          backgroundColor,
          borderColor: isScatterOrBubble ? undefined : this.borderColor,
          pointStyle: isScatterOrBubble ? undefined : this.linePointStyle,
          pointRadius: isScatterOrBubble ? undefined : this.pointRadius,
          fill: isScatterOrBubble ? undefined : this.lineFill,
          hoverBorderColor: isScatterOrBubble
            ? undefined
            : this.hoverBorderColor,
        };

        return dataset;
      },
    );

    return {
      labels,
      datasets,
    };
  }

  /** A utility function to make a color transparent. */
  transparentize(color: string, opacity?: number) {
    const alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(color).alpha(alpha).rgbString();
  }

  /** Convert the provided table into the internal inputData and update the chart. */
  updateFromTable(table: Table) {
    const tableData = table.data;
    const labels: string[] = [];
    const datasets: { [datasetLabel: string]: ChartInputValues[] } = {};
    const dataset: ChartInputValues[] = [];

    let nameCounter = 0;
    const datasetLabel = `dataset_${nameCounter}`;
    nameCounter++;

    for (const row of tableData) {
      const { data } = row;
      let nameValue: string | undefined;
      let numericValue: number | undefined;

      for (const [key, value] of Object.entries(data)) {
        if (key === "name" && typeof value === "string") {
          nameValue = value;
        } else if (typeof value === "number") {
          numericValue = value;
        }
      }

      if (nameValue && numericValue !== undefined) {
        labels.push(nameValue);
        dataset.push({ value: numericValue });
      }
    }

    datasets[datasetLabel] = dataset;
    this.inputData = { labels, datasets };
  }

  /** Highlight chart elements that match the predicate. */
  highlight(filterFunction: (entry: ChartInputValues) => boolean) {
    if (!this.chart) return;
    const complyingElements = [];
    const datasets = Object.values(this.inputData.datasets);

    for (const datasetIndex in datasets) {
      const dataset = datasets[datasetIndex];
      for (const dataIndex in dataset) {
        const entry = dataset[dataIndex];
        if (!filterFunction(entry)) continue;

        const indexes = {
          datasetIndex: Number(datasetIndex),
          index: Number(dataIndex),
        };
        complyingElements.push(indexes);
      }
    }
    this.chart.setActiveElements(complyingElements);
    this.chart.update();
  }

  /** Remove or hide values that don't match the predicate. */
  filterByValue(filterFunction: (entry: ChartInputValues) => boolean) {
    if (!this.chart) return;
    const data = structuredClone(this.inputData);

    for (const dataset of Object.values(data.datasets)) {
      for (const index in dataset) {
        if (!filterFunction(dataset[index])) {
          delete dataset[index];
        }
      }
    }

    this.chart.data = this.parseInputData(data);
    this.chart.update();
  }

  private triggerFilter(detail: {
    label: string;
    hidden: string[];
    visible: string[];
  }) {
    this.dispatchEvent(new CustomEvent("labelfilter", { detail }));
  }

  /** Filter chart by label. */
  filterByLabel(label: string) {
    if (!this.chart || !this.chart.data.labels) return;

    // Find the index of the label in the chart's data
    const index = this.chart.data.labels.indexOf(label);
    if (index === -1) {
      return; // Label not found
    }

    // Toggle the visibility of the data at that index
    this.chart.toggleDataVisibility(index);

    const visible = this.chart.data.labels.filter((_, i) =>
      this.chart!.getDataVisibility(i),
    ) as string[];
    const hidden = this.chart.data.labels.filter(
      (_, i) => !this.chart!.getDataVisibility(i),
    ) as string[];

    // Update the chart to apply changes and trigger animations
    this.chart.update();

    this.triggerFilter({ label, visible, hidden });
  }

  /** Reset chart to original input data. */
  reset() {
    this.chart!.data = this.parseInputData(this.inputData);
    this.chart!.update();
  }

  /** Handles property updates and redraws the chart if necessary. */
  protected updated(changedProperties: Map<string, unknown>) {
    if (!this.chart) return;

    const shouldRecreate =
      changedProperties.has("type") ||
      changedProperties.has("indexAxis") ||
      changedProperties.has("linePointStyle") ||
      changedProperties.has("pointRadius") ||
      changedProperties.has("lineFill");

    if (shouldRecreate) {
      this.chart.destroy();

      const options: typeof this.chart.options = structuredClone(this._options);

      // The label and inputData are needed for recreation anyway.
      if (this.label !== undefined) {
        if (!options.plugins) options.plugins = {};
        options.plugins.title = { text: this.label, display: true };
      }

      // Handle indexAxis
      if (this.indexAxis !== undefined) {
        options.indexAxis = this.indexAxis;
      }

      this.chart = new chartjs<Types, any[], string>(this._canvas, {
        type: this.type!,
        data: this.parseInputData(this.inputData),
        options,
      });
    } else {
      for (const property of changedProperties.keys()) {
        switch (property) {
          case "label":
            this.chart.options.plugins!.title = {
              text: this.label,
              display: this.label !== undefined,
            };
            break;

          case "inputData":
            this.chart.data = this.parseInputData(this.inputData);
            break;

          case "smoothLine":
            if (
              this.chart.options.elements &&
              this.chart.options.elements.line
            ) {
              this.chart.options.elements.line.tension = this.smoothLine
                ? 0.4
                : 0;
            }
            break;

          case "dataLabelsColor":
            this.chart.options.plugins!.datalabels!.color =
              this.dataLabelsColor;
            break;

          case "displayLabels":
            this.chart.options.plugins!.datalabels!.display =
              this.displayLabels;
            break;

          case "borderColor":
            this.chart.data.datasets.forEach((dataset) => {
              dataset.borderColor = this.borderColor;
            });
            break;

          case "xStacked":
            if (this.type === "bar" && this.chart.options.scales?.x) {
              Object.assign(this.chart.options.scales.x, {
                stacked: this.xStacked,
              });
            }
            break;

          case "yStacked":
            if (this.type === "bar" && this.chart.options.scales?.y) {
              Object.assign(this.chart.options.scales.y, {
                stacked: this.yStacked,
              });
            }
            break;

          case "transparentBackground": {
            const colors =
              this.colors || this._getDefaultColors(this.inputData);
            const isScatterOrBubble =
              this.type === "scatter" || this.type === "bubble";
            const isBar = this.type === "bar";
            this.chart.data.datasets.forEach((dataset, index) => {
              const color = colors[index % colors.length];
              let newBackgroundColor: string | string[];
              if (isScatterOrBubble || (isBar && !this.colorfulBars)) {
                newBackgroundColor = this.transparentBackground
                  ? this.transparentize(color)
                  : color;
              } else {
                newBackgroundColor = this.transparentBackground
                  ? colors.map((c) => this.transparentize(c))
                  : colors;
              }
              dataset.backgroundColor = newBackgroundColor;
            });
            break;
          }

          case "colors": {
            const colors =
              this.colors || this._getDefaultColors(this.inputData);
            const isScatterOrBubble =
              this.type === "scatter" || this.type === "bubble";
            const isBar = this.type === "bar";
            this.chart.data.datasets.forEach((dataset, index) => {
              const color = colors[index % colors.length];
              let newBackgroundColor: string | string[];
              if (isScatterOrBubble || (isBar && !this.colorfulBars)) {
                newBackgroundColor = this.transparentBackground
                  ? this.transparentize(color)
                  : color;
              } else {
                newBackgroundColor = this.transparentBackground
                  ? colors.map((c) => this.transparentize(c))
                  : colors;
              }
              dataset.backgroundColor = newBackgroundColor;
            });
            break;
          }
          default:
        }
      }
    }

    this.chart.update();
    this.chart.resize();
  }

  /**
   * Helper: update the Chart.js title from the `chartTitle` property if a chart exists.
   * Subclasses can call this from their lifecycle hooks (for example, in updated()).
   */
  protected updateChartTitle() {
    if (!this.chart) return;
    try {
      // guard access to plugin config using optional chaining
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const opts: any = this.chart.options;
      if (opts && opts.plugins && opts.plugins.title) {
        opts.plugins.title.text = this.label;
        this.chart.update();
      }
    } catch (e) {
      // swallow any errors to avoid breaking lifecycle; concrete classes can opt-in to stricter handling
      // eslint-disable-next-line no-console
      console.warn("Chart: failed to update chart title", e);
    }
  }

  /** Creates the chart instance after the component is first rendered. */
  protected firstUpdated() {
    this.chart = new chartjs<Types, any[], string>(
      this._canvas,
      this._chartCfg,
    );

    // Set resize observer to make the chart responsive
    const parent = this.renderRoot.querySelector(".parent");
    if (parent) {
      new ResizeObserver(() => this.chart!.resize()).observe(parent);
    }

    // Event definition to allow adding an EventListener when a section is clicked
    this._canvas.onclick = (event) => {
      if (this.inputData.labels.length === 0) return;

      const elements = this.chart!.getElementsAtEventForMode(
        event,
        "point",
        { intersect: true },
        false,
      );

      for (const element of elements) {
        const { index, datasetIndex } = element;
        const label = this.inputData.labels[index];
        const values: ChartInputValues[] = [];

        for (const dataset of Object.values(this.inputData.datasets)) {
          values.push(dataset[index]);
        }

        const detail: DataClickDetail = {
          datasetIndex,
          index,
          values,
          label,
          value: { value: 0 },
        };

        const getIndexValue = () =>
          Object.values(this.inputData.datasets)?.[datasetIndex]?.[index];

        Object.defineProperty(detail, "value", {
          get: () => getIndexValue(),
        });

        this.dispatchEvent(
          new CustomEvent<DataClickDetail>("sectionclick", { detail }),
        );
      }
    };
  }

  /** Renders the chart canvas and any slotted content. */
  protected render() {
    if (this.loading) return loadingSkeleton();
    if (this._errorLoading) {
      return html`<slot name="error-loading"></slot>`;
    }
    let missingDataSlot: TemplateResult | undefined;
    if (this.inputData.labels.length === 0) {
      this._canvas.style.display = "none";
      missingDataSlot = html`
        <slot name="missing-data">
          <bim-label>No data to display in this chart.</bim-label>
        </slot>
      `;
    } else {
      this._canvas.style.display = "block";
    }

    return html`
      <div class="parent">
        ${missingDataSlot} ${this._canvas}
        <slot name="labels"></slot>
      </div>
    `;
  }
}

export * from "./src";
