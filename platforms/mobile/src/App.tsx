import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { UnmzStackNavigator } from "./navigation/UnmzStackNavigator";

export function App() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      {/* <Text>Your app here</Text> */}
      <UnmzStackNavigator />
    </TamaguiProvider>
  );
}

export default App;
