import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";

import { useUnmzFontsExpo } from "@unmaze/assets";

import { UnmzStackNavigator } from "./navigation/UnmzStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      {/* <Text>Your app here</Text> */}

      <NavigationContainer>
        <UnmzStackNavigator />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

export default App;
