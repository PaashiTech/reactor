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

export const EMAIL_LOGIN_SCREEN_ID = "0202";
export type EmailLoginScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof EMAIL_LOGIN_SCREEN_ID
>;

export const INVITE_ONLY_SCREEN_ID = "0208";
export type InviteOnlyScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof INVITE_ONLY_SCREEN_ID
>;
