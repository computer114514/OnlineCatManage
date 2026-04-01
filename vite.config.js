import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

import path from "path";
import { fileURLToPath, URL } from "node:url"; // 1. 引入 node:url 模块

// 2. 手动定义 __dirname，兼容 ES 模块环境

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  //浏览器直接发因为安全问题会被拦截。
  server: {
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        // 骗目标服务器。
        rewrite: (path) => {
          path.replace(/^\/api/, "");
        },
      },
    },
  },
  plugins: [vue(), WindiCSS()],
});
