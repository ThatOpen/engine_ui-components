import { promises as fs } from "fs";
import { importDirectory, cleanupSVG, parseColors, runSVGO } from "@iconify/tools";

async function main() {
  // folder with svg icons
  // change it with your own
  const iconSet = await importDirectory("resources/icons");

  iconSet.forEachSync((name, type) => {
    if (type !== "icon") return;
    const svg = iconSet.toSVG(name);
    if (!svg) return;

    cleanupSVG(svg);
    parseColors(svg, { defaultColor: "currentColor" }); // inherit CSS colors
    runSVGO(svg);

    const icon = svg.getIcon();
    iconSet.setIcon(name, icon);
  });

  await fs.writeFile(
    "resources/custom-icons.json",
    JSON.stringify(iconSet.export(), null, 2)
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});