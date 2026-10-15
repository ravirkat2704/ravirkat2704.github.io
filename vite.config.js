import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For the personal site https://ravirk2704.github.io, the base is "/".
  base: "/"
});