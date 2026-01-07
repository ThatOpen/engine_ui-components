import * as BUI from "@thatopen/ui";
import * as OBC from "@thatopen/components"
import * as FRAGS from "@thatopen/fragments";
import { ItemsDataState, ItemsDataTableData } from "./types";

const modelUnits = new Map<string, FRAGS.ItemData[]>()

const unitSymbols: Record<string, string> = {
  "METRE": "m",
  "SQUARE_METRE": "m²",
  "CUBIC_METRE": "m³",
}

const getModelUnits = async (components: OBC.Components, modelId: string) => {
  const fragments = components.get(OBC.FragmentsManager)
  const model = fragments.list.get(modelId)
  if (!model) {
    throw new Error(`ItemsDataUI: model ${modelId} not found.`)
  }

  let units = modelUnits.get(model.modelId)
  if (!units) {
    // IfcUnitAssignment is the entity that holds all the global model units
    const [unitAssignment] = Object.values((await model.getItemsOfCategories([/UNITASSIGNMENT/]))).flat()
    const [unitAssignmentsData] = await model.getItemsData([unitAssignment], {
      // Units is the relation from the IfcUnitAssignment that holds the list of units in the project
      relations: { Units: { relations: false, attributes: true } }
    })
  
    if (!Array.isArray(unitAssignmentsData.Units)) return []
    units = unitAssignmentsData.Units // This is the list of IfcSIUnits in the file
  }

  return units
}


export const setDefaults = (
  state: ItemsDataState,
  table: BUI.Table<ItemsDataTableData>,
) => {
  const { components } = state
  table.columns = [{ name: "Name", width: "12rem" }];
  table.hiddenColumns = ["modelId", "localId", "Actions", "type", "dataType"]
  table.headersHidden = true;
  table.dataTransform = {
    Value: (value, rowData) => {
      const { dataType, modelId } = rowData
      if (!dataType) return value
      
      const onCreated = async (e?: Element) => {
        if (!(e && modelId)) return
        const units = await getModelUnits(components, modelId)
        const valueUnit = dataType.replace("IFC", "").replace("MEASURE", "UNIT")
        const modelUnit = units.find(unit => {
        if (!(unit.UnitType && "value" in unit.UnitType)) return false
          return unit.UnitType.value === valueUnit
        })
  
        if (!modelUnit) return value
        if (!(modelUnit.Name && "value" in modelUnit.Name)) return value

        const formattedValue = `${(value as number).toFixed(2)} ${unitSymbols[modelUnit.Name.value] ?? modelUnit.Name.value}`
        
        e.textContent = formattedValue
      }

      return BUI.html`<bim-label ${BUI.ref(onCreated)}></bim-label>`
    }
  }
};
