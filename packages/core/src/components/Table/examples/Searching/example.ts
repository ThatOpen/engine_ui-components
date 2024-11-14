/* MD
  ### Searching Through Your Data 🔎
  ---
  Chances are low to say "I have the best table in the internet" without having the possibility to search information from it, right? Well, doing it with the bim-table Web Component is extremely simple! So let's dive in.

  ### 🖖 Initializing the Library and Setting the Table
  ---
  As always, let's first initialize the UI library. Remember you only have to do it once in your entire app.
  */

// You have to import from "@thatopen/ui"
import * as BUI from "../../../..";

BUI.Manager.init();

type TableData = {
  Name: string;
  Age: number;
  Job: string;
  Company: string;
  Bio: string;
};

const table = BUI.Component.create<BUI.Table<TableData>>(
  () => BUI.html`
    <bim-table expanded>
      <div slot="missing-data" style="display: flex; flex-direction: column; align-items: center; width: 8rem; margin: auto;">
        <bim-label>No data to display!</bim-label>
      </div>
    </bim-table> 
  `,
);

table.data = [
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
              Job: "BIM Software Developer",
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
      Name: "Antonio Viegas",
      Age: 30,
      Job: "BIM Software Developer",
      Company: "That Open Company",
      Bio: "Antonio is the CEO of That Open Company. He is the author of @thatopen/fragments.",
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
];

/* MD
  ### 🆎 Implementing a Search Box
  ---
  When it comes to search data in a bim-table we have the powerful `table.queryString`. It is "just" a string property in the table component to filter the matching values. However, it goes beyond that 😉 Let's start by simply setting a text input to provide a value to the query string property as follows:
  */

// You can search data in the table by providing a queryString
const searchBox = BUI.Component.create<BUI.TextInput>(() => {
  const onInput = (e: Event) => {
    const input = e.target;
    if (!(input instanceof BUI.TextInput)) return;
    table.queryString = input.value; // Here is where the magic happens!
  };

  return BUI.html`
   <bim-text-input @input=${onInput} placeholder="Search..." debounce=250></bim-text-input> 
  `;
});

/* MD
  Basically that's it! The only thing you need is to provide a value to `table.queryString` and the rest is handled internally by the component. However, at this point a question arises: what happens with the nestings when you filter the data? Well, it depends on you! By default, when the table is filtered the nestings are removed; but, in case you prefer to keep the nesting structure, then you just have to activate the corresponding option. To better ilustrate this, let's implement a very simple checkbox to change the nesting structure behavior when searching:
  */

const preserveStructure = BUI.Component.create(() => {
  const onChange = (e: Event) => {
    const input = e.target;
    if (!(input instanceof BUI.Checkbox)) return;
    // You just have to change the following flag in your table
    table.preserveStructureOnFilter = input.checked;
  };

  return BUI.html`
   <bim-checkbox @change=${onChange} label="Preserve Structure"></bim-checkbox> 
  `;
});

/* MD
  :::tip

  Assuming you're using the same data as in this tutorial, try searching `Tomas` with and without the `Preserve Structure` flag checked to notice the difference!

  :::

  ### 🆎 Advanced Searching (WIP)
  ---
  So far, so good! We already have a functional search box for the table in the app. What's next? Well, you can leave it until here, but there is something more you should know about `queryString`... and that is you can use it to perform complex queries (thus the name). For example, what happens if you want to know which users in the table are older than 30 years old? Or to know who is a manager? Or maybe knowing if someone matches an specific keyword in the Bio? What about something more complex as people working as a BIM Software Developer in That Open Company? For all those cases, you can still use the exact same query string property without doing any special configuration in the table! The only difference is how you write the search.

  :::info

  In order to define a query, you need to specify the column to search through, then some condition, and finally the value to look at; in other words, the structure is {column}{condition}{value}. Optionally, you can concatenate multiple queries by using the `&` operator. Currently, the available conditionals are:

  - Equals (=)
  - Includes (?)
  - Less Than (<)
  - Less Than or Equals to (<=)
  - Greater Than (>)
  - Greater Than or Equals to (>=)
  - Starts With (/)

  :::

  So, with that in mind, try to do the following queries by yourself 👇

  :::note[Users older than 30 years old]

  Age>30

  :::

  :::note[Managers]

  Job?Manager

  :::

  :::note[BIM Software Developers in That Open Company]

  Job?Developer & Company=That Open Company

  :::

  Cool, isn't? Also, is very simple yet powerful. Now, something really cool you can do knowing that is to do some quick filters for you end-users. Let's do it as follows:
  */

const quickFilters = BUI.Component.create(() => {
  const onManagersClick = () => {
    const query = "Job?Manager";
    table.queryString = query;
    // We also update the search box to reflect the current query
    searchBox.value = query;
  };

  const onDevelopersClick = () => {
    const query = "Job?Developer";
    table.queryString = query;
    // We also update the search box to reflect the current query
    searchBox.value = query;
  };

  return BUI.html`
    <div style="display: flex; gap: 0.5rem">
      <bim-button @click=${onManagersClick} label="Managers"></bim-button> 
      <bim-button @click=${onDevelopersClick} label="Developers"></bim-button> 
    </div>
  `;
});

/* MD
  ### 🔗 Putting Everything Together
  ---
  As everything is already setup, let's create a new component to hold all everything and display them in the page. You can do it very easily like this:
  */

const appContent = BUI.Component.create(
  () => BUI.html`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.75rem;">
        ${searchBox}
        ${quickFilters}
        ${preserveStructure}
      </div>
      ${table}
    </div>
  `,
);

document.body.append(appContent);

/* MD
  Congratulations! You already know how to use an advanced feature of the bim-table component to display the information exactly how you need it. Don't hesitate into watching more tutorials! 🚀
  */
