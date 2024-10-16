/* eslint-disable import/no-extraneous-dependencies */
import * as FRAGS from "@thatopen/fragments";
import * as WEBIFC from "web-ifc";

const map: Record<string, any> = {
  IFCLENGTHMEASURE: "LENGTHUNIT",
  IFCAREAMEASURE: "AREAUNIT",
  IFCVOLUMEMEASURE: "VOLUMEUNIT",
  IFCPLANEANGLEMEASURE: "PLANEANGLEUNIT",
};

const ifcUnitSymbols: Record<string, { symbol: string; digits: number }> = {
  MILLIMETRE: { symbol: "mm", digits: 0 },
  METRE: { symbol: "m", digits: 2 },
  KILOMETRE: { symbol: "km", digits: 2 },
  SQUARE_METRE: { symbol: "m²", digits: 2 },
  CUBIC_METRE: { symbol: "m³", digits: 2 },
  DEGREE: { symbol: "°", digits: 2 },
  RADIAN: { symbol: "rad", digits: 2 },
  GRAM: { symbol: "g", digits: 0 },
  KILOGRAM: { symbol: "kg", digits: 2 },
  MILLISECOND: { symbol: "ms", digits: 0 },
  SECOND: { symbol: "s", digits: 0 },
};

export const getModelUnit = async (
  model: FRAGS.FragmentsGroup,
  type: string,
) => {
  const units = Object.values(
    (await model.getAllPropertiesOfType(WEBIFC.IFCUNITASSIGNMENT))!,
  )[0];
  let unit: string | undefined;
  for (const handle of units.Units) {
    const unitAttrs = await model.getProperties(handle.value);
    if (unitAttrs && unitAttrs.UnitType?.value === map[type]) {
      unit = `${unitAttrs.Prefix?.value ?? ""}${unitAttrs.Name?.value ?? ""}`;
      break;
    }
  }
  if (unit) return ifcUnitSymbols[unit];
  return null;
};
