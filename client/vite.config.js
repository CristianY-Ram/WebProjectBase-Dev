import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]__[hash:base64:5]'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});