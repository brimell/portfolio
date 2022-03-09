import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	publicDir: "./public",
	base: "/",
  build: {
    outDir: "build",
    cssCodeSplit: true,
    sourcemap: true,
  },
});
