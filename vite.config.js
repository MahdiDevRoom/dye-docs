import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue()],
  base: "/dye-docs/",
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    }
  }
});
