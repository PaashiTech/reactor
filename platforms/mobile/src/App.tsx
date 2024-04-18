import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigator } from "./navigation/navigators/RootStackNavigator";
import { ScrollContextProvider } from "./navigation/helpers/ScrollContextProvider";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  const BaseTheme = {
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
          <ScrollContextProvider>
            <NavigationContainer theme={BaseTheme}>
              <RootStackNavigator />
            </NavigationContainer>
          </ScrollContextProvider>
        </SafeAreaProvider>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
