import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/ecom1/',
  plugins: [react()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'data/images')
    }
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname), path.resolve(__dirname, 'data')]
    }
  },
  assetsInclude: ['**/*.PNG', '**/*.JPEG', '**/*.JPG']
})
