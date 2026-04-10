/* MD
  ### Asynchronously Loading Data 🌐
  ---
  Developers building tables that display data fetched from a server or computed from a heavy BIM operation need to handle the loading state, show a placeholder when no data is available, and surface error messages if the fetch fails — wiring all of that manually adds boilerplate that has nothing to do with the actual data logic.

  The table component's load function system handles the async lifecycle automatically: it shows a skeleton while waiting, a configurable empty state when data is absent, and an error slot when the operation throws — triggered by a single method call.

  This tutorial covers defining a missing-data slot with a load button displayed when the table has no rows; writing an async load function that fetches JSON from a remote URL and returns it as table data; throwing errors inside the load function and displaying them through a configurable error-loading slot with a retry button; and clearing the table data to reset back to the empty state.

  By the end, you'll have a table with on-demand async loading, an empty-state placeholder, and a user-facing error display with retry — all without managing loading state manually.

  ### 🖖 Initializing the Library and Setting the Table
  ---
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
*/

// You have to import from "@thatopen/ui"
import * as BUI from "../../../..";

BUI.Manager.init();

/* MD
  After the library has been initialized, create a table or get an existing one from the HTML document. In this case, let's create one programatically:
  */

const table = document.createElement("bim-table");

/* MD
  When you load data asynchronously, is very likely you do it on demand. That means, by default the table won't have any data. You can inform end-users about an empty table using a slot. For it, let's create the corresponding element as follows:
  */

const missingDataElement = BUI.Component.create(
  () => BUI.html`
    <!-- The most important thing is to have the slot attribute set as missing-data -->
    <!-- Other than that, the element can hold anything inside -->
    <!-- Be aware you can use this missing-data slot no matter if you are not loading data asynchronously -->
    <div slot="missing-data"
      style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
      <bim-label>No data loaded!</bim-label>
      <bim-button @click=${() => table.loadData()} label="Load Data" style="width: 100%;"></bim-button>
    </div>
  `,
);

table.append(missingDataElement);

/* MD
  Basically what happens is the table detects if the data property is empty. If it is, then the element with `slot="missing-data"` will be displayed. The element can hold anything, and will be shown/hidden based on the data array. In this case, we added a handy button inside the missing data slot element the user can click to load data. As you see, the button triggers the loadData method in the table; which triggers the load function you have set in the table. We haven't set any load function yet, so let's do it now!
  
  ### 🔄 The Load Function
  ---
  To load data asynchronously in the table, the only thing you need to do is provide a load function. The load function must be asynchronous and return the same structure of the table.data. You can do anything you want inside the function, as long it returns the corresponding data structure.

  :::tip
  
  If you're unsure about the table data structure, check the main table tutorial to know everything about it!
  
  :::

  Inside the function you can also throw errors, and they will be catch by the bim-table component and displayed in the page. Let's define the function to see how it works:
  */

// Just to see how throwing errors work, let's define a checkbox to force one
const forceErrorCheckbox = BUI.Component.create<BUI.Checkbox>(
  () => BUI.html`
    <bim-checkbox label="Force Load Error" inverted></bim-checkbox>
  `,
);

// As said, the loadFunction must be asyncrhonous.
// If its not, then is pointless to use the loadFunction and instead directly set the table.data property.
table.loadFunction = async () => {
  if (forceErrorCheckbox.checked)
    // You can throw any errors as you like.
    // The error message will be displayed inside the table but only if you have an error-loading slot.
    // We will set one later in this tutorial!
    throw new Error(
      "You have forced an error and data couldn't be loaded! Try to disable the 'Force Load Error' checkbox.",
    );

  const jsonData = await fetch(
    "https://thatopen.github.io/engine_ui-components/resources/table-data.json",
  );

  if (!jsonData.ok) throw new Error("Failed fetching data from GitHub!");

  // The function must return TableGroupData[]
  // In this case we're sure the json data loaded has the corresponding structure
  // If you're loading data from an external resource, then is your job to make sure
  // it complains with the format.
  const data = (await jsonData.json()) as BUI.TableGroupData[];
  return data;
};

/* MD
  As you see, we're getting some data from GitHub. Fetching data is always an async operation, so its a perfect use case for the loadFunction!
  
  ### ❌ Displaying Loading Errors
  ---
  In the function implementation we did before, we throw two errors: one we force, and the second in case fetching the data from GitHub returns a response other than 200. You can display error messages to the user, but only if you setup the corresponding error-loading as follows:
  */

const loadingErrorElement = BUI.Component.create(
  () => BUI.html`
    <!-- Just as it happens with the missing-data slot, here the important thing is to have the slot attribute set as error-loading -->
    <div slot="error-loading"
      style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
      <!-- To specify the table where it needs to display the message thrown by the error, you need to include data-table-element='error-message' in any element inside the error-loading slot -->
      <bim-label data-table-element='error-message'>Data failed to load!</bim-label>
      <bim-button @click=${() => table.loadData()} label="Try Again" style="width: 100%;"></bim-button>
    </div>
  `,
);

table.append(loadingErrorElement);

/* MD
  By default, when you trigger loadData in the table, it does nothing in case the table already contains values. You have two options if you want to load the data back again: to clean table.data or to write `table.load(true)`. In this case, let's create a simple button to clean the data property so you can play around and force an error with the checkbox we did before:
  */

const cleanDataBtn = BUI.Component.create(
  () =>
    BUI.html`
    <bim-button @click=${() => (table.data = [])} label="Clean Data"></bim-button>
  `,
);

/* MD
  ### 🔗 Putting Everything Together
  ---
  As everything is already setup, let's create a new component to hold all components together and display them in the page. You can do it very easily as follows:
  */

const appContent = BUI.Component.create(
  () => BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.375rem; width: 10rem;">
        ${forceErrorCheckbox}
        ${cleanDataBtn}
      </div>
      ${table}
    </div>
  `,
);

document.body.append(appContent);

/* MD
  Great! As you see, setting up async loading and handling errors is extremely simple when you use the bim-table component from That Open Engine. Let's continue with more tutorials! 🚀
  */
