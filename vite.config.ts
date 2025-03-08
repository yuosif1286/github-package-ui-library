import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), 
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
         additionalData: `@use "@/assets/styles/variables.scss" as *;`,
      },
    },},
  build: {
    lib: {
      entry: './src/lib/main.ts', // Entry point of your library
      name: 'HalalUiLibrary',
      fileName: (format) => `halal-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vuetify'], // Externalize Vue and Vuetify
      output: {
        exports: 'named', // Use named exports
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
        },
      },
    },
  },
});