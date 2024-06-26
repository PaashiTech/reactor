import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";
import { OnboardingStackRouteProps } from "./types";
import {
  ACCOUNT_DISCOVERY_SCREEN_ID,
  INTRO_TO_AA_SCREEN_ID,
} from "../../screens/onboarding/types";
import {
  AAFlowSuccessScreen,
  AccountDiscoveryScreen,
  ComingSoonBanksScreen,
  ConnectingWithBanksScreen,
  ConsentScreen,
  EmailLoginScreen,
  EmailLoginWithPasswordScreen,
  IntroToAAScreen,
  InviteOnlyScreen,
  LoadingScreen,
  MobileLoginScreen,
  OTPCreatePasswordScreen,
  OTPMobileLoginScreen,
  OnboardingScreen,
  PinSetupScreen,
  SSOScreen,
  SelectBanksScreen,
  SelectEntitiesScreen,
  SetPasswordScreen,
} from "../../screens/onboarding";

export const OnboardingStackNavigator = () => {
  const OnboardingStackNav =
    createNativeStackNavigator<OnboardingStackRouteProps>();
  return (
    <OnboardingStackNav.Navigator
      screenOptions={{ ...screenOptions, headerShown: false }}
      initialRouteName={ACCOUNT_DISCOVERY_SCREEN_ID}
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
        options={{
          headerShown: true,
          title: "",
        }}
      />

      <OnboardingStackNav.Screen
        name={OTPMobileLoginScreen.key as keyof OnboardingStackRouteProps}
        component={OTPMobileLoginScreen.content}
        options={{
          headerShown: true,
          title: "",
        }}
      />

      <OnboardingStackNav.Screen
        name={PinSetupScreen.key as keyof OnboardingStackRouteProps}
        component={PinSetupScreen.content}
        options={{
          headerShown: true,
          title: "",
        }}
      />

      <OnboardingStackNav.Screen
        name={IntroToAAScreen.key as keyof OnboardingStackRouteProps}
        component={IntroToAAScreen.content}
      />

      <OnboardingStackNav.Screen
        name={SelectEntitiesScreen.key as keyof OnboardingStackRouteProps}
        component={SelectEntitiesScreen.content}
        // options={{
        //   headerShown: true,
        //   title: SelectEntitiesScreen.title,
        //   headerRight: () => <SVGWrapper iconSVG={UnmazeLogo} size="lg" />,
        // }}
      />

      <OnboardingStackNav.Screen
        name={SelectBanksScreen.key as keyof OnboardingStackRouteProps}
        component={SelectBanksScreen.content}
        // options={{
        //   headerShown: true,
        //   title: SelectBanksScreen.title,
        //   headerRight: () => <SVGWrapper iconSVG={UnmazeLogo} size="lg" />,
        // }}
      />
      <OnboardingStackNav.Screen
        name={ComingSoonBanksScreen.key as keyof OnboardingStackRouteProps}
        component={ComingSoonBanksScreen.content}
      />
      <OnboardingStackNav.Screen
        name={AAFlowSuccessScreen.key as keyof OnboardingStackRouteProps}
        component={AAFlowSuccessScreen.content}
      />

      <OnboardingStackNav.Screen
        name={LoadingScreen.key as keyof OnboardingStackRouteProps}
        component={LoadingScreen.content}
      />

      <OnboardingStackNav.Screen
        name={AccountDiscoveryScreen.key as keyof OnboardingStackRouteProps}
        component={AccountDiscoveryScreen.content}
        // options={{
        //   headerShown: true,
        //   title: AccountDiscoveryScreen.title,
        // }}
      />

      <OnboardingStackNav.Screen
        name={ConsentScreen.key as keyof OnboardingStackRouteProps}
        component={ConsentScreen.content}
        // options={{
        //   headerShown: true,
        //   title: ConsentScreen.title,
        //   headerRight: () => <SVGWrapper iconSVG={UnmazeLogo} size="lg" />,
        // }}
      />

      <OnboardingStackNav.Screen
        name={ConnectingWithBanksScreen.key as keyof OnboardingStackRouteProps}
        component={ConnectingWithBanksScreen.content}
      />
    </OnboardingStackNav.Navigator>
  );
};
