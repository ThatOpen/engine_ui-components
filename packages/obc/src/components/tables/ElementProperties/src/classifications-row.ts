/* eslint-disable import/no-extraneous-dependencies */
import * as FRAGS from "@thatopen/fragments";
import * as BUI from "@thatopen/ui";

export const createClassificationsRow = async (
  model: FRAGS.FragmentsGroup,
  classifications: { [attribute: string]: any }[],
) => {
  const row: BUI.TableGroupData = { data: { Name: "Classifications" } };
  for (const classification of classifications) {
    const { value: sourceID } = classification.ReferencedSource;
    const sourceAttrs = await model.getProperties(sourceID);
    if (!sourceAttrs) continue;
    const classificationRow: BUI.TableGroupData = {
      data: {
        Name: sourceAttrs.Name?.value,
      },
      children: [
        {
          data: {
            Name: "Identification",
            Value:
              classification.Identification?.value ||
              classification.ItemReference?.value,
          },
        },
        {
          data: {
            Name: "Name",
            Value: classification.Name?.value,
          },
        },
      ],
    };
    if (!row.children) row.children = [];
    row.children.push(classificationRow);
  }
  return row;
};
