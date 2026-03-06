import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: false, // 暂时关闭 DTS 构建以验证产物体积优化，稍后可单独处理类型
  splitting: true,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],
  treeshake: true,
  injectStyle: false,
});
