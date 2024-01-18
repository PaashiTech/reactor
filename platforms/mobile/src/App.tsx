import { TamaguiProvider, config, Text } from '@unmaze/views';

export function App() {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      {/* your app here */}
      <Text
        fontSize="$10"
        color="$color"
        bg="$background"
        p="$4"
        letterSpacing={1}
        borderWidth="$1"
        m="$2"
        borderColor="$borderColor"
      >
        Hello World
      </Text>
    </TamaguiProvider>
  );
}

export default App;
