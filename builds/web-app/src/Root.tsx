import '@tamagui/core/reset.css'
import '@tamagui/polyfill-dev'
import App from 'views';

import { Button, TamaguiProvider, YStack } from 'tamagui'

import config from './tamagui.config'

export const Root = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <App />
    </TamaguiProvider>
  )
}
