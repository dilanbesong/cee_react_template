import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//"http://localhost:5000"
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://cee-info.onrender.com/" || "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
  },
  plugins: [react()],
});
