/* MD
  ## Leveling up your app with custom components! 🔌
  ---
  One of the greatest things about the library is that you can create your own reactive and non reactive elements (statefull and stateless components respectively) in a very simple and efficient way, all thanks to the power of [lit-html](https://lit.dev/docs/libraries/standalone-templates/) 💪. 
  
  The `Component` class has a static method to create functional components (UI defined as a function) that can be updated anytime. The method is `Component.create`.

  :::note

  Despite the `Component` is a class that can be instantiated or extended, from a developer perspective using the library is most likely it will only use the create method.

  :::

  ### Importing the libraries:
  In this tutorial, we will import:

  - @thatopen/ui to add some simple and cool UI menus.
*/

// You have to import from "@thatopen/ui"
import * as BUI from "../..";

/* MD
  ### 📋 Initialising the UI
  ---

  We will use the `@thatopen/ui` library to add some simple and cool UI elements to our app. For that, we need to call the `init` method of the `BUI.Manager` class to initialize the library:

*/

BUI.Manager.init();

/* MD
  ### Creating an stateless component
  To start learning how to create custom components, let's create a custom component that uses the panel section:
*/

const statelessPanelSection = BUI.Component.create<BUI.PanelSection>(() => {
  return BUI.html`
    <bim-panel-section label="Stateless Panel Section">
      <bim-color-input label="Color"></bim-color-input>
    </bim-panel-section>
  `;
});

/* MD
  :::warning

  Remember to first call `Manager.init()` before anything else!

  :::

  `Component.create` requires you to provide a function declaration that returns an HTML string made with the `html` tag function, and the result of the function is the HTMLElement it self. 
  
  :::note

  Tag functions are special declarations that are always set before a template literal to process the string.

  :::
  
  Did you notice the component is named `statelessPanelSection`? Well, the reason is because components can have an optional state. Technically speaking, that makes the create method to have two overloads: one for components with state (statefull) and another for components without state (stateless). 
  
  The main difference is that statefull components lets you update them with new states (so the UI component will efficiently re-render and display new data) while stateless components never needs to be updated as they are static.

  The component we just created is stateless, because it doesn't have any state in which its user interface depends on. 
  
  ### Creating a statefull component
  Now, let's take a look at how to create a component that can be updated based on state changes:
*/

interface PanelSectionUIState {
  label: string;
  counter: number;
}

const [statefullPanelSection, updateStatefullPanelSection] =
  BUI.Component.create<BUI.PanelSection, PanelSectionUIState>(
    (state: PanelSectionUIState) => {
      const { label, counter } = state;
      const msg = `This panel section has been updated ${counter} ${counter === 1 ? "time" : "times"}`;
      return BUI.html`
      <bim-panel-section label=${label}>
        <bim-label>${msg}</bim-label>
      </bim-panel-section>
    `;
    },
    { label: "Statefull Panel Section", counter: 0 },
  );

/* MD
  When you pass an object as the argument in your create function, the component has now become statefull. As you see, there are a couple of differences between the stateless and statefull components:

  1. The statefull component requires an state object (it must be an object) to be passed in the function declaration. Think on this as the classic properties object you pass to a component in a framework like React.
  2. When the component is statefull, `Component.create` must have a second argument to specify the initial state of the component.
  3. Now, `Component.create` does not return the HTMLElement it self, but an array where the first item is the HTMLElement and second is a function to update the component based on an updated state. Think on this as when you use the useState hook in frameworks like React.

  :::note

  As for now, a statefull component can't update itself! However, you can nest other components that updates the state of some other.

  :::

  ### Nesting components
  Now, in order to see the two components in action, let's create a third component to integrate (nest) the two previous:
*/

const panel = BUI.Component.create<BUI.Panel>(() => {
  let counter = 0;
  const onUpdateBtnClick = () => {
    counter++;
    if (counter >= 5) {
      updateStatefullPanelSection({
        label: "Powered Statefull Panel Section 💪",
        counter,
      });
    } else {
      updateStatefullPanelSection({ counter });
    }
  };

  return BUI.html`
    <bim-panel label="My Panel">
      <bim-panel-section label="Update Functions">
        <bim-button @click=${onUpdateBtnClick} label="Update Statefull Section"></bim-button>
      </bim-panel-section>
      ${statelessPanelSection}
      ${statefullPanelSection}
    </bim-panel>
  `;
});

/* MD
  As you see, the create function doesn't need to immediately return the HTML, but you can also do any other logic you want inside. In this case, the logic adds a listener to `bim-button` in order to update the state of the statefullPanelSection we created earlier. A couple of things to notice here: 
  
  1. You're not forced to update the whole component state, but just the things you need. In this case, we just updated the panel section label in case the counter is greater than or equals to 5. However, in this case the counter is always updated.
  2. Despite we updated the component inside the logic of the panel, you can update your statefull components from anywhere in your code by just using the update function.
  3. You can nest any component in any other: statefull in stateless, stateless in stateless, etc. In this case, panel is a stateless component, but it has an statefull component inside. That means contents of a stateless component can be updated but because that content is a statefull component.
  4. You see how we integrated the two previous components into the panel? Yes, its as easy as adding them as an expression (`${statelessPanelSection}` and `${statefullPanelSection}` in this case).

  :::tip

  In order to know the syntax you can write inside the template literal tagged by the html function, look at the [lit-html](https://lit.dev/docs/templates/overview/) documentation.

  :::

  Finally, you can add your panel component anywhere you want as its an HTMLElement just like any other!
*/

document.body.append(panel);

/* MD
  Congratulations! You already know how to create your own custom reactive components. Don't stop learning! Take a look at more tutorials in the documentation 🙂.

  :::tip

  The complementary packages of the library such as `@thatopen/ui-obc` have premade functional components just like the ones we've learned to create in this tutorial, so you don't need to bother to create them by yourself 😉

  :::
*/
