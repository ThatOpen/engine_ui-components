import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { ColorInput } from "./ColorInput";
import { ContextMenu } from "./ContextMenu";
import { Dropdown } from "./Dropdown";
import { ElementCreatedEventDetail, Grid } from "./Grid";
import { Icon } from "./Icon";
import { Input } from "./Input";
import { Label } from "./Label";
import { NumberInput } from "./NumberInput";
import { Option } from "./Option";
import { Panel, PanelSection } from "./Panel";
import { Selector } from "./Selector";
import {
  Table,
  TableRow,
  TableCell,
  TableChildren,
  TableGroup,
  CellCreatedEventDetail,
  RowCreatedEventDetail,
  RowSelectedEventDetail,
  RowDeselectedEventDetail,
  TableRowData,
} from "./Table";
import { Tabs, Tab } from "./Tabs";
import { TextInput } from "./TextInput";
import { Toolbar, ToolbarGroup, ToolbarSection } from "./Toolbar";
import { Viewport } from "./Viewport";
import { Tooltip } from "./Tooltip";

/**
 * Extends the global HTMLElementTagNameMap interface to include custom element tags.
 * This allows TypeScript to recognize and validate these custom elements.
 */
declare global {
  interface HTMLElementTagNameMap {
    "bim-button": Button;
    "bim-checkbox": Checkbox;
    "bim-color-input": ColorInput;
    "bim-context-menu": ContextMenu;
    "bim-dropdown": Dropdown;
    "bim-grid": Grid;
    "bim-icon": Icon;
    "bim-input": Input;
    "bim-label": Label;
    "bim-number-input": NumberInput;
    "bim-option": Option;
    "bim-panel": Panel;
    "bim-panel-section": PanelSection;
    "bim-selector": Selector;
    "bim-table": Table;
    "bim-tabs": Tabs;
    "bim-tab": Tab;
    "bim-table-cell": TableCell<TableRowData>;
    "bim-table-children": TableChildren<TableRowData>;
    "bim-table-group": TableGroup<TableRowData>;
    "bim-table-row": TableRow<TableRowData>;
    "bim-text-input": TextInput;
    "bim-toolbar": Toolbar;
    "bim-toolbar-group": ToolbarGroup;
    "bim-toolbar-section": ToolbarSection;
    "bim-viewport": Viewport;
    "bim-tooltip": Tooltip;
  }

  /**
   * Extends the GlobalEventHandlersEventMap interface to include custom events.
   * This allows TypeScript to recognize and validate these custom events.
   */
  interface GlobalEventHandlersEventMap {
    connected: Event;
    disconnected: Event;
    childrenhidden: Event;
    layoutchange: Event;
    hiddenchange: Event;
    columnschange: Event;
    cellcreated: CustomEvent<CellCreatedEventDetail>;
    rowcreated: CustomEvent<RowCreatedEventDetail>;
    rowselected: CustomEvent<RowSelectedEventDetail>;
    rowdeselected: CustomEvent<RowDeselectedEventDetail>;
    elementcreated: CustomEvent<ElementCreatedEventDetail>;
  }
}

export * from "./Button";
export * from "./Checkbox";
export * from "./ColorInput";
export * from "./ContextMenu";
export * from "./Dropdown";
export * from "./Grid";
export * from "./Icon";
export * from "./Input";
export * from "./Label";
export * from "./NumberInput";
export * from "./Option";
export * from "./Panel/src/Panel";
export * from "./Panel/src/Section";
export * from "./Selector";
export * from "./Table";
export * from "./Tabs";
export * from "./TextInput";
export * from "./Toolbar/src/Toolbar";
export * from "./Toolbar/src/Group";
export * from "./Toolbar/src/Section";
export * from "./Viewport";
export * from "./Tooltip";
