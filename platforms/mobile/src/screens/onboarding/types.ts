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

export const EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID = "0202.a";
export type EmailLoginWithPasswordScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID
>;

export const SET_PASSWORD_SCREEN_ID = "0203.a";
export type SetPasswordScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof SET_PASSWORD_SCREEN_ID
>;

export const OTP_CREATE_PASSWORD_SCREEN_ID = "0203.b";
export type OTPCreatePasswordScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof OTP_CREATE_PASSWORD_SCREEN_ID
>;

export const INVITE_ONLY_SCREEN_ID = "0208";
export type InviteOnlyScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof INVITE_ONLY_SCREEN_ID
>;

export const MOBILE_LOGIN_SCREEN_ID = "0206";
export type MobileLoginScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof MOBILE_LOGIN_SCREEN_ID
>;

export const INTRO_TO_AA_SCREEN_ID = "0209";
export type IntoToAAScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof INTRO_TO_AA_SCREEN_ID
>;

export const SELECT_ENTITIES_SCREEN_ID = "0210.a";
export type SelectEntitiesScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof SELECT_ENTITIES_SCREEN_ID
>;
