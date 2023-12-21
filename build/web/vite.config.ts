import * as tama from '@tamagui/vite-plugin';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const tamaguiConfig = {
  components: ["@tamagui/core"],
  config: "src/tamagui.config.ts",
};


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000
  },
  resolve: {
    // alias: {
    //   'react-native': 'react-native-web',
    // },
  },
  plugins: [
    react(),
    tama.tamaguiPlugin(tamaguiConfig),
    // optional:
    // process.env.NODE_ENV === 'production' ? tama.tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupJest'
  },
  build: {
    lib: {
      entry: 'main.tsx',
      formats: ['es']
    }
  }
})
