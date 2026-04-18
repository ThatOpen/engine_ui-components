# Contributing to @thatopen/ui

Thanks for your interest in contributing. This guide covers how the repo is laid out, how to run it locally, and a few gotchas that aren't obvious from reading the code.

For general guidelines shared across all That Open Company repos (ask-first policy, conventional commits, JSDoc rules, example code rules), read [docs.thatopen.com/contributing](https://docs.thatopen.com/contributing) first. This file only covers what's specific to `engine_ui-components`.

## What this is

`@thatopen/ui` is a library of web components for building BIM web apps. Everything is a custom element (`<bim-button>`, `<bim-panel>`, `<bim-table>`, ...) built on [Lit](https://lit.dev). Drop-in via HTML, no framework required; works alongside React, Vue, Svelte, or plain JS.

The repo ships two packages:

- `@thatopen/ui` (in `packages/core/`) — generic UI primitives. No BIM dependencies. Safe to use in any web app.
- `@thatopen/ui-obc` (in `packages/obc/`) — BIM-specific components built on top of `@thatopen/components` (viewports, property panels, classification trees, etc.).

## Repo layout

```
packages/
├── core/src/                 # @thatopen/ui
│   ├── core/
│   │   ├── Component/        # Base LitElement subclass with lazy-load support
│   │   ├── Manager/          # Custom-element registration (defineCustomElement)
│   │   ├── types.ts
│   │   └── utils.ts
│   └── components/           # The primitives
│       ├── Button/           # <bim-button>
│       ├── Checkbox/         # <bim-checkbox>
│       ├── ColorInput/       # <bim-color-input>
│       ├── ContextMenu/      # <bim-context-menu>
│       ├── Dropdown/         # <bim-dropdown>
│       ├── Grid/             # <bim-grid> (flexible layout grid)
│       ├── Icon/             # <bim-icon>
│       ├── Input/            # <bim-input>
│       ├── Label/            # <bim-label>
│       ├── NumberInput/      # <bim-number-input>
│       ├── Option/           # <bim-option>
│       ├── Panel/            # <bim-panel>
│       ├── PaperSpace/       # <bim-paper-space>
│       ├── Selector/         # <bim-selector>
│       ├── Slider/           # <bim-slider>
│       ├── Table/            # <bim-table>
│       ├── Tabs/             # <bim-tabs>
│       ├── TextInput/        # <bim-text-input>
│       ├── Toolbar/          # <bim-toolbar>
│       ├── Tooltip/          # <bim-tooltip>
│       ├── Viewport/         # <bim-viewport> (Three.js canvas host)
│       ├── Chart/ + ChartLegend/
│       └── ...
└── obc/src/                  # @thatopen/ui-obc (BIM-specific)
    ├── core/
    │   └── Manager/          # Registers obc custom elements (<bim-world>, <bim-sheet-board>, ...)
    ├── components/
    │   ├── buttons/          # BIM-flavored buttons (ModelButton, ...)
    │   ├── charts/           # BIM charts (model stats, etc.)
    │   ├── forms/            # Attribute editors, property-set forms
    │   ├── sections/         # Panel sections wired to @thatopen/components
    │   └── tables/           # Element tables, classification trees, relations tables
    └── utils/
```

### Key mental model

- **Everything is a custom element.** Define a `LitElement` subclass, register it via `Manager.defineCustomElement("bim-thing", Thing)`. The tag is the primary contract — users consume components through HTML and attributes, not TS imports.
- **Tag naming: `bim-*`.** All core and obc tags share the `bim-` prefix. Pick names that describe the widget, not the BIM concept (e.g., `<bim-table>` is generic; the BIM-specific one is named by what it shows, like `<bim-world>`).
- **Core knows nothing about BIM.** No imports from `@thatopen/components` or `@thatopen/fragments` in `packages/core/`. Primitives are framework-agnostic and should work in a vanilla HTML page.
- **Obc is where BIM lands.** Any component that wires into a `Components` instance, reads fragments data, or talks to a 3D scene goes in `packages/obc/`. Obc freely depends on core.
- **Lit templating everywhere.** Components render via Lit's `html` tagged template. Events are native `CustomEvent` instances unless wrapped, so they work with any framework.
- **Lazy loading for large lists.** The base `Component` class has `IntersectionObserver` support for virtualized rendering when a component renders many children (see `Table`, `Dropdown`). Opt in with `useObserver = true`.

## Setting up

```bash
git clone https://github.com/ThatOpen/engine_ui-components.git
cd engine_ui-components
yarn install
yarn dev
```

`yarn dev` starts a Vite server that serves every `example.ts` in the repo. Browse to the printed URL and pick one. Changes to source files hot-reload.

## Running examples locally against your changes

Examples import from the local source, so edits to either package show up immediately without rebuilding.

The only time you need an explicit build:

- **Before opening a PR**, run `yarn build-libraries` to verify both packages build cleanly. This is the same check CI runs.
- **Testing consumer-side integration** (i.e., using the built `dist/` from another repo), run `yarn build-core` and/or `yarn build-obc`.

## Adding a component

1. Open an issue first (ask-first policy, per [docs.thatopen.com/contributing](https://docs.thatopen.com/contributing)).
2. Decide core vs obc: does it depend on `@thatopen/components` or BIM data? If yes, obc. If no, core.
3. Branch from `main`.
4. Create a folder under the appropriate package (e.g., `packages/core/src/components/MyWidget/`) with:
   - `index.ts` — `LitElement` subclass with `static styles`, `render()`, and any `@property` reactive props
   - `example.ts` + `example.html` — doubles as docs and regression test (deployed to the docs site)
5. Register the custom element in the parent `Manager/index.ts`:
   ```ts
   Manager.defineCustomElement("bim-my-widget", components.MyWidget);
   ```
6. Add the tag to the global HTML element map in `Manager/index.ts` so TS users get autocomplete:
   ```ts
   declare global {
     interface HTMLElementTagNameMap {
       "bim-my-widget": MyWidget;
     }
   }
   ```
7. Re-export the class from the package's top-level `index.ts`.
8. Update `CHANGELOG.md` under `## Unreleased` if user-visible.
9. `yarn build-libraries` to verify the build.
10. Open a PR with a conventional-commits title (`feat:`, `fix:`, `feat!:` for breaking).

## Fixing a bug

1. Reproduce in the relevant `example.ts`, or tweak an existing one to exercise the broken path.
2. Keep the fix minimal. CSS tokens and attribute-driven state changes are easy to over-engineer; prefer the smallest patch.
3. PR title: `fix: <one-line description>`.

## Gotchas

- **`lit` is a shared dep between both packages.** Both vite configs externalize `lit` and `lit/*` subpaths so each package imports from the consumer's `node_modules/lit` rather than inlining its own copy. If you bundle lit, the consumer will get the "Multiple versions of Lit loaded" warning. Don't remove the `external: (id) => id === "lit" || id.startsWith("lit/")` rule.
- **Obc externalizes `@thatopen/ui`.** Same reason as above: users shouldn't get two copies of core floating around.
- **Custom element names are global.** Once `customElements.define("bim-foo", ...)` runs, the name is locked for the page. Pick names carefully and avoid renaming after release — it's a breaking change that can't be softened with deprecation.
- **CSS vars are the public theming API.** Tokens like `--bim-ui_bg-contrast-60`, `--bim-button--bgc`, etc. are consumed by user stylesheets. Renaming them is a breaking change.
- **Reactive properties need `@property` decorators** (or the `static properties` block) or Lit won't re-render on change. Mutating a plain class field won't trigger an update.
- **Don't assume `document` or `window` exist at module load.** Components must be importable in SSR contexts (Next.js, Astro) without crashing, even if they only render client-side. Put browser API access inside `connectedCallback()` or `firstUpdated()`.
- **`@thatopen/ui-obc` peer-depends on `@thatopen/components`.** Keep the peer range tight; don't bump unless you actually use new core API.

## When in doubt

Read the existing examples under `packages/*/src/components/**/example.ts` — they cover every public component and are the fastest way to see attribute / slot / event patterns.
