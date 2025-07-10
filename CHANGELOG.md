# Changelog

## [3.1.0](https://github.com/ThatOpen/engine_ui-components/compare/v2.4.0...v3.1.0) (2025-07-10)


### Features

* adapt ui to fragments 2.0, improve all components ([5586d4e](https://github.com/ThatOpen/engine_ui-components/commit/5586d4ebf4686e90bdc2d66c5e2ef4da98193ddd))


### Bug Fixes

* bim-icon svg image position & bim-label font-size/line height [#56](https://github.com/ThatOpen/engine_ui-components/issues/56). ([#67](https://github.com/ThatOpen/engine_ui-components/issues/67)) ([604a4b9](https://github.com/ThatOpen/engine_ui-components/commit/604a4b9991be47147eb6bc8f8407dbc01db62ac4))
* **core:** bim-tab was not updating the label in the UI ([ed10e91](https://github.com/ThatOpen/engine_ui-components/commit/ed10e910aecc12b9caabae750172a73eb707e1de))
* Documentation Updates engine_ui-components [#459](https://github.com/ThatOpen/engine_ui-components/issues/459) ([#59](https://github.com/ThatOpen/engine_ui-components/issues/59)) ([bfdb5e8](https://github.com/ThatOpen/engine_ui-components/commit/bfdb5e8912348eb6f58a66f46c4ac9e3ca300499))
* make elementProperties values selectable [#57](https://github.com/ThatOpen/engine_ui-components/issues/57) ([#62](https://github.com/ThatOpen/engine_ui-components/issues/62)) ([6e5a11c](https://github.com/ThatOpen/engine_ui-components/commit/6e5a11c8aaa930edb6dc244a1eeb9a2476469eb6))
* remove conflicting CSS rule in ToolbarSection ([1149821](https://github.com/ThatOpen/engine_ui-components/commit/1149821891b0f9613d7826581522f599d0d283bc))


### Miscellaneous Chores

* release 3.1.0 ([d219122](https://github.com/ThatOpen/engine_ui-components/commit/d2191223a0eb7b373410a95b60986868b0748625))

## [2.4.0](https://github.com/ThatOpen/engine_ui-components/compare/v2.3.0...v2.4.0) (2024-11-28)


### Features

* **core:** adds better typing support for bim-table ([51a8587](https://github.com/ThatOpen/engine_ui-components/commit/51a858722a19e2c7650a80cc93fd768af5d13d32))
* **core:** adds the posibility to update a statefull component inside it-self ([2fdc271](https://github.com/ThatOpen/engine_ui-components/commit/2fdc2710570e2813c3c8125947d933f8e701351c))
* **core:** improves the bim-grid component ([5f97e85](https://github.com/ThatOpen/engine_ui-components/commit/5f97e85897378db9478ff94b2935e5aee1263f64))
* **obc:** adds dispose to bim-world ([a6e9ae1](https://github.com/ThatOpen/engine_ui-components/commit/a6e9ae19207e8c8e07ccd6d7459cf652dc6deab2))
* **obc:** improves the set of BCFTopics UIs and creates a full tutorial to use them ([39faace](https://github.com/ThatOpen/engine_ui-components/commit/39faace28329ca24ccd7a66d37207b2fba4ee6f7))


### Bug Fixes

* **obc:** solve missing ElementProperties table when no Name is found ([afccbc1](https://github.com/ThatOpen/engine_ui-components/commit/afccbc17ef980671c32d842c2cad8911b81e1a8d))

## [2.3.0](https://github.com/ThatOpen/engine_ui-components/compare/v2.2.0...v2.3.0) (2024-10-07)


### Features

* **core:** adds no-indentation on bim-table ([aa916de](https://github.com/ThatOpen/engine_ui-components/commit/aa916de9963b8411cbd192e269f7eba103a5b9c7))
* **obc:** adds new bim-world component ([e7e4640](https://github.com/ThatOpen/engine_ui-components/commit/e7e46408584ce694918ac34ea9038d145c5690cd))
* **obc:** display units in ElementProperties ([bbf0c96](https://github.com/ThatOpen/engine_ui-components/commit/bbf0c967d92eab400a9f840e3065fba478762420))


### Bug Fixes

* **core:** context menu behavior in buttons ([beddd8d](https://github.com/ThatOpen/engine_ui-components/commit/beddd8d18f0993bc924299ab6f965cb5d888d636))
* **obc:** correctly implements bim-table on ModelsList ([fce48e9](https://github.com/ThatOpen/engine_ui-components/commit/fce48e9fbbecaccfb0bc250613d85ff05cb29e56))
* **obc:** IfcLoader button was setting the model name after triggering onFragmentsLoaded ([c8dc488](https://github.com/ThatOpen/engine_ui-components/commit/c8dc488cd947f26be8fe26a1dabbdead85ccb0d4))

## [2.2.0](https://github.com/ThatOpen/engine_ui-components/compare/v2.1.0...v2.2.0) (2024-08-19)


### Features

* add world2d offset ([8ab4fc2](https://github.com/ThatOpen/engine_ui-components/commit/8ab4fc27109ca2d3c6bf5486ebd52279c77766c0))
* **core:** adds area type for text input ([bd5de37](https://github.com/ThatOpen/engine_ui-components/commit/bd5de3769e2b711e05725c017a8e069f72d8ade2))
* **core:** adds loading skeleton, async data loading and slots to handle table states ([4013ef8](https://github.com/ThatOpen/engine_ui-components/commit/4013ef88b927a4ed99b8617c476dd71d74c8f4f3))
* **core:** adds loading state to the button ([0a0ee78](https://github.com/ThatOpen/engine_ui-components/commit/0a0ee78e6fbc1589ae4f46b1706e8967e9da699c))
* **core:** adds row selection to bim-table ([8054202](https://github.com/ThatOpen/engine_ui-components/commit/8054202008d1c10ac4a55b2a81b479ab71d7118f))
* **core:** adds some simple CSS transitions for smother looking ([b5c2e6f](https://github.com/ThatOpen/engine_ui-components/commit/b5c2e6f983107deba3d80caabdf4a147806db4c2))
* **core:** adds the ability to get the current state of a Component ([6bee95f](https://github.com/ThatOpen/engine_ui-components/commit/6bee95fbab1b9ffd68e138ac221832031a6aaa26))
* **core:** adds value transformation for panel and panel-section ([efc357b](https://github.com/ThatOpen/engine_ui-components/commit/efc357b60275b6df2f093913b65c8cacfed7f9b8))
* **core:** better context menus on buttons ([801b778](https://github.com/ThatOpen/engine_ui-components/commit/801b778f2bea8b8a5bd9ec7aba340cba08ce68e2))
* **obc:** [#39](https://github.com/ThatOpen/engine_ui-components/issues/39) allows to specify the action buttons in the ModelsList ([#42](https://github.com/ThatOpen/engine_ui-components/issues/42)) ([287fee2](https://github.com/ThatOpen/engine_ui-components/commit/287fee29e5970ef7c70308f9da92efd0c26e9618))
* **obc:** adds BCF UI ([e19b40e](https://github.com/ThatOpen/engine_ui-components/commit/e19b40e167441660ce098bb74fdf509689965229))
* **obc:** adds download functionality in models list ([e2f310b](https://github.com/ThatOpen/engine_ui-components/commit/e2f310b1295000d66817f5d79ee64fbdeafede32))
* **obc:** adds IfcTasks to ElementProperties ([41e4baf](https://github.com/ThatOpen/engine_ui-components/commit/41e4baff96c22c58d88cafa5cb96237abf4bc5dd))
* **obc:** Groups entities with the same name in RelationsTree. [#40](https://github.com/ThatOpen/engine_ui-components/issues/40) ([#41](https://github.com/ThatOpen/engine_ui-components/issues/41)) ([4ef9848](https://github.com/ThatOpen/engine_ui-components/commit/4ef9848dad57646143283318218243dcfee882d5))
* **obc:** improves performance of the ElementProperties component ([299d602](https://github.com/ThatOpen/engine_ui-components/commit/299d602854503e066c57321b2003c52fb4932589))
* **obc:** it is now easier to specify the classifications to be added to the table ([76cc43e](https://github.com/ThatOpen/engine_ui-components/commit/76cc43e760972cdd62cef2bb49e8638eb0208753))


### Bug Fixes

* add publish repo scripts ([a18b1fa](https://github.com/ThatOpen/engine_ui-components/commit/a18b1facf050746a9c95a788fc5c1cf75f0a797d))
* **core:** button not triggering click event on React ([7a259d7](https://github.com/ThatOpen/engine_ui-components/commit/7a259d7d52fe5f7d2629ee82ffa190706ca05926))
* **core:** error when getting panel value ([c5cea03](https://github.com/ThatOpen/engine_ui-components/commit/c5cea03c05ef4c36817801c451c4582946fe7810))
* **core:** solves dropdown checked option ([d5e522f](https://github.com/ThatOpen/engine_ui-components/commit/d5e522fcb6b996952d1095fb59d8e0124845705f))
* **core:** updates button background-color inside toolbars ([7ce9e31](https://github.com/ThatOpen/engine_ui-components/commit/7ce9e31f5429aa50bf8505ad636f7a582c4d4d25))


### Miscellaneous Chores

* release 2.1.0 ([4c1bd25](https://github.com/ThatOpen/engine_ui-components/commit/4c1bd251c7d7eadcca24f8aa666002ab29505f2b))
* release 2.2.0 ([22fd62f](https://github.com/ThatOpen/engine_ui-components/commit/22fd62fce4ce27586df8c5c61e11023d5f5ccb7d))

## [2.1.0](https://github.com/ThatOpen/engine_ui-components/compare/v2.1.0...v2.1.0) (2024-07-10)


### Bug Fixes

* add publish repo scripts ([a18b1fa](https://github.com/ThatOpen/engine_ui-components/commit/a18b1facf050746a9c95a788fc5c1cf75f0a797d))


### Miscellaneous Chores

* release 2.1.0 ([4c1bd25](https://github.com/ThatOpen/engine_ui-components/commit/4c1bd251c7d7eadcca24f8aa666002ab29505f2b))

## [2.1.0](https://github.com/ThatOpen/engine_ui-components/compare/v2.1.0...v2.1.0) (2024-07-10)


### Bug Fixes

* add publish repo scripts ([a18b1fa](https://github.com/ThatOpen/engine_ui-components/commit/a18b1facf050746a9c95a788fc5c1cf75f0a797d))


### Miscellaneous Chores

* release 2.1.0 ([4c1bd25](https://github.com/ThatOpen/engine_ui-components/commit/4c1bd251c7d7eadcca24f8aa666002ab29505f2b))

## 2.1.0 (2024-07-10)


### Features

* **core:** adds new bim-tabs and bim-tab components ([#10](https://github.com/ThatOpen/engine_ui-components/issues/10)) ([f5d32af](https://github.com/ThatOpen/engine_ui-components/commit/f5d32afb4598b5a5c48c03c2dbab5b51d5d36a9f))
* **core:** adds search functionality bim-table ([#16](https://github.com/ThatOpen/engine_ui-components/issues/16)) ([e46a789](https://github.com/ThatOpen/engine_ui-components/commit/e46a789644f53dcb25c11b6816741cfd0df2a82d))
* **core:** implements better searching and improves rendering for bim-table ([#17](https://github.com/ThatOpen/engine_ui-components/issues/17)) ([6a06895](https://github.com/ThatOpen/engine_ui-components/commit/6a06895326b9f1f7376bb180d11e4e6b39ea459a))
* **core:** improves css styling variables ([ae14279](https://github.com/ThatOpen/engine_ui-components/commit/ae142793d6bfbface4958e3099e8578b35f35fa5))
* **core:** optimizes table component ([6abda24](https://github.com/ThatOpen/engine_ui-components/commit/6abda243c165015bb053ee5ca0b93ddb5be07d6b))
* **core:** updates bim-panels-container, bim-panel and bim-panel-section behavior ([#9](https://github.com/ThatOpen/engine_ui-components/issues/9)) ([b33f421](https://github.com/ThatOpen/engine_ui-components/commit/b33f4214d6d7108dd4cce0b1150c3d25fa8b6171))
* **core:** updates documentation and tutorials ([#20](https://github.com/ThatOpen/engine_ui-components/issues/20)) ([59e3def](https://github.com/ThatOpen/engine_ui-components/commit/59e3def0bd14b015469c4d6456a60be6cc2cc8c9))
* **obc:** adds a RelationsTree table component ([#13](https://github.com/ThatOpen/engine_ui-components/issues/13)) ([8f051de](https://github.com/ThatOpen/engine_ui-components/commit/8f051de43818a90d14ea5c599576473b760d6463))
* **obc:** adds datacomputed event on ElementProperties ([a912fcc](https://github.com/ThatOpen/engine_ui-components/commit/a912fcc0a0c82042d12bdebd8a926ba81744a341))
* **obc:** adds Relations Tree tutorial ([f36705b](https://github.com/ThatOpen/engine_ui-components/commit/f36705ba351ebad93a4c33c1c42f7b5067458af4))
* **obc:** adds world configuration table component ([#22](https://github.com/ThatOpen/engine_ui-components/issues/22)) ([25e1a16](https://github.com/ThatOpen/engine_ui-components/commit/25e1a168792c0c93e6461c7bd649997566877c50))
* **obc:** creates an EntitiesAttributes component in @thatopen/ui-obc package ([#7](https://github.com/ThatOpen/engine_ui-components/issues/7)) ([365197f](https://github.com/ThatOpen/engine_ui-components/commit/365197fb9f709fdc1a79605453184cbda8688447))
* **obc:** improves some obc components ([#11](https://github.com/ThatOpen/engine_ui-components/issues/11)) ([4ce9c36](https://github.com/ThatOpen/engine_ui-components/commit/4ce9c36588c4f419f2463aea0289470a5b494a4b))
* **obc:** updates bim-world-2d ([#21](https://github.com/ThatOpen/engine_ui-components/issues/21)) ([69d4225](https://github.com/ThatOpen/engine_ui-components/commit/69d42250869d256bb4d955418498be67619c32ba))
* **obc:** updates elementProperties ([#12](https://github.com/ThatOpen/engine_ui-components/issues/12)) ([308b575](https://github.com/ThatOpen/engine_ui-components/commit/308b575ede60c7d6d7e35dc5e5552acc9a2632fb))
* **obc:** updates tutorials ([9fda824](https://github.com/ThatOpen/engine_ui-components/commit/9fda82457de51628637ba4d7c04603b6be165ab8))
* **obc:** updates tutorials ([#19](https://github.com/ThatOpen/engine_ui-components/issues/19)) ([a2cf9f0](https://github.com/ThatOpen/engine_ui-components/commit/a2cf9f07acc91505be81b360ecc916dd10d3e3cd))
* restructure repo to use yarn and to work with docs ([fe3b4fd](https://github.com/ThatOpen/engine_ui-components/commit/fe3b4fd793603a3a0b2b9bdceca08e53c60187c5))


### Bug Fixes

* **core:** fixes some minor details on base components ([24c41fa](https://github.com/ThatOpen/engine_ui-components/commit/24c41faa44fb349a487a0cf0b4632ffcea51bb43))
* **core:** sets styles when label is empty ([08acd76](https://github.com/ThatOpen/engine_ui-components/commit/08acd76e20584e7086107ed8fb8ab7eef3f8d5d9))
* **obc:** handles error on element properties table ([3cdd92d](https://github.com/ThatOpen/engine_ui-components/commit/3cdd92ddbdb72c245a564dfb9150efd742736fe4))
* **obc:** updates element properties and relations tree templates ([0536cbc](https://github.com/ThatOpen/engine_ui-components/commit/0536cbc88185919eeb0aaed86f3824d5482591e4))
* **obc:** updates resources paths to be absolute ([048cae3](https://github.com/ThatOpen/engine_ui-components/commit/048cae3fc3a93f35278aaab3937fa2caa8507c99))


### Miscellaneous Chores

* release 2.1.0 ([f273a7b](https://github.com/ThatOpen/engine_ui-components/commit/f273a7bc4536cf520f57f568e9a2613921b7f311))
