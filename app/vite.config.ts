import { defineConfig } from 'vite';

// No plugin: Vite compiles TSX natively (tsconfig "jsx": "react-jsx"). Fast refresh is the only thing given up.
export default defineConfig({
  build: {
    target: 'es2023',
    // The service worker precaches every file: stable chunk names would defeat the atomic precache, hashes are kept.
    rollupOptions: { output: { manualChunks: undefined } },
  },
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
});
