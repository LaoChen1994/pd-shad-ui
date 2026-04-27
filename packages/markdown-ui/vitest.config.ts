import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "pd-shad-ui": path.resolve(__dirname, "../ui/src"),
      "pd-shad-ui/vue": path.resolve(__dirname, "../ui/src/vue/index.ts"),
    },
  },
});
