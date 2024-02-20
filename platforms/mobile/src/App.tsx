import {
  CustomToast,
  TamaguiProvider,
  View,
  tamaguiConfig,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { UnmzStackNavigator } from "./navigation/UnmzStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <ToastProvider duration={2000} swipeDirection="horizontal">
        <NavigationContainer>
          <UnmzStackNavigator />
        </NavigationContainer>
      </ToastProvider>
    </TamaguiProvider>
  );
}

export default App;
