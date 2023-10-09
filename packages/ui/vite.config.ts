import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Lionui',
      fileName: 'lionui',
    },

    minify: false,

    rollupOptions: {
      external: [
        /@lionui.*/,
        'vue',
      ],

      output: {
      },
    },
  },
});
