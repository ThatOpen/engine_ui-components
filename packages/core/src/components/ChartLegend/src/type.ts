/** The data associated with a chart label. */
export type LabelData = { [label: string]: any };

/** The event data dispatched when a label is clicked. */
export type LabelEventData = {
  label: string;
  visibility: boolean;
  data: LabelData;
};
