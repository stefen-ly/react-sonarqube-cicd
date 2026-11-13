import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

function legacyJsx() {
  return {
    name: "legacy-jsx-in-js",
    enforce: "pre",

    async transform(code, id) {
      const file = id.split("?")[0];

      if (!/\/src\/.*\.js$/.test(file)) {
        return null;
      }

      return transformWithEsbuild(code, file, {
        loader: "jsx",
        jsx: "automatic",
      });
    },
  };
}

export default defineConfig({
  plugins: [legacyJsx(), react()],

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },

  server: {
    port: 3000,
  },

  build: {
    outDir: "build",
    emptyOutDir: true,
  },
});
