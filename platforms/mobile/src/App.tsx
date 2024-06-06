import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackNavigator } from "./navigation/navigators/RootStackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { LogBox } from "react-native";
import { ChartsExampleScreen } from "./playground/ChartsExampleScreen";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

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
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <NavigationContainer theme={BaseTheme}>
                {/* <RootStackNavigator /> */}
                <ChartsExampleScreen />
              </NavigationContainer>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
