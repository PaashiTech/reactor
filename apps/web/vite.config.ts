import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupJest'
  },
  build: {
    lib: {
      entry: 'main.tsx',
      formats: ['es']
    },
    rollupOptions: {
      external: /^@microsoft\/fast-element/
    }
  }
})
