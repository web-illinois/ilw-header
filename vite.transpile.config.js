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
            external: [/^@?lit/],
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-header.css";
                    return "assets/[name]-[hash][extname]"; // vite default
                },
            },
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});