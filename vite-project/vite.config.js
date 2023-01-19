import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    proxy: {
      // 프록시 요청을 보낼 api의 시작 부분
      "/api": {
          // 프록시 요청을 보낼 서버의 주소
          target: "http://localhost:3000",
          changeOrigin: true,
          logLevel: "debug"
      }
  }
  },
})