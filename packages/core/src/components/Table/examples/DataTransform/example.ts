/* MD
  ### Displaying Data the Advanced Way 🚀
  ---
  Sooner than later you will need a way to manipulate your table data such that is displayed diferently in the cell; for example, what happens if you want to display a value always upper-cassed? Or display a number with its units without converting the number into a string? Or set some custom styling for the cell's value? Or include any other HTMLElement in the cell? Well, for all those questions there is a simple answer: `table.dataTransform`. Let's see how is used so you display data the advanced way!

  ### 🖖 Initializing the Library and Setting some Data
  ---
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
  */

// You have to import from "@thatopen/ui"
import * as BUI from "../../../..";

BUI.Manager.init();

/* MD
  Before creating the table, and in order to illustrate the difference between a table that applies data transform and other that doesn't, let's define the data outside and use it in two different tables:
  */

type IfcElementsInfo = {
  Class: "IfcWall" | "IfcDoor" | "IfcWindow" | "IfcColumn" | "IfcSlab";
  PredefinedType: string;
  Name: string;
  Description: string;
  LoadBearing: boolean;
  Area: number;
};

const data: BUI.TableGroupData<IfcElementsInfo>[] = [
  {
    data: {
      Class: "IfcWall",
      PredefinedType: "EXTERNAL",
      Name: "Exterior Wall",
      Description: "Main structural exterior wall",
      LoadBearing: true,
      Area: 45.5,
    },
  },
  {
    data: {
      Class: "IfcDoor",
      PredefinedType: "SINGLE_SWING_RIGHT",
      Name: "Entrance Door",
      Description: "Main entrance door",
      LoadBearing: false,
      Area: 2.1,
    },
  },
  {
    data: {
      Class: "IfcWindow",
      PredefinedType: "STANDARD",
      Name: "Office Window",
      Description: "Double-pane office window",
      LoadBearing: false,
      Area: 3.6,
    },
  },
  {
    data: {
      Class: "IfcColumn",
      PredefinedType: "ROUND",
      Name: "Support Column",
      Description: "Load-bearing column in lobby",
      LoadBearing: true,
      Area: 1.2,
    },
  },
  {
    data: {
      Class: "IfcSlab",
      PredefinedType: "FLOOR",
      Name: "Main Floor Slab",
      Description: "Primary floor slab for ground level",
      LoadBearing: true,
      Area: 150.0,
    },
  },
];

/* MD
  ### 🔢 Creating the Tables and Transforming the Data
  ---
  As we already have some data to play with, let's create two tables with the same information:
  */

const simpleTable = document.createElement(
  "bim-table",
) as BUI.Table<IfcElementsInfo>;

simpleTable.data = data;

const advancedTable = document.createElement(
  "bim-table",
) as BUI.Table<IfcElementsInfo>;

advancedTable.data = data;

/* MD
  Let's deal with the data transformation. The whole goal of `table.dataTransform` is to be able to convert each cell value into something else. To do it, you just need to define an optional function per each column. **When the table is computing the cell, it runs the function defined for the column and the result is what it renders.** Let's start by doing a simple conversion to add the units into the area values:
  */

advancedTable.dataTransform.Area = (value) => `${value} m²`;

/* MD
  As you see, making that conversion is really simple. Here, we defined how each cell in the Area column must be transformed. In this case, we are just taking the same value and adding the corresponding units. What its important here is you are only changing how the data is displayed, but the actual area value remains exactly the same as before: a number without units as it should be. Now, let's go for a slightly more complicated transformation by changing the LoadBearing values with a checkbox:
  */

advancedTable.dataTransform.LoadBearing = (value, rowData) => {
  const onChange = (e: Event) => {
    const input = e.target;
    if (!(input instanceof BUI.Checkbox)) return;
    rowData.LoadBearing = input.checked;
    window.alert(`${rowData.Name} changed to LoadBearing = ${input.checked}`);
    // For demostration purposes, we request an update to the simpleTable as it is using the same data
    simpleTable.requestUpdate();
  };

  return BUI.html`
   <bim-checkbox @change=${onChange} .checked=${value}></bim-checkbox> 
  `;
};

/* MD
  One of the most wonderful things about `table.dataTransform` is the function you create for the transformation not only let's you return values, but you can also return any valid HTML template using `@thatopen/ui` system! In this case, we just returned a checkbox even with functionality! Also, notice the second argument in the transform function gives you access to the whole row data. In this case we used `rowData` to access the element `Name` and also to effectively change the `LoadBearing` value based on the input.

  :::tip

  If you're unsure on how the templating system works, take a look at the UserInterface/Component tutorial.

  :::

  Right now you may be wondering: hey, so far we have changed the whole set of cells in a column, but what if I just need to change some? Well, that is as easy as just checking the values in either the cell or the row to conditionally render anything you need. Let's see how is done by styling the `Class` based on its value:
  */

advancedTable.dataTransform.Class = (value) => {
  const baseStyle = "padding: 0.125rem 0.375rem; border-radius: 999px";
  if (value === "IfcDoor" || value === "IfcSlab") {
    return BUI.html`
      <bim-label style="${baseStyle}; background-color: #ff000054; color: #d54f4f;">
        ${value}
      </bim-label> 
    `;
  }
  if (value === "IfcColumn" || value === "IfcWall") {
    return BUI.html`
      <bim-label style="${baseStyle}; background-color: #c700ff54; color: #c167da;">
        ${value}
      </bim-label> 
    `;
  }
  // If the class value is none of the above, just return the same value without any changes.
  return value;
};

/* MD
  :::info

  It's really important to know that you can't use CSS classes in the elements you return in the transformation. The details of why is that are beyond the scope of this tutorial, but in a nutshell is because everything in a bim-table (except the slots) are rendered in the ShadowDOM. The ShadowDOM allows to encapsulate styling, so styles in Web Components doesn't affect the styles in the base page. Take a look [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) for more info.

  :::

  As a combined example of some of the things above, let's allow the user to change the `Description` only if the `Class` is `IfcDoor`
  */

advancedTable.dataTransform.Description = (value, rowData) => {
  const { Class } = rowData;
  if (Class === "IfcDoor") {
    const onInput = (e: InputEvent) => {
      const input = e.target;
      if (!(input instanceof BUI.TextInput)) return;
      rowData.Description = input.value;
      // Be careful with this type of update requests, as rapidly changing heave tables may decrease app performance
      // Here we added a debounce in the text-input so the changes only takes effect after some milliseconds.
      simpleTable.requestUpdate();
    };

    return BUI.html`
      <bim-text-input @input=${onInput} value=${value} debounce=350></bim-text-input>
    `;
  }
  return value;
};

/* MD
  :::tip

  Needless to say, you can only define one transformation function per each row. So the last you set will prevail.

  :::

  As you see, the data tranformation is as flexible as you need it to be. Now, one last thing to note is we have defined the dataTransform by parts. However, that was just for demostration purposes; usually, you do it as follows (but is entirely up to you):
  */

// const dataTransform: BUI.TableDataTransform<IfcElementsInfo> = {
//   Area: /* transform function */,
//   LoadBearing: /* transform function */,
//   Class: /* transform function */,
//   Description: /* transform function */,
// };

// advancedTable.dataTransform = dataTransform

/* MD
  ### 🔗 Putting Everything Together
  ---
  As everything is already setup, let's create a new component to hold the tables together and display them in the page. You can do it very easily as follows:
  */

const appContent = BUI.Component.create(
  () => BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <bim-label style="font-size: 1.375rem; line-height: normal;">Without Data Transform</bim-label>
      ${simpleTable}
      <bim-label style="font-size: 1.375rem; line-height: normal;">Data Transform applied!</bim-label>
      ${advancedTable}
    </div>
  `,
);

document.body.append(appContent);

/* MD
  Congratulations! You already know how to use an advanced feature of the bim-table component to display the information exactly how you need it. Don't hesitate into watching more tutorials! 🚀
  */
