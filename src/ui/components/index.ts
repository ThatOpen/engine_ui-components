import { Button } from "./Button";
import { CheckboxInput } from "./CheckboxInput";
import { ColorInput } from "./ColorInput";
import { Dropdown } from "./Dropdown";
import { Input } from "./Input";
import { InputLabel } from "./InputLabel";
import { NumberInput } from "./NumberInput";
import { Panel } from "./Panel";
import { PanelsContainer } from "./PanelsContainer";
import { PanelSection } from "./PanelSection";
import { SelectorInput } from "./SelectorInput";
import { Table } from "./Table";
import { Tag } from "./Tag";
import { Toolbar } from "./Toolbar";
import { ToolbarSection } from "./ToolbarSection";
import { VectorInput } from "./VectorInput";

declare global {
  interface HTMLElementTagNameMap {
    "bim-button": Button;
    "bim-checkbox": CheckboxInput;
    "bim-color-input": ColorInput;
    "bim-dropdown": Dropdown;
    "bim-input": Input;
    "bim-input-label": InputLabel;
    "bim-number-input": NumberInput;
    "bim-panel": Panel;
    "bim-panel-section": PanelSection;
    "bim-selector-input": SelectorInput;
    "bim-table": Table;
    "bim-tag": Tag;
    "bim-toolbar": Toolbar;
    "bim-toolbar-section": ToolbarSection;
    "bim-vector-input": VectorInput;
  }
}

customElements.define("bim-button", Button)
customElements.define("bim-checkbox", CheckboxInput)
customElements.define("bim-color-input", ColorInput)
customElements.define("bim-dropdown", Dropdown)
customElements.define("bim-input", Input)
customElements.define("bim-input-label", InputLabel)
customElements.define("bim-number-input", NumberInput)
customElements.define("bim-panel", Panel)
customElements.define("bim-panels-container", PanelsContainer)
customElements.define("bim-panel-section", PanelSection)
customElements.define("bim-selector-input", SelectorInput)
customElements.define("bim-table", Table)
customElements.define("bim-tag", Tag)
customElements.define("bim-toolbar", Toolbar)
customElements.define("bim-toolbar-section", ToolbarSection)
customElements.define("bim-vector-input", VectorInput)

export {
  Button,
  CheckboxInput,
  ColorInput,
  Dropdown,
  Input,
  InputLabel,
  NumberInput,
  Panel,
  PanelSection,
  SelectorInput,
  Table,
  Tag,
  Toolbar,
  ToolbarSection,
  VectorInput
}