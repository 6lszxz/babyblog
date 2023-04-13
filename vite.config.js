import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    proxy:{
      '/server':{
        target: 'http://43.142.78.228:3000/',
        changeOrigin: true,
        rewrite: (path)=> {
          return path.replace(/^\/server/,'')
        }
      }
    }
  },
  test:{
    environment:'happy-dom',
  }
})
