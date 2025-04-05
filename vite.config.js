import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  // publicDir: "src/public",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
});