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
  "las", "laz", "ply", "spz", "glb", "obj", "fbx", "skp", "bcf", "ids", "3dm",
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
/**
 * RHINO: McNeel's rhinoceros (Simple Icons, CC0), the one Rhino draws for itself (Antonio, 16-11: «los archivos de rhino
 * tendrán que salir con un icono de rhino, igual que los de revit… a nivel de librería de ui para que todas las apps puedan
 * reutilizarlo»). Exported: an app that marks it on Rhino's red draws this same path.
 */
export const RHINO_MARK_PATH =
  "M6.823 3.103q-.15 0-.34.017c-.511.044-1.25.18-1.802.329a6.3 6.3 0 0 0-1.15.42c-.231.112-.33.178-.354.273c-.023.094.028.217.16.436s.346.533.535.961s.356.97.361 1.651c.006.68-.149 1.5-.245 1.962s-.133.568-.227.618s-.245.044-.525-.021c-.281-.065-.69-.187-1.1-.259s-.819-.093-1.122-.038c-.304.056-.504.189-.645.369c-.14.18-.224.406-.282.75A7 7 0 0 0 0 11.687c.005.317.047.49.136.584c.088.094.223.109.492.054s.672-.18 1.224-.215a6.3 6.3 0 0 1 1.94.202c.685.182 1.353.49 1.95.93c.598.438 1.127 1.007 1.566 1.593c.438.586.787 1.189 1.004 1.541c.217.353.304.455.372.42s.117-.207.145-.417a3 3 0 0 0-.02-.848a7.5 7.5 0 0 0-.32-1.365a5.6 5.6 0 0 0-.495-1.018c-.146-.247-.241-.408-.245-.51s.085-.148.51-.315c.424-.167 1.185-.457 1.958-.808s1.556-.764 2.042-1.106c.486-.341.674-.61.724-.937c.05-.326-.039-.71-.16-1.076a7 7 0 0 0-.529-1.193A14 14 0 0 0 11.28 5.6a9 9 0 0 0-1.1-1.236c-.282-.255-.421-.31-.51-.29s-.131.115-.168.47c-.037.356-.07.973-.144 1.559a7.5 7.5 0 0 1-.432 1.773a12.5 12.5 0 0 1-.99 1.982c-.388.64-.803 1.212-1.054 1.462c-.25.25-.336.18-.477.064l-.486-.4c-.15-.125-.253-.213-.273-.293s.045-.15.27-.448c.227-.299.615-.825.96-1.478a7.8 7.8 0 0 0 .796-2.282a10 10 0 0 0 .095-2.338c-.044-.564-.124-.77-.306-.896c-.137-.095-.332-.146-.638-.146m6.48 7.034h-.012c-.084.01-.192.112-.415.294a7 7 0 0 1-1.017.7c-.458.257-1.038.507-1.51.734c-.47.226-.831.429-1.004.712c-.172.283-.155.648.04.85c.194.204.566.246.883.259s.58-.002.826.087c.246.09.475.285.764.516c.288.23.637.498.925.561s.518-.079.766-.202c.249-.124.516-.23.888-.225c.371.005.847.12 1.318.37c.47.248.938.63 1.184.866c.247.236.272.327.245.362c-.028.036-.108.018-.304-.14c-.196-.157-.508-.454-.917-.688s-.916-.404-1.4-.391c-.482.013-.94.21-1.23.55s-.412.822-.546 1.164c-.133.341-.28.543-.47.617s-.424.02-.703-.099c-.28-.12-.604-.307-.874-.442c-.269-.136-.484-.22-.62-.353s-.195-.31-.203-.571c-.01-.26.032-.6.05-.853c.02-.25.018-.413-.038-.56a1.1 1.1 0 0 0-.232-.35c-.07-.07-.099-.075-.113-.058s-.012.058.01.158c.023.1.067.26.05.581c-.019.321-.098.803-.16 1.17s-.107.618-.02.808s.306.322.707.54c.4.22.982.527 1.518.855c.537.327 1.027.673 1.562 1.089c.534.415 1.112.9 1.5 1.238c.39.339.588.532.742.59c.154.059.264-.018.307-.138c.044-.12.023-.285-.014-.429a1.2 1.2 0 0 0-.24-.46a5 5 0 0 0-.68-.704c-.287-.243-.614-.463-.803-.614s-.242-.233-.212-.259s.14.004.302.108c.162.103.375.28.612.459c.237.178.499.356.733.584c.235.228.443.506.583.706c.14.201.214.324.294.372c.08.049.165.022.277-.05a3 3 0 0 0 .426-.355c.178-.169.398-.393.551-.633s.242-.496.299-.772s.08-.572.247-.862s.476-.574.994-1.025s1.244-1.07 1.891-1.664c.648-.595 1.216-1.165 1.696-1.802c.479-.638.87-1.342 1.067-1.743c.199-.4.205-.498.14-.526c-.063-.027-.198.015-.61.313c-.414.297-1.106.849-1.886 1.43c-.781.58-1.65 1.19-2.336 1.569c-.686.378-1.19.524-1.55.562c-.361.037-.58-.034-.724-.11c-.143-.077-.21-.158-.224-.241c-.013-.084.03-.17.135-.275s.277-.232.447-.392s.338-.354.468-.556s.22-.411.261-.592s.034-.333-.04-.376s-.215.023-.376.11c-.162.086-.343.192-.593.3a2.7 2.7 0 0 1-.92.235a1.63 1.63 0 0 1-1.088-.313c-.343-.26-.635-.71-.866-1.147s-.398-.865-.512-1.12c-.108-.242-.168-.33-.246-.33zm-2.215 4.075a.42.42 0 0 0-.294.115c-.094.086-.145.2-.034.338c.112.137.385.297.636.469c.252.172.481.357.666.42c.184.064.323.006.402-.096s.1-.247-.003-.404s-.327-.325-.564-.481c-.238-.157-.488-.302-.681-.346a.6.6 0 0 0-.128-.015m.252.208q.038 0 .083.01c.118.026.272.115.418.211s.283.2.333.289s.014.163-.048.216a.26.26 0 0 1-.247.053c-.1-.031-.216-.126-.36-.219c-.145-.093-.319-.184-.387-.268s-.031-.162.029-.218a.26.26 0 0 1 .18-.074zm4.778 3.728c.211-.008.42.06.602.24c.183.178.34.467.383.732s-.03.505-.125.692a1.6 1.6 0 0 1-.289.397c-.074.074-.109.095-.14.095h-.003c-.033-.001-.062-.023-.208-.171a7 7 0 0 1-.573-.642c-.165-.22-.232-.383-.263-.568c-.032-.185-.027-.39.082-.536s.323-.23.534-.239m.093 1.111a.26.26 0 0 0-.153.046c-.058.041-.105.113-.093.185c.012.073.085.146.174.255s.195.255.264.335c.068.08.1.093.127.091c.029-.002.054-.018.086-.048a.35.35 0 0 0 .094-.157a.5.5 0 0 0 .002-.316a.67.67 0 0 0-.218-.282a.48.48 0 0 0-.283-.109";

const MARKS: Record<string, string> = {
  "3dm": `<path fill="currentColor" d="${RHINO_MARK_PATH}"/>`,
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
