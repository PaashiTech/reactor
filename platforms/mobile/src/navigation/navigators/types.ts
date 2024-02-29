import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Screen IDs
import { USER_PROFILE_SCREEN_ID } from "../../screens/my-profile/types";
import {
  ADD_FAMILY_MEMBER_SCREEN_ID,
  FAMILY_ACCOUNTS_SCREEN_ID,
} from "../../screens/family/types";
import {
  EDIT_EMAIL_SCREEN_ID,
  EDIT_PH_NUMBER_SCREEN_ID,
  PROFILE_DETAILS_SCREEN_ID,
} from "../../screens/profile/types";
import {
  OTP_VERIFICATION_SCREEN_ID,
  VERIFICATION_SUCCESS_SCREEN_ID,
} from "../../screens/shared/types";

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
  // Profile screens
  [PROFILE_DETAILS_SCREEN_ID]: undefined;
  [OTP_VERIFICATION_SCREEN_ID]: {
    confirmScreenId: keyof StackRouteProps;
  };
  [EDIT_PH_NUMBER_SCREEN_ID]: undefined;
  [VERIFICATION_SUCCESS_SCREEN_ID]: undefined;
  [EDIT_EMAIL_SCREEN_ID]: undefined;
};
