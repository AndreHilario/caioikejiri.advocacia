import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    base: "/caioikejiri.advocacia/",
    plugins: [react(), tailwindcss()],
    strictPort: true,
    port: 3000,
  };
});