import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
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
      <UnmzToastProvider>
        <NavigationContainer>
          {/* <FamilyStackNavigator /> */}
          <ProfileStackNavigator />
        </NavigationContainer>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
