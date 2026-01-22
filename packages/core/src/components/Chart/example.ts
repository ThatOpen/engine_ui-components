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
  Charts are all about data visualization. This data can come from your BIM model, an external API, or, as we'll show in this example, a simple table. To get started, let's create a `bim-table` component that will generate some random data for us. This table will serve as the dynamic data source for one of our charts.
*/

const panel = BUI.Component.create(() => {
  /* MD
    ### ⚙️ Building the Controls
    ---
    One of the most powerful features of our Chart component is its customizability. You can change everything from the chart type to the styling of points and lines. To demonstrate this, we'll create a set of UI controls. These dropdowns, checkboxes, and inputs will let you manipulate the chart's properties in real-time and see the changes instantly.
  */
  const indexAxisDropdown = document.createElement("bim-dropdown");
  indexAxisDropdown.label = "Index Axis";
  const axis = ["x", "y"];
  for (const a of axis) {
    const option = document.createElement("bim-option");
    option.value = a;
    option.label = a.toUpperCase();
    indexAxisDropdown.appendChild(option);
  }

  const pointStyleDropdown = document.createElement("bim-dropdown");
  pointStyleDropdown.label = "Point Style";
  const styles = [
    "circle",
    "cross",
    "crossRot",
    "dash",
    "line",
    "rect",
    "rectRounded",
    "rectRot",
    "triangle",
    "star",
  ];
  for (const style of styles) {
    const option = document.createElement("bim-option");
    option.value = style;
    option.label = style[0].toUpperCase() + style.slice(1);
    pointStyleDropdown.appendChild(option);
  }

  const lineFillDropdown = document.createElement("bim-dropdown");
  lineFillDropdown.label = "Line Fill";
  const fills = ["origin", "start", "end", "false"];
  for (const fill of fills) {
    const option = document.createElement("bim-option");
    option.value = fill;
    option.label = fill[0].toUpperCase() + fill.slice(1);
    lineFillDropdown.appendChild(option);
  }

  const pointRadiusInput = document.createElement("bim-number-input");
  pointRadiusInput.label = "Point Radius";

  const xStackedCheck = document.createElement("bim-checkbox");
  xStackedCheck.label = "X Stacked";

  const yStackedCheck = document.createElement("bim-checkbox");
  yStackedCheck.label = "Y Stacked";

  const transparentBackgroundCheck = document.createElement("bim-checkbox");
  transparentBackgroundCheck.label = "Transparent Background";

  const dataLabelsColorInput = document.createElement("bim-color-input");
  dataLabelsColorInput.label = "Data Labels Color";

  const borderColorInput = document.createElement("bim-color-input");
  borderColorInput.label = "Border Color";

  const lineSmoothingCheckbox = document.createElement("bim-checkbox");
  lineSmoothingCheckbox.label = "Line Smoothing";

  const displayLabelsCheckbox = document.createElement("bim-checkbox");
  displayLabelsCheckbox.label = "Display Labels";

  const bubbleRadiusInput = document.createElement("bim-number-input");
  bubbleRadiusInput.label = "Bubble Radius";

  const toggleLoadingBtn = document.createElement("bim-button");
  toggleLoadingBtn.label = "Toggle Loading";

  /* MD
    ### 🔗 Connecting Data and Controls
    ---
    Now for the exciting part: bringing the chart to life! In the following section, we'll create instances of all available `bim-chart` types and arrange them in a dashboard matrix. These charts will all share the same data and be controlled by a unified set of parameters.

    Then, we'll set up all the event listeners. This is the core logic that connects the UI controls we just created to all the charts' properties. When you change a value in a dropdown or check a box, these listeners will update all applicable charts instantly.

    We'll also introduce the `<bim-chart-legend>` component. This handy element automatically generates a legend for your charts. Clicking on a label will toggle the visibility of the corresponding dataset, providing a simple yet powerful way to filter the data across all charts.

    Finally, we'll show you how to listen for a `sectionclick` event, which fires whenever a user clicks on a part of any chart (like a bar or a pie slice), giving you access to the underlying data.
  */
  const chartTypes = [
    "bar",
    "line",
    "pie",
    "radar",
    "doughnut",
    "polarArea",
    "scatter",
    "bubble",
  ];
  const charts: BUI.Chart[] = [];
  let chartLegend: BUI.ChartLegend | undefined;
  let currentBubbleRadius = 10;

  const randomValue = () => Math.floor(Math.random() * 200 - 100);

  const generateChartData = () => ({
    labels: ["Orange", "Green", "Red", "Blue", "Yellow"],
    datasets: {
      dataset1: [
        { value: randomValue() },
        { value: randomValue() },
        { value: randomValue() },
        { value: randomValue() },
        { value: randomValue() },
      ],
      dataset2: [
        { value: randomValue() },
        { value: randomValue() },
        { value: randomValue() },
      ],
    },
  });

  const onScatterCreated = () => {
    const labels: string[] = [];
    const datasets: { [datasetLabel: string]: BUI.ChartInputValues[] } = {};
    const dataset: BUI.ChartInputValues[] = [];
    for (let i = 0; i < 10; i++) {
      labels.push(`Point ${i + 1}`);
      dataset.push({
        x: Math.floor(Math.random() * 100),
        y: Math.floor(Math.random() * 100),
        r: currentBubbleRadius,
      });
    }
    datasets["dataset1"] = dataset;
    return {
      labels,
      datasets,
    };
  };

  const onChartCreated = (e?: Element, type?: string) => {
    if (!e) return;
    const chart = e as BUI.Chart;
    chart.inputData =
      type === "scatter" || type === "bubble"
        ? onScatterCreated()
        : generateChartData();
    chart.label = type ? type.charAt(0).toUpperCase() + type.slice(1) : "";

    // Apply predetermined property values to the chart
    chart.indexAxis = "x";
    chart.linePointStyle = "circle";
    chart.lineFill = "origin";
    chart.pointRadius = 4;
    chart.xStacked = false;
    chart.yStacked = false;
    chart.transparentBackground = false;
    chart.dataLabelsColor = "#000000";
    chart.borderColor = "#000000";
    chart.smoothLine = false;
    chart.displayLabels = false;

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

  // Setup event listeners for all controls
  indexAxisDropdown.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.indexAxis = indexAxisDropdown.value[0];
    });
    BUI.ContextMenu.removeMenus();
  });

  xStackedCheck.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.xStacked = xStackedCheck.value;
    });
  });

  yStackedCheck.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.yStacked = yStackedCheck.value;
    });
  });

  pointStyleDropdown.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.linePointStyle = pointStyleDropdown
        .value[0] as BUI.LinePointStyleType;
    });
    BUI.ContextMenu.removeMenus();
  });

  pointRadiusInput.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.pointRadius = pointRadiusInput.value;
    });
  });

  lineFillDropdown.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.lineFill = lineFillDropdown.value[0] as BUI.LineFillType;
    });
    BUI.ContextMenu.removeMenus();
  });

  transparentBackgroundCheck.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.transparentBackground = transparentBackgroundCheck.value;
    });
  });

  dataLabelsColorInput.addEventListener("input", () => {
    charts.forEach((chart) => {
      chart.dataLabelsColor = dataLabelsColorInput.value.color;
    });
  });

  lineSmoothingCheckbox.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.smoothLine = lineSmoothingCheckbox.value;
    });
  });

  displayLabelsCheckbox.addEventListener("change", () => {
    charts.forEach((chart) => {
      chart.displayLabels = displayLabelsCheckbox.value;
    });
  });

  borderColorInput.addEventListener("input", () => {
    charts.forEach((chart) => {
      chart.borderColor = borderColorInput.value.color;
    });
  });

  toggleLoadingBtn.addEventListener("click", () => {
    charts.forEach((chart) => {
      chart.loading = !chart.loading;
    });
  });

  bubbleRadiusInput.addEventListener("change", () => {
    currentBubbleRadius = bubbleRadiusInput.value;
    charts.forEach((chart) => {
      if (chart.type === "bubble") {
        chart.inputData = onScatterCreated();
      }
    });
  });

  // Set initial values
  indexAxisDropdown.value = ["x"];
  pointStyleDropdown.value = ["circle"];
  lineFillDropdown.value = ["origin"];
  pointRadiusInput.value = 4;
  bubbleRadiusInput.value = 10;
  xStackedCheck.checked = false;
  yStackedCheck.checked = false;
  transparentBackgroundCheck.checked = false;
  dataLabelsColorInput.value = { color: "#000000" };
  borderColorInput.value = { color: "#000000" };
  lineSmoothingCheckbox.checked = false;
  displayLabelsCheckbox.checked = false;

  /* MD
    ### 📊 Chart Dashboard Matrix
    ---
    Here we create a responsive matrix layout that displays all available chart types side by side. Each chart is initialized with the same data, making it easy to compare different visualization styles for the same information.
  */

  const chartMatrixRows = [];
  for (let i = 0; i < chartTypes.length; i += 2) {
    const row = BUI.html`
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <bim-chart type="${chartTypes[i]}" @sectionclick=${onSectionClick} ${BUI.ref((e) => onChartCreated(e, chartTypes[i]))}></bim-chart>
        ${i + 1 < chartTypes.length ? BUI.html`<bim-chart type="${chartTypes[i + 1]}" @sectionclick=${onSectionClick} ${BUI.ref((e) => onChartCreated(e, chartTypes[i + 1]))}></bim-chart>` : BUI.html`<div style="flex: 1;"></div>`}
      </div>
    `;
    chartMatrixRows.push(row);
  }

  /* MD
    ### 🤓 Putting Everything Together
    ---
    As everything is already setup, let's create a comprehensive dashboard that combines the chart matrix, the unified legend, and all the control parameters in a single organized view.
  */

  return BUI.html`  <bim-panel label="Charts" style="height: 100vh; display: flex; flex-direction: row; width: 100%; height: 100%; gap: 1rem;">
    <div style="display: flex; flex-direction: row; width: 100%; height: 100%; gap: 1rem;">
      <!-- Left Column: Chart Matrix Dashboard -->
      <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
        <bim-panel-section label="📊 Chart Types Dashboard">
          <div style="flex: 1; overflow: auto;">
            ${chartMatrixRows}
          </div>
        </bim-panel-section>
      </div>

      <div style="width: 22rem; display: flex; flex-direction: column; gap: 1rem; overflow: auto;">
        <bim-panel-section label="🔑 Legend" style="flex: 0 0 auto;">
          <bim-chart-legend ${BUI.ref(onChartLegendCreated)}></bim-chart-legend>
        </bim-panel-section>
  
        <!-- Control Parameters Section -->
        <bim-panel-section label="⚙️ Control Parameters" style="flex: 1; overflow: auto;">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${indexAxisDropdown}
            ${pointStyleDropdown}
            ${lineFillDropdown}
            ${pointRadiusInput}
            ${bubbleRadiusInput}
            ${xStackedCheck}
            ${yStackedCheck}
            ${transparentBackgroundCheck}
            ${dataLabelsColorInput}
            ${borderColorInput}
            ${lineSmoothingCheckbox}
            ${displayLabelsCheckbox}
            ${toggleLoadingBtn}
          </div>
        </bim-panel-section>
      </div>
    </div>
  </bim-panel>`;
});

document.body.append(panel);

/* MD
  And that's a wrap! As you can see, the Chart component is incredibly flexible, allowing you to create a wide variety of interactive and customizable data visualizations with minimal effort. This dashboard approach lets you compare different chart types side-by-side, all controlled by a unified set of parameters and a shared legend. Now you're ready to start turning your BIM data into beautiful, insightful charts displayed across multiple visualization styles. Happy coding!
*/
