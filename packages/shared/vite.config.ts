import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // 产物输出目录，默认 dist
    // outDir: 'dist',

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/lodash.*/],

      output: {
        globals: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量，即使不设置，构建工具也会为我们生成
          lodash: 'lodash',
        },
      },
    },

    lib: {
      // 构建入口文件
      entry: './src/index.ts',
      // 产物生成的格式，默认值【es, umd】
      // formats: ['es', 'umd'],
      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'LionuiShared',
      fileName: 'lionui-shared',
    },
    // 代码混淆，默认true
    minify: false,

  },
});
