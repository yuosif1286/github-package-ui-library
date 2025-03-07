import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enable Vuetify auto-import
  ],
  build: {
    lib: {
      entry: './src/main.ts', // Entry point of your library
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