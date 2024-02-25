import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer } from "@react-navigation/native";
import { FamilyStackNavigator, ProfileStackNavigator } from "./navigation";
import { MyProfileScreen } from "./screens/my-profile/MyProfileScreen";
import { SafeAreaView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <UnmzToastProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            {/* <FamilyStackNavigator /> */}
            {/* <ProfileStackNavigator /> */}
            <MyProfileScreen />
          </SafeAreaProvider>
        </NavigationContainer>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
