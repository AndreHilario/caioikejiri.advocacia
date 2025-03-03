import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    base: '/', // ou '/nome-do-repositorio/' se estiver hospedando em um subpath
    server: {
      headers: {
        'Content-Type': 'application/javascript',
      },
    },
    strictPort: true,
    port: 3000,
    build: {
      outDir: 'docs', // Diretório de saída padrão, pode ser mantido
      assetsDir: 'assets', // Opcional: diretório para assets (imagens, etc.)
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]', // Adiciona hash para cache busting
          chunkFileNames: 'chunks/[name]-[hash][extname]', // Adiciona hash para cache busting
          entryFileNames: 'entry/[name]-[hash].js',       // Adiciona hash para cache busting
        },
      },
    },
  };
});