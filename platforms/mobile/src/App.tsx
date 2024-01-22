import { TamaguiProvider, config, Text } from "@unmaze/views";

export function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      {/* your app here */}
      <Text>Hello Unmaze</Text>
    </TamaguiProvider>
  );
}

export default App;
