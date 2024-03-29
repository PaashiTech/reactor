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
import { StackNavigator } from "./navigation/navigators/StackNavigator";

import { useGetUser } from "@unmaze/api";
import { DashboardScreen } from "./screens/dashboard/DashboardScreen";

export function App() {
  const [fontsLoaded] = useUnmzFontsExpo();
  const { userIsLoading } = useGetUser({
    id: "16cd063a-071b-46bf-80eb-654766e4911c",
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
      {/* <UnmzToastProvider>
        <SafeAreaProvider>
          {userIsLoading ? (
            <View flex={1} justifyContent="center" alignItems="center">
              <Spinner size="large" color="#035E5D" />
            </View>
          ) : (
            <NavigationContainer theme={BaseTheme}>
              <StackNavigator />
            </NavigationContainer>
          )}
        </SafeAreaProvider>
      </UnmzToastProvider> */}
      <DashboardScreen />
    </TamaguiProvider>
  );
}

export default App;
