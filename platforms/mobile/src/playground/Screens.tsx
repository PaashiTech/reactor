import * as React from "react";
import { View, Text } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { UnmzGradientButton } from "@unmaze/views";

import { UnmzStackNavigator } from "../navigation/stackNavigators/ProfileStackNavigator";

// Types for individual screens
type Screen1Props = { test1prop?: string; jump?: number };
type Screen2Props = { test2prop?: string; jump?: number };

type RootStackParamList = {
  Scr1: Screen1Props;
  Scr2: Screen2Props;
};

// Screens
const Screen1: React.FC<NativeStackScreenProps<RootStackParamList, "Scr1">> = ({
  navigation,
  route,
}) => {
  const isJumpPassed = route.params?.jump !== undefined;
  const jump = isJumpPassed ? route.params.jump : 0;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Screen 1!</Text>
      {isJumpPassed && <Text>Jump = {jump}</Text>}
      <View style={{ flex: 0, height: 20, width: 10 }} />
      <UnmzGradientButton
        onPress={() =>
          navigation.navigate({
            name: "Scr2",
            params: { jump: isJumpPassed ? route.params.jump + 1 : 1 },
          })
        }
      >
        Go to screen 2
      </UnmzGradientButton>
    </View>
  );
};

const Screen2: React.FC<NativeStackScreenProps<RootStackParamList, "Scr2">> = ({
  navigation,
  route,
}) => {
  const isJumpPassed = route.params?.jump !== undefined;
  const jump = isJumpPassed ? route.params.jump : 0;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Screen 2!</Text>
      {isJumpPassed && <Text>Jump = {jump}</Text>}
      <View style={{ flex: 0, height: 20, width: 10 }} />
      <UnmzGradientButton
        onPress={() =>
          navigation.navigate({
            name: "Scr1",
            params: {
              test1prop: "abc",
              jump: isJumpPassed ? route.params.jump + 1 : 1,
            },
          })
        }
      >
        Go to screen 1
      </UnmzGradientButton>
    </View>
  );
};

// Object that handles the navigation
// This needs to sit under NavigationContainer
const NavStack = createNativeStackNavigator<RootStackParamList>();

// Component which actually renders the entire screen hierarachy
export const ScreensTest1 = () => {
  return (
    <NavStack.Navigator initialRouteName="Scr1">
      <NavStack.Screen
        name="Scr1"
        component={Screen1}
        options={{ title: "Screen 1 title" }}
      ></NavStack.Screen>
      <NavStack.Screen
        name="Scr2"
        component={Screen2}
        options={{ title: "Screen 2 title" }}
      />
    </NavStack.Navigator>
  );
};

export const ScreensTest2 = () => {
  return <UnmzStackNavigator />;
};
