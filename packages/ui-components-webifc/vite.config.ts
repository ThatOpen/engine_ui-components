/* eslint-disable import/no-extraneous-dependencies */
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import * as path from "path";
import * as packageJson from "./package.json";
import {
  clonePackageJSON,
  generateTSNamespace,
} from "../../resources/build-functions";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: Object.keys(packageJson.peerDependencies),
      output: {
        globals: {
          "web-ifc": "WEBIFC",
          "@thatopen/ui-components": "BUI",
        },
      },
    },
  },
  plugins: [
    clonePackageJSON(),
    dts({
      include: ["./src"],
      exclude: ["./src/**/example.ts", "./src/**/*.test.ts"],
      // afterBuild: (files) => generateTSNamespace("WUI", files),
    }),
  ],
});
