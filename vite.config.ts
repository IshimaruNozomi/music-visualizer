import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/music-visualizer/', // GitHubのリポジトリ名に合わせる
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
