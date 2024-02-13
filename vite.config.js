import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import svgr from "vite-plugin-svgr";

//Load env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
});
