import { UnmzLinearGradient, View } from "@unmaze/views";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OTPVerificationScreen } from "../../screens/shared/OTPVerificationScreen";
import { screenOptions } from "../screenOptions";
import {
  UnmzStackNavRouteProps,
  PROFILE_DETAILS_SCREEN_ID,
  ProfileScreen,
} from "../../screens/profile/types";
import {
  EditEmailScreen,
  EditPhNumberScreen,
  ProfileDetailsScreen,
  VerificationSuccessScreen,
} from "../../screens/profile";

// Component which actually renders the entire screen hierarachy
export const ProfileStackNavigator = () => {
  const screens: ProfileScreen[] = [
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
      screenOptions={screenOptions}
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
                scr.headerBackground === "linear-gradient" ? (
                  <UnmzLinearGradient style={{ flex: 1 }} />
                ) : (
                  <View
                    flex={1}
                    bg={"#fff"}
                    elevationAndroid={5}
                    shadowColor={"red"}
                    shadowOffset={{ width: 10, height: 10 }}
                    shadowOpacity={10}
                    shadowRadius={10}
                  />
                ),
            }}
          />
        );
      })}
    </NavStack.Navigator>
  );
};
