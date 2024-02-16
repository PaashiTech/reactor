import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen } from "../types";

export interface FamilyScreen extends Omit<Screen, "key"> {
  key: keyof FamilyStackRouteProps;
}

export const FAMILY_ACCOUNTS_SCREEN_ID = "0020";
export type FamilyAccountsScreenProps = NativeStackScreenProps<
  FamilyStackRouteProps,
  typeof FAMILY_ACCOUNTS_SCREEN_ID
>;

export type FamilyStackRouteProps = {
  [FAMILY_ACCOUNTS_SCREEN_ID]: undefined;
};
