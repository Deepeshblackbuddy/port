import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // "./" makes the built site work under any GitHub Pages URL (username.github.io/repo-name)
  base: "./",
});
