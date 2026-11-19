import { Manager } from "../Manager";

// Icons no family has as we need them, drawn here as tabler draws: one stroke 2 wide, round ends, no fill, on a
// 24 grid, so they stand among the rest as one family (Antonio, 19-11: «me gustaría que los iconos fueran más
// uniformes»: lineal, sencillo). A CLOSED list: a drawing is added here, by hand, and asked for as `drawn:<name>`.
// Each is lines (`M x y L x y … [Z]`) and, where it needs them, circles `[cx, cy, r]`.
type Drawing = { paths: string[]; circles?: [number, number, number][] };

const DRAWINGS: Record<string, Drawing> = {
  // A thick plate in perspective: the top a rhombus, the two front faces under it, the near edge between.
  slab: { paths: ["M12 5.5 L21 10 L12 14.5 L3 10 Z", "M3 10 L3 14 L12 18.5 L21 14 L21 10", "M12 14.5 L12 18.5"] },
  // A box seen from a corner with its two back flaps open: any thing placed whole.
  "box-open": {
    paths: [
      "M4 10 L12 14 L20 10",
      "M4 10 L12 6 L20 10",
      "M4 10 L2 6 L10 2 L12 6",
      "M20 10 L22 6 L14 2 L12 6",
      "M4 10 L4 17 L12 21 L20 17 L20 10",
      "M12 14 L12 21",
    ],
  },
  // A handrail on two posts, a bottom rail and two balusters.
  railing: { paths: ["M3 6 L21 6", "M3 17 L21 17", "M5 6 L5 21", "M19 6 L19 21", "M9.67 6 L9.67 17", "M14.33 6 L14.33 17"] },
  // The slope, as a wedge.
  ramp: { paths: ["M3 19 L21 19 L21 8 Z"] },
  // A pitched roof with its thickness.
  roof: { paths: ["M2 13 L12 5 L22 13 L22 17 L12 9 L2 17 Z"] },
  // A wall as two courses of bricks, plain (tabler's has too many).
  wall: { paths: ["M3 6 L21 6 L21 18 L3 18 Z", "M3 12 L21 12", "M10 6 L10 12", "M14 12 L14 18"] },
  // The ground as two peaks (tabler's mountain read as a volcano, Antonio 19-11).
  ground: { paths: ["M2 19 L9 7 L12.34 12.73", "M12.34 12.73 L15.5 8 L22 19", "M2 19 L22 19"] },
  // Grid lines with their bubbles, as drawn on a plan.
  grid: {
    paths: ["M9 7 L9 21", "M17 7 L17 21", "M7 10 L21 10", "M7 17 L21 17"],
    circles: [
      [9, 4.5, 2.5],
      [17, 4.5, 2.5],
      [4.5, 10, 2.5],
      [4.5, 17, 2.5],
    ],
  },
};

const body = ({ paths, circles = [] }: Drawing) =>
  `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths
    .map((d) => `<path d="${d}"/>`)
    .join("")}${circles.map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}"/>`).join("")}</g>`;

/** The names drawn here, each asked for as `drawn:<name>`. */
export const DRAWN = Object.keys(DRAWINGS);

// Registered once, as `drawn:<name>`. Idempotent: iconify merges.
Manager.addIconsCollection(
  Object.fromEntries(DRAWN.map((name) => [name, { body: body(DRAWINGS[name]) }])),
  { prefix: "drawn" },
);
