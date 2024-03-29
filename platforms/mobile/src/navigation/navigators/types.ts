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

export type UserProfileScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof USER_PROFILE_SCREEN_ID
>;

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
