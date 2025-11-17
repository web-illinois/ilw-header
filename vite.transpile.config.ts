import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-header",
            entry: "ilw-header.ts",
            fileName: "ilw-header",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/, /^@illinois-toolkit/],
            output: {
                assetFileNames: () => {
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});