import { Manager } from "../Manager";

// Icons no family has, drawn here in one stroke, no fill, so they stand among the rest. A CLOSED list:
// a drawing is added here, by hand, and asked for as `drawn:<name>`.
//
// slab: a thick plate seen in perspective (Antonio, 19-11: the floor plan it had read as a drawing, not
// as a slab). The top face is a rhombus, its two front faces drop 4 units, the near edge joins them.
const DRAWINGS: Record<string, string> = {
  slab: `<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5l9 4.5l-9 4.5l-9-4.5z"/><path d="M3 10v4l9 4.5l9-4.5v-4"/><path d="M12 14.5v4"/></g>`,
};

/** The names drawn here, each asked for as `drawn:<name>`. */
export const DRAWN = Object.keys(DRAWINGS);

// Registered once, as `drawn:<name>`. Idempotent: iconify merges.
Manager.addIconsCollection(
  Object.fromEntries(DRAWN.map((name) => [name, { body: DRAWINGS[name] }])),
  { prefix: "drawn" },
);
