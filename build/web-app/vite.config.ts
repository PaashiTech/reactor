import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const shouldExtract = true;
const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
  ".mjs",
];

const tamaguiConfig = {
  components: ['tamagui'],
  config: 'src/tamagui.config.ts',
}

export default defineConfig({
  clearScreen: true,
  plugins: [
    react(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null,
  ].filter(Boolean),
  resolve: {
    extensions: extensions,
    alias: {
      "react-native": "react-native-web",
    },
  },
})
