import * as fs from "fs";

export const clonePackageJSON = () => {
  return {
    name: "copy-package-json",
    async writeBundle() {
      if (!fs.existsSync("./dist")) return;
      console.log("Cloning package.json!");
      const packageBuffer = fs.readFileSync("./package.json");
      fs.writeFileSync("./dist/package.json", packageBuffer);
    },
  };
};

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
