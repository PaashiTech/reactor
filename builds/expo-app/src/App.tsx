import { TamaguiProvider } from '@tamagui/core';
import {Text} from '@tamagui/core';

import config from './tamagui.config';


export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
	<Text>Some text is here </Text>
    </TamaguiProvider>
  )
};
