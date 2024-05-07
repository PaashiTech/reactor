import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";

import { OnboardingStackRouteProps } from "./types";
import { OnboardingScreen } from "../../screens/onboarding/OnboardingScreen";
import { SSOScreen } from "../../screens/onboarding/SSOScreen";
import { EmailLoginScreen } from "../../screens/onboarding/EmailLoginScreen";
import { InviteOnlyScreen } from "../../screens/onboarding/InviteOnlyScreen";

export const OnboardingStackNavigator = () => {
  const OnboardingStackNav =
    createNativeStackNavigator<OnboardingStackRouteProps>();
  return (
    <OnboardingStackNav.Navigator
      screenOptions={{ ...screenOptions, headerShown: false }}
      initialRouteName="0200"
    >
      <OnboardingStackNav.Screen
        name={OnboardingScreen.key as keyof OnboardingStackRouteProps}
        component={OnboardingScreen.content}
      />
      <OnboardingStackNav.Screen
        name={SSOScreen.key as keyof OnboardingStackRouteProps}
        component={SSOScreen.content}
      />
      <OnboardingStackNav.Screen
        name={EmailLoginScreen.key as keyof OnboardingStackRouteProps}
        component={EmailLoginScreen.content}
      />
      <OnboardingStackNav.Screen
        name={InviteOnlyScreen.key as keyof OnboardingStackRouteProps}
        component={InviteOnlyScreen.content}
      />
    </OnboardingStackNav.Navigator>
  );
};
