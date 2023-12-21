import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: {
    index: "src/App.tsx",
  },
  // banner: {
  //   js: "'use client'",
  // },
  clean: true,
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
  target: 'node18',
  ...options,
}));