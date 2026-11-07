import { Manager } from "../Manager";

// The formats tabler has no icon for (IFC, RVT, FRAG, DWG…), drawn as tabler draws
// its own `file-type-*`: the file's outline with the extension in stroked letters
// under it, one stroke, no fill, so they stand among the rest as one family
// (Antonio, 18-10: «el icono monocromo, pero mostrando el icono del formato en sí;
// si no lo tenemos, generarlo y guardarlo en ui como una lista cerrada de iconos
// propios»). A CLOSED list: a format is added here, by hand, or it has none.

/** The letters, each in a 3 × 6 cell whose left edge is `x` (from y = 15 to 21). */
const LETTERS: Record<string, (x: number) => string> = {
  A: (x) => `M${x} 21v-4.5a1.5 1.5 0 0 1 3 0v4.5M${x} 19h3`,
  B: (x) => `M${x} 21v-6h1.5a1.5 1.5 0 0 1 0 3a1.5 1.5 0 0 1 0 3zM${x} 18h1.5`,
  C: (x) => `M${x + 3} 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0`,
  D: (x) => `M${x} 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z`,
  E: (x) => `M${x + 3} 15h-3v6h3M${x} 18h2`,
  F: (x) => `M${x + 3} 15h-3v6M${x} 18h2`,
  G: (x) => `M${x + 3} 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0v-1.5h-1`,
  I: (x) => `M${x + 0.5} 15h2M${x + 1.5} 15v6M${x + 0.5} 21h2`,
  J: (x) => `M${x + 3} 15v4.5a1.5 1.5 0 0 1 -3 0`,
  K: (x) => `M${x} 15v6M${x + 3} 15l-3 3l3 3`,
  L: (x) => `M${x} 15v6h3`,
  M: (x) => `M${x} 21v-6l1.5 3l1.5 -3v6`,
  N: (x) => `M${x} 21v-6l3 6v-6`,
  O: (x) => `M${x} 16.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1 -3 0z`,
  P: (x) => `M${x} 21v-6h1.5a1.5 1.5 0 0 1 0 3h-1.5`,
  R: (x) => `M${x} 21v-6h1.5a1.5 1.5 0 0 1 0 3h-1.5M${x + 1.5} 18l1.5 3`,
  S: (x) =>
    `M${x} 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75`,
  T: (x) => `M${x} 15h3M${x + 1.5} 15v6`,
  V: (x) => `M${x} 15l1.5 6l1.5 -6`,
  W: (x) => `M${x} 15l.75 6l.75 -4l.75 4l.75 -6`,
  X: (x) => `M${x} 15l3 6M${x + 3} 15l-3 6`,
  Y: (x) => `M${x} 15l1.5 3l1.5 -3M${x + 1.5} 18v3`,
  Z: (x) => `M${x} 15h3l-3 6h3`,
};

/** The file's outline, as tabler's `file-type-*` draw it: open at the bottom for the letters. */
const OUTLINE = "M14 3v4a1 1 0 0 0 1 1h4M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4";

/** The formats drawn here, and nothing else. */
export const FORMATS_DRAWN = [
  "ifc", "rvt", "rfa", "frag", "dwg", "dxf", "nwd", "nwc",
  "las", "laz", "ply", "spz", "glb", "obj", "fbx", "skp", "bcf", "ids",
] as const;

export type FormatDrawn = (typeof FORMATS_DRAWN)[number];

/** A format's icon body: the outline and its letters, three as tabler spaces them, four closer. */
function body(format: string) {
  const letters = format.toUpperCase().split("");
  const start = letters.length >= 4 ? 3 : 5;
  const step = letters.length >= 4 ? 4.5 : 6;
  // A letter not drawn yet leaves its place empty rather than taking every app down.
  const paths = [OUTLINE, ...letters.map((one, i) => LETTERS[one]?.(start + i * step) ?? "")].filter(Boolean);
  return `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths
    .map((d) => `<path d="${d}"/>`)
    .join("")}</g>`;
}

/**
 * The formats that have a mark of their own, drawn in the same stroke as the rest instead of the file
 * with letters (Antonio, 18-10: «los archivos IFC con el icono del IFC, en el mismo estilo que el resto»).
 * IFC: buildingSMART's four links, each a rounded square turned 45°, interlocked: where a link passes
 * under the next, its stroke stops short, so the chain reads at 16 px without colour.
 */
const MARKS: Record<string, string> = {
  /**
   * FRAG: That Open's isotype (Antonio, 18-10: «para el frag, usa el logo de That Open»), the brand
   * mark's two pieces as outlines: a ring open at its upper left quarter, and that quarter lifted by the
   * ring's thickness so its end stands on the ring's top end (as in `bim:fragments`, the green one).
   */
  frag: (() => {
    const [cx, cy, R, r] = [12, 14.2, 8.5, 4.3];
    const lift = R - r;
    const q = cy - lift;
    const ring = `M${cx} ${cy - R}A${R} ${R} 0 1 1 ${cx - R} ${cy}L${cx - r} ${cy}A${r} ${r} 0 1 0 ${cx} ${cy - r}Z`;
    const quarter = `M${cx - R} ${q}A${R} ${R} 0 0 1 ${cx} ${q - R}L${cx} ${q - r}A${r} ${r} 0 0 0 ${cx - r} ${q}Z`;
    return `<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${ring}"/><path d="${quarter}"/></g>`;
  })(),
  ifc: (() => {
    // Four links, rounded squares turned 45° (each a diamond |x−cx| + |y−cy| = r), at the corners of a
    // square around the middle: each overlaps its two neighbours and leaves the hollow diamond between
    // them, as the mark does. Interlocked, not stacked: going round, a link passes over its next one at
    // their outer crossing and under it at the inner one. The link underneath is cut short there (a mask
    // with a small round hole), so the stroke of the one on top reads continuous.
    const d = 3.9;
    const r = 6.1;
    const centres = [
      [12 - d, 12 - d],
      [12 + d, 12 - d],
      [12 + d, 12 + d],
      [12 - d, 12 + d],
    ];
    const along = Math.sqrt(2) * r;
    const link = ([x, y]: number[]) =>
      `<rect x="${x - along / 2}" y="${y - along / 2}" width="${along}" height="${along}" rx="2" transform="rotate(45 ${x} ${y})"/>`;
    // Where links i and i+1 cross: on the line between them, d + |t| = r either side of it.
    const crossings = (i: number) => {
      const [a, b] = [centres[i], centres[(i + 1) % 4]];
      const t = r - d;
      const vertical = a[0] !== b[0]; // side by side: they cross above and below their midpoint
      const mx = (a[0] + b[0]) / 2;
      const my = (a[1] + b[1]) / 2;
      const one = vertical ? [mx, my - t] : [mx - t, my];
      const two = vertical ? [mx, my + t] : [mx + t, my];
      const far = (p: number[]) => Math.abs(p[0] - 12) + Math.abs(p[1] - 12);
      return far(one) > far(two) ? { outer: one, inner: two } : { outer: two, inner: one };
    };
    const hole = ([x, y]: number[]) => `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.7" fill="#000"/>`;
    const masks = centres
      .map((_, j) => {
        const prev = (j + 3) % 4;
        // Under the previous link at their outer crossing, under the next one at their inner crossing.
        return `<mask id="ifc-link-${j}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/>${hole(
          crossings(prev).outer,
        )}${hole(crossings(j).inner)}</mask>`;
      })
      .join("");
    return `<defs>${masks}</defs><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${centres
      .map((one, j) => `<g mask="url(#ifc-link-${j})">${link(one)}</g>`)
      .join("")}</g>`;
  })(),
};

// Registered once, as `format:<ext>` (`format:ifc`…). Idempotent: iconify merges.
Manager.addIconsCollection(
  Object.fromEntries(FORMATS_DRAWN.map((format) => [format, { body: MARKS[format] ?? body(format) }])),
  { prefix: "format" },
);

/** The icon of a format drawn here (`format:ifc`), or nothing. */
export const formatIcon = (format?: string): string | undefined =>
  format && (FORMATS_DRAWN as readonly string[]).includes(format.toLowerCase()) ? `format:${format.toLowerCase()}` : undefined;
