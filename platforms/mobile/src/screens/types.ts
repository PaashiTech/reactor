import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";

export interface Screen {
  key: keyof UnmzStackNavRouteProps;
  title: string;
  content: FC<any>;
  background: "plain" | "linear-gradient";
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

export const VERIFICATION_SUCCESS_SCREEN_ID = "0012.k";
export type VerificationSuccessScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  typeof VERIFICATION_SUCCESS_SCREEN_ID
>;

export type UnmzStackNavRouteProps = {
  [PROFILE_DETAILS_SCREEN_ID]: undefined;
  [OTP_VERIFICATION_SCREEN_ID]: {
    confirmScreenId: keyof UnmzStackNavRouteProps;
    sentToType: string;
    sentToValue: string;
  };
  [EDIT_PH_NUMBER_SCREEN_ID]: undefined;
  [VERIFICATION_SUCCESS_SCREEN_ID]: undefined;
};
