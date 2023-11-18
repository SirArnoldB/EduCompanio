import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Returns the Vite configuration object.
 * @returns {import('vite').UserConfig}
 */
export default () => {
  const config = {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://educompanio-prod-server.up.railway.app',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return defineConfig(config);
};
