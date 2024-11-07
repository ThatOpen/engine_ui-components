import * as BUI from "@thatopen/ui";
import { TopicUserStyles } from "../topics";

export const createAuthorTag = (email: string, styles: TopicUserStyles) => {
  const labelStyles = styles[email];
  const name = labelStyles?.name ?? email;
  const words = name.trim().split(/\s+/);

  let firstLetter;
  let secondLetter;

  if (words[0] && words[0][0]) {
    firstLetter = words[0][0].toUpperCase();
    if (words[0][1]) secondLetter = words[0][1].toUpperCase();
  }

  if (words[1] && words[1][0]) {
    secondLetter = words[1][0].toUpperCase();
  }

  return BUI.html`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${
        !labelStyles?.picture && (firstLetter || secondLetter)
          ? BUI.html`
        <bim-label
          style=${BUI.styleMap({
            borderRadius: "999px",
            padding: "0.375rem",
            backgroundColor: "var(--bim-ui_bg-contrast-20)",
            aspectRatio: "1",
            fontSize: "0.7rem",
          })}>${firstLetter}${secondLetter}</bim-label>
        `
          : null
      }
      <bim-label .img=${labelStyles?.picture}>${name}</bim-label>
    </div>
  `;
};
