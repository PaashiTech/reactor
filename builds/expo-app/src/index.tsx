import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

import { App } from "@unmaze/mobile";

const ExpoApp = () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    SatoshiVariable: require("@unmaze/views/src/assets/fonts/Satoshi-Variable.ttf"),
    SatoshiRegular: require("@unmaze/views/src/assets/fonts/Satoshi-Regular.otf"),
    SatoshiMedium: require("@unmaze/views/src/assets/fonts/Satoshi-Medium.otf"),
    SatoshiBold: require("@unmaze/views/src/assets/fonts/Satoshi-Bold.otf"),
    SatoshiLight: require("@unmaze/views/src/assets/fonts/Satoshi-Light.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <App />;
};
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExpoApp);
