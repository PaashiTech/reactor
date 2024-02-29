import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const FAMILY_ACCOUNTS_SCREEN_ID = "0020";
export type FamilyAccountsScreenProps = NativeStackScreenProps<
  FamilyStackRouteProps,
  typeof FAMILY_ACCOUNTS_SCREEN_ID
>;

export const ADD_FAMILY_MEMBER_SCREEN_ID = "0020.b.1";
export type AddFamilyMemberScreenProps = NativeStackScreenProps<
  FamilyStackRouteProps,
  typeof ADD_FAMILY_MEMBER_SCREEN_ID
>;

export type FamilyStackRouteProps = {
  [FAMILY_ACCOUNTS_SCREEN_ID]: undefined;
  [ADD_FAMILY_MEMBER_SCREEN_ID]: undefined;
};
