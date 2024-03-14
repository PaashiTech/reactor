import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const OTP_ACCOUNT_UPDATE_SCREEN_ID = "0012.b.1";
export type OTPAccountUpdateScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof OTP_ACCOUNT_UPDATE_SCREEN_ID
>;

export const OTP_ACCOUNT_VERIFICATION_SCREEN_ID = "0012.b.1.account";
export type OTPAccountVerificationScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof OTP_ACCOUNT_VERIFICATION_SCREEN_ID
>;

export const ACCOUNT_UPDATE_SUCCESS_SCREEN_ID = "0012.k";
export type AccountUpdateSuccessScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof ACCOUNT_UPDATE_SUCCESS_SCREEN_ID
>;
