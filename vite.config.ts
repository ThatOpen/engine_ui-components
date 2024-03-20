// eslint-disable-next-line import/no-extraneous-dependencies
import dts from "vite-plugin-dts";
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["three", "openbim-components"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
        globals: {
          three: "THREE",
          "openbim-components": "OBC",
        },
      },
    },
  },
  plugins: [dts({ include: ["src"] })],
});
