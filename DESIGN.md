---
# ============================================================
# @thatopen-platform/ui-beta — Design System Specification
# Version: 3.5.1  |  Format: DESIGN.md
# ============================================================

colors:
  # ── Grayscale palette ─────────────────────────────────────
  gray-0:  "#19191E"   # app background (darkest)
  gray-1:  "#262528"   # bg dark search
  gray-2:  "#262629"   # card background
  gray-3:  "#2E2E2E"   # dark background
  gray-4:  "#323237"   # bg default tabs
  gray-5:  "#353538"   # tooltip windows
  gray-6:  "#3C3C41"   # button grey bg
  gray-7:  "#787878"   # default / mid-contrast
  gray-8:  "#ADADAD"   # icon / secondary text
  gray-9:  "#D5D5D5"   # near-light
  gray-10: "#F1F2F4"   # foreground text (lightest)

  # ── Brand ─────────────────────────────────────────────────
  main:    "#6528D7"   # primary purple
  accent:  "#BCF124"   # lime-green accent (dark mode)
  accent-light: "#6528D7"  # accent swaps to purple on light mode

  # ── Semantic background scale (dark mode defaults) ────────
  bg-base:          "{colors.gray-0}"
  bg-contrast-10:   "{colors.gray-1}"
  bg-contrast-20:   "{colors.gray-2}"
  bg-contrast-30:   "{colors.gray-3}"
  bg-contrast-40:   "{colors.gray-4}"
  bg-contrast-50:   "{colors.gray-5}"
  bg-contrast-60:   "{colors.gray-6}"
  bg-contrast-70:   "{colors.gray-7}"
  bg-contrast-80:   "{colors.gray-8}"
  bg-contrast-90:   "{colors.gray-9}"
  bg-contrast-100:  "{colors.gray-10}"

  # ── Brand contrasts ───────────────────────────────────────
  main-contrast:   "{colors.gray-10}"
  accent-contrast: "{colors.gray-0}"

typography:
  families:
    ui: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

  # All sizes come from the design-token scale below.
  # Font sizes reference {spacing.*} tokens defined in the spacing block.
  scale:
    label-xs:   { size: "{spacing.xs}",   weight: 400 }   # 7 px  — captions
    label-base: { size: "{spacing.base}",  weight: 400 }   # 11 px — default UI text
    label-lg:   { size: "{spacing.lg}",    weight: 400 }   # 13 px — panel headers
    label-xl:   { size: "{spacing.xl}",    weight: 400 }   # 15 px — large labels
    heading-sm: { size: "{spacing.lg}",    weight: 600 }   # 13 px — section headings
    heading-md: { size: "{spacing.xl}",    weight: 600 }   # 15 px — panel titles
    mono:       { size: "{spacing.base}",  weight: 400, family: "'Fira Code', monospace" }

spacing:
  # Unified size scale: every token maps to a CSS custom property --bim-ui_size-*.
  # All component sizing (padding, gap, border-radius, icon size) derives from here.
  4xs:  "0.0625rem"   #  1 px
  3xs:  "0.1875rem"   #  3 px
  2xs:  "0.3125rem"   #  5 px
  xs:   "0.4375rem"   #  7 px
  sm:   "0.5625rem"   #  9 px
  base: "0.6875rem"   # 11 px
  lg:   "0.8125rem"   # 13 px
  xl:   "0.9375rem"   # 15 px
  2xl:  "1.0625rem"   # 17 px
  3xl:  "1.1875rem"   # 19 px
  4xl:  "1.3125rem"   # 21 px
  5xl:  "1.4375rem"   # 23 px
  6xl:  "1.5625rem"   # 25 px
  7xl:  "1.6875rem"   # 27 px
  8xl:  "1.8125rem"   # 29 px
  9xl:  "1.9375rem"   # 31 px
  10xl: "2.0625rem"   # 33 px
  11xl: "2.1875rem"   # 35 px
  12xl: "2.3125rem"   # 37 px
  13xl: "2.4375rem"   # 39 px
  14xl: "2.5625rem"   # 41 px
  15xl: "2.6875rem"   # 43 px
  16xl: "2.8125rem"   # 45 px
  17xl: "2.9375rem"   # 47 px
  18xl: "3.0625rem"   # 49 px
  19xl: "3.1875rem"   # 51 px
  20xl: "3.3125rem"   # 53 px
  21xl: "3.4375rem"   # 55 px
  22xl: "3.5625rem"   # 57 px

rounded:
  none: "0"
  xs:   "{spacing.4xs}"   # 1 px — used for nested buttons inside context menus
  sm:   "{spacing.2xs}"   # 5 px — default component radius (buttons, inputs)
  md:   "{spacing.xs}"    # 7 px — cards, panels
  full: "9999px"          # fully rounded (chips, avatars)

elevation:
  # Tonal elevation only — no traditional box-shadow hierarchy.
  # Each level corresponds to a bg-contrast step.
  0: "{colors.bg-base}"         # page / viewport background
  1: "{colors.bg-contrast-20}"  # panels, cards
  2: "{colors.bg-contrast-40}"  # tabs, toolbars
  3: "{colors.bg-contrast-50}"  # tooltips, popovers
  4: "{colors.bg-contrast-60}"  # interactive elements (buttons default bg)
  # Shadows are used sparingly:
  overlay-shadow: "0 0 10px 3px rgba(0,0,0,0.20)"  # context menus, tooltips

components:

  # ── bim-button ───────────────────────────────────────────
  button:
    tag: "bim-button"
    bgc: "{colors.bg-contrast-60}"
    bgc-active: "{colors.main}"
    bgc-disabled: "gray"
    bgc-hover-overlay: "{colors.main}"     # clip-path circle animation
    label-color: "{colors.bg-contrast-100}"
    label-color-hover: "{colors.main-contrast}"
    label-color-disabled: "{colors.bg-contrast-80}"
    border-radius: "{rounded.sm}"
    min-height: "25px"
    min-width: "25px"
    min-height-vertical: "{spacing.10xl}"
    min-width-vertical: "{spacing.10xl}"
    padding-horizontal: "6px"
    hover-transition: "all 0.15s"
    click-scale: "0.98"
    css-vars:
      --bim-button--bgc: "background-color of the button shell"
      --bim-button--jc:  "justify-content of the inner .button flex (default: center)"
      --bim-label--c:    "text & icon color (inherited by bim-label)"

  # ── bim-label ───────────────────────────────────────────
  label:
    tag: "bim-label"
    css-vars:
      --bim-label--c:      "text color"
      --bim-label--fz:     "font size"
      --bim-icon--c:       "icon color (falls back to label color)"
      --bim-icon--fz:      "icon font size (default: {spacing.xl} = 15 px)"
      --bim-label--us:     "max-width for label text (truncation)"

  # ── bim-icon ────────────────────────────────────────────
  icon:
    tag: "bim-icon"
    engine: "Iconify (iconify-icon 3.0.1)"
    css-vars:
      --bim-icon--fz: "icon size (default: {spacing.xl} = 15 px)"
      --bim-icon--c:  "icon color"

  # ── bim-checkbox ────────────────────────────────────────
  checkbox:
    tag: "bim-checkbox"
    accent: "{colors.main}"
    css-vars:
      --bim-checkbox--c:    "checkbox accent color"

  # ── bim-text-input ───────────────────────────────────────
  text-input:
    tag: "bim-text-input"
    css-vars:
      --bim-input--maxw: "max-width of the host element"
      --bim-text-input--bdrs: "border radius override"

  # ── bim-number-input ─────────────────────────────────────
  number-input:
    tag: "bim-number-input"
    css-vars:
      --bim-number-input--bdrs: "border radius override"

  # ── bim-color-input ──────────────────────────────────────
  color-input:
    tag: "bim-color-input"

  # ── bim-dropdown ─────────────────────────────────────────
  dropdown:
    tag: "bim-dropdown"
    css-vars:
      --bim-dropdown--bdrs: "border radius"

  # ── bim-selector ─────────────────────────────────────────
  selector:
    tag: "bim-selector"
    variants: ["filled", "underline"]

  # ── bim-option ───────────────────────────────────────────
  option:
    tag: "bim-option"
    check-color: "{colors.main}"

  # ── bim-input (container) ────────────────────────────────
  input:
    tag: "bim-input"
    css-vars:
      --bim-input--maxw: "max-width of the host"

  # ── bim-panel ────────────────────────────────────────────
  panel:
    tag: "bim-panel"
    bgc: "{colors.bg-contrast-20}"
    border: "1px solid {colors.bg-contrast-40}"
    header-height: "2rem"
    header-border: "1px solid {colors.bg-contrast-20}"
    css-vars:
      --bim-panel--border:   "full border shorthand"
      --bim-panel--c:        "header text color (default: bg-contrast-100)"
      --bim-panel--fz:       "header font size (default: {spacing.lg} = 13 px)"
      --bim-panel-section--header-display: "controls section header display (set by panel)"
      --bim-panel-section--border:         "section border (reset to none by panel)"
      --bim-panel-section--bdrs:           "section border-radius (reset to 0 by panel)"

  # ── bim-panel-section ────────────────────────────────────
  panel-section:
    tag: "bim-panel-section"
    css-vars:
      --bim-panel-section--header-display: "flex | none"
      --bim-panel-section--border:         "border shorthand"
      --bim-panel-section--bdrs:           "border-radius"

  # ── bim-tabs ─────────────────────────────────────────────
  tabs:
    tag: "bim-tabs"
    css-vars:
      --bim-tabs--bgc: "background color of tab switchers bar"

  # ── bim-toolbar ──────────────────────────────────────────
  toolbar:
    tag: "bim-toolbar"

  # ── bim-grid ─────────────────────────────────────────────
  grid:
    tag: "bim-grid"
    resizable-dividers: true
    divider-thickness: "4px"

  # ── bim-table ────────────────────────────────────────────
  table:
    tag: "bim-table"
    row-divider-opt-in: true
    css-vars:
      --bim-table-row--bdbc:  "row divider border color"
      --bim-table-row--bdbw:  "row divider border width"

  # ── bim-slider ───────────────────────────────────────────
  slider:
    tag: "bim-slider"
    css-vars:
      --bim-slider_track--h:          "track / rail height (default: 0.25rem)"
      --bim-slider--mx:               "horizontal margin of track-wrapper (default: 0.5rem)"
      --bim-slider_rail--bdrs:        "rail border-radius (default: {spacing.4xs})"
      --bim-slider_rail--bgc:         "rail background (default: {colors.bg-contrast-20})"
      --bim-slider_track--bgc:        "filled-track background (default: {colors.main})"
      --bim-slider_track--bdrs:       "filled-track border-radius"
      --bim-slider_thumb--sz:         "thumb diameter (default: 0.875rem)"
      --bim-slider_thumb--bgc:        "thumb fill (default: {colors.main})"
      --bim-slider_thumb-focus--shadow: "halo on hover/active (default: 20% main)"
      --bim-slider_value-label--bgc:  "value tooltip background"
      --bim-slider_value-label--c:    "value tooltip text color"
      --bim-slider_value-label--fz:   "value tooltip font size"
      --bim-slider_value-label--bdrs: "value tooltip border-radius"
      --bim-slider_mark--sz:          "mark dot size (default: 0.25rem)"
      --bim-slider_mark--bgc:         "mark dot color (default: {colors.bg-contrast-40})"
      --bim-slider_mark-active--bgc:  "mark dot color when in active range"
      --bim-slider_mark-label--fz:    "mark label font size"
      --bim-slider_mark-label--c:     "mark label color"

  # ── bim-context-menu ─────────────────────────────────────
  context-menu:
    tag: "bim-context-menu"
    positioning: "@floating-ui/dom (flip + shift + offset)"
    backdrop: "transparent"

  # ── bim-tooltip ──────────────────────────────────────────
  tooltip:
    tag: "bim-tooltip"
    positioning: "@floating-ui/dom"

  # ── bim-chart ────────────────────────────────────────────
  chart:
    tag: "bim-chart"
    engine: "Chart.js 4.x + chartjs-plugin-datalabels"

  # ── bim-chart-legend ─────────────────────────────────────
  chart-legend:
    tag: "bim-chart-legend"

  # ── bim-viewport ─────────────────────────────────────────
  viewport:
    tag: "bim-viewport"

  # ── bim-paper-space ──────────────────────────────────────
  paper-space:
    tag: "bim-paper-space"
    supported-sizes: ["A0","A1","A2","A3","A4"]
    orientations: ["portrait","landscape"]

  # ── scrollbar ────────────────────────────────────────────
  scrollbar:
    width: "0.4rem"
    height: "0.4rem"
    thumb-radius: "0.25rem"
    thumb-color: "{colors.bg-contrast-60}"
    track-color: "{colors.bg-contrast-40}"
    css-vars:
      --bim-scrollbar--c:   "thumb color"
      --bim-scrollbar--bgc: "track color"
---

# @thatopen-platform/ui-beta — Design System

> Version **3.5.1** · MIT License · Built with [Lit](https://lit.dev/) 3.3.1 + TypeScript 5.4

A collection of **custom elements (Web Components)** for BIM (Building Information Modeling) applications. The library ships as a pure ES-module, expects no framework, and is designed to slot into any web project that needs a coherent, BIM-focused UI.

---

## 1. Overview

### Brand & Personality

That Open Company's UI system communicates **precision, depth, and openness**. The design language prioritizes:

- **Dense information display** — components are compact by default; the spacing scale starts at 1 px and grows in 2 px steps to allow fine-grained layout control.
- **Dark-first aesthetics** — the grayscale palette and contrast scale are authored dark-first; light mode is a full inversion of the same scale.
- **Brand accents with restraint** — the primary purple (`#6528D7`) appears on interactive states (hover ripple, active toggle, slider fill). The lime accent (`#BCF124`) is reserved for data highlights in dark mode and swaps to purple in light mode.
- **Zero-opacity utility** — show/hide transitions use opacity + clip-path animations rather than layout-affecting `display` toggles wherever possible.

### Technology Stack

| Layer | Library | Version |
|---|---|---|
| Component framework | Lit | 3.3.1 |
| Icon engine | iconify-icon | 3.0.1 |
| Floating positioning | @floating-ui/dom | 1.6.3 |
| Chart engine | Chart.js | ^4.5.0 |
| Chart labels | chartjs-plugin-datalabels | ^2.2.0 |

### Target Audience

Developers building 3D BIM viewers, property inspector panels, data-rich tables, and command toolbars — typically inside a Three.js / WebGL canvas shell.

---

## 2. Color System

### Philosophy

All color decisions are expressed as CSS custom properties on `:root`. Components never hardcode colors; they always reference the semantic `--bim-ui_*` tokens. This makes theme switching possible at runtime via `Manager.toggleTheme()`.

### Grayscale (source palette)

| Token | Hex | Semantic use |
|---|---|---|
| `--bim-ui_gray-0` | `#19191E` | App background — absolute darkest |
| `--bim-ui_gray-1` | `#262528` | Dark search bar background |
| `--bim-ui_gray-2` | `#262629` | Card / panel background |
| `--bim-ui_gray-3` | `#2E2E2E` | Dark background surfaces |
| `--bim-ui_gray-4` | `#323237` | Tab bar background |
| `--bim-ui_gray-5` | `#353538` | Tooltip / popover window |
| `--bim-ui_gray-6` | `#3C3C41` | Button default background |
| `--bim-ui_gray-7` | `#787878` | Mid-contrast; default icon fill |
| `--bim-ui_gray-8` | `#ADADAD` | Icon / secondary text |
| `--bim-ui_gray-9` | `#D5D5D5` | Near-light text |
| `--bim-ui_gray-10` | `#F1F2F4` | Foreground text — absolute lightest |

### Brand

| Token | Value | Notes |
|---|---|---|
| `--bim-ui_main-base` | `#6528D7` | Primary action, active state, slider fill |
| `--bim-ui_accent-base` | `#BCF124` (dark) / `#6528D7` (light) | Data accent; swaps to purple in light theme |
| `--bim-ui_main-contrast` | `{gray-10}` | Text/icons on a main-base background |
| `--bim-ui_accent-contrast` | `{gray-0}` | Text/icons on an accent-base background |

### Semantic Background Scale

The contrast scale is the core theming mechanism. In **dark mode** it runs `gray-0 → gray-10` (bg-base is the darkest). In **light mode** the mapping inverts (`bg-base = gray-10`, `bg-contrast-100 = gray-0`). Components always consume the semantic names, never the raw grays.

| Token | Dark mode maps to | Light mode maps to |
|---|---|---|
| `--bim-ui_bg-base` | `gray-0` `#19191E` | `gray-10` `#F1F2F4` |
| `--bim-ui_bg-contrast-10` | `gray-1` `#262528` | `gray-9` `#D5D5D5` |
| `--bim-ui_bg-contrast-20` | `gray-2` `#262629` | `gray-8` `#ADADAD` |
| `--bim-ui_bg-contrast-30` | `gray-3` `#2E2E2E` | `gray-7` `#787878` |
| `--bim-ui_bg-contrast-40` | `gray-4` `#323237` | `gray-6` `#3C3C41` |
| `--bim-ui_bg-contrast-50` | `gray-5` `#353538` | `gray-5` `#353538` |
| `--bim-ui_bg-contrast-60` | `gray-6` `#3C3C41` | `gray-4` `#323237` |
| `--bim-ui_bg-contrast-70` | `gray-7` `#787878` | `gray-3` `#2E2E2E` |
| `--bim-ui_bg-contrast-80` | `gray-8` `#ADADAD` | `gray-2` `#262629` |
| `--bim-ui_bg-contrast-90` | `gray-9` `#D5D5D5` | `gray-1` `#262528` |
| `--bim-ui_bg-contrast-100` | `gray-10` `#F1F2F4` | `gray-0` `#19191E` |

### Theme Switching

Two mechanisms:

1. **`prefers-color-scheme` media query** — automatic, respects OS preference.
2. **CSS class on `<html>`** — `bim-ui-dark` or `bim-ui-light` (explicit override).

```typescript
import { Manager } from "@thatopen-platform/ui-beta";
Manager.toggleTheme();           // animated circular-reveal transition
Manager.toggleTheme(false);      // instant, no animation
```

The animation uses a `clip-path: circle()` overlay at 1 000 ms.

---

## 3. Typography

There is no explicit font family token — the library intentionally inherits the host application's font stack. All sizing derives from the `--bim-ui_size-*` token scale (see §4).

### Common usage patterns

| Role | Size token | Weight | Used in |
|---|---|---|---|
| Caption / tooltip text | `--bim-ui_size-xs` (7 px) | 400 | Tooltip body, value labels, mark labels |
| Default UI text | `--bim-ui_size-base` (11 px) | 400 | Input labels, option labels |
| Panel header | `--bim-ui_size-lg` (13 px) | 600 | `bim-panel` title, section titles |
| Large label | `--bim-ui_size-xl` (15 px) | 400 | Icon default size, prominent labels |

Components expose `--bim-label--fz` and `--bim-panel--fz` for local override without touching global tokens.

---

## 4. Spacing & Size Scale

All spacing, border-radius, padding, gap, and icon sizing values reference the unified `--bim-ui_size-*` token set. The scale increments in **2 px steps** starting at 1 px.

| Token | `rem` | `px` | Typical uses |
|---|---|---|---|
| `--bim-ui_size-4xs` | 0.0625 | 1 | Hairline borders, min border-radius |
| `--bim-ui_size-3xs` | 0.1875 | 3 | Fine inner padding |
| `--bim-ui_size-2xs` | 0.3125 | 5 | Default border-radius (`rounded.sm`) |
| `--bim-ui_size-xs` | 0.4375 | 7 | Caption font size, gap between items |
| `--bim-ui_size-sm` | 0.5625 | 9 | Compact padding |
| `--bim-ui_size-base` | 0.6875 | 11 | Default font size, standard gap |
| `--bim-ui_size-lg` | 0.8125 | 13 | Panel header font, standard padding |
| `--bim-ui_size-xl` | 0.9375 | 15 | Icon size, large label font |
| `--bim-ui_size-2xl` | 1.0625 | 17 | — |
| `--bim-ui_size-3xl` | 1.1875 | 19 | — |
| `--bim-ui_size-4xl` | 1.3125 | 21 | — |
| `--bim-ui_size-5xl` | 1.4375 | 23 | — |
| `--bim-ui_size-6xl` | 1.5625 | 25 | — |
| `--bim-ui_size-7xl` | 1.6875 | 27 | — |
| `--bim-ui_size-8xl` | 1.8125 | 29 | — |
| `--bim-ui_size-9xl` | 1.9375 | 31 | — |
| `--bim-ui_size-10xl` | 2.0625 | 33 | Vertical-button min-height/width |
| `--bim-ui_size-11xl` | 2.1875 | 35 | — |
| `--bim-ui_size-12xl–22xl` | 2.31–3.56 | 37–57 | Grid/layout sizing |

---

## 5. Elevation & Depth

The system uses **tonal elevation** (no drop-shadow stack), mapping each surface to a step of the contrast scale.

| Level | Token | Typical component |
|---|---|---|
| 0 — page | `bg-base` | Viewport, full-screen canvas |
| 1 — card | `bg-contrast-20` | Panel, Tab content area |
| 2 — bar | `bg-contrast-40` | Toolbar, Tab switcher bar |
| 3 — overlay | `bg-contrast-50` | Tooltip background |
| 4 — interactive | `bg-contrast-60` | Button resting state |

The single shadow token is `0 0 10px 3px rgba(0,0,0,0.20)`, used only for context menus and floating tooltips to reinforce their layering above all other content.

---

## 6. Shapes / Border Radius

| Name | Value | Used for |
|---|---|---|
| `none` | `0` | Table cells, flat list items |
| `xs` (`--bim-ui_size-4xs` = 1 px) | `0.0625rem` | Nested buttons inside context menus (`--bim-button--bdrs`) |
| `sm` (`--bim-ui_size-2xs` = 5 px) | `0.3125rem` | Buttons, inputs, panel sections — **default** |
| `md` (`--bim-ui_size-xs` = 7 px) | `0.4375rem` | Tooltip, context menu container |
| `full` | `9999px` | Not currently used in-library but available as pattern |

All radius values are provided as overridable CSS custom properties per component.

---

## 7. Layout System

### Grid (`bim-grid`)

The Grid is the top-level layout orchestrator. It:

- Accepts a **CSS Grid `template` string** per named layout (e.g., `"'toolbar' 40px / 1fr"`).
- Maps named grid areas to registered `GridComponents` — either plain `HTMLElement` references, stateless factory functions, or statefull components with `{ template, initialState }`.
- Renders **resizable dividers** between adjacent areas (detected automatically from the grid template).
- Supports multiple named layouts that can be switched at runtime via `grid.layout = "myLayout"`.
- Groups multiple areas into `bim-tabs` or `bim-panel` wrappers via `GridAreaGroupConfig`.

```typescript
const grid = document.createElement("bim-grid") as Grid;
grid.layouts = {
  main: {
    template: `
      "toolbar"     40px
      "viewport"    1fr
      "panel"       auto
      / 1fr 280px
    `,
    elements: { toolbar, viewport, panel },
  },
};
grid.layout = "main";
```

### Panel + Section (`bim-panel`, `bim-panel-section`)

- Panels are **vertical flex columns**: a header (label + icon) + stacked sections.
- Sections are collapsible; the **last non-collapsed section** always expands to fill remaining height (`height: 100%`).
- `Panel.collapseSections()` / `expandSections()` collapse/expand all children at once.
- The `value` getter/setter propagates through the DOM tree collecting or setting values from all named children — useful for form-like panels.

### Toolbar (`bim-toolbar`, `bim-toolbar-section`, `bim-toolbar-group`)

- Toolbars are horizontal (default) or vertical flex containers.
- Sections group buttons with an optional label badge below (visible only on vertical toolbars when `Manager.config.sectionLabelOnVerticalToolbar = true`).
- Groups control row density: `bim-toolbar-group[rows="2"]` stacks children in a CSS grid with 2 rows.

### Tabs (`bim-tabs`, `bim-tab`)

- `bim-tabs` wraps arbitrary content in labeled panes.
- `switchersFull` makes each switcher button stretch to equal widths.
- `floating` variant detaches the switcher bar visually.
- `bottom` moves the switcher bar to the bottom of the container.

---

## 8. Component Reference

Each component is a standard HTML Custom Element registered under the `bim-*` prefix. All properties are reflected to HTML attributes (kebab-case) unless noted.

---

### `bim-button`

**Tag:** `bim-button`  
**Base class:** `LitElement`  
**Fires:** `click`

A versatile interactive element supporting icons, labels, loading states, inline tooltips, and nested context menus.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Visible text |
| `labelHidden` | `label-hidden` | `boolean` | `false` | Hides text, keeps icon |
| `icon` | `icon` | `string` | `undefined` | Iconify icon ID |
| `active` | `active` | `boolean` | `false` | Active/selected state — fills bg with `main` color |
| `disabled` | `disabled` | `boolean` | `false` | Prevents click, grays out |
| `vertical` | `vertical` | `boolean` | `false` | Stacks icon above label |
| `loading` | `loading` | `boolean` | `false` | Disables + replaces icon with `eos-icons:loading` spinner |
| `tooltipTitle` | `tooltip-title` | `string` | `undefined` | Bold heading of built-in tooltip |
| `tooltipText` | `tooltip-text` | `string` | `undefined` | Body text of built-in tooltip |
| `tooltipTime` | `tooltip-time` | `number` | `700` | ms delay before tooltip appears |
| `tooltipVisible` | `tooltip-visible` | `boolean` | `false` | Force-show tooltip |
| `contextMenuTemplate` | — | `() => TemplateResult` | `undefined` | Lazy template for context menu |

#### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bim-button--bgc` | `var(--bim-ui_bg-contrast-60)` | Background color |
| `--bim-button--jc` | `center` | Justify-content of inner label row |
| `--bim-label--c` | `var(--bim-ui_bg-contrast-100)` | Label/icon text color |

#### Hover interaction

A `clip-path: circle()` pseudo-element expands from 0 % to 120 % covering the button with `--bim-ui_main-base` on hover. Text color transitions to `--bim-ui_main-contrast` simultaneously.

#### Context menu integration

If a `bim-context-menu` is placed as a child, or if `contextMenuTemplate` is set, clicking the button opens the menu positioned below it using `@floating-ui/dom`. A chevron SVG is automatically appended to the label text.

---

### `bim-label`

**Tag:** `bim-label`  
**Base class:** `LitElement`

Renders an Iconify icon, an optional `<img>`, and/or text content. Used internally by most other components for their label rows.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `icon` | `icon` | `string` | `undefined` | Iconify icon ID |
| `iconHidden` | `icon-hidden` | `boolean` | `false` | Hides the icon |
| `img` | `img` | `string` | `undefined` | Image URL |
| `labelHidden` | `label-hidden` | `boolean` | `false` | Hides text slot |
| `vertical` | `vertical` | `boolean` | `false` | Stacks icon above text |

#### CSS Custom Properties

| Property | Description |
|---|---|
| `--bim-label--c` | Text color |
| `--bim-label--fz` | Font size |
| `--bim-label--us` | Max-width for text (with overflow ellipsis) |
| `--bim-icon--c` | Icon color (inherits `--bim-label--c` if unset) |
| `--bim-icon--fz` | Icon font size (default: `--bim-ui_size-xl` = 15 px) |

#### Value getter

`label.value` returns the parsed `textContent` through `convertString()` — returning `boolean`, `number`, or `string` depending on content.

---

### `bim-icon`

**Tag:** `bim-icon`  
**Base class:** `LitElement`

Thin wrapper around `<iconify-icon>`. Icons are referenced by their Iconify collection + name string (e.g., `"solar:home-bold"`).

#### Properties

| Property | Type | Description |
|---|---|---|
| `icon` | `string` | Iconify icon identifier |

#### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bim-icon--fz` | `var(--bim-ui_size-xl)` | Icon size |
| `--bim-icon--c` | inherited | Icon color |

---

### `bim-checkbox`

**Tag:** `bim-checkbox`  
**Implements:** `HasValue`  
**Fires:** `change` (via `onValueChange`)

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Text label |
| `icon` | `icon` | `string` | `undefined` | Icon beside label |
| `name` | `name` | `string` | `undefined` | Form field name |
| `checked` | `checked` | `boolean` | `false` | Checked state |
| `indeterminate` | `indeterminate` | `boolean` | `false` | Visual indeterminate (no tri-state logic) |
| `disabled` | `disabled` | `boolean` | `false` | Disabled state |
| `inverted` | `inverted` | `boolean` | `false` | Flips layout: checkbox appears on the right |

#### Value

`value` getter returns `checked` boolean. Change is signalled via the `onValueChange` event instance.

---

### `bim-text-input`

**Tag:** `bim-text-input`  
**Implements:** `HasName`, `HasValue`  
**Fires:** `input` (debounced, via `onValueChange`)

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Label text |
| `icon` | `icon` | `string` | `undefined` | Label icon |
| `name` | `name` | `string` | `undefined` | Field identifier |
| `placeholder` | `placeholder` | `string` | `undefined` | Placeholder text |
| `value` | — | `string` | `""` | Current value |
| `type` | `type` | `string` | `"text"` | Input type: `text`, `email`, `password`, `date`, `time`, `url`, `search`, `tel`, `month`, `week`, `datetime-local`, `area` |
| `rows` | `rows` | `number` | `5` | Rows when `type="area"` |
| `resize` | `resize` | `string` | `"vertical"` | CSS resize for textarea: `none` `both` `horizontal` `vertical` `block` `inline` |
| `vertical` | `vertical` | `boolean` | `false` | Vertical layout |
| `debounce` | `debounce` | `number` | `undefined` | Debounce delay in ms |
| `disabled` | `disabled` | `boolean` | `false` | Disabled state |

#### Special getter

`query` — returns a parsed `Query` object (or `null`) from the current text value using `getQuery()`. Supports BIM property filter expressions like `type=IFCWALL & Name?Level`.

#### Methods

`focus()` — focuses the internal `<input>` or `<textarea>`.

---

### `bim-number-input`

**Tag:** `bim-number-input`  
**Implements:** `HasValue`, `HasName`  
**Fires:** `change` (via `onValueChange`)

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Label text |
| `icon` | `icon` | `string` | `undefined` | Icon |
| `name` | `name` | `string` | `undefined` | Field identifier |
| `value` | — | `number` | `0` | Current numeric value |
| `min` | `min` | `number` | `undefined` | Minimum allowed value |
| `max` | `max` | `number` | `undefined` | Maximum allowed value |
| `step` | `step` | `number` | `undefined` | Increment/decrement step |
| `sensitivity` | `sensitivity` | `number` | `undefined` | Drag sensitivity (value per px = 1/sensitivity) |
| `pref` | `pref` | `string` | `undefined` | Prefix string (e.g., `"$"`) |
| `suffix` | `suffix` | `string` | `undefined` | Suffix string (e.g., `"%"`) |
| `vertical` | `vertical` | `boolean` | `false` | Vertical layout |
| `slider` | `slider` | `boolean` | `false` | Enables drag-slider mode |

---

### `bim-color-input`

**Tag:** `bim-color-input`  
**Implements:** `HasValue`, `HasName`  
**Fires:** `input` (via `onValueChange`)

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Label |
| `icon` | `icon` | `string` | `undefined` | Icon |
| `name` | `name` | `string` | `undefined` | Field identifier |
| `color` | `color` | `string` | `"#bcf124"` | Hex color string |
| `opacity` | `opacity` | `number` | `undefined` | 0–100 alpha (omit to hide opacity control) |
| `vertical` | `vertical` | `boolean` | `false` | Vertical layout |
| `disabled` | `disabled` | `boolean` | `false` | Disabled |

#### Value shape

```typescript
{ color: string; opacity?: number }
```

---

### `bim-dropdown`

**Tag:** `bim-dropdown`  
**Implements:** `HasValue`, `HasName`  
**Fires:** `change` (via `onValueChange`)

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Label |
| `icon` | `icon` | `string` | `undefined` | Icon |
| `name` | `name` | `string` | `undefined` | Field identifier |
| `multiple` | `multiple` | `boolean` | `false` | Multi-select |
| `required` | `required` | `boolean` | `false` | Requires at least one selection |
| `placeholder` | `placeholder` | `string` | `undefined` | Placeholder when empty |
| `searchBox` | `search-box` | `boolean` | `undefined` | Adds a search filter input |
| `vertical` | `vertical` | `boolean` | `false` | Vertical layout |
| `visible` | `visible` | `boolean` (getter/setter) | `false` | Controls open/closed state |

#### Value

`value` getter returns `any[]` of selected option values. Setter accepts `any[]` and marks matching options.

Accepts `bim-option` elements as children. Options are filtered via an internal `bim-text-input` when `searchBox` is true.

---

### `bim-selector`

**Tag:** `bim-selector`  
**Implements:** `HasValue`, `HasName`  
**Fires:** `change` (via `onValueChange`)

A compact segmented-button control for single selection among a few options.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Label |
| `icon` | `icon` | `string` | `undefined` | Icon |
| `name` | `name` | `string` | `undefined` | Field identifier |
| `vertical` | `vertical` | `boolean` | `false` | Vertical layout |
| `variant` | `variant` | `"underline" \| undefined` | `undefined` | Visual style: `undefined` = filled background buttons, `"underline"` = underline indicator only |

---

### `bim-option`

**Tag:** `bim-option`  
**Base class:** `LitElement`

Individual option item used inside `bim-dropdown` and `bim-selector`.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Display text |
| `icon` | `icon` | `string` | `undefined` | Optional icon |
| `img` | `img` | `string` | `undefined` | Optional image |
| `value` | — | `any` | `convertString(label)` | Selection value (auto-typed from label if not set) |
| `checked` | `checked` | `boolean` | `false` | Selected state |
| `checkbox` | `checkbox` | `boolean` | `false` | Show checkbox visual |
| `noMark` | `no-mark` | `boolean` | `false` | Hide checkmark when checked |
| `vertical` | `vertical` | `boolean` | `false` | Vertical layout |

---

### `bim-input` (container)

**Tag:** `bim-input`  
**Implements:** `HasValue`, `HasName`

A layout wrapper that adds a shared label row above its child inputs.

#### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | Shared label text |
| `icon` | `string` | `undefined` | Shared label icon |
| `name` | `string` | `undefined` | Identifier |
| `vertical` | `boolean` | `false` | Vertical layout |

#### Value

`value` getter walks `children`, collects each child's `value` keyed by `name` or `label`. Setter distributes keyed values back to matching children.

#### CSS Custom Properties

| Property | Description |
|---|---|
| `--bim-input--maxw` | Max-width constraint for the host |

---

### `bim-panel`

**Tag:** `bim-panel`  
**Implements:** `HasName`, `HasValue`  
**Fires:** `hiddenchange`

Vertical side-panel with a sticky header and collapsible sections.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Header title |
| `icon` | `icon` | `string` | `undefined` | Header icon |
| `name` | `name` | `string` | `undefined` | Identifier (shown in header if no label) |
| `hidden` | `hidden` | `boolean` | `false` | Hides the panel with an animated `clip-path` |
| `headerHidden` | `header-hidden` | `boolean` | `false` | Hides the header row |
| `valueTransform` | — | `Record<string,(v)=>any>` | `{}` | Per-key transform functions for `value` getter |

#### Value

`get value()` — recursively traverses children using `getElementValue()`, returning `Record<string, any>` keyed by `name`/`label` attributes.  
`set value(data)` — matches `data` keys against direct children by `name` or `label`, then sets their `value`.

#### Methods

| Method | Description |
|---|---|
| `collapseSections()` | Collapses all `bim-panel-section` children |
| `expandSections()` | Expands all `bim-panel-section` children |

#### `activationButton`

Every panel creates a `bim-button` (`activationButton`) that can be placed anywhere in the host app — clicking it toggles the panel's `hidden` state.

#### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bim-panel--border` | `1px solid var(--bim-ui_bg-contrast-40)` | Full border shorthand |
| `--bim-panel--c` | `var(--bim-ui_bg-contrast-100)` | Header text color |
| `--bim-panel--fz` | `var(--bim-ui_size-lg)` | Header font size |

---

### `bim-panel-section`

**Tag:** `bim-panel-section`  
**Implements:** `HasName`, `HasValue`

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `label` | `label` | `string` | `undefined` | Section title |
| `icon` | `icon` | `string` | `undefined` | Section icon |
| `name` | `name` | `string` | `undefined` | Identifier |
| `fixed` | `fixed` | `boolean` | `undefined` | Cannot be collapsed |
| `collapsed` | `collapsed` | `boolean` | `undefined` | Collapsed state |
| `valueTransform` | — | `Record<string,(v)=>any>` | `{}` | Per-key transforms |

---

### `bim-tabs` + `bim-tab`

**Tags:** `bim-tabs`, `bim-tab`  
**Fires (tab):** `hiddenchange`

#### `bim-tabs` Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `tab` | `tab` | `string \| undefined` | `undefined` | Active tab name (setter activates named tab) |
| `bottom` | `bottom` | `boolean` | `false` | Move switcher bar to bottom |
| `switchersHidden` | `switchers-hidden` | `boolean` | `false` | Hide all switcher buttons |
| `floating` | `floating` | `boolean` | `false` | Detached floating tab style |
| `switchersFull` | `switchers-full` | `boolean` | `false` | Stretch switchers to equal widths |
| `switchersCompact` | `switchers-compact` | `boolean` | `false` | Compact switcher size |

#### `bim-tab` Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `name` | `name` | `string` | auto-generated | Tab identifier |
| `label` | `label` | `string` | `undefined` | Switcher button text |
| `icon` | `icon` | `string` | `undefined` | Switcher button icon |
| `hidden` | `hidden` | `boolean` | `false` | Hides the tab pane and its switcher |

---

### `bim-toolbar`

**Tag:** `bim-toolbar`

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `icon` | `icon` | `string` | `undefined` | Toolbar icon |
| `labelsHidden` | `labels-hidden` | `boolean` | `false` | Hide all button labels |
| `vertical` | `vertical` | `boolean` | `false` | Vertical orientation |
| `hidden` | `hidden` | `boolean` | `false` | Hide toolbar |

### `bim-toolbar-section`

| Property | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | Section label |
| `icon` | `string` | `undefined` | Section icon |
| `vertical` | `boolean` | `false` | Vertical orientation |
| `labelHidden` | `boolean` | `false` | Hide the label badge |

### `bim-toolbar-group`

| Property | Type | Default | Description |
|---|---|---|---|
| `rows` | `number` | `2` | Number of CSS grid rows for child buttons |
| `vertical` | `boolean` | `false` | Vertical orientation |

---

### `bim-grid`

**Tag:** `bim-grid`  
**Extends:** `Component`  
**Fires:** `elementcreated` (`detail: { name: string, element: HTMLElement }`)

Advanced CSS-Grid layout manager with resizable dividers.

#### Key type signatures

```typescript
// A layout definition maps named areas to components
type GridLayoutsDefinition<L extends string[], E> = {
  [K in L[number]]: {
    template: string;           // CSS grid-template shorthand
    elements?: GridComponents<E>;
    guard?: () => boolean;      // conditional activation
    icon?: string;
  };
};

// Components can be HTML elements, functions, or statefull templates
type GridComponents<T> = {
  [P in ExtractName<T[number]>]?:
    | HTMLElement
    | StatelessComponent
    | { template: StatefullComponent<...>; initialState: ...; label?: string; icon?: string };
};

// Resize state passed during drag
interface GridResizeState {
  x: number; y: number;
  divider: GridDividerInfo;
  colSizesRaw: string[]; rowSizesRaw: string[];
  colSizesComputed: string[]; rowSizesComputed: string[];
}
```

#### Divider behavior

Dividers are injected at the boundary of adjacent grid areas. Horizontal dividers are 4 px tall; vertical dividers are 4 px wide. Dragging adjusts the `grid-template-columns` / `grid-template-rows` strings in-place.

---

### `bim-table`

**Tag:** `bim-table`  
**Extends:** `Component`

High-performance tree-table with virtual grouping, column transforms, and CSV export.

#### Core types

```typescript
type TableRowData<T = Record<string, string|number|boolean>> = Record<keyof T, string|number|boolean>;

interface TableGroupData<T = TableRowData> {
  data: Partial<T>;
  children?: TableGroupData<T>[];
  _isComputedGroup?: boolean;  // set by internal groupBy logic
}

type TableDataTransform<T = TableRowData> = {
  [K in keyof T]?: (value: T[K], data: Partial<T>, group: TableGroup<T>) => string|number|boolean|HTMLElement|TemplateResult;
};

type TableGroupingTransform<T = TableRowData> = {
  [K in keyof T]?: (value: T[K], data: Partial<T>) => string[];
  // Return array determines hierarchy depth:
  // ["Arch"] → 1 level; ["Arch","Floor 1"] → 2 levels
};

interface ColumnData<T = TableRowData> {
  name: keyof T;
  width: string;
  forceDataTransform?: boolean;
}
```

#### Events

| Event | Detail type | Description |
|---|---|---|
| `cellcreated` | `{ cell: TableCell }` | Fired when a cell is rendered |
| `rowcreated` | `{ row: TableRow }` | Fired when a row is rendered |
| `rowselected` | `{ data: Partial<T> }` | Row clicked/selected |
| `rowdeselected` | `{ data: Partial<T> }` | Row deselected |
| `dataselected` | `{ data: Partial<T> }` | Aggregated selection data |
| `dataselectioncleared` | — | Selection cleared |
| `columnschange` | — | Column definition changed |
| `hiddenchange` | — | Rows hidden/shown |
| `layoutchange` | — | Layout re-rendered |
| `childrenhidden` | — | Group children collapsed |

#### CSS Custom Properties (row divider opt-in)

| Property | Description |
|---|---|
| `--bim-table-row--bdbc` | Row bottom border color |
| `--bim-table-row--bdbw` | Row bottom border width |

---

### `bim-slider`

**Tag:** `bim-slider`  
**Implements:** `HasValue`, `HasName`  
**Fires:** `change` (continuous, `CustomEvent<SliderChangedEventDetail>`), `changecommitted` (on pointer-up, `CustomEvent<SliderChangedEventDetail>`) — listen via `addEventListener`

Fully custom slider with range support, marks, keyboard navigation, and a floating value label.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `name` | `name` | `string` | `undefined` | Field identifier |
| `label` | `label` | `string` | `undefined` | Label above track |
| `icon` | `icon` | `string` | `undefined` | Label icon |
| `min` | `min` | `number` | `0` | Minimum value |
| `max` | `max` | `number` | `100` | Maximum value |
| `step` | `step` | `number\|null` | `1` | Step size; `null` = snap to marks only |
| `shiftStep` | `shift-step` | `number` | `10` | Large step (Shift+Arrow) |
| `value` | — | `number\|[number,number]` | `0` | Current value; tuple enables range mode |
| `marks` | — | `SliderMark[]` | `[]` | Snap-point marks `{ value, label? }` |
| `showMarks` | `show-marks` | `boolean` | `false` | Render mark dots even when step ≠ null |
| `valueLabelDisplay` | `value-label-display` | `"auto"\|"on"\|"off"` | `"auto"` | Floating value label visibility |
| `valueLabelFormat` | — | `((v:number)=>string)\|string` | `undefined` | Format function/string for value label |
| `scale` | — | `(v:number)=>number` | `undefined` | Display-only scale transformation |
| `disableSwap` | `disable-swap` | `boolean` | `false` | Prevent thumb swap in range mode |
| `disabled` | `disabled` | `boolean` | `false` | Disabled state |
| `vertical` | `vertical` | `boolean` | `false` | Vertical orientation |
| `markLabelOrientation` | `mark-label-orientation` | `"horizontal"\|"vertical"\|"diagonal"` | `"horizontal"` | Mark label text angle |

#### CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--bim-slider_track--h` | `0.25rem` | Rail & track height |
| `--bim-slider--mx` | `0.5rem` | Horizontal margin of track wrapper |
| `--bim-slider_rail--bgc` | `var(--bim-ui_bg-contrast-20)` | Unfilled rail background |
| `--bim-slider_rail--bdrs` | `var(--bim-ui_size-4xs)` | Rail border-radius |
| `--bim-slider_track--bgc` | `var(--bim-ui_main-base)` | Filled track background |
| `--bim-slider_track--bdrs` | `var(--bim-ui_size-4xs)` | Filled track border-radius |
| `--bim-slider_thumb--sz` | `0.875rem` | Thumb diameter |
| `--bim-slider_thumb--bgc` | `var(--bim-ui_main-base)` | Thumb fill color |
| `--bim-slider_thumb-focus--shadow` | `color-mix(in srgb, main 20%, transparent)` | Halo on hover/drag |
| `--bim-slider_value-label--bgc` | `var(--bim-ui_bg-contrast-80)` | Value tooltip background |
| `--bim-slider_value-label--c` | `var(--bim-ui_bg-base)` | Value tooltip text |
| `--bim-slider_value-label--fz` | `var(--bim-ui_size-xs)` | Value tooltip font size |
| `--bim-slider_value-label--bdrs` | `var(--bim-ui_size-4xs)` | Value tooltip radius |
| `--bim-slider_mark--sz` | `0.25rem` | Mark dot size |
| `--bim-slider_mark--bgc` | `var(--bim-ui_bg-contrast-40)` | Mark dot background |
| `--bim-slider_mark-active--bgc` | `var(--bim-ui_bg-base)` | Active-range mark dot color |
| `--bim-slider_mark-label--fz` | `var(--bim-ui_size-xs)` | Mark label font size |
| `--bim-slider_mark-label--c` | `var(--bim-ui_bg-contrast-60)` | Mark label color |

#### Keyboard navigation

Arrow keys move by `step`. `Shift+Arrow` moves by `shiftStep`. `Home`/`End` jump to `min`/`max`. All keyboard interactions also fire `changecommitted`.

---

### `bim-context-menu`

**Tag:** `bim-context-menu`  
**Fires:** `visible` (when menu opens), `hidden` (when menu closes)

#### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `false` | Open/close the menu |
| `placement` | `Placement` | `undefined` | `@floating-ui/dom` placement: `"top"`, `"bottom"`, `"left"`, `"right"` and their `-start`/`-end` variants |

#### Static Members

| Member | Description |
|---|---|
| `ContextMenu.dialog` | Shared `<dialog>` element that hosts all context menus |
| `ContextMenu.removeMenus()` | Closes and removes all open context menus |

Menus are appended to `ContextMenu.dialog` and positioned with `computePosition(flip, shift, offset)`. The `<dialog>` backdrop is transparent.

---

### `bim-tooltip`

**Tag:** `bim-tooltip`

Lightweight floating tooltip using `@floating-ui/dom`.

#### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `false` | Show/hide |
| `timeout` | `number` | `800` | ms delay before showing |
| `placement` | `Placement` | `undefined` | Floating-UI placement |

#### Static Members

| Member | Description |
|---|---|
| `Tooltip.container` | Shared `<div>` container for all tooltips |

---

### `bim-chart`

**Tag:** `bim-chart`  
**Engine:** Chart.js 4.x + chartjs-plugin-datalabels  
**Fires:** `sectionclick` (`detail: DataClickDetail`)

Supports types: `bar`, `line`, `pie`, `scatter`, `radar`, `bubble`, `doughnut`, `polarArea`.

#### Input data shape

```typescript
type ChartInputData = {
  labels: string[];                               // x-axis / legend labels
  datasets: {
    [datasetLabel: string]: Array<
      | { value: number; data?: Record<string,any> }        // general
      | { x: number; y: number; r?: number; data?: any }   // scatter/bubble
    >;
  };
  backgroundColor?: string;
};
```

#### Async loading

Pass `loadFunction: ChartLoadFunction` (a `() => Promise<ChartInputData>`) for lazy/async data. A loading skeleton is shown while pending.

#### Events

`sectionclick` detail:
```typescript
interface DataClickDetail {
  datasetIndex: number;
  index: number;
  label: string;
  values: ChartInputValues[];
  value: { value: number };
}
```

---

### `bim-chart-legend`

**Tag:** `bim-chart-legend`

Standalone legend for a `bim-chart`. Displays colored swatches + labels with toggle-visibility interaction.

#### Types

```typescript
type LabelData = { [label: string]: any };
type LabelEventData = { label: string; visibility: boolean; data: LabelData };
```

---

### `bim-viewport`

**Tag:** `bim-viewport`  
**Fires:** `resize` (when viewport dimensions change)

Thin host element for a Three.js / WebGL canvas. Watches its bounding box and fires `resize` events for the renderer to match.

#### Properties

| Property | Type | Description |
|---|---|---|
| `name` | `string` | Identifier |

---

### `bim-paper-space`

**Tag:** `bim-paper-space`

A print-ready drawing area modeled after ISO 216 paper sizes with a configurable title block.

#### Properties

| Property | Attribute | Type | Default | Description |
|---|---|---|---|---|
| `size` | `size` | `"A0"\|"A1"\|"A2"\|"A3"\|"A4"` | `"A4"` | ISO 216 paper size |
| `orientation` | `orientation` | `"portrait"\|"landscape"` | `"portrait"` | Page orientation |
| `margin` | `margin` | `number` | `10` | Margin in mm |
| `label` | `label` | `string` | `""` | Drawing title |
| `sheetNumber` | `sheet-number` | `string` | `""` | Sheet identifier (e.g., `"A-01"`) |
| `debug` | `debug` | `boolean` | `false` | Shows printable-area border |
| `ruler` | `ruler` | `boolean` | `false` | Shows measurement ruler gizmo |
| `rulerLength` | `ruler-length` | `number` | `100` | Ruler length in mm |
| `titleBlockTemplate` | — | `(mm, drawingArea, info) => TemplateResult` | `undefined` | Custom title block factory |

#### Computed getters

| Getter | Type | Description |
|---|---|---|
| `widthMm` | `number` | Paper width in mm (accounts for orientation) |
| `heightMm` | `number` | Paper height in mm |
| `pxPerMm` | `number` | Current pixel density (updates on resize) |
| `drawingAreaEl` | `HTMLElement` | The printable-area DOM element |
| `drawingSlotEl` | `HTMLElement` | The `<slot>` element inside the drawing area |

#### Methods

`mm(value: number): string` — converts a millimeter value to a pixel string using current `pxPerMm`.

---

## 9. Core Utilities

### `Manager`

The bootstrap class. Must be called once before using any component.

```typescript
import { Manager } from "@thatopen-platform/ui-beta";
Manager.init();
```

`Manager.init(querySelectorElements?, animateOnLoad?)` registers all 28 custom elements, injects global CSS into `<head>`, and optionally runs a staggered entrance animation (translateY -20px → 0, opacity 0 → 1, delay proportional to element screen position).

#### Configuration

```typescript
Manager.config = {
  sectionLabelOnVerticalToolbar: false,   // show section label badge on vertical toolbars
  internalComponentNameAttribute: "bim-element-name",
};
```

#### Icon management

```typescript
// Preload Iconify icons (network prefetch)
Manager.preloadIcons(["solar:home-bold", "mdi:close"]);

// Register a local icon collection
Manager.addIconsCollection(
  { home: { body: "<path .../>", width: 24, height: 24 } },
  { prefix: "my-app" }
);
// Usage: icon="my-app:home"

// Generate random 10-char alphanumeric ID
const id = Manager.newRandomId();

// Toggle dark ↔ light with animated circle reveal
Manager.toggleTheme();
```

---

### `Event<T>` (observable event)

A typed, lightweight pub/sub mechanism used on all component value-change signals.

```typescript
class Event<T> {
  enabled: boolean;                          // master on/off switch
  add(handler: (data: T) => void): void;     // subscribe
  remove(handler: (data: T) => void): void;  // unsubscribe
  trigger(data?: T): void;                   // emit (no-op when !enabled)
  reset(): void;                             // remove all handlers
}
```

---

### `DataSet<T>` (reactive Set)

Extends the native `Set<T>` with observable lifecycle events.

```typescript
class DataSet<T> extends Set<T> {
  readonly onUpdated:      Event<undefined>;
  readonly onItemAdded:    Event<T>;
  readonly onBeforeDelete: Event<T>;
  readonly onItemDeleted:  Event<T>;
  readonly onCleared:      Event<undefined>;

  set eventsEnabled(value: boolean);   // batch-disable all events

  add(...items: T[]): this;            // variadic; fires onItemAdded per item
  delete(value: T): boolean;           // fires onBeforeDelete + onItemDeleted
  deleteIf(predicate: (v:T)=>boolean): void;
  clear(): void;                       // fires onBeforeDelete for each, then onCleared
  getIndex(item: T): number;           // O(n) index lookup
  dispose(): void;                     // clear + reset all handlers

  guard: (value: T) => boolean;        // reject on add when returns false
  deleteGuard: (value: T) => boolean;  // reject on delete when returns false
}
```

---

### `getElementValue<T>(child, transform?, recursive?)`

Traverses `child.children`, collecting `value` from any child that has a `name` or `label` attribute. Applies optional per-key transform functions. Recurses into wrappers without names. Returns `Record<string, any>`.

---

### `convertString(value: string)`

Auto-types a string: returns `true`/`false` for `"true"`/`"false"`, returns `Number(value)` if numeric, otherwise returns the original string. Used pervasively by `bim-option` and `bim-label` for attribute value coercion.

---

### Query DSL

`bim-text-input` exposes a `.query` getter that parses filter expressions into a structured `Query` type, suitable for filtering IFC properties or any key-value store.

#### Grammar

```
query    := entry ( '&' group | '&' entry )*
group    := '(' entry ( '&' entry )* ')'
entry    := key CONDITION value
CONDITION := '=' | '>' | '>=' | '<' | '<=' | '?' | '/' | '#'
```

| Condition | Meaning |
|---|---|
| `=` | Strict equality |
| `>` / `>=` / `<` / `<=` | Numeric comparison |
| `?` | String contains |
| `/` | String starts with |
| `#` | Reserved (custom extension point) |

**Example:**
```
type=IFCWALL & (Name?Level & LoadBearing=true)
```

Parses to:
```typescript
[
  { key: "type", condition: "=", value: "IFCWALL" },
  { operator: "&", queries: [
    { key: "Name", condition: "?", value: "Level" },
    { operator: "&", key: "LoadBearing", condition: "=", value: true }
  ]}
]
```

Types:
```typescript
type Query          = (EntryQuery | QueryGroup)[];
type QueryCondition = "=" | ">" | ">=" | "<" | "<=" | "?" | "/" | "#";
type QueryOperators = "&" | "|";

interface EntryQuery {
  operator?: QueryOperators;
  key: string;
  condition: QueryCondition;
  value: string | number | boolean;
}

interface QueryGroup {
  operator?: QueryOperators;
  queries: (EntryQuery | QueryGroup)[];
}
```

---

### CSS Abbreviations Reference

Component CSS custom property names follow Emmet-style shorthand suffixes:

| Suffix | CSS property |
|---|---|
| `--bgc` | `background-color` |
| `--c` | `color` |
| `--fz` | `font-size` |
| `--bdrs` | `border-radius` |
| `--bds` | `border-style` |
| `--bdc` | `border-color` |
| `--ol` | `outline` |
| `--olc` | `outline-color` |
| `--olw` | `outline-width` |
| `--p` | `padding` |
| `--g` | `gap` |
| `--d` | `display` |
| `--jc` | `justify-content` |
| `--js` | `justify-self` |
| `--hc` | `header-color` (custom) |
| `--tpl` | `template` (custom) |

---

## 10. Do's and Don'ts

### Do

- **Call `Manager.init()` once** at application startup before any `bim-*` element is upgraded.
- **Use `--bim-ui_*` tokens** for all theming; never hardcode hex colors in component CSS overrides.
- **Pass `contextMenuTemplate`** as a lazy factory to avoid creating DOM until needed.
- **Use `panel.value` / `panel.value = {...}`** for programmatic form reads/writes instead of querying each child individually.
- **Use `DataSet` events** to react to collection changes reactively instead of polling.
- **Prefer `bim-slider` with marks and `step: null`** when the set of valid values is discrete and non-uniform.
- **Preload frequently-used Iconify icons** with `Manager.preloadIcons([...])` to avoid layout shift.
- **Use `bim-grid` layouts** to manage full-application layout; avoid hardcoding CSS grid on the host.

### Don't

- **Don't call `Manager.init()` more than once** — it is idempotent but the `animateOnLoad` pass will re-run and produce a double animation.
- **Don't place `bim-panel-section` outside `bim-panel`** — the `--bim-panel-section--border` and `--bim-panel-section--bdrs` resets are only applied inside a panel context.
- **Don't bypass the contrast scale** — using raw `gray-*` values in component overrides breaks light/dark theme symmetry.
- **Don't use `Manager.registerComponents()`** — it is deprecated; use `Manager.init()`.
- **Don't set `bim-table` column widths** in px only — use `fr` units or `minmax()` for responsive behavior.
- **Don't nest `bim-grid` inside itself** — grid layouts are designed as top-level orchestrators.
- **Don't hardcode `display: none` on `bim-panel`** — use the `hidden` property so the activation button state stays in sync.
- **Don't use `opacity: 0` in host application CSS to hide components** — the `animateOnLoad` system manages initial opacity and will conflict.

---

## 11. Initialization & Integration Recipe

```html
<!DOCTYPE html>
<html class="bim-ui-dark">
<head>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; overflow: hidden; }
  </style>
</head>
<body>
  <bim-grid id="app"></bim-grid>
  <script type="module">
    import { Manager, Grid, Panel, Toolbar, Button } from "@thatopen-platform/ui-beta";

    // 1. Register all custom elements + inject global CSS tokens
    Manager.init();

    // 2. Optionally preload icons used in the initial layout
    Manager.preloadIcons(["solar:home-bold", "solar:settings-bold"]);

    // 3. Build components
    const toolbar = document.createElement("bim-toolbar");
    const homeBtn = document.createElement("bim-button");
    homeBtn.label = "Home";
    homeBtn.icon = "solar:home-bold";
    toolbar.append(homeBtn);

    const panel = document.createElement("bim-panel");
    panel.label = "Properties";

    // 4. Configure the grid layout
    const grid = document.getElementById("app");
    grid.layouts = {
      default: {
        template: `
          "toolbar" 40px
          "main"    1fr
          / 1fr 300px
        `,
        elements: { toolbar, main: panel },
      },
    };
    grid.layout = "default";
  </script>
</body>
</html>
```

---

## 12. Package Metadata

| Field | Value |
|---|---|
| NPM name | `@thatopen-platform/ui-beta` |
| Version | `3.5.1` |
| License | MIT |
| Entry point | `dist/index.js` |
| Type definitions | `dist/index.d.ts` |
| Module format | ES modules (`"type": "module"`) |
| Peer dependency | `lit` 3.x (externalized from bundle) |
| Built with | Vite 5.1.6 + vite-plugin-dts + TypeScript 5.4.2 |
| Authors | Juan Hoyos, Pablo Aguilar — That Open Company |
