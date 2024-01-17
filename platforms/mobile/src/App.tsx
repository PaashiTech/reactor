import { TamaguiProvider, config, Text } from 'unmaze-views';

export function App() {
  return (
    <TamaguiProvider config={config}>
      {/* your app here */}
	<Text>Some text is no longer here</Text>
    </TamaguiProvider>
  )
};

export default App
