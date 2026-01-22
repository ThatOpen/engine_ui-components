/* MD
  ### 🔗 Table Grouping
  ---
  The bim-table component supports grouping functionality that allows you to organize your data hierarchically. You can group by one or multiple columns to create nested structures. This is particularly useful when you want to organize large datasets by categories or when you need to show relationships between different data points.

  :::tip Data Structure

  The grouping functionality works with both flat data and already grouped data. When you apply grouping to already grouped data, it will first flatten the data and then apply the new grouping structure.

  :::

  Let's start by creating some sample data and a table:
*/

// You have to import from "@thatopen/ui"
import * as BUI from "../../../..";

BUI.Manager.init();

// Define the CDE file data type based on ISO 19650 standards
type CDEFileData = {
  Name: string;
  ProjectCode: string;
  Originator: string;
  System: string;
  Location: string;
  Type: string;
  Discipline: string;
  Number: string;
  Description: string;
  State: "S0" | "S1" | "S1.1" | "S1.2" | "S2" | "S2.1" | "S2.2" | "S3" | "S3.1" | "S4" | "A1" | "A2" | "A3" | "D1";
  Revision: string;
};

// Mapping object for CDE field abbreviations to full names
const cdeFieldMappings = {
  // Originator codes (who created the document)
  Originator: {
    ARC: "Architecture Team",
    STR: "Structural Engineering Team",
    MEP: "MEP Engineering Team",
    ELE: "Electrical Engineering Team",
    MEC: "Mechanical Engineering Team",
    PLU: "Plumbing Engineering Team",
    HVA: "HVAC Engineering Team",
    FIR: "Fire Protection Team",
    LND: "Landscape Architecture Team",
    CIV: "Civil Engineering Team",
    GEO: "Geotechnical Engineering Team",
    CON: "Construction Team",
    PMT: "Project Management Team",
    QS: "Quantity Surveying Team",
    HSE: "Health Safety Environment Team"
  },

  // Discipline codes
  Discipline: {
    ARC: "Architecture",
    STR: "Structural Engineering", 
    MEP: "Mechanical, Electrical & Plumbing",
    ELE: "Electrical Engineering",
    MEC: "Mechanical Engineering",
    PLU: "Plumbing",
    HVA: "HVAC Systems",
    FIR: "Fire Protection",
    LND: "Landscape Architecture",
    CIV: "Civil Engineering",
    GEO: "Geotechnical Engineering"
  },
  
  // Document/File type codes
  Type: {
    MOD: "3D Model",
    DRW: "2D Drawing",
    SPE: "Specification",
    SCH: "Schedule/Schedule of Work", 
    CAL: "Calculation Report",
    REP: "Report",
    PHO: "Photograph",
    VID: "Video",
    DOC: "Document",
    XLS: "Spreadsheet",
    PDF: "PDF Document"
  },
  
  // System codes
  System: {
    BLD: "Building",
    STR: "Structure", 
    EXT: "External Works",
    SIT: "Site Infrastructure",
    MEP: "MEP Systems",
    FAS: "Facade Systems",
    INT: "Interior Systems",
    LAN: "Landscape",
    TRA: "Transportation",
    UTI: "Utilities"
  },
  
  // Location codes
  Location: {
    L01: "Level 01 - Ground Floor",
    L02: "Level 02 - First Floor", 
    L03: "Level 03 - Second Floor",
    BSM: "Basement Level",
    ROF: "Roof Level",
    YRD: "Yard/External Area",
    GAR: "Garage/Parking",
    STA: "Stairwell",
    ELE: "Elevator/Lift",
    COR: "Corridor/Hallway"
  },
  
  // State codes (ISO 19650)
  State: {
    S0: "S0 - Work in Progress",
    S1: "S1 - Coordination",
    "S1.1": "S1.1 - Initial Coordination",
    "S1.2": "S1.2 - Final Coordination",
    S2: "S2 - Information",
    "S2.1": "S2.1 - Preliminary Information",
    "S2.2": "S2.2 - Detailed Information",
    S3: "S3 - Review & Comment",
    "S3.1": "S3.1 - Internal Review",
    S4: "S4 - Stage Complete",
    A1: "A1 - Accepted",
    A2: "A2 - Accepted with Comments", 
    A3: "A3 - Accepted with Conditions",
    D1: "D1 - Rejected/Deprecated"
  },
  
  // Revision codes
  Revision: {
    C01: "C01 - Construction Issue 01",
    C02: "C02 - Construction Issue 02", 
    C03: "C03 - Construction Issue 03",
    P01: "P01 - Preliminary Issue 01",
    P02: "P02 - Preliminary Issue 02",
    P03: "P03 - Preliminary Issue 03",
    P05: "P05 - Preliminary Issue 05",
    T01: "T01 - Test Issue 01",
    T02: "T02 - Test Issue 02",
    W01: "W01 - Work Issue 01",
    W02: "W02 - Work Issue 02",
    A01: "A01 - Approved Issue 01",
    D01: "D01 - Draft Issue 01"
  }
};

// Sample CDE file data following ISO 19650 naming conventions
const sampleData: BUI.TableGroupData<CDEFileData>[] = [
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "ARC",
      System: "BLD",
      Location: "L01",
      Type: "MOD",
      Discipline: "ARC",
      Number: "001",
      Description: "Ground Floor Architectural Model",
      State: "S4",
      Revision: "C02",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "STR",
      System: "BLD",
      Location: "L01",
      Type: "MOD",
      Discipline: "STR",
      Number: "001",
      Description: "Structural Framework Model",
      State: "A1",
      Revision: "C03",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "MEP",
      System: "BLD",
      Location: "L01",
      Type: "MOD",
      Discipline: "MEP",
      Number: "001",
      Description: "HVAC System Layout",
      State: "S3.1",
      Revision: "P05",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "ARC",
      System: "BLD",
      Location: "L02",
      Type: "DRW",
      Discipline: "ARC",
      Number: "002",
      Description: "First Floor Plans and Elevations",
      State: "S2.2",
      Revision: "P03",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "STR",
      System: "BLD",
      Location: "L02",
      Type: "CAL",
      Discipline: "STR",
      Number: "001",
      Description: "Structural Calculations Report",
      State: "A2",
      Revision: "A01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "MEP",
      System: "EXT",
      Location: "YRD",
      Type: "SPE",
      Discipline: "ELE",
      Number: "001",
      Description: "External Electrical Installation Specification",
      State: "S1.1",
      Revision: "T02",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "LND",
      System: "EXT",
      Location: "GRD",
      Type: "DRW",
      Discipline: "LND",
      Number: "001",
      Description: "Landscape Architecture Master Plan",
      State: "S4",
      Revision: "C01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "ARC",
      System: "BLD",
      Location: "BSM",
      Type: "MOD",
      Discipline: "ARC",
      Number: "003",
      Description: "Basement Level Architectural Model",
      State: "D1",
      Revision: "D01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "ARC",
      System: "BLD",
      Location: "BSM",
      Type: "MOD",
      Discipline: "ARC",
      Number: "003",
      Description: "Basement Level Architectural Model",
      State: "D1",
      Revision: "D01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "STR",
      System: "BLD",
      Location: "L02",
      Type: "MOD",
      Discipline: "STR",
      Number: "002",
      Description: "Second Floor Structural Model",
      State: "S2.1",
      Revision: "T01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "MEP",
      System: "BLD",
      Location: "L01",
      Type: "DRW",
      Discipline: "MEP", 
      Number: "005",
      Description: "Ground Floor MEP Layout",
      State: "S1.2",
      Revision: "C01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "ARC",
      System: "BLD",
      Location: "L02",
      Type: "DRW",
      Discipline: "ARC",
      Number: "010",
      Description: "Second Floor Plans",
      State: "S3.1",
      Revision: "P02",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "ARC",
      System: "BLD",
      Location: "L01",
      Type: "MOD",
      Discipline: "ARC",
      Number: "020",
      Description: "Work in Progress - Initial Design Model",
      State: "S0",
      Revision: "W01",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "STR",
      System: "BLD",
      Location: "L01",
      Type: "DRW",
      Discipline: "STR",
      Number: "015",
      Description: "Work in Progress - Foundation Details",
      State: "S0",
      Revision: "W02",
    },
  },
  {
    data: {
      Name: "",
      ProjectCode: "HSP",
      Originator: "MEP",
      System: "BLD",
      Location: "L02",
      Type: "MOD",
      Discipline: "MEP",
      Number: "008",
      Description: "Work in Progress - HVAC Preliminary Layout",
      State: "S0",
      Revision: "W01",
    },
  }
];

/* MD
  ### 📊 Interactive Table Grouping
  ---
  The bim-table component supports dynamic grouping functionality via the `groupedBy` property that allows you to reorganize your data hierarchically. You can group by one or multiple columns to create nested structures in real-time. This property reflects to the HTML attribute `grouped-by`, so you can set it both programmatically and declaratively.

  **Usage examples:**
  ```typescript
  // Programmatically
  table.groupedBy = ['State', 'Discipline'];
  
  // Or declaratively in HTML
  <bim-table grouped-by="State,Discipline"></bim-table>
  ```

  Let's create a table with interactive grouping controls:
*/

// Create the main interactive table
const table = document.createElement("bim-table") as BUI.Table<CDEFileData>;
table.expanded = true
table.data = sampleData;

/* MD
  #### 🔄 Advanced Multi-Level Grouping Transformation
  ---
  The table supports `groupingTransform` with the new multi-level system across multiple columns. This example demonstrates complex hierarchical grouping:
  
  **State Hierarchy**: S1.1 → creates S > S1 > S1.1 (three levels using arrays)
  **Revision Hierarchy**: C02 → creates C > C02 (two levels using first letter)
  
  Combined result: State > Discipline > Revision with smart hierarchies at each level.
*/

// Apply the revolutionary flexible grouping transformations
table.groupingTransform = {
  // State: Revolutionary flexible hierarchy - arrays determine depth, not groupBy columns!
  State: (value) => {
    const stateStr = String(value);
    
    // S0 - Work in Progress: Single level hierarchy (goes directly to disciplines)
    if (stateStr === "S0") {
      return ["Work in Progress"];
    }
    
    // S1, S2, S3, S4 states with full name mapping
    if (stateStr.startsWith("S") && !stateStr.includes('.')) {
      const stateName = cdeFieldMappings.State[stateStr as keyof typeof cdeFieldMappings.State] || stateStr;
      return ["Shared Information States", stateName];
    }
    
    // Sub-level states: S1.1, S2.2, etc. - Three level hierarchy!
    if (stateStr.startsWith("S") && stateStr.includes('.')) {
      const baseState = stateStr.split('.')[0]; // "S1", "S2"
      const baseStateName = cdeFieldMappings.State[baseState as keyof typeof cdeFieldMappings.State] || baseState;
      const fullStateName = cdeFieldMappings.State[stateStr as keyof typeof cdeFieldMappings.State] || stateStr;
      return ["Shared Information States", baseStateName, fullStateName];
    }
    
    // A states - Authorized/Published
    if (stateStr.startsWith("A")) {
      const stateName = cdeFieldMappings.State[stateStr as keyof typeof cdeFieldMappings.State] || stateStr;
      return ["Authorized States", stateName];
    }
    
    // D states - Deprecated  
    if (stateStr.startsWith("D")) {
      const stateName = cdeFieldMappings.State[stateStr as keyof typeof cdeFieldMappings.State] || stateStr;
      return ["Deprecated States", stateName];
    }
    
    // Fallback
    return [value];
  },
  
  // Revision: Flexible hierarchy by revision type
  Revision: (value) => {
    const revisionStr = String(value);
    const firstLetter = revisionStr.charAt(0);
    
    // Create category names based on first letter
    const categoryMap: Record<string, string> = {
      'C': 'Construction Revisions',
      'P': 'Preliminary Revisions', 
      'T': 'Test Revisions',
      'D': 'Draft Revisions',
      'W': 'Work Revisions',
      'A': 'Approved Revisions'
    };
    
    const categoryName = categoryMap[firstLetter] || `${firstLetter} Revisions`;
    return [categoryName, revisionStr];
  }
};

// Initialize with the most complex grouping to showcase the full capabilities
table.groupedBy = ["State", "Discipline", "Revision"];

/* MD
  #### 🎨 Data Transform with Grouping
  ---
  The table also supports data transformation while grouped. This allows you to customize how data is displayed in cells even when the data is organized in groups. Note how the grouping rows now show formatted values:
*/

const getDefaultGroupTransform = (column: keyof typeof cdeFieldMappings, value: string, group: BUI.TableGroup<CDEFileData>) => {
  const fullName = (cdeFieldMappings[column] as any)[value] || value;
  const iconName = group.data._isComputedGroup ? "material-symbols:folder-open" : "";
  return BUI.html`
    <bim-label icon="${iconName}" style="font-weight: 500;">
      ${fullName}
    </bim-label>
  `;
}

// Apply data transformations to make the CDE file data more visual and interactive
table.dataTransform = {
  // Generate ISO 19650 compliant file name by concatenating fields
  Name: (_value, rowData) => {
    const { ProjectCode, Originator, System, Location, Type, Discipline, Number } = rowData;
    
    // Concatenate all fields except Description, State, and Revision
    const fileName = `${ProjectCode}-${Originator}-${System}-${Location}-${Type}-${Discipline}-${Number}`;

    const fullTypeName = cdeFieldMappings.Type[Type as keyof typeof cdeFieldMappings.Type] || Type;
    
    // Icons based on document/file type
    const iconName = (() => {
      if (fullTypeName === "3D Model") return "material-symbols:view-in-ar";
      if (fullTypeName === "2D Drawing") return "material-symbols:draft";
      if (fullTypeName === "Specification") return "material-symbols:description";
      if (fullTypeName === "Schedule/Schedule of Work") return "material-symbols:event-note";
      if (fullTypeName === "Calculation Report") return "material-symbols:calculate";
      if (fullTypeName === "Report") return "material-symbols:article";
      if (fullTypeName === "Photograph") return "material-symbols:photo-camera";
      if (fullTypeName === "Video") return "material-symbols:videocam";
      if (fullTypeName === "Document") return "material-symbols:insert-drive-file";
      if (fullTypeName === "Spreadsheet") return "material-symbols:table-chart";
      if (fullTypeName === "PDF Document") return "material-symbols:picture-as-pdf";
      return "material-symbols:insert-drive-file";
    })();
    
    return BUI.html`
      <bim-label icon=${iconName}>${fileName}</bim-label>
    `;
  },

  Discipline: (value, _data, group) => {
    const transform = getDefaultGroupTransform("Discipline", value, group)
    return transform
  },

  Type: (value, _data, group) => {
    const transform = getDefaultGroupTransform("Type", value, group)
    return transform
  },

  System: (value, _data, group) => {
    const transform = getDefaultGroupTransform("System", value, group)
    return transform
  },

  Location: (value, _data, group) => {
    const transform = getDefaultGroupTransform("Location", value, group)
    return transform
  },

  State: (value, _, group) => {
    const state = value as string;
    
    // Handle transformed values (first level grouping categories)
    if (state === "Work in Progress") {
      return BUI.html`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Work in Progress
        </bim-label>
      `;
    }
    if (state === "Shared Information States") {
      return BUI.html`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Shared
        </bim-label>
      `;
    }
    if (state === "Authorized States") {
      return BUI.html`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Authorized/Published
        </bim-label>
      `;
    }
    if (state === "Deprecated States") {
      return BUI.html`
        <bim-label icon="material-symbols:folder-open" style="font-weight: 600;">
          Deprecated
        </bim-label>
      `;
    }
    
    // Handle individual state values (second level grouping and data rows)
    const stateName = cdeFieldMappings.State[state as keyof typeof cdeFieldMappings.State] || state;
    const iconName = group.data._isComputedGroup ? "material-symbols:folder-open" : "";
    
    // All individual states (S0, S1, A1, D1, etc.) with folder icon for groups
    if (state === "S0" || state.startsWith("S") || state.startsWith("A") || state.startsWith("D")) {
      return BUI.html`
        <bim-label icon="${iconName}" style="font-weight: 500;">
          ${stateName}
        </bim-label>
      `;
    }
    
    // Default case - return value wrapped in bim-label
    return stateName;
  },

  Originator: (value, _data, group) => {
    const transform = getDefaultGroupTransform("Originator", value, group)
    return transform
  },

  Revision: (value, _data, group) => {
    const transform = getDefaultGroupTransform("Revision", value, group)
    return transform
  }

};

// Hide the individual columns used for concatenation, showing only the computed Name and other relevant fields
table.hiddenColumns = ["ProjectCode", "Originator", "System", "Location", "Type", "Discipline", "Number", ...table.groupedBy];

/* MD
  ### � Putting Everything Together
  ---
  As everything is already setup, let's create a new component to hold the tables together and display them in the page. You can do it very easily as follows:
*/

// Custom grouping with drag & drop functionality
const availableColumns: (keyof CDEFileData)[] = ["State", "Discipline", "Location", "Type", "Revision", "Originator", "System"];
const customGroupingColumns: { column: keyof CDEFileData, active: boolean }[] = [
  { column: "Discipline", active: true }
];

// Create draggable column labels
const createDraggableColumn = (columnName: keyof CDEFileData, isInDropZone = false, isActive = true) => {
  const label = document.createElement("bim-label") as BUI.Label;
  label.textContent = columnName;
  
  // Different styles for different states
  const baseStyle = `
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: ${isInDropZone ? 'pointer' : 'grab'};
    user-select: none;
    transition: all 0.2s ease;
    border: 2px solid transparent;
  `;
  
  const updateStyle = () => {
    if (isInDropZone) {
      if (isActive) {
        label.style.cssText = baseStyle + `
          background-color: var(--bim-ui_accent-base);
          color: var(--bim-ui_bg-base);
        `;
      } else {
        label.style.cssText = baseStyle + `
          background-color: var(--bim-ui_bg-contrast-20);
          opacity: 0.5;
        `;
      }
    } else {
      label.style.cssText = baseStyle + `
        background-color: var(--bim-ui_bg-contrast-20);
      `;
    }
  };
  
  updateStyle();
  
  // Make it draggable (only if not in drop zone or if we're reordering)
  if (!isInDropZone) {
    label.draggable = true;
    
    // Drag events for available columns
    label.addEventListener("dragstart", (e) => {
      if (e.dataTransfer) {
        e.dataTransfer.setData("text/plain", columnName);
        e.dataTransfer.setData("source", "available");
        e.dataTransfer.effectAllowed = "move";
      }
      label.style.opacity = "0.5";
    });
    
    label.addEventListener("dragend", () => {
      label.style.opacity = "1";
    });
    
    // Hover effects for available columns
    label.addEventListener("mouseenter", () => {
      label.style.backgroundColor = "var(--bim-ui_bg-contrast-40)";
    });
    
    label.addEventListener("mouseleave", () => {
      updateStyle();
    });
  } else {
    // Click to toggle active/inactive in drop zone
    label.addEventListener("click", () => {
      const columnObj = customGroupingColumns.find(c => c.column === columnName);
      if (columnObj) {
        columnObj.active = !columnObj.active;
        isActive = columnObj.active;
        updateStyle();
        applyCustomGrouping(); // Auto-update
      }
    });
    
    // Double-click to remove from drop zone
    label.addEventListener("dblclick", (e) => {
      e.stopPropagation();
      const index = customGroupingColumns.findIndex(c => c.column === columnName);
      if (index !== -1) {
        customGroupingColumns.splice(index, 1);
        updateCustomGroupingUI();
        applyCustomGrouping(); // Auto-update
      }
    });
    
    // Drag for reordering within drop zone
    label.draggable = true;
    label.addEventListener("dragstart", (e) => {
      if (e.dataTransfer) {
        e.dataTransfer.setData("text/plain", columnName);
        e.dataTransfer.setData("source", "dropzone");
        e.dataTransfer.effectAllowed = "move";
      }
      label.style.opacity = "0.5";
    });
    
    label.addEventListener("dragend", () => {
      label.style.opacity = "1";
      updateStyle();
    });
    
    // Hover effects
    label.addEventListener("mouseenter", () => {
      if (isActive) {
        label.style.backgroundColor = "var(--bim-ui_main-base)";
        label.style.color = "var(--bim-ui_main-contrast)";
      } else {
        label.style.backgroundColor = "var(--bim-ui_bg-contrast-40)";
      }
    });
    
    label.addEventListener("mouseleave", () => {
      updateStyle();
    });
  }
  
  return label;
};

// Create drop zone
const dropZone = document.createElement("div");
dropZone.style.cssText = `
  min-height: 3rem;
  border: 2px dashed var(--bim-ui_bg-contrast-40);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.2s ease;
`;

// Drop zone events
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.borderColor = "var(--bim-ui_accent-base)";
  dropZone.style.backgroundColor = "var(--bim-ui_accent-base)20";
});

dropZone.addEventListener("dragleave", () => {
  dropZone.style.borderColor = "var(--bim-ui_bg-contrast-40)";
  dropZone.style.backgroundColor = "var(--bim-ui_bg-contrast-10)";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const columnName = e.dataTransfer?.getData("text/plain") as keyof CDEFileData;
  const source = e.dataTransfer?.getData("source");
  
  if (!columnName) return;
  
  if (source === "available") {
    // Adding new column from available columns
    if (!customGroupingColumns.some(c => c.column === columnName)) {
      customGroupingColumns.push({column: columnName, active: true});
      updateCustomGroupingUI();
      applyCustomGrouping(); // Auto-update
    }
  } else if (source === "dropzone") {
    // Reordering within drop zone
    const dropTarget = e.target as HTMLElement;
    const allLabels = Array.from(dropZone.querySelectorAll("bim-label"));
    const targetIndex = allLabels.findIndex(label => label === dropTarget || label.contains(dropTarget));
    
    if (targetIndex !== -1) {
      handleDropZoneReorder(columnName, targetIndex);
    }
  }
  
  dropZone.style.borderColor = "var(--bim-ui_bg-contrast-40)";
  dropZone.style.backgroundColor = "var(--bim-ui_bg-contrast-10)";
});

// Auto-apply grouping function
const applyCustomGrouping = () => {
  const activeColumns = customGroupingColumns
    .filter(c => c.active)
    .map(c => c.column);
  
  if (activeColumns.length > 0) {
    table.groupedBy = activeColumns;
  } else {
    table.groupedBy = [];
  }
};

// Handle reordering within drop zone
const handleDropZoneReorder = (draggedColumn: keyof CDEFileData, targetIndex: number) => {
  const draggedIndex = customGroupingColumns.findIndex(c => c.column === draggedColumn);
  if (draggedIndex !== -1 && draggedIndex !== targetIndex) {
    const [draggedItem] = customGroupingColumns.splice(draggedIndex, 1);
    customGroupingColumns.splice(targetIndex, 0, draggedItem);
    updateCustomGroupingUI();
    applyCustomGrouping(); // Auto-update
  }
};

// Available columns container
const availableColumnsContainer = document.createElement("div");
availableColumnsContainer.style.cssText = `
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

// Update UI function
const updateCustomGroupingUI = () => {
  // Clear drop zone
  dropZone.innerHTML = "";
  
  // Clear available columns
  availableColumnsContainer.innerHTML = "";
  
  // Add custom grouping columns to drop zone
  if (customGroupingColumns.length === 0) {
    const placeholder = document.createElement("bim-label");
    placeholder.textContent = "Drag columns here to create custom grouping";
    placeholder.style.cssText = "opacity: 0.6; font-style: italic;";
    dropZone.appendChild(placeholder);
  } else {
    customGroupingColumns.forEach((columnObj, index) => {
      const columnLabel = createDraggableColumn(columnObj.column, true, columnObj.active);
      dropZone.appendChild(columnLabel);
      
      // Add arrow between columns
      if (index < customGroupingColumns.length - 1) {
        const arrow = document.createElement("bim-label");
        arrow.textContent = "→";
        arrow.style.cssText = "opacity: 0.6; margin: 0 0.25rem;";
        dropZone.appendChild(arrow);
      }
    });
  }
  
  // Add available columns (excluding those already in custom grouping)
  availableColumns.forEach(column => {
    if (!customGroupingColumns.some(c => c.column === column)) {
      const columnLabel = createDraggableColumn(column, false, true);
      availableColumnsContainer.appendChild(columnLabel);
    }
  });
};

// Initialize the UI with default grouping
updateCustomGroupingUI();
applyCustomGrouping();

const onInput = ({target}: {target: BUI.TextInput}) => {
  table.queryString = target.value
}

const appContent = BUI.Component.create(
  () => BUI.html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; height: 100%; overflow: auto; max-width: 40rem; margin: auto;">
      
      <bim-label style="font-size: 1.5rem; font-weight: bold;color: var(--bim-ui_accent-base)">🏗️ CDE File Grouping Examples (ISO 19650)</bim-label>

      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <bim-label>Create custom data groupings by dragging columns to the drop zone below:</bim-label>
        
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <bim-label style="font-weight: 600; margin-bottom: 0.5rem;">Available Columns:</bim-label>
            ${availableColumnsContainer}
          </div>
          
          <div>
            <bim-label style="font-weight: 600; margin-bottom: 0.5rem;">Drop Zone - Interactive Controls:</bim-label>
            <bim-label style="font-size: 0.9rem; opacity: 0.8; margin-bottom: 0.5rem;">
              Click to toggle active/inactive • Double-click to remove • Drag to reorder
            </bim-label>
            ${dropZone}
          </div>
          <bim-text-input debounce=200 @input=${onInput} placeholder="Search files..."></bim-text-input>
        </div>
      </div>

      ${table}

    </div>
  `,
);

document.body.append(appContent);

/* MD
  Congratulations! You now know how to use the powerful grouping functionality of the bim-table component to organize your data hierarchically. This feature allows you to create complex data structures and organize large datasets in a meaningful way. Don't hesitate to experiment with different grouping combinations! 🚀
*/