import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue(),
    vuetify(), // Enable Vuetify plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Use path.resolve for aliases
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "vuetify/lib/styles/main.sass";`, // Add Vuetify styles
      },
    },
  },
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry point for the library
      name: 'GithubPackagesUiLibrary', // Global name for the library
      fileName: (format) => `halal-ui-library.${format}.js`, // Output file name
    },
    rollupOptions: {
      external: ['vue', 'vuetify'], // Externalize Vue and Vuetify
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
        },
      },
    },
  },
});