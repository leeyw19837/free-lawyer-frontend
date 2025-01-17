import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      // babel()
  ],
  publicPath: '/freelawyer',
  devServer: {
    port: 9000,
    proxy: {

    }
  },
  build: {
    outDir: 'freelawyer',
  }
})
