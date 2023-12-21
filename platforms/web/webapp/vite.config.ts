import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /**
   * Server config
   */
  server: {
    host: 'localhost',
    port: 3000
  },
})
