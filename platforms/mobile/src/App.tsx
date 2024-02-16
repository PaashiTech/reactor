import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";

import { UnmzStackNavigator } from "./navigation/UnmzStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export function App() {
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
