import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './src/lib'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
    },
  },
  server: {
    port: 5173,
  },
});
