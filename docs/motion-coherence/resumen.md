# Coherencia de motion en @thatopen/ui — resumen

**Alcance:** no es uno de los 6 repos del encargo motion-pass-2 (`platform_backend-api`,
`platform_builtin-components`, `platform_hub`, `platform_coordinator`,
`platform_designer`, `platform_drafter`). Es `engine_ui-components`, la librería
vendor (`@thatopen/ui`) que esos 6 repos consumen vía `node_modules`. Jesús abrió
este alcance el 14-11-2026 al ver, en vivo, inconsistencia entre componentes con
animación (con rebote en algún caso) y componentes sin ninguna, y pidió investigar
el repo fuente — que es un proyecto propio de la organización, no de terceros — y
después, explícitamente: *"Mientras no publiquemos, yo me animaría a mejorarlo
todo, incluido esto. El objetivo es dejarlo todo fino y coherente. Finalmente lo
documentamos y por último, una vez validado todo haremos PRs donde corresponda."*

Todo lo de aquí vive solo en este clon local (`C:\Users\jesus\AppData\Local\Temp\toc\engine_ui-components`).
No se ha publicado nada, no se ha tocado el remoto, no hay PR.

## Los tres hallazgos de Jesús

1. **`bim-dropdown`** — el desplegable abría con un rebote visible.
   `Dropdown/index.ts`: la animación de apertura usaba
   `cubic-bezier(0.72, 0.1, 0.45, 2.35)` — el `2.35` en la segunda coordenada Y
   hace que la interpolación se pase de `scale(1)` antes de asentarse ahí. Un
   rebote simulado con una sola curva, no con keyframes.
   **Arreglo:** pasa a `var(--bim-ui_duration-sm) var(--bim-ui_ease-standard)`,
   la misma curva de desaceleración (sin overshoot) que ya usaba `Panel` para su
   cierre.

2. **`bim-tabs`** — las pestañas (Architecture/Structure/MEP/Modify) solo tenían
   un fundido de color plano por pestaña, sin ningún indicador que se desplazara
   entre una y otra.
   **Arreglo:** un elemento `.indicator` que se desliza y cambia de ancho hasta
   cubrir exactamente la pestaña activa, en vez de que cada pestaña encienda/apague
   su propio fondo de golpe. Mismo color de marca de antes
   (`--bim-tabs-switcher--active-bgc`), solo que ahora es un único elemento que
   se mueve.
   **Bug propio encontrado y corregido durante la implementación:** la primera
   medición del ancho de la pestaña activa se tomaba antes de que `bim-label`
   terminara de pintar su texto (fuente aún sin cargar), así que el indicador se
   quedaba más estrecho de lo debido hasta el primer clic del usuario. Se
   corrigió observando con `ResizeObserver` el tamaño real de la pestaña activa
   (no solo el del host `bim-tabs`), así se re-mide sola en cuanto su contenido
   cambia de tamaño por cualquier motivo. Verificado: las ~16 instancias de la
   página de ejemplo miden exacto en frío, sin necesitar un clic primero.

3. **`bim-panel-section`** (el acordeón "Cut" de la captura) — la flecha SÍ
   giraba con transición (`transform 0.2s`), pero el contenido que se revelaba
   usaba `display: none` puro, sin transición — de ahí la sensación de "de
   golpe" con la flecha moviéndose y el contenido no.
   **Arreglo:** `.components` pasa a ser su propio grid de una fila
   (`grid-template-rows: 1fr` ↔ `0fr`, la técnica estándar para animar un
   acordeón con grid cuando la altura de destino no se conoce de antemano), con
   `.components-inner` llevando el layout de columna flex que antes vivía
   directamente en `.components`. Medido en vivo: 16px → 74px en ~180ms al
   expandir, y la vuelta 74px → 16px en ~140ms al colapsar, sin saltos.
   **Bug propio encontrado y corregido antes de poder probarlo:** usé comillas
   invertidas (`` ` ``) dentro de un comentario que vive dentro de un template
   literal `css\`...\``` — esas comillas cierran el template literal antes de
   tiempo y el resto se interpreta como JavaScript, rompiendo el render de
   **todo** `bim-panel` (no solo `bim-panel-section`) con
   `TypeError: css(...).components is not a function`. Se corrigió quitando las
   comillas invertidas del comentario.

   **Segundo bug propio, de accesibilidad, encontrado después de dar el pase por
   validado:** `display: none` sacaba gratis el contenido colapsado del orden de
   tabulación y del árbol de accesibilidad. Una animación de altura con
   `overflow: hidden` no hace eso — confirmado en Chrome: un `bim-checkbox`
   dentro de una sección colapsada recibía el foco igualmente (con `.focus()` y,
   por tanto, también con Tab). Se corrigió añadiendo `inert` a `.components`,
   ligado a `collapsed && !fixed` y reactivo (se quita en el mismo render en que
   `collapsed` pasa a `false`, antes de que termine la animación de expansión).
   Reverificado: con `inert`, el foco no entra estando colapsado y sí entra en
   cuanto se expande; probado también con `panel.collapseSections()` /
   `expandSections()` sobre tres secciones a la vez, las tres cambian `inert` en
   conjunto con `collapsed`.

## Lo mismo, encontrado por barrido y no en las capturas de Jesús

Un rebote idéntico (`cubic-bezier(0.72, 0.1, 0.45, 2.35)`, la misma curva del
Dropdown) también estaba en:

- **`TableGroup.ts`** (el caret del árbol expandible de `bim-table`) — mismo
  arreglo, misma curva compartida.
- **`ContextMenu/index.ts`** (la apertura del menú contextual, `scale(0.8)` →
  `scale(1)`) — mismo arreglo. De paso se le añadió el `prefers-reduced-motion`
  que no tenía (los otros componentes tocados en este pase ya lo tenían).

## Infraestructura añadida

`core/Manager/src/styles.ts` no tenía ningún token de motion — cada componente
llevaba su curva escrita a mano. Se añadieron tres:

```css
--bim-ui_ease-standard: cubic-bezier(0.65, 0.05, 0.36, 1);
--bim-ui_duration-sm: 0.15s;
--bim-ui_duration-md: 0.2s;
```

`Panel.ts` y `TableGroup.ts` (que ya usaban esa misma curva, escrita a mano en
cada sitio) pasaron a leerla del token vía `getComputedStyle(this)`, para que
quede una sola fuente en vez de cuatro copias idénticas.

## Revisado y dejado tal cual, a propósito

**`Checkbox/index.ts`** tiene un `@keyframes bounce` explícito (nombrado así por
quien lo escribió) para el check: 0%→`scale(0)`, 50%→`scale(1.2)` (rebote),
75%→`scale(0.9)`, 100%→`scale(1)`. Ya respeta `prefers-reduced-motion`.

No se tocó. Es una categoría distinta de los tres casos de Jesús: aquellos eran
un rebote accidental (efecto secundario de una curva mal elegida sobre una
transición de apertura/cierre estructural) que él describió como "forzado, nada
elegante, aleatorio". Este es un rebote **deliberado y nombrado**, para una
confirmación puntual (el check de una casilla) — un patrón habitual y bien
valorado en varios sistemas de diseño (Material, iOS), no el mismo defecto. Se
deja anotado aquí para que Jesús decida si también quiere quitarlo, en vez de
asumir que la regla "nunca rebote" se aplica igual a los dos casos.

## Validación hecha

- `tsc --p packages/core/tsconfig-build.json --noEmit` → limpio, sin errores de
  tipos.
- `vite build` (el build real de `@thatopen/ui`, el mismo que usa
  `prepublishOnly`) → limpio, 81 módulos, sin warnings nuevos.
- Verificación visual en Chrome contra las páginas de ejemplo propias de la
  librería (`packages/core/src/components/*/example.html`, servidas con
  `vite --host` en este mismo clon):
  - Dropdown: abre sin overshoot.
  - Tabs: las ~16 variantes de la página (default, full, compact, bottom,
    floating, floating+bottom, overflow→dropdown, programmatic, events) miden
    el indicador exacto contra la pestaña activa, en frío y tras cambiar de
    pestaña.
  - Panel/Section: colapso/expansión medido con `getBoundingClientRect` en cada
    frame (16↔74px, curva suave, sin saltos); secciones `fixed` siguen sin
    animar (correcto, por diseño); las tres variantes de tabla con scroll
    (`no scroll`, `table scrolls`, `section scrolls`) no recortan contenido.
  - ContextMenu: abre sin overshoot, sin errores de consola.

## Lo que falta, y por qué se para aquí

El paso que faltaría para una validación completa de verdad es verlo dentro de
una app real (Designer, que usa `bim-panel-section` con contenido denso) en vez
de solo en las páginas de ejemplo de la librería. Eso requeriría enlazar este
build dentro del `node_modules` de uno de los 6 repos gobernados — aunque sea
en local y de forma transitoria.

**Decisión tomada en esta sesión (sin Jesús disponible para confirmar):** no se
hizo. El repo de la Plataforma se trata como de solo lectura — consultar sí,
escribir nada — y enlazar una dependencia distinta ahí dentro, aunque sea
localmente, es escribir en él. Se para la validación en el nivel de la propia
librería (su build + sus páginas de ejemplo, que cubren fijo/colapsable/con
scroll/con tablas/compacto/flotante) y se deja como decisión pendiente, no como
hecho, para que Jesús la tome él mismo si quiere ir más allá.

## Siguiente paso

Pendiente de Jesús: revisar este resumen, decidir sobre el Checkbox, decidir si
quiere el paso de enlazarlo en Designer antes de darlo por validado del todo, y
solo entonces decidir en qué repos corresponde abrir PR (este, `engine_ui-components`,
es uno nuevo que no estaba en la lista original de 6).
