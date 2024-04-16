/* eslint-disable import/no-extraneous-dependencies */
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import * as path from "path";
import {
  clonePackageJSON,
  generateTSNamespace,
} from "../../resources/build-functions";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
  },
  plugins: [
    clonePackageJSON(),
    dts({
      include: ["./src"],
      exclude: ["./src/**/example.ts", "./src/**/*.test.ts"],
      // afterBuild: (files) => generateTSNamespace("BUI", files),
    }),
  ],
});
