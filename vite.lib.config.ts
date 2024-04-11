// Copyright 2024 StarfleetAI
// SPDX-License-Identifier: Apache-2.0

import { defineConfig, loadEnv } from 'vite'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'bridge-ui-kit',
        formats: ['es'],
      },
      rollupOptions: {
        external: ['vue'],
        input: Object.fromEntries(
          glob.sync('src/**/*.{ts,vue}').map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('src', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
        ),
        output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js',
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
    plugins: [
      vue(),
      libInjectCss(),
      dts({ include: ['src'] }),
      libAssetsPlugin({
        /* options */
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  })
}
