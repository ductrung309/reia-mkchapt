import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  server: {
    port: 3000,
    proxy: {
      "/auth": {
        target: "http://localhost:8080",
      },
    },
  },
});
