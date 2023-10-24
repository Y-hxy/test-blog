import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from "unocss/vite";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  resolve: {
    alias: {
      // 设置路径
      "~": path.resolve(__dirname, "./"),
      // 设置别名
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".vue", ".json"]
  }
})
