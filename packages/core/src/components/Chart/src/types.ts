/** The structure for individual data points within a scatter or bubble chart. Use x and y coordinates. */
export type ScatterInputData = {
  x: number;
  y: number;
  r?: number;
  data?: Record<string, any>;
};

/** The structure for individual data points within general charts (bar, line, pie, etc). Use a single numeric value. */
export type GeneralInputData = { value: number; data?: Record<string, any> };

/** Union type for all chart data points. The specific type depends on the chart type. */
export type ChartInputValues = ScatterInputData | GeneralInputData;
// export type ChartInputValues = { value: number; data?: Record<string, any> };

/** The detail object for the 'sectionclick' event, containing information about the clicked chart element. */
export interface DataClickDetail {
  datasetIndex: number;
  index: number;
  label: string;
  values: ChartInputValues[];
  value: { ["value"]: number };
}

/** The required data structure for populating a chart. */
export type ChartInputData = {
  labels: string[];
  datasets: {
    [datasetLabel: string]: Array<ChartInputValues>;
  };
  backgroundColor?: string;
};

/** The possible styles for points in a line chart. */
export type LinePointStyleType =
  | "circle"
  | "cross"
  | "crossRot"
  | "dash"
  | "line"
  | "rect"
  | "rectRounded"
  | "rectRot"
  | "triangle"
  | "star"
  | false;

/** The fill options for the area under a line in a line chart. */
export type LineFillType = "origin" | "start" | "end" | false;

/** The structure for a single dataset to be used in Chart.js. */
export type ChartDataSet = {
  label: string;
  data: any[];
  backgroundColor?: string | string[];
  borderColor?: string;
  pointStyle?: LinePointStyleType;
  pointRadius?: number;
  pointBackgroundColor?: string;
  fill?: LineFillType;
  hoverBorderColor?: string;
};

/** The available chart types. */
export type Types =
  | "bar"
  | "line"
  | "pie"
  | "scatter"
  | "radar"
  | "bubble"
  | "doughnut"
  | "polarArea";

/** The function signature for asynchronously loading chart data. */
export type ChartLoadFunction = () => Promise<ChartInputData>;
