import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  // publicDir: "src/public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        product: resolve(__dirname, "src/product-page/index.html"),
        productDetails: resolve(__dirname, "src/product-details/index.html"),
        services: resolve(__dirname, "src/services/index.html"),
      },
    },
  },
});
