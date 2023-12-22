import { TamaguiProvider } from 'tamagui';
import {Text} from '@tamagui/core';

import config from './tamagui.config';


export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
	<Text>Some text</Text>
    </TamaguiProvider>
  )
};
