import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'], // Emotion Babel 플러그인 추가
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  define: { global: {} },
});
