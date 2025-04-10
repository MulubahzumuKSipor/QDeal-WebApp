import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  // publicDir: "src/public",
  build: {
    outDir: 'C:/Users/USA/OneDrive - BYU-Idaho/REL 275C/QDeal-WebApp/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        dashboard: resolve(__dirname, "src/product-page/index.html"),
      },
    },
  },
});