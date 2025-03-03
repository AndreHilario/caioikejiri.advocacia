import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    host: true,
    strictPort: true,
    port: 3000,
    base: "https://github.com/AndreHilario/caioikejiri.advocacia"
  };
});
