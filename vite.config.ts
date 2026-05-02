import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// `base` is set for GitHub Pages deployment under /demo-landing/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/demo-landing/' : '/',
});
