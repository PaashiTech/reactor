import { TamaguiProvider, config, Text } from 'unmaze-views';
// import {Text} from '@tamagui/core';

// import {config} from 'unmaze-views';


export default function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
	<Text>Some text is here</Text>
    </TamaguiProvider>
  )
};
