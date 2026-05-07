import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: /^pd-shad-ui$/, replacement: path.resolve(__dirname, "../../packages/ui/src/index.ts") },
      { find: /^pd-shad-ui\/lib\/utils$/, replacement: path.resolve(__dirname, "../../packages/ui/src/lib/utils.ts") },
      { find: /^pd-markdown-ui$/, replacement: path.resolve(__dirname, "../../packages/markdown-ui/src/index.ts") },
    ],
  },
})
