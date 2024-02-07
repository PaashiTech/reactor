import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnmzStackNavRouteProps, Screen } from "../screens/types";
import { UnmzLinearGradient } from "@unmaze/views";
import { ChevronLeft } from "@unmaze/assets";
import { ProfileDetailsScreen } from "../screens/profile/ProfileDetailsScreen";
import { OTPVerificationScreen } from "../screens/profile/OTPVerificationScreen";
import { EditPhNumberScreen } from "../screens/profile/EditPhNumberScreen";
import { VerificationSuccessScreen } from "../screens/profile/VerificationSuccessScreen";
import { View } from "tamagui";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Component which actually renders the entire screen hierarachy
export const UnmzStackNavigator = () => {
  const screens: Screen[] = [
    ProfileDetailsScreen,
    OTPVerificationScreen,
    EditPhNumberScreen,
    VerificationSuccessScreen,
  ];

  // Object that handles the navigation
  // This needs to sit under NavigationContainer
  const NavStack = createNativeStackNavigator<UnmzStackNavRouteProps>();

  return (
    <NavStack.Navigator
      initialRouteName="0010"
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
                  <Pressable onPress={() => navigation.goBack()}>
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
