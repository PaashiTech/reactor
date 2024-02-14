import React from "react";
import renderer from "react-test-renderer";
import { View, Text } from "react-native";
import {
  View as TamaguiView,
  Text as TamaguiText,
  TamaguiProvider,
  tamaguiConfig,
} from "@unmaze/mobile";
import { App } from "@unmaze/mobile";

import { NavigationContainer } from "@react-navigation/native";
import { useUnmzFontsExpo } from "@unmaze/assets";

const AppWithNavigator = () => {
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

const SimpleView = () => {
  return (
    <View>
      <Text>RN Test</Text>
    </View>
  );
};

const SimpleTamaguiView = () => {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <TamaguiView>
        <TamaguiText>Tamagui Test</TamaguiText>
      </TamaguiView>
    </TamaguiProvider>
  );
};

describe("Rendering test suit", () => {
  test("renders simple RN views and texts correctly", () => {
    const tree = renderer.create(<SimpleView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders simple Tamagui views and texts correctly", () => {
    const tree = renderer.create(<SimpleTamaguiView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test.skip("App renders correctly", () => {
    const tree = renderer.create(<AppWithNavigator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
