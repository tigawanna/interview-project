import vercel from "vite-plugin-vercel";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginVercelApi from "vite-plugin-vercel-api";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel(), vitePluginVercelApi()],

});
