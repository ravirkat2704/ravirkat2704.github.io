import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The GitHub Actions workflow sets VITE_BASE automatically:
//   "/" for a <user>.github.io repo, "/<repo-name>/" for any other repo.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/"
});
