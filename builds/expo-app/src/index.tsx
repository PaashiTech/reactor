import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { App } from "unmaze-mobile";

const ExpoApp = () => {
  return (
    <>
      <StatusBar style="auto" />
      <App />
    </>
  );
};
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ExpoApp);
