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
  "0010"
>;

export const OTP_VERIFICATION_SCREEN_ID = "0012.b.1";
export type OTPVerificationScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  "0012.b.1"
>;

export const EDIT_PH_NUMBER_SCREEN_ID = "0012.f.1";
export type EditPhNumberScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  "0012.f.1"
>;

export const EDIT_EMAIL_SCREEN_ID = "0013.h";
export type EditEmailScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  "0013.h"
>;

export const VERIFICATION_SUCCESS_SCREEN_ID = "0012.k";
export type VerificationSuccessScreenProps = NativeStackScreenProps<
  UnmzStackNavRouteProps,
  "0012.k"
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
  [EDIT_EMAIL_SCREEN_ID]: undefined;
};
