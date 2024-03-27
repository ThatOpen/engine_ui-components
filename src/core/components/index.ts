import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { ColorInput } from "./ColorInput";
import { ContextMenu } from "./ContextMenu";
import { Dropdown } from "./Dropdown";
import { Grid } from "./Grid";
import { Icon } from "./Icon";
import { Input } from "./Input";
import { Label } from "./Label";
import { NumberInput } from "./NumberInput";
import { Option } from "./Option";
import { Panel } from "./Panel";
import { PanelsContainer } from "./PanelsContainer";
import { PanelSection } from "./PanelSection";
import { Scene2D } from "./Scene2D";
import { Script } from "./Script";
import { SelectorInput } from "./SelectorInput";
import { Table } from "./Table";
import { TableCell } from "./Table/src/TableCell";
import { TableChildren } from "./Table/src/TableChildren";
import { TableGroup } from "./Table/src/TableGroup";
import { TableRow } from "./Table/src/TableRow";
import { TextInput } from "./TextInput";
import { Toolbar } from "./Toolbar";
import { ToolbarGroup } from "./ToolbarGroup";
import { ToolbarsContainer } from "./ToolbarsContainer";
import { ToolbarSection } from "./ToolbarSection";
import { ViewCube } from "./ViewCube";
import { Viewport } from "./Viewport";

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
    "bim-option": Option;
    "bim-panel": Panel;
    "bim-panel-section": PanelSection;
    "bim-scene-2d": Scene2D;
    "bim-script": Script;
    "bim-selector-input": SelectorInput;
    "bim-table": Table;
    "bim-table-cell": TableCell;
    "bim-table-children": TableChildren;
    "bim-table-group": TableGroup;
    "bim-table-row": TableRow;
    "bim-text-input": TextInput;
    "bim-toolbar": Toolbar;
    "bim-toolbar-group": ToolbarGroup;
    "bim-toolbars-container": ToolbarsContainer;
    "bim-toolbar-section": ToolbarSection;
    "bim-view-cube": ViewCube;
    "bim-viewport": Viewport;
  }
}

customElements.define("bim-button", Button);
customElements.define("bim-checkbox", Checkbox);
customElements.define("bim-color-input", ColorInput);
customElements.define("bim-context-menu", ContextMenu);
customElements.define("bim-dropdown", Dropdown);
customElements.define("bim-grid", Grid);
customElements.define("bim-icon", Icon);
customElements.define("bim-input", Input);
customElements.define("bim-label", Label);
customElements.define("bim-number-input", NumberInput);
customElements.define("bim-option", Option);
customElements.define("bim-panel", Panel);
customElements.define("bim-panels-container", PanelsContainer);
customElements.define("bim-panel-section", PanelSection);
customElements.define("bim-scene-2d", Scene2D);
customElements.define("bim-script", Script);
customElements.define("bim-selector-input", SelectorInput);
customElements.define("bim-table", Table);
customElements.define("bim-table-cell", TableCell);
customElements.define("bim-table-children", TableChildren);
customElements.define("bim-table-group", TableGroup);
customElements.define("bim-table-row", TableRow);
customElements.define("bim-text-input", TextInput);
customElements.define("bim-toolbar", Toolbar);
customElements.define("bim-toolbar-group", ToolbarGroup);
customElements.define("bim-toolbars-container", ToolbarsContainer);
customElements.define("bim-toolbar-section", ToolbarSection);
customElements.define("bim-view-cube", ViewCube);
customElements.define("bim-viewport", Viewport);

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
  Option,
  Panel,
  PanelSection,
  Scene2D,
  Script,
  SelectorInput,
  Table,
  TableCell,
  TableChildren,
  TableGroup,
  TableRow,
  TextInput,
  Toolbar,
  ToolbarGroup,
  ToolbarsContainer,
  ToolbarSection,
  ViewCube,
  Viewport,
};
