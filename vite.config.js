import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    catalog: resolve(import.meta.dirname, "catalog.html"),
  },
});
