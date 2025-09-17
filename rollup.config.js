import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
    input: "src/index.js",
    output: [
        {
            file: "dist/bundle.cjs",
            format: "cjs",
            exports: "named",
        },
        {
            file: "dist/bundle.mjs",
            format: "esm",
        },
    ],
    plugins: [nodeResolve(), commonjs()],
});
