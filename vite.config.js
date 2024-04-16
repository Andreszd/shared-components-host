import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
//import path from "path";
//import { fileURLToPath } from "url";

// '/ https://vitejs.dev/config/'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@ui-library": "/src/shared-components/src",
    },
  },
});
