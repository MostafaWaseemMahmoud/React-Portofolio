import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows the server to listen on all network interfaces
    port: 5173,       // You can specify the port if you want
  },
  base: '/React-Portofolio/',
})
