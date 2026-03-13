import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://hvr7ssnubd.us-east-1.awsapprunner.com',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            delete proxyRes.headers['www-authenticate'];
            delete proxyRes.headers['WWW-Authenticate'];
          });
        }
      }
    }
  },
  define: {
    global: 'window',
  },
})

