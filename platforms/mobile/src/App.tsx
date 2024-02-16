import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer } from "@react-navigation/native";
import { FamilyStackNavigator, ProfileStackNavigator } from "./navigation";

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
        <FamilyStackNavigator />
      </NavigationContainer>
    </TamaguiProvider>
  );
}

export default App;
