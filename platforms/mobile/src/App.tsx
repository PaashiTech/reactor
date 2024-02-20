import { TamaguiProvider, tamaguiConfig } from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import { FamilyStackNavigator } from "./navigation";
export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <ToastProvider duration={2000} swipeDirection="horizontal">
        <NavigationContainer>
          <FamilyStackNavigator />
        </NavigationContainer>
      </ToastProvider>
    </TamaguiProvider>
  );
}

export default App;
