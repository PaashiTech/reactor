import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { MyProfileStackNavigator } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FAF9F2",
    },
  };

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <UnmzToastProvider>
        <SafeAreaProvider>
          <NavigationContainer theme={MyTheme}>
            <MyProfileStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
