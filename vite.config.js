import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//"http://localhost:5000"
// "https://cee-info.onrender.com/"
//import.meta.env.BASEURL
export default defineConfig({
  build: {
    base: "/",
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://cee-info.onrender.com",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace("/api", ""),
  //     },
  //   },
  // },
  plugins: [react()],
});
