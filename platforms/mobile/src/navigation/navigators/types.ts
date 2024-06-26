import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Screen IDs
import { USER_PROFILE_SCREEN_ID } from "../../screens/user-profile/types";
import {
  ADD_FAMILY_MEMBER_SCREEN_ID,
  FAMILY_ACCOUNTS_SCREEN_ID,
  OTP_FAMILY_MEMBER_SCREEN_ID,
} from "../../screens/family/types";
import {
  ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
  EDIT_PH_NUMBER_SCREEN_ID,
  PROFILE_DETAILS_SCREEN_ID,
} from "../../screens/profile/types";
import {
  ACCOUNT_UPDATE_SUCCESS_SCREEN_ID,
  OTP_ACCOUNT_UPDATE_SCREEN_ID,
  OTP_ACCOUNT_VERIFICATION_SCREEN_ID,
} from "../../screens/shared/types";
import {
  APP_THEME_SCREEN_ID,
  SETTINGS_DETAILS_SCREEN_ID,
} from "../../screens/settings/types";
import {
  ADD_ACCOUNTS_SCREEN_ID,
  COMING_SOON_SCREEN_ID,
  GIVE_CONSENT_SCREEN_ID,
  LINKED_ACCOUNTS_SCREEN_ID,
} from "../../screens/linked-accounts/types";

import {
  CASHFLOW_SCREEN_ID,
  ME_DASHBOARD_SCREEN_ID,
} from "../../screens/dashboard/types";
import {
  AA_FLOW_SUCCESS_SCREEN_ID,
  ACCOUNT_DISCOVERY_SCREEN_ID,
  COMING_SOON_BANKS_SCREEN_ID,
  CONNECTING_WITH_BANKS_SCREEN_ID,
  CONSENT_SCREEN_ID,
  EMAIL_LOGIN_SCREEN_ID,
  EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID,
  INTRO_TO_AA_SCREEN_ID,
  INVITE_ONLY_SCREEN_ID,
  LOADING_SCREEN_ID,
  MOBILE_LOGIN_SCREEN_ID,
  ONBOARDING_SCREEN_ID,
  OTP_CREATE_PASSWORD_SCREEN_ID,
  OTP_MOBILE_LOGIN_SCREEN_ID,
  PIN_SETUP_SCREEN_ID,
  SELECT_BANKS_SCREEN_ID,
  SELECT_ENTITIES_SCREEN_ID,
  SET_PASSWORD_SCREEN_ID,
  SSO_SCREEN_ID,
} from "../../screens/onboarding/types";

export type UserProfileScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof USER_PROFILE_SCREEN_ID
>;

export const ME_TAB_ID = "tab-0";
export const MARKET_TAB_ID = "tab-1";
export const MIND_TAB_ID = "tab-2";
export const PROFILE_TAB_ID = "tab-3";

export type TabRouteProps = {
  [ME_TAB_ID]: undefined;
  [MARKET_TAB_ID]: undefined;
  [MIND_TAB_ID]: undefined;
  [PROFILE_TAB_ID]: undefined;
};

export type StackRouteProps = {
  /**
   * User Profile section
   */
  [USER_PROFILE_SCREEN_ID]: undefined;

  // Family screens
  [FAMILY_ACCOUNTS_SCREEN_ID]: undefined;
  [ADD_FAMILY_MEMBER_SCREEN_ID]: undefined;
  [OTP_FAMILY_MEMBER_SCREEN_ID]: {
    confirmScreenId: keyof StackRouteProps;
  };

  // Profile screens
  [PROFILE_DETAILS_SCREEN_ID]: undefined;
  [EDIT_PH_NUMBER_SCREEN_ID]: undefined;
  [EDIT_EMAIL_SCREEN_ID]: undefined;
  [ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID]: undefined;

  // Settings screens
  [SETTINGS_DETAILS_SCREEN_ID]: undefined;
  [APP_THEME_SCREEN_ID]: undefined;

  // Linked Accounts Screens
  [LINKED_ACCOUNTS_SCREEN_ID]: undefined;
  [GIVE_CONSENT_SCREEN_ID]: undefined;
  [ADD_ACCOUNTS_SCREEN_ID]: undefined;
  [COMING_SOON_SCREEN_ID]: undefined;

  // Shared screens
  [ACCOUNT_UPDATE_SUCCESS_SCREEN_ID]: undefined;
  [OTP_ACCOUNT_UPDATE_SCREEN_ID]: {
    confirmScreenId: keyof StackRouteProps;
  };
  [OTP_ACCOUNT_VERIFICATION_SCREEN_ID]: {
    confirmScreenId: keyof StackRouteProps;
  };
};

export type MeStackRouteProps = {
  /**
   * Dashboard
   */
  [ME_DASHBOARD_SCREEN_ID]: undefined;
  [CASHFLOW_SCREEN_ID]: {
    activeTabIndex: number;
  };
};

export type OnboardingStackRouteProps = {
  [ONBOARDING_SCREEN_ID]: undefined;
  [SSO_SCREEN_ID]: undefined;
  [EMAIL_LOGIN_SCREEN_ID]: undefined;
  [EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID]: {
    email: string;
  };
  [SET_PASSWORD_SCREEN_ID]: undefined;
  [INVITE_ONLY_SCREEN_ID]: undefined;
  [MOBILE_LOGIN_SCREEN_ID]: undefined;
  [OTP_CREATE_PASSWORD_SCREEN_ID]: undefined;
  [INTRO_TO_AA_SCREEN_ID]: undefined;
  [SELECT_ENTITIES_SCREEN_ID]: undefined;
  [SELECT_BANKS_SCREEN_ID]: undefined;
  [COMING_SOON_BANKS_SCREEN_ID]: undefined;
  [OTP_MOBILE_LOGIN_SCREEN_ID]: {
    mobileNumber: string;
  };
  [PIN_SETUP_SCREEN_ID]: undefined;
  [AA_FLOW_SUCCESS_SCREEN_ID]: undefined;
  [LOADING_SCREEN_ID]: undefined;
  [ACCOUNT_DISCOVERY_SCREEN_ID]: undefined;
  [CONSENT_SCREEN_ID]: undefined;
  [CONNECTING_WITH_BANKS_SCREEN_ID]: undefined;
};
