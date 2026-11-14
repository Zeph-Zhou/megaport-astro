// @ts-check
import { defineConfig } from 'astro/config';

import { resolve } from 'node:path';

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://Zeph-Zhou.github.io',
  base: '/megaport-astro',
  vite: {
    plugins: [tailwindcss()],

    css: {
      // 讓我們在每一個 astro 檔案，不需要重複引入 functions 跟 mixins
      preprocessorOptions: {
        scss: {
          loadPaths: [resolve('src/styles/scss')],
          additionalData: `
            @use "functions" as *;
            @use "mixins" as *;
          `,
        },
      },
    },
  },

  integrations: [icon()],
});
