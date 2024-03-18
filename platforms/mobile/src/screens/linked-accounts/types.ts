import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const LINKED_ACCOUNTS_SCREEN_ID = "0040";
export type LinkedAccountsScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof LINKED_ACCOUNTS_SCREEN_ID
>;

export const GIVE_CONSENT_SCREEN_ID = "0020.d.1";
export type GiveConsentScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof GIVE_CONSENT_SCREEN_ID
>;

export const ADD_ACCOUNTS_SCREEN_ID = "0040.g.1";
export type AddAccountsScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof ADD_ACCOUNTS_SCREEN_ID
>;
