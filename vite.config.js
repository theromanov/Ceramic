import { resolve } from "node:path";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        catalog: resolve(import.meta.dirname, "catalog.html"),
        blog: resolve(import.meta.dirname, "blog.html"),
        about: resolve(import.meta.dirname, "about.html"),
      },
    },
  },

  plugins: [
    viteImagemin({
      // JPEG
      mozjpeg: {
        quality: 80,
      },

      // PNG
      pngquant: {
        quality: [0.75, 0.85],
        speed: 3,
      },

      optipng: {
        optimizationLevel: 7,
      },

      // SVG
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
