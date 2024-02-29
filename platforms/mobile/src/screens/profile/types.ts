import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const PROFILE_DETAILS_SCREEN_ID = "0010";
export type ProfileDetailsScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof PROFILE_DETAILS_SCREEN_ID
>;

export const EDIT_PH_NUMBER_SCREEN_ID = "0012.f.1";
export type EditPhNumberScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof EDIT_PH_NUMBER_SCREEN_ID
>;

export const EDIT_EMAIL_SCREEN_ID = "0013.h";
export type EditEmailScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof EDIT_EMAIL_SCREEN_ID
>;
