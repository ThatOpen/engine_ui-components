/* eslint-disable import/no-extraneous-dependencies */
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import * as path from "path";
// import { generateTSNamespace } from "../../resources/build-functions";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: (id) => id === "lit" || id.startsWith("lit/"),
    },
  },
  plugins: [
    dts({
      rollupTypes: true
    }),
  ],
});
