import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";
import { OnboardingStackRouteProps } from "./types";
import { OnboardingScreen } from "../../screens/onboarding/OnboardingScreen";
import { SSOScreen } from "../../screens/onboarding/SSOScreen";
import { EmailLoginScreen } from "../../screens/onboarding/EmailLoginScreen";
import { InviteOnlyScreen } from "../../screens/onboarding/InviteOnlyScreen";
import { MobileLoginScreen } from "../../screens/onboarding/MobileLoginScreen";
import { EmailLoginWithPasswordScreen } from "../../screens/onboarding/EmailLoginWithPasswordScreen";
import { SetPasswordScreen } from "../../screens/onboarding/SetPasswordScreen";
import { OTPCreatePasswordScreen } from "../../screens/onboarding/OTPCreatePasswordScreen";
import { IntroToAAScreen } from "../../screens/onboarding/IntroToAAScreen";
import { SelectEntitiesScreen } from "../../screens/onboarding/SelectEntitiesScreen";
import { UnmazeLogo } from "@unmaze/assets";
import { AccentText, HeadingText, SVGWrapper, View } from "@unmaze/views";
import { SelectBanksScreen } from "../../screens/onboarding/SelectBanksScreen";

export const OnboardingStackNavigator = () => {
  const OnboardingStackNav =
    createNativeStackNavigator<OnboardingStackRouteProps>();
  return (
    <OnboardingStackNav.Navigator
      screenOptions={{ ...screenOptions, headerShown: false }}
      initialRouteName="0209"
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
        name={
          EmailLoginWithPasswordScreen.key as keyof OnboardingStackRouteProps
        }
        component={EmailLoginWithPasswordScreen.content}
      />
      <OnboardingStackNav.Screen
        name={SetPasswordScreen.key as keyof OnboardingStackRouteProps}
        component={SetPasswordScreen.content}
        options={{ headerShown: true, title: SetPasswordScreen.title }}
      />
      <OnboardingStackNav.Screen
        name={OTPCreatePasswordScreen.key as keyof OnboardingStackRouteProps}
        component={OTPCreatePasswordScreen.content}
        options={{ headerShown: true, title: OTPCreatePasswordScreen.title }}
      />
      <OnboardingStackNav.Screen
        name={InviteOnlyScreen.key as keyof OnboardingStackRouteProps}
        component={InviteOnlyScreen.content}
      />
      <OnboardingStackNav.Screen
        name={MobileLoginScreen.key as keyof OnboardingStackRouteProps}
        component={MobileLoginScreen.content}
      />

      <OnboardingStackNav.Screen
        name={IntroToAAScreen.key as keyof OnboardingStackRouteProps}
        component={IntroToAAScreen.content}
      />

      <OnboardingStackNav.Screen
        name={SelectEntitiesScreen.key as keyof OnboardingStackRouteProps}
        component={SelectEntitiesScreen.content}
        options={{
          headerShown: true,
          title: SelectEntitiesScreen.title,
          headerRight: () => <SVGWrapper iconSVG={UnmazeLogo} size="lg" />,
        }}
      />

      <OnboardingStackNav.Screen
        name={SelectBanksScreen.key as keyof OnboardingStackRouteProps}
        component={SelectBanksScreen.content}
        options={{
          headerShown: true,
          title: SelectBanksScreen.title,
          headerRight: () => <SVGWrapper iconSVG={UnmazeLogo} size="lg" />,
        }}
      />
    </OnboardingStackNav.Navigator>
  );
};
