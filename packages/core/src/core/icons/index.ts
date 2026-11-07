// 🔴 THE ONE ICON DICTIONARY OF EVERY APP (Antonio 17-10, 22-10 and 7-11: «en lugar de usar iconos de iconify u otra
// fuente directamente… una lista - diccionario de iconos, para garantizar que TODAS las apps usan los mismos iconos, y no
// iconos ligeramente diferentes para lo mismo»). Keys say what a thing IS, values are icon names, all from ONE family
// (tabler: outlined, one stroke) so that nothing filled stands among them. An app asks `ICONS["visibility.hide"]`, never
// an icon name of its own; a meaning that is missing is added HERE, and a change here reaches every app at once.
// Our own format icons (`format:*`) are registered as this module loads (`format-icons.ts`).
export { FORMATS_DRAWN, formatIcon } from "./format-icons";
export type { FormatDrawn } from "./format-icons";

export const ICONS = {
  // Native applications: their initial in an outline.
  "app.revit": "tabler:square-letter-r",
  "app.autocad": "tabler:square-letter-a",
  "app.rhino": "tabler:hexagon-letter-r",
  "app.ifc": "format:ifc",

  // Formats. Ours (format-icons.ts): the file with its letters, or the format's own mark.
  "format.ifc": "format:ifc",
  "format.rvt": "tabler:square-letter-r",
  "format.frag": "format:frag",
  "format.pdf": "tabler:file-type-pdf",
  "format.csv": "tabler:file-type-csv",
  "format.json": "tabler:json",
  "format.pointCloud": "tabler:grain",
  "format.splat": "tabler:blur",
  "format.image": "tabler:photo",
  "format.file": "tabler:file",

  // Document types: what a document IS, shown before its format.
  "documentType.bim": "tabler:building",
  "documentType.drawings": "tabler:layout-board",
  "documentType.reality": "tabler:3d-cube-sphere",
  "documentType.coordination": "tabler:messages",
  "documentType.generic": "tabler:file",

  // Actions.
  "action.refresh": "tabler:refresh",
  "action.close": "tabler:x",
  "action.edit": "tabler:pencil",
  "action.delete": "tabler:trash",
  "action.add": "tabler:plus",
  "action.archive": "tabler:archive",
  "action.upload": "tabler:upload",
  "action.download": "tabler:download",
  "action.undo": "tabler:arrow-back-up",
  "action.redo": "tabler:arrow-forward-up",
  "action.more": "tabler:dots-vertical",
  "action.view": "tabler:eye",
  "action.save": "tabler:device-floppy",
  "action.new": "tabler:file-plus",
  "action.export": "tabler:file-export",
  "action.accept": "tabler:check",
  "action.acceptAll": "tabler:checks",
  "action.clear": "tabler:eraser",
  "action.send": "tabler:send",
  "action.run": "tabler:player-play",
  "action.hide": "tabler:eye-off",
  "action.search": "tabler:search",
  "action.copy": "tabler:copy",
  "action.filter": "tabler:filter",
  "action.select": "tabler:pointer",
  "action.focus": "tabler:focus-2",
  "action.isolate": "tabler:focus-centered",
  "action.reset": "tabler:restore",

  // Showing and hiding: ONE eye for everything shown, one for everything hidden.
  "visibility.show": "tabler:eye",
  "visibility.hide": "tabler:eye-off",
  "visibility.ghost": "mdi:ghost-outline",

  // How the interface itself is.
  "theme.light": "tabler:sun",
  "theme.dark": "tabler:moon",
  "ui.grip": "tabler:grip-vertical",
  "ui.loading": "tabler:loader-2",
  "ui.expand": "tabler:chevron-right",
  "ui.collapse": "tabler:chevron-down",
  "ui.back": "tabler:arrow-left",
  "ui.info": "tabler:info-circle",
  "ui.help": "tabler:help-circle",

  // Measuring and cutting.
  "measure.length": "tabler:ruler-measure",
  "measure.area": "tabler:square-dashed",
  "measure.angle": "tabler:angle",
  "measure.volume": "tabler:box",
  section: "tabler:scissors",

  // The platform's things.
  document: "tabler:file-text",
  folder: "tabler:folder",
  recipe: "tabler:chef-hat",
  issue: "tabler:message-report",
  clash: "tabler:arrows-cross",
  // A layout's button and every button of the same thing ask for its key here.
  history: "mdi:source-branch",
  // What is shown and how it is coloured, by rules.
  lens: "mdi:filter-variant",
  // Clashes and topics: what is wrong with the models.
  review: "mdi:vector-intersection",
  // The models' tree and their properties.
  tree: "mdi:file-tree",
  // The 3D scene alone.
  viewer: "mdi:cube-outline",
  // IDS checks: what the models must say, and what they do not.
  ids: "tabler:list-check",
  settings: "tabler:settings",
  // Which snaps are on.
  snaps: "tabler:adjustments-horizontal",
  // The tutorials.
  learn: "tabler:info-circle",
  // Layouts of the apps, by what they hold.
  documents: "mdi:file-document-multiple-outline",
  drawing: "mdi:pencil-ruler",
  properties: "tabler:adjustments",
  // The types of a document, and the layout that lists them.
  types: "tabler:category",
  resources: "tabler:components",
  sheets: "tabler:files",
  models: "tabler:building",
  // An information-management CDE's places: its dashboard, its registers, the checks of its models, views coloured by a
  // property, and who may do what.
  dashboard: "tabler:layout-dashboard",
  registers: "tabler:table",
  quality: "tabler:rosette-discount-check",
  thematic: "tabler:palette",
  admin: "tabler:shield-lock",
  // Its workflow (ISO 19650), people, states.
  containerCode: "tabler:barcode",
  transition: "tabler:arrows-exchange",
  approval: "tabler:file-certificate",
  delivery: "tabler:truck-delivery",
  milestone: "tabler:flag",
  dueDate: "tabler:calendar-time",
  overdue: "tabler:alarm",
  raci: "tabler:sitemap",
  checklist: "tabler:clipboard-check",
  people: "tabler:users",
  "person.add": "tabler:user-plus",
  "person.remove": "tabler:user-minus",
  "person.edit": "tabler:user-edit",
  projects: "tabler:folders",
  projectAccess: "tabler:lock-access",
  chart: "tabler:chart-bar",
  notifications: "tabler:bell",
  tags: "tabler:tags",
  list: "tabler:list-details",
  count: "tabler:numbers",
  hint: "tabler:bulb",
  next: "tabler:arrow-right",
  colour: "tabler:paint",
  swatch: "tabler:square-filled",
  dot: "tabler:circle-filled",
  "state.ok": "tabler:circle-check",
  "state.warning": "tabler:alert-circle",
  "state.error": "tabler:circle-x",
} as const;

export type IconKey = keyof typeof ICONS;

/** The icon of a meaning (`icon("visibility.hide")`): the one name every app draws it with. */
export const icon = (key: IconKey): string => ICONS[key];
