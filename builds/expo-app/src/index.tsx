import { registerRootComponent } from "expo";
import { useUnmzFontsExpo } from "@unmaze/assets";

import { App } from "@unmaze/mobile";

import { NavigationContainer } from "@react-navigation/native";

const ExpoApp = () => {
  const [fontsLoaded] = useUnmzFontsExpo();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExpoApp);
