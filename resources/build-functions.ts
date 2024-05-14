import * as fs from "fs";

export const generateTSNamespace = (name: string, dts: Map<string, string>) => {
  if (!fs.existsSync("./dist")) return;
  console.log("Generating namespace!");
  let types = "";
  dts.forEach((declaration) => {
    const cleanedType = declaration
      .replace(/export\s+\*?\s+from\s+"[^"]+";/g, "")
      .replace(/^\s*[\r\n]/gm, "")
      .replace(/`/g, "'");
    types += cleanedType;
  });
  fs.writeFileSync(
    "./dist/namespace.d.ts",
    `declare namespace ${name} {\n${types}\n}`,
  );
};
