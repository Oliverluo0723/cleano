import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.js",
    output: [
        {
            file: "dist/bundle.cjs",
            format: "cjs", // CommonJS
        },
        {
            file: "dist/bundle.mjs",
            format: "es", // ESM
        },
    ],
    plugins: [json(), terser()],
};
