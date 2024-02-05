import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

import { App } from "@unmaze/mobile";

const ExpoApp = () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    SatoshiVariable: require("@unmaze/views/src/assets/fonts/Satoshi-Variable.ttf"),
    SatoshiVariableItalic: require("@unmaze/views/src/assets/fonts/Satoshi-VariableItalic.ttf"),
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
