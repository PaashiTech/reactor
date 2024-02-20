import {
  CustomToast,
  TamaguiProvider,
  View,
  tamaguiConfig,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { UnmzStackNavigator } from "./navigation/UnmzStackNavigator";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {/* your app here */}
      {/* <Text>Your app here</Text> */}

      {/* <NavigationContainer theme={DarkTheme}> */}
      {/* <UnmzStackNavigator /> */}
      <ToastProvider>
        <View f={1} ai={"center"} jc={"center"} bg={"$background"}>
          <CustomToast />
        </View>
        <ToastViewport left={0} right={0} bottom={50} />
      </ToastProvider>
      {/* </NavigationContainer> */}
    </TamaguiProvider>
  );
}

export default App;
