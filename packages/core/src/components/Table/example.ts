/* MD
  ### One Table to Display All Data 🚀
  ---
  Let's be honest, BIM apps hold a lot of data. Knowing that, the most common (and also useful) way to display related information is by using a table. The bad news is you need to create a table and manage it to easily display any kind of data, while also having the possibility to search information, include interactions, exporting functionalities, loading data asynchronously, etc. The good news is we have created a really powerfull Web Component table with all those functionalities and more! You just need to put efforts in the data to display, and the table manages the rest. Let's see how it works 👇
  
  ### 🖖 Initializing the Library and Making a Table
  ---
  The first thing to do when using the table component, is to initialize `@thatopen/ui` in your app. You just have to do it once in the entire app, and with it you have the chance to use any of the Web Components in the library. Doing it is as simple as the following:
  */

// You have to import from "@thatopen/ui"
import * as BUI from "../..";

BUI.Manager.init();

/* MD
  Once you have initialized the library, you can create a new table or get an existing from your HTML document using the regular document.getElementById command or any other form of DOM element referencing. For simplicity purposes, let's create one programatically:
  */

// As a recomendation, do not bother making some parameters required and some others optional.
// It's very complicated to know which cells have values and which others doesn't (for example, one column value may be optional in some rows but required in some others)
// So, in things like table.dataTransform (see the tutorial) and table.data, all values are always optional.
type TableData = {
  Name: string;
  Age: number;
  Job: string;
  Company: string;
  Bio: string;
};

const simpleTable = document.createElement("bim-table") as BUI.Table<TableData>;

/* MD
  ### 📃 Adding Data
  ---
  The next logical step once the table has been created is to add information to it. The bim-table component works almost entirely through code; that means you can't expect to have other Web Components to add rows and cells to the table just as it happens with the built-in table HTMLElement. The reason is because tables can hold a lot of data, and manually making the corresponding HTML elements to represent rows and cells may become very cumbersome. With the bim-table component you just care about giving the data, and the component interally creates the necessary HTML elements to correctly display the information. Adding data to the table is really simple, just do the following:
  */

simpleTable.data = [
  {
    data: {
      Name: "Juan Hoyos",
      Age: 28,
      Job: "BIM Software Developer",
      Company: "That Open Company",
      Bio: "Juan is a very cool guy, writing this tutorial so you know how to use a really powerful table in your projects.",
    },
  },
  {
    data: {
      Name: "Ana Garcia",
      Age: 32,
      Job: "Structural Engineer",
      Company: "Skyline Structures",
      Bio: "Ana is a meticulous engineer with a knack for ensuring that every project is structurally sound.",
    },
  },
  {
    data: {
      Name: "Carlos Fernandez",
      Age: 40,
      Job: "Project Manager",
      Company: "BuildSmart Ltd.",
      Bio: "Carlos coordinates projects from start to finish, making sure everything is on track and on budget.",
    },
  },
  {
    data: {
      Name: "Elena Rios",
      Age: 26,
      Job: "Architect",
      Company: "EcoDesign Studio",
      Bio: "Elena is a creative architect focused on sustainable designs that blend functionality and beauty.",
    },
  },
  {
    data: {
      Name: "Diego Martinez",
      Age: 35,
      Job: "Quantity Surveyor",
      Company: "CostControl Solutions",
      Bio: "Diego provides accurate cost estimates, helping projects stay within financial boundaries.",
    },
  },
];

/* MD
  The table data is always an array, where each entry (object) represents a row. The only required key in the row object is data; it represents an object where the keys are the name of the columns and the values is the actual information in the cell. The values in each cell can only be strings, booleans or numbers. If you want to see how to include other things in your table, check the DataTransform tutorial. The structure of the table data seems difficult, but is actually simpler than you think and very powerful to hold nested rows as you're going to learn later!

  ### 🔄 Changing Table Data
  ---
  You can manipulate the table data as you want. However, unless you change the whole table.data property no changes will be displayed in the table. So, how to update the table based on changes in the table? Easy, by requesting an update. Let's imagine you have a new row to add in the table and want to display it right away (as it should be, right?), in such case you can proceed as follows:
  */

const row: BUI.TableGroupData = {
  data: {
    Name: "Sophia Wang",
    Age: 29,
    Job: "MEP Engineer",
    Company: "FutureFlow Systems",
    Bio: "Sophia designs efficient mechanical, electrical, and plumbing systems for complex buildings.",
  },
};

simpleTable.data.push(row);
simpleTable.requestUpdate();

/* MD
  :::tip

  You just need to call requestUpdate in case the table is already in the page. If its not, then when it renders the first time will display the whole information.

  :::

  Updating an existing row is pretty much the same thing. The only thing to keep in mind is to have the row object outisde table.data to easily access it. To demostrate this, let's create a simple button that once clicked prompts the user to change the Bio of one user:
  */

const changeBtn = BUI.Component.create(() => {
  const onClick = () => {
    if (typeof row.data.Bio !== "string") return;
    // eslint-disable-next-line no-alert
    const bio = prompt(`Enter a new Bio for ${row.data.Name}:`, row.data.Bio);
    if (!(bio && bio.trim() !== "")) return;
    row.data.Bio = bio;
    simpleTable.requestUpdate();
  };

  return BUI.html`
    <bim-button @click=${onClick} label="Change ${row.data.Name} Bio"></bim-button>
  `;
});

/* MD
  :::tip

  If you're unsure how to create components using `@thatopen/ui` you can check the User Inteface / Component tutorial 😉

  :::

  Deleting rows goes the same way, you just need to drop them from the table.data array and then request an update. To do it, let's create another button to delete any record from the table:
  */

const deleteBtn = BUI.Component.create(() => {
  const onClick = (e: MouseEvent) => {
    const btn = e.target;
    if (!(btn instanceof BUI.Button)) return;
    const newData = simpleTable.data.filter(
      (row) => row.data.Name !== "Elena Rios",
    );
    simpleTable.data = newData;
    btn.disabled = true;
  };

  return BUI.html`
   <bim-button @click=${onClick} label="Delete Elena Rios Record"></bim-button> 
  `;
});

/* MD
  :::tip

  Notice in the case of deleting a row, we didn't request an update. The reason is because we are changing the whole table.data array, and thus the table knows it needs to update.

  :::

  ### 🔗 Displaying Nested Data
  ---
  One of the most common missing features we've seen in other table components in the market is the possibility to nest data. Many things in a BIM application shows a hierarchical structure: element data, project tree, etc. A BIM model contains a lot of relations, and displaying them in a table is a must. Luckily, doing it is surpisingly simple, so let's create a another table and see what its different in the data structure 👇
  */

const nestedTable = document.createElement("bim-table") as BUI.Table<TableData>;
nestedTable.data = [
  {
    data: {
      Name: "Juan Hoyos",
      Age: 28,
      Job: "BIM Software Developer",
      Company: "That Open Company",
      Bio: "Juan is a very cool guy, writing this tutorial so you know how to use a really powerful table in your projects",
    },
    children: [
      {
        data: {
          Name: "Maria Lopez",
          Age: 24,
          Job: "Junior BIM Specialist",
          Company: "That Open Company",
          Bio: "Maria assists Juan in developing BIM solutions and learning the ropes of software development.",
        },
      },
      {
        data: {
          Name: "Ana Garcia",
          Age: 32,
          Job: "Structural Engineer",
          Company: "Skyline Structures",
          Bio: "Ana is a meticulous engineer with a knack for ensuring that every project is structurally sound.",
        },
        children: [
          {
            data: {
              Name: "Luis Herrera",
              Age: 27,
              Job: "Structural Design Intern",
              Company: "Skyline Structures",
              Bio: "Luis is Ana's right hand, assisting in design calculations and learning advanced structural modeling.",
            },
          },
        ],
      },
    ],
  },
  {
    data: {
      Name: "Carlos Fernandez",
      Age: 40,
      Job: "Project Manager",
      Company: "BuildSmart Ltd.",
      Bio: "Carlos coordinates projects from start to finish, making sure everything is on track and on budget.",
    },
    children: [
      {
        data: {
          Name: "Sara Jimenez",
          Age: 30,
          Job: "Assistant Project Manager",
          Company: "BuildSmart Ltd.",
          Bio: "Sara supports Carlos in project planning, client coordination, and schedule management.",
        },
      },
      {
        data: {
          Name: "Tomas Rivera",
          Age: 33,
          Job: "Site Supervisor",
          Company: "BuildSmart Ltd.",
          Bio: "Tomas ensures that project sites run smoothly, handling logistics and on-site team coordination.",
        },
      },
    ],
  },
  {
    data: {
      Name: "Elena Rios",
      Age: 26,
      Job: "Architect",
      Company: "EcoDesign Studio",
      Bio: "Elena is a creative architect focused on sustainable designs that blend functionality and beauty.",
    },
    children: [
      {
        data: {
          Name: "Victor Suarez",
          Age: 38,
          Job: "Senior Architect",
          Company: "EcoDesign Studio",
          Bio: "Victor mentors Elena, providing guidance on sustainable design and architectural best practices.",
        },
      },
    ],
  },
  {
    data: {
      Name: "Diego Martinez",
      Age: 35,
      Job: "Quantity Surveyor",
      Company: "CostControl Solutions",
      Bio: "Diego provides accurate cost estimates, helping projects stay within financial boundaries.",
    },
    children: [
      {
        data: {
          Name: "Laura Vega",
          Age: 31,
          Job: "Cost Analyst",
          Company: "CostControl Solutions",
          Bio: "Laura assists Diego in preparing estimates and managing cost-related project documentation.",
        },
      },
    ],
  },
  row,
];

/* MD
  If you notice, the only thing that changes is the row can have an optional children key. The children structure is the exact same as the table.data, an array of row objects. Knowing that, you can nest as many rows as you need to efficiently show any hierarchical structure. By default, the table displays the corresponding carets and branches to better display the information.
  
  Now, just as before, you can update the children of any row as you please and then request a table update. Let's create a new button to add a child to sophia's row:
  */

const addChildBtn = BUI.Component.create(() => {
  const onClick = (e: MouseEvent) => {
    const btn = e.target;
    if (!(btn instanceof BUI.Button)) return;
    row.children = [
      {
        data: {
          Name: "David Chen",
          Age: 25,
          Job: "Junior MEP Engineer",
          Company: "FutureFlow Systems",
          Bio: "David supports Sophia by handling system calculations and drafting technical layouts.",
        },
      },
    ];
    // As row is shared in both tables, you can request an update in the two tables
    simpleTable.requestUpdate();
    nestedTable.requestUpdate();
    btn.disabled = true;
  };

  return BUI.html`
   <bim-button @click=${onClick} label="Add ${row.data.Name} Child"></bim-button> 
  `;
});

/* MD
  ### 🤓 Putting Everything Together
  ---
  As everything is already setup, let's create a new component to hold all buttons and tables together and display them in the page.
  */

const appContent = BUI.Component.create(
  () => BUI.html`
   <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
     <div style="display: flex; gap: 0.5rem">
       ${changeBtn}
       ${deleteBtn}
       ${addChildBtn}
     </div>
     ${simpleTable}
     ${nestedTable}
   </div> 
  `,
);

document.body.append(appContent);

/* MD
  Amazing! Isn't? You're now ready to implement tables in your next app. This is just the tip of the iceberg regarding the bim-table component, so continue watching the other table tutorials we have 💪
  */
