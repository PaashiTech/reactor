import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { FamilyStackNavigator } from "./navigation";

import { APIGlobalConfigProvider } from "@unmaze/api";
import { APITest } from "./playground/API";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <APIGlobalConfigProvider>
      <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
        <ToastProvider duration={2000} swipeDirection="horizontal">
          <NavigationContainer>
            <FamilyStackNavigator />
          </NavigationContainer>
        </ToastProvider>
        {/* <APITest /> */}
      </TamaguiProvider>
    </APIGlobalConfigProvider>
  );
}

export default App;
