import vercel from "vite-plugin-vercel";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import devServer from "@hono/vite-dev-server";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercel({})],
});
