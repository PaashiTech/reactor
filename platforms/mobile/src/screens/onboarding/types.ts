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

export const OTP_MOBILE_LOGIN_SCREEN_ID = "0206.b";
export type OTPMobileLoginScreenprops = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof OTP_MOBILE_LOGIN_SCREEN_ID
>;

export const PIN_SETUP_SCREEN_ID = "0207";
export type PINSetupScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof PIN_SETUP_SCREEN_ID
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

export const SELECT_BANKS_SCREEN_ID = "0210.b";
export type SelectBanksScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof SELECT_BANKS_SCREEN_ID
>;

export const COMING_SOON_BANKS_SCREEN_ID = "0210.b.err";
export type ComingSoonBanksScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof COMING_SOON_BANKS_SCREEN_ID
>;

export const LOADING_SCREEN_ID = "0211.a";
export type LoadingScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof LOADING_SCREEN_ID
>;

export const ACCOUNT_DISCOVERY_SCREEN_ID = "0211.b";
export type AccountDiscoveryScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof ACCOUNT_DISCOVERY_SCREEN_ID
>;

export const CONSENT_SCREEN_ID = "0212";
export type ConsentScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof CONSENT_SCREEN_ID
>;

export const CONNECTING_WITH_BANKS_SCREEN_ID = "0213";
export type ConnectingWithBanksScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof CONNECTING_WITH_BANKS_SCREEN_ID
>;

export const AA_FLOW_SUCCESS_SCREEN_ID = "0214";
export type AAFlowSuccessScreenProps = NativeStackScreenProps<
  OnboardingStackRouteProps,
  typeof AA_FLOW_SUCCESS_SCREEN_ID
>;
