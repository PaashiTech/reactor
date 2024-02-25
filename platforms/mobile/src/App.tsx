import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer } from "@react-navigation/native";
import { MyProfileStackNavigator } from "./navigation/stackNavigators/MyProfileStackNavigator";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <UnmzToastProvider>
        <NavigationContainer>
          <MyProfileStackNavigator />
        </NavigationContainer>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
