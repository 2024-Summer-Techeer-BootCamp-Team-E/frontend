import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      // '/api': 'http://localhost:8000',
      '/api': 'http://backend:8000',  // 수정된 부분
    },
  },
  resolve: {
    alias: [
      {
        find: '@src',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
})
