import {
  Screen,
  UnmzStackNavRouteProps,
  PROFILE_DETAILS_SCREEN_ID,
} from "../screens/types";
import { ProfileDetailsScreen } from "../screens/profile/ProfileDetailsScreen";
import { OTPVerificationScreen } from "../screens/profile/OTPVerificationScreen";
import { EditPhNumberScreen } from "../screens/profile/EditPhNumberScreen";
import { VerificationSuccessScreen } from "../screens/profile/VerificationSuccessScreen";

import { UnmzLinearGradient, View } from "@unmaze/views";
import { ChevronLeft } from "@unmaze/assets";

import { Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { EditEmailScreen } from "../screens/profile/EditEmailScreen";

// Component which actually renders the entire screen hierarachy
export const UnmzStackNavigator = () => {
  const screens: Screen[] = [
    ProfileDetailsScreen,
    OTPVerificationScreen,
    EditPhNumberScreen,
    EditEmailScreen,
    VerificationSuccessScreen,
  ];

  // Object that handles the navigation
  // This needs to sit under NavigationContainer
  const NavStack = createNativeStackNavigator<UnmzStackNavRouteProps>();

  return (
    <NavStack.Navigator
      initialRouteName={PROFILE_DETAILS_SCREEN_ID}
      screenOptions={{
        statusBarStyle: "dark",
        headerTitleAlign: "center",
        statusBarTranslucent: true,
        statusBarColor: "transparent",
      }}
    >
      {screens.map((scr) => {
        return (
          <NavStack.Screen
            key={scr.key}
            name={scr.key}
            component={scr.content}
            options={{
              title: scr.title,
              headerShown: scr.title !== "Verify Number",
              headerBackground: () =>
                scr.background === "linear-gradient" ? (
                  <UnmzLinearGradient style={{ flex: 1 }} />
                ) : (
                  <View flex={1} bg={"#fff"} />
                ),
              headerLeft: () => {
                const navigation = useNavigation();
                return (
                  <Pressable
                    android_ripple={{
                      color: "#d1d1d1",
                      borderless: true,
                      radius: 16,
                    }}
                    onPress={() => navigation.goBack()}
                    style={{ padding: 10 }}
                  >
                    <ChevronLeft />
                  </Pressable>
                );
              },
            }}
          />
        );
      })}
    </NavStack.Navigator>
  );
};
