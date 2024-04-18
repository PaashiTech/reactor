import {
  TamaguiProvider,
  tamaguiConfig,
  UnmzToastProvider,
  View,
  Spinner,
} from "@unmaze/views";
import { useUnmzFontsExpo } from "@unmaze/assets";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useGetUser } from "@unmaze/api";
import { TabNavigator } from "./navigation/navigators/TabNavigator";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();
  const { userIsLoading } = useGetUser({
    id: process.env.EXPO_PUBLIC_DEV_TEST_USER!,
  });

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
          {userIsLoading ? (
            <View flex={1} justifyContent="center" alignItems="center">
              <Spinner size="large" color="#035E5D" />
            </View>
          ) : (
            <NavigationContainer theme={BaseTheme}>
              <TabNavigator />
            </NavigationContainer>
          )}
        </SafeAreaProvider>
      </UnmzToastProvider>
    </TamaguiProvider>
  );
}

export default App;
