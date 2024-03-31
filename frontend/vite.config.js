import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

/**
 * Returns the Vite configuration object.
 * @returns {import('vite').UserConfig}
 */
export default () => {
  // eslint-disable-next-line no-undef
  const env = loadEnv('', process.cwd(), '')

  const config = {
    plugins: [react()],
    optimizeDeps: {
      include: ['@emotion/react', '@emotion/styled', '@mui/icons-material', '@mui/material/Unstable_Grid2'],
    },
    server: {
      proxy: {
        '/api': {
          target: env.PROD ? env.VITE_API_URL_PROD : env.VITE_API_URL_DEV,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return defineConfig(config);
};
