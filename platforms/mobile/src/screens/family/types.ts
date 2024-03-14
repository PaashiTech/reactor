import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const FAMILY_ACCOUNTS_SCREEN_ID = "0020";
export type FamilyAccountsScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof FAMILY_ACCOUNTS_SCREEN_ID
>;

export const ADD_FAMILY_MEMBER_SCREEN_ID = "0020.b.1";
export type AddFamilyMemberScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof ADD_FAMILY_MEMBER_SCREEN_ID
>;
