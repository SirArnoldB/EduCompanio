import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Returns the Vite configuration object.
 * @returns {import('vite').UserConfig}
 */
export default () => {
  const config = {
    plugins: [react()],
    optimizeDeps: {
      include: ['@emotion/react', '@emotion/styled', '@mui/icons-material', '@mui/material/Unstable_Grid2'],
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
  return defineConfig(config);
};
