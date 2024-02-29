import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";

import { UnmzNavScreen } from "../../screens/types";
import { StackRouteProps } from "./types";

import { UserProfileScreen } from "../../screens/my-profile";
import { USER_PROFILE_SCREEN_ID } from "../../screens/my-profile/types";
import {
  EditEmailScreen,
  EditPhNumberScreen,
  ProfileDetailsScreen,
} from "../../screens/profile";
import {
  OTPVerificationScreen,
  VerificationSuccessScreen,
} from "../../screens/shared";
import {
  AddFamilyMemberScreen,
  FamilyDetailsScreen,
} from "../../screens/family";

const profileScreens: UnmzNavScreen[] = [
  ProfileDetailsScreen,
  EditPhNumberScreen,
  EditEmailScreen,
];
const sharedScreens: UnmzNavScreen[] = [
  OTPVerificationScreen,
  VerificationSuccessScreen,
];
const familyScreens: UnmzNavScreen[] = [
  FamilyDetailsScreen,
  AddFamilyMemberScreen,
];

export const StackNavigator = () => {
  const stackNav = createNativeStackNavigator<StackRouteProps>();
  return (
    <stackNav.Navigator
      initialRouteName={USER_PROFILE_SCREEN_ID}
      screenOptions={screenOptions}
    >
      {/* Profile section main screen */}
      <stackNav.Screen
        key={UserProfileScreen.key}
        name={UserProfileScreen.key}
        component={UserProfileScreen.content}
        options={{ headerShown: false }}
      />

      {/* Family screens group */}
      <stackNav.Group>
        {familyScreens.map((scr) => {
          return (
            <stackNav.Screen
              key={scr.key}
              name={scr.key as keyof StackRouteProps}
              component={scr.content}
              options={{
                title: scr.title,
                // headerShown: scr.title !== "Verify Number",
                // headerBackground: () =>
                //   scr.headerBackground === "linear-gradient" ? (
                //     <UnmzLinearGradient style={{ flex: 1 }} />
                //   ) : (
                //     <View flex={1} bg={"#fff"} />
                //   ),
              }}
            />
          );
        })}
      </stackNav.Group>

      {/* Profile screens group */}
      <stackNav.Group>
        {profileScreens.map((scr) => {
          return (
            <stackNav.Screen
              key={scr.key}
              name={scr.key}
              component={scr.content}
              options={{
                title: scr.title,
                // headerShown: scr.title !== "Verify Number",
                // headerBackground: () =>
                //   scr.headerBackground === "linear-gradient" ? (
                //     <UnmzLinearGradient style={{ flex: 1 }} />
                //   ) : (
                //     <View
                //       flex={1}
                //       bg={"#fff"}
                //       elevationAndroid={5}
                //       shadowColor={"red"}
                //       shadowOffset={{ width: 10, height: 10 }}
                //       shadowOpacity={10}
                //       shadowRadius={10}
                //     />
                //   ),
              }}
            />
          );
        })}
      </stackNav.Group>

      {/* Shared screens */}
      <stackNav.Group>
        {sharedScreens.map((scr) => {
          return (
            <stackNav.Screen
              key={scr.key}
              name={scr.key as keyof StackRouteProps}
              component={scr.content}
              options={{
                title: scr.title,
                // headerShown: scr.title !== "Verify Number",
                // headerBackground: () =>
                //   scr.headerBackground === "linear-gradient" ? (
                //     <UnmzLinearGradient style={{ flex: 1 }} />
                //   ) : (
                //     <View flex={1} bg={"#fff"} />
                //   ),
              }}
            />
          );
        })}
      </stackNav.Group>
    </stackNav.Navigator>
  );
};
