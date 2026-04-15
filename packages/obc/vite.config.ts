/* eslint-disable import/no-extraneous-dependencies */
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import * as path from "path";
import * as packageJson from "./package.json";

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: (id) => {
        const peers = [
          ...Object.keys(packageJson.peerDependencies),
          "lit",
          "@thatopen/ui",
        ];
        return peers.some((p) => id === p || id.startsWith(`${p}/`));
      },
      output: {
        globals: {
          three: "THREE",
          "@thatopen/ui-components": "BUI",
        },
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true
    }),
  ],
});
