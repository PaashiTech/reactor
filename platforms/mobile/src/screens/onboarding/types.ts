import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OnboardingStackRouteProps } from "../../navigation/navigators/types";

export const ONBOARDING_SCREEN_ID = "0200";
export type OnboardingScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof ONBOARDING_SCREEN_ID
>;

export const SSO_SCREEN_ID = "0201";
export type SSOScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof SSO_SCREEN_ID
>;
