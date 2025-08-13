import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-header",
            entry: "ilw-header.ts",
            fileName: "ilw-header",
            formats: ["es"],
        },
        rollupOptions: {
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
});