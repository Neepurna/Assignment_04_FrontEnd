import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material'
      ]
    }
  },
  resolve: {
    alias: {
      '@mui/material': '@mui/material/index',
      '@mui/icons-material': '@mui/icons-material/index'
    }
  }
})
