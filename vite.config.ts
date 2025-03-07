import path from 'path';
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path'
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({
      autoImport: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ["vuetify"],
  },
  build: {
    lib: {
      // src/main.ts is where we have exported our component(s)
      entry: resolve(__dirname, "src/main.ts"),
      name: "HalalUiLibrary",
      // the name of the output files when the build is run
      fileName: (format) => `halal-ui-library.${format}.js`,
    },
    rollupOptions: {
      // Make sure to exclude Vue from the bundle
      external: ['vue']
    }
  },
});