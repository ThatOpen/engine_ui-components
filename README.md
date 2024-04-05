<p align="center">
  <a href="https://thatopen.com/">TOC</a>
  |
  <a href="https://docs.thatopen.com/intro">Documentation</a>
  |
  <a href="">Demo</a>
  |
  <a href="https://people.thatopen.com/">Community</a>
  |
  <a href="">NPM Package</a>
</p>

![cover](resources/cover.png)

<h1>BIM UI Components <img src="resources/favicon.ico" width="22"/></h1>

BIM UI Components is the ultimate set of user interface elements you need to create fully featured BIM applications 🚀
<br></br>

## How it works? 🤓
This library is a monorepo where separate but correlated repositories exists in the packages folder. The main repository resides in ui-components.
<br></br>
* **@thatopen/ui-components:** This is the core library. Here, you will find all the core components needed to build your user interfaces, so you can expect a button, panel, toolbar, table, inputs, and some other components.
<br></br>

Now, from the `@thatopen/ui-components` you can't expect to have functionalities in your components. In other words, if you need a button component to load an IFC file from `openbim-components` you will need to code that by yourself 🙁. However, as the goal of the library is to save you as much time as possible, we've created implementations of the components based on things we know you're probably going to need at some point 💪. Here is were it comes the other repositories in the monorepo.
<br></br>

Think on the following repositories as plug-n-play functional components that uses the core library to build ready to go pieces of UI with the functionalities to work nice and neat:

* **@thatopen/ui-components-obc:** Here you will find pre-made functional components for many things in [openbim-components](https://github.com/thatopen/engine_components) (the entry point of That Open Engine). You can expect to have from a button that loads an IFC file, to a table to configure your app tools or a panel to view all your model classifications. Basically, openbim-components gives you the functionality, while @thatopen/ui-components-obc gives you the UI to interact with those functionalities.

* **@thatopen/ui-components-three:** As all the apps working with openbim-components relies on [ThreeJS](https://threejs.org/), we thought is a good idea to include pre-made components that takes data from ThreeJS and makes it possible to work with it using the UI. For example, here you can expect to have a transform panel that let's you modify the position, scale and rotation of any THREE.Mesh, or a panel to manage your THREE.Mesh materials.

* **@thatopen/ui-components-web-ifc:** You know [web-ifc](https://github.com/ThatOpen/engine_web-ifc) is the core of That Open Engine, at the end is the library that let's create, read, update and save raw IFC files. How could would be to have UI that works with data from web-ifc? Well, that's what you can expect from this repository. Here you will find things like a table to display the spatial structure from a raw IFC file, to a table that displays the attributes of a given entity.
<br></br>

> [!IMPORTANT]
> All the implementation libraries need @thatopen/ui-components to be installed along with the respective packages they are giving UIs to. See the respective package.json files in each repository.

### Why a monorepo? 🤷‍♀️
Easy, because we care about your final app bundle size. You see, the repositories that contains implementations of the UIComponents for different libraries, relies on the libraries to be installed in the project because they're required as peerDependencies. So, if we included all the pre-built UIComponents from `@thatopen/ui-components-three` in the core library, you will always need to have ThreeJS installed in your project even tough you're not using it.
<br></br>

### Does these components works in my favorite framework? 🤔
Well... yes! You name it, React? Angular? Vue? Svelte? The answer is absolutely yes. Basically, you can use these componentes anywhere HTML is accepted. If you're wondering how is that possible, is becase we're using [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components) 🔥

If you're new to Web Components, no worries! Simply put, Web Components is a browser API that let's you define your own HTML tags (DOM Elements) to be used in the document. They define the look and behavior of the elements. Have you ever seen an HTML that looks something like this?

```html
<div>
  <unknown-tag />
</div>
```

As you may recall from your HTML knowledge, `<unkown-tag />` is not somethings built-in in HTML... well, that's because is a Web Component! So the developer created it's own tag to use it in the document.

Web Components are extremely powerfull because they do mostly the same as the components you create in any framework, just they are framework agnostic and feel way more built-in. In other words, if you create a component in your framework you're not allowed to write the following directly in your HTML file:

```html
<my-framework-component />
```

You always need to rely on your framework tools in order to render your component, so you must use JavaScript. However, if you create a Web Component you can use it in your HTML with nothing else needed.
<br></br>

> [!IMPORTANT]
> Despite Web Components is a browser API, we used [Lit](https://lit.dev/) to create the components as it makes the process way much easier.


## Getting Started
To use the UIComponents, you need to install at least the core library from your terminal like this:

```
npm i @thatopen/ui-components
```

Then, you need to tell the library to register the components, so you can use them in any HTML syntax. To do it, in your entry JavaScript file execute the following:

```ts
import { UIManager } from "@thatopen/ui-components"

UIManager.registerComponents()
```

Finally, in your HTML file you can start to use the components! 

```html
<bim-grid id="grid">
  <bim-toolbars-container style="grid-area: header">
    <bim-toolbar label="Toolbar A" active>
      <bim-toolbar-section label="Build">
        <bim-button vertical label="My Button" icon="solar:bookmark-square-minimalistic-bold"></bim-button>
        <bim-toolbar-group>
          <bim-button icon="solar:album-bold"></bim-button>
          <bim-button icon="solar:archive-linear"></bim-button>
          <bim-button icon="solar:battery-charge-minimalistic-broken"></bim-button>
          <bim-button icon="solar:bluetooth-square-outline"></bim-button>
        </bim-toolbar-group>
      </bim-toolbar-section>
    </bim-toolbar>
    <bim-toolbar label="Toolbar B">
      <bim-toolbar-section label="Section">
        <bim-button vertical label="Button A" icon="bx:command"></bim-button>
        <bim-button vertical label="Button B" icon="bx:fast-forward-circle"></bim-button>
        <bim-button vertical label="Button C" icon="bx:support"></bim-button>
      </bim-toolbar-section>
    </bim-toolbar>
  </bim-toolbars-container>
  <bim-panels-container id="my-panel" style="grid-area: sidebar">
    <bim-panel label="Panel A" active>
      <bim-panel-section label="Build">
        <bim-text-input label="Tool Name" value="BCFManager"></bim-text-input>
        <bim-input label="Position" vertical>
          <bim-number-input pref="X" min="1" value="10" max="50" sufix="m" slider></bim-number-input>
          <bim-number-input pref="X" min="1" value="20" max="50" sufix="m" slider></bim-number-input>
          <bim-number-input pref="X" min="1" value="30" max="50" sufix="m" slider></bim-number-input>
        </bim-input>
        <bim-dropdown label="IFC Entity">
          <bim-option label="IFCWALL"></bim-option>
          <bim-option label="IFCWINDOW"></bim-option>
          <bim-option label="IFCSLAB"></bim-option>
        </bim-dropdown>
      </bim-panel-section>
    </bim-panel>
  </bim-panels-container>
</bim-grid>
```

> [!TIP]
> You can get any icon from [Iconify](https://icon-sets.iconify.design/)!

And, in your JavaScript file:

```js
const grid = document.getElementById("grid")

grid.layouts = {
  main: `
    "header header" auto
    "sidebar content" 1fr
    "sidebar content" 1fr
    / auto 1fr
  `
}

grid.setLayout("main")
```

To know more about the UIComponents, you can explore the README files in each repository under the packages folder and also explore the documentation. You can find the link at the top of this README file.
