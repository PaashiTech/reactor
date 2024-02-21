import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen } from "../types";

export interface ProfileScreen extends Screen {
  key: keyof UnmzStackNavRouteProps;
}

export const PROFILE_DETAILS_SCREEN_ID = "0010";
export type ProfileDetailsScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  typeof PROFILE_DETAILS_SCREEN_ID
>;

export const OTP_VERIFICATION_SCREEN_ID = "0012.b.1";
export type OTPVerificationScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  typeof OTP_VERIFICATION_SCREEN_ID
>;

export const EDIT_PH_NUMBER_SCREEN_ID = "0012.f.1";
export type EditPhNumberScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  typeof EDIT_PH_NUMBER_SCREEN_ID
>;

export const EDIT_EMAIL_SCREEN_ID = "0013.h";
export type EditEmailScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  "0013.h"
>;

export const VERIFICATION_SUCCESS_SCREEN_ID = "0012.k";
export type VerificationSuccessScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  typeof VERIFICATION_SUCCESS_SCREEN_ID
>;

type EditType = "number" | "email";

export type UnmzStackNavRouteProps = {
  [PROFILE_DETAILS_SCREEN_ID]: undefined;
  [OTP_VERIFICATION_SCREEN_ID]: {
    confirmScreenId: keyof UnmzStackNavRouteProps;
    sentToType: EditType;
    sentToValue: string;
  };
  [EDIT_PH_NUMBER_SCREEN_ID]: undefined;
  [VERIFICATION_SUCCESS_SCREEN_ID]: {
    verifiedType: EditType;
  };
  [EDIT_EMAIL_SCREEN_ID]: undefined;
};
