import { readdirSync } from "node:fs";
import { basename, extname } from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    vue: "src/vue/index.ts",
    "lib/utils": "src/lib/utils.ts",
    "variants/index": "src/variants/index.ts",
    ...Object.fromEntries(
      readdirSync("src/variants")
        .filter((file) => file.endsWith(".ts") && file !== "index.ts")
        .map((file) => [`variants/${basename(file, extname(file))}`, `src/variants/${file}`]),
    ),
    ...Object.fromEntries(
      readdirSync("src/components/ui")
        .filter((file) => file.endsWith(".tsx"))
        .map((file) => [`components/ui/${basename(file, extname(file))}`, `src/components/ui/${file}`]),
    ),
    ...Object.fromEntries(
      readdirSync("src/vue/components/ui")
        .filter((file) => file.endsWith(".ts"))
        .map((file) => [`vue/components/ui/${basename(file, extname(file))}`, `src/vue/components/ui/${file}`]),
    ),
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "react-dom", "vue"],
  treeshake: true,
  outExtension({ format }) {
    return {
      js: format === "cjs" ? ".cjs" : ".mjs",
    };
  },
})
