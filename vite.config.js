import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicPath: '/',
  devServer: {
    port: 9000,
    proxy: {

    }
  },

})
