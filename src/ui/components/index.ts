import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { ColorInput } from "./ColorInput";
import { Dropdown } from "./Dropdown";
import { Grid } from "./Grid";
import { Icon } from "./Icon";
import { Input } from "./Input";
import { Label } from "./Label";
import { NumberInput } from "./NumberInput";
import { Panel } from "./Panel";
import { PanelsContainer } from "./PanelsContainer";
import { PanelSection } from "./PanelSection";
import { SelectorInput } from "./SelectorInput";
import { Table } from "./Table";
import { Toolbar } from "./Toolbar";
import { ToolbarGroup } from "./ToolbarGroup";
import { ToolbarsContainer } from "./ToolbarsContainer";
import { ToolbarSection } from "./ToolbarSection";
import { VectorInput } from "./VectorInput";

declare global {
  interface HTMLElementTagNameMap {
    "bim-button": Button;
    "bim-checkbox": Checkbox;
    "bim-color-input": ColorInput;
    "bim-dropdown": Dropdown;
    "bim-grid": Grid;
    "bim-icon": Icon;
    "bim-input": Input;
    "bim-label": Label;
    "bim-number-input": NumberInput;
    "bim-panel": Panel;
    "bim-panel-section": PanelSection;
    "bim-selector-input": SelectorInput;
    "bim-table": Table;
    "bim-toolbar": Toolbar;
    "bim-toolbar-group": ToolbarGroup;
    "bim-toolbars-container": ToolbarsContainer;
    "bim-toolbar-section": ToolbarSection;
    "bim-vector-input": VectorInput;
  }
}

customElements.define("bim-button", Button)
customElements.define("bim-checkbox", Checkbox)
customElements.define("bim-color-input", ColorInput)
customElements.define("bim-dropdown", Dropdown)
customElements.define("bim-grid", Grid)
customElements.define("bim-icon", Icon)
customElements.define("bim-input", Input)
customElements.define("bim-label", Label)
customElements.define("bim-number-input", NumberInput)
customElements.define("bim-panel", Panel)
customElements.define("bim-panels-container", PanelsContainer)
customElements.define("bim-panel-section", PanelSection)
customElements.define("bim-selector-input", SelectorInput)
customElements.define("bim-table", Table)
customElements.define("bim-toolbar", Toolbar)
customElements.define("bim-toolbar-group", ToolbarGroup)
customElements.define("bim-toolbars-container", ToolbarsContainer)
customElements.define("bim-toolbar-section", ToolbarSection)
customElements.define("bim-vector-input", VectorInput)

export {
  Button,
  Checkbox,
  ColorInput,
  Dropdown,
  Grid,
  Icon,
  Input,
  Label,
  NumberInput,
  Panel,
  PanelSection,
  SelectorInput,
  Table,
  Toolbar,
  ToolbarGroup,
  ToolbarsContainer,
  ToolbarSection,
  VectorInput
}