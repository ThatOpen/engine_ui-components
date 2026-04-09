/* MD
  ### A Picture is Worth a Thousand BIM Elements 📊
  ---
  Let's be real, BIM models are packed with overwhelming amounts of data. Trying to make sense of it all can feel like a chore. What if you could visualize all that information in a simple, clear, and interactive way? That's where charts come in! The downside? Building them from scratch, handling different data structures, and making them look good is a ton of work. But here's the great part: we've built an awesome Chart Web Component that does the heavy lifting for you. You bring the data, and we'll make it shine. Ready to see it in action? 👇

  ### 🎨 Initializing the Library and Creating Your First Chart
  ---
  Just like any other component in our library, the first step is to initialize `@thatopen/ui` in your app. You only need to do this once to unlock all the awesome Web Components we offer. It's super straightforward:
*/

// You have to import from "@thatopen/ui"
import * as BUI from "../..";

BUI.Manager.init();

/* MD
  ### 🎲 Preparing the Data
  ---
  A dashboard of charts is only as good as the data behind it. To keep the tutorial
  self-contained we use two small helpers that produce random numbers: one for the
  cartesian charts (bar, line, radar) where negative values make sense, and one for
  the part-of-a-whole charts (pie, doughnut, polarArea) where every slice must be
  positive. The helpers return data in the shape `bim-chart` expects — a list of
  labels and one or more named datasets.
*/

const signedValue = () => Math.round(Math.random() * 180 - 90);
const positiveValue = () => Math.round(Math.random() * 90 + 10);

const categoryLabels = ["Walls", "Slabs", "Columns", "Windows", "Doors"];

const cartesianData = () => ({
  labels: categoryLabels,
  datasets: {
    "Series A": categoryLabels.map(() => ({ value: signedValue() })),
    "Series B": categoryLabels.map(() => ({ value: signedValue() })),
  },
});

const positiveData = () => ({
  labels: categoryLabels,
  datasets: {
    "Series A": categoryLabels.map(() => ({ value: positiveValue() })),
  },
});

const scatterData = (radius: number) => {
  const points: BUI.ChartInputValues[] = [];
  const labels: string[] = [];
  for (let i = 0; i < 12; i++) {
    labels.push(`Point ${i + 1}`);
    points.push({
      x: Math.round(Math.random() * 100),
      y: Math.round(Math.random() * 100),
      r: radius,
    });
  }
  return { labels, datasets: { "Series A": points } };
};

/* MD
  ### ⚙️ Building the Controls
  ---
  The chart component exposes a handful of visual properties. To showcase them
  interactively we'll wire them up to a small panel of BUI controls — dropdowns for
  index axis, point shape and fill direction, sliders for radius, and checkboxes for
  stacking and label visibility. Each control updates every chart in the dashboard
  at once so you can compare how the same setting affects different chart types.
*/

const panel = BUI.Component.create(() => {
  const indexAxisDropdown = document.createElement("bim-dropdown");
  indexAxisDropdown.label = "Index Axis";
  for (const a of ["x", "y"]) {
    const option = document.createElement("bim-option");
    option.value = a;
    option.label = a.toUpperCase();
    indexAxisDropdown.appendChild(option);
  }

  const pointStyleDropdown = document.createElement("bim-dropdown");
  pointStyleDropdown.label = "Point Style";
  const styles = ["circle", "cross", "crossRot", "dash", "line", "rect", "rectRounded", "rectRot", "triangle", "star"];
  for (const style of styles) {
    const option = document.createElement("bim-option");
    option.value = style;
    option.label = style[0].toUpperCase() + style.slice(1);
    pointStyleDropdown.appendChild(option);
  }

  const lineFillDropdown = document.createElement("bim-dropdown");
  lineFillDropdown.label = "Line Fill";
  for (const fill of ["origin", "start", "end", "false"]) {
    const option = document.createElement("bim-option");
    option.value = fill;
    option.label = fill[0].toUpperCase() + fill.slice(1);
    lineFillDropdown.appendChild(option);
  }

  const pointRadiusInput = document.createElement("bim-number-input");
  pointRadiusInput.label = "Point Radius";

  const bubbleRadiusInput = document.createElement("bim-number-input");
  bubbleRadiusInput.label = "Bubble Radius";

  const xStackedCheck = document.createElement("bim-checkbox");
  xStackedCheck.label = "X Stacked";

  const yStackedCheck = document.createElement("bim-checkbox");
  yStackedCheck.label = "Y Stacked";

  const transparentBackgroundCheck = document.createElement("bim-checkbox");
  transparentBackgroundCheck.label = "Transparent Background";

  const lineSmoothingCheckbox = document.createElement("bim-checkbox");
  lineSmoothingCheckbox.label = "Line Smoothing";

  const displayLabelsCheckbox = document.createElement("bim-checkbox");
  displayLabelsCheckbox.label = "Display Labels";

  const dataLabelsColorInput = document.createElement("bim-color-input");
  dataLabelsColorInput.label = "Data Labels Color";

  const borderColorInput = document.createElement("bim-color-input");
  borderColorInput.label = "Border Color";

  const toggleLoadingBtn = document.createElement("bim-button");
  toggleLoadingBtn.label = "Toggle Loading";

  /* MD
    ### 📊 Creating the Chart Dashboard
    ---
    The dashboard is a single CSS grid that auto-fits the available width: each
    chart lives in its own sized card so rows and columns stay aligned no matter
    how many charts we include. Every `bim-chart` is created with the same starting
    configuration — a transparent background, white data labels, and no border —
    so the charts feel like part of a single dashboard rather than nine independent
    widgets. Pie-family charts get the positive-only data helper so their slices
    always make sense; cartesian charts get the signed helper.
  */

  const chartTypes: { type: BUI.Chart["type"]; title: string; positive: boolean }[] = [
    { type: "bar",       title: "Bar",       positive: false },
    { type: "line",      title: "Line",      positive: false },
    { type: "radar",     title: "Radar",     positive: false },
    { type: "pie",       title: "Pie",       positive: true  },
    { type: "doughnut",  title: "Doughnut",  positive: true  },
    { type: "polarArea", title: "Polar Area",positive: true  },
    { type: "scatter",   title: "Scatter",   positive: true  },
    { type: "bubble",    title: "Bubble",    positive: true  },
  ];

  const charts: BUI.Chart[] = [];
  let chartLegend: BUI.ChartLegend | undefined;
  let currentBubbleRadius = 10;

  const onChartCreated = (e: Element | undefined, type: BUI.Chart["type"], positive: boolean) => {
    if (!e) return;
    const chart = e as BUI.Chart;
    chart.inputData =
      type === "scatter" || type === "bubble"
        ? scatterData(currentBubbleRadius)
        : positive ? positiveData() : cartesianData();
    chart.label = "";
    chart.indexAxis = "x";
    chart.linePointStyle = "circle";
    chart.lineFill = "origin";
    chart.pointRadius = 4;
    chart.xStacked = false;
    chart.yStacked = false;
    chart.transparentBackground = true;
    chart.dataLabelsColor = "#ffffff";
    chart.borderColor = "#00000000";
    chart.smoothLine = true;
    chart.displayLabels = true;
    charts.push(chart);
  };

  const onChartLegendCreated = (e?: Element) => {
    if (!e) return;
    chartLegend = e as BUI.ChartLegend;
    chartLegend.charts = charts;
  };

  const onSectionClick = (data: CustomEvent<BUI.DataClickDetail>) => {
    console.log(data.detail);
  };

  /* MD
    ### 🔌 Wiring Controls to Charts
    ---
    Each control broadcasts its change to every chart in the dashboard, so tweaking
    one value updates the whole grid at once. This makes it easy to see how a single
    setting affects every chart type side by side. We also listen for `sectionclick`
    on each chart, which fires whenever the user clicks a bar, slice or point and
    gives you the underlying data — perfect for drill-down UIs.
  */

  indexAxisDropdown.addEventListener("change", () => {
    charts.forEach((c) => { c.indexAxis = indexAxisDropdown.value[0]; });
    BUI.ContextMenu.removeMenus();
  });

  xStackedCheck.addEventListener("change", () => {
    charts.forEach((c) => { c.xStacked = xStackedCheck.value; });
  });

  yStackedCheck.addEventListener("change", () => {
    charts.forEach((c) => { c.yStacked = yStackedCheck.value; });
  });

  pointStyleDropdown.addEventListener("change", () => {
    charts.forEach((c) => { c.linePointStyle = pointStyleDropdown.value[0] as BUI.LinePointStyleType; });
    BUI.ContextMenu.removeMenus();
  });

  pointRadiusInput.addEventListener("change", () => {
    charts.forEach((c) => { c.pointRadius = pointRadiusInput.value; });
  });

  lineFillDropdown.addEventListener("change", () => {
    charts.forEach((c) => { c.lineFill = lineFillDropdown.value[0] as BUI.LineFillType; });
    BUI.ContextMenu.removeMenus();
  });

  transparentBackgroundCheck.addEventListener("change", () => {
    charts.forEach((c) => { c.transparentBackground = transparentBackgroundCheck.value; });
  });

  dataLabelsColorInput.addEventListener("input", () => {
    charts.forEach((c) => { c.dataLabelsColor = dataLabelsColorInput.value.color; });
  });

  lineSmoothingCheckbox.addEventListener("change", () => {
    charts.forEach((c) => { c.smoothLine = lineSmoothingCheckbox.value; });
  });

  displayLabelsCheckbox.addEventListener("change", () => {
    charts.forEach((c) => { c.displayLabels = displayLabelsCheckbox.value; });
  });

  borderColorInput.addEventListener("input", () => {
    charts.forEach((c) => { c.borderColor = borderColorInput.value.color; });
  });

  toggleLoadingBtn.addEventListener("click", () => {
    charts.forEach((c) => { c.loading = !c.loading; });
  });

  bubbleRadiusInput.addEventListener("change", () => {
    currentBubbleRadius = bubbleRadiusInput.value;
    charts.forEach((c) => {
      if (c.type === "bubble" || c.type === "scatter") {
        c.inputData = scatterData(currentBubbleRadius);
      }
    });
  });

  // Set initial control values
  indexAxisDropdown.value = ["x"];
  pointStyleDropdown.value = ["circle"];
  lineFillDropdown.value = ["origin"];
  pointRadiusInput.value = 4;
  bubbleRadiusInput.value = 10;
  xStackedCheck.checked = false;
  yStackedCheck.checked = false;
  transparentBackgroundCheck.checked = true;
  dataLabelsColorInput.value = { color: "#ffffff" };
  borderColorInput.value = { color: "#00000000" };
  lineSmoothingCheckbox.checked = true;
  displayLabelsCheckbox.checked = true;

  /* MD
    ### 🤓 Putting Everything Together
    ---
    The final layout is a two-column flex: on the left a scrollable CSS grid
    that auto-fits chart cards so the dashboard reflows gracefully on narrow
    screens, and on the right a fixed-width sidebar with the shared `bim-chart-legend`
    (clicking an entry toggles that dataset across every chart at once) and the
    control panel. Every chart card has a fixed height, so rows stay aligned
    regardless of the chart type.
  */

  const chartCards = chartTypes.map(({ type, title, positive }) => BUI.html`
    <div style="
      display: flex;
      flex-direction: column;
      background: var(--bim-ui_bg-contrast-10);
      border-radius: 0.5rem;
      padding: 0.75rem;
      min-height: 18rem;
    ">
      <div style="
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--bim-ui_main-contrast);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.5rem;
        opacity: 0.7;
      ">${title}</div>
      <div style="flex: 1; min-height: 0;">
        <bim-chart
          type="${type}"
          @sectionclick=${onSectionClick}
          ${BUI.ref((e) => onChartCreated(e, type, positive))}
        ></bim-chart>
      </div>
    </div>
  `);

  return BUI.html`
    <bim-panel label="Charts" style="height: 100%; width: 100%;">
      <div style="
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
      ">
        <!-- Chart grid (left) -->
        <div style="flex: 1; min-width: 0; overflow: auto;">
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            gap: 1rem;
          ">
            ${chartCards}
          </div>
        </div>

        <!-- Sidebar (right) -->
        <div style="
          width: 22rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow: auto;
        ">
          <bim-panel-section label="🔑 Legend" style="flex: 0 0 auto;">
            <bim-chart-legend ${BUI.ref(onChartLegendCreated)}></bim-chart-legend>
          </bim-panel-section>

          <bim-panel-section label="⚙️ Controls" style="flex: 1 1 auto;">
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${indexAxisDropdown}
              ${pointStyleDropdown}
              ${lineFillDropdown}
              ${pointRadiusInput}
              ${bubbleRadiusInput}
              ${xStackedCheck}
              ${yStackedCheck}
              ${transparentBackgroundCheck}
              ${lineSmoothingCheckbox}
              ${displayLabelsCheckbox}
              ${dataLabelsColorInput}
              ${borderColorInput}
              ${toggleLoadingBtn}
            </div>
          </bim-panel-section>
        </div>
      </div>
    </bim-panel>
  `;
});

document.body.append(panel);

/* MD
  And that's it! A single CSS grid, a unified legend, and one set of controls
  drive the entire dashboard — change any setting and every chart updates at once.
  From here, plug in real data from your BIM model and you have an interactive
  analytics view with barely any code. Happy coding! 🚀
*/
