import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const OTP_VERIFICATION_SCREEN_ID = "0012.b.1";
export type OTPVerificationScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof OTP_VERIFICATION_SCREEN_ID
>;

export const VERIFICATION_SUCCESS_SCREEN_ID = "0012.k";
export type VerificationSuccessScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof VERIFICATION_SUCCESS_SCREEN_ID
>;
