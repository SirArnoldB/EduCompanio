import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Returns the Vite configuration object.
 * @returns {import('vite').UserConfig}
 */
export default () => {
  // eslint-disable-next-line no-undef
  const API_URL = process.env.NODE_ENV === "production"
    ? "https://educompanio-prod-server.up.railway.app"
    : "http://localhost:3002";

  const config = {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return defineConfig(config);
};
