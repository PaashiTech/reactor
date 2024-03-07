import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const LINKED_ACCOUNTS_SCREEN_ID = "0040";
export type LinkedAccountsScreenProps = NativeStackScreenProps<
  StackRouteProps,
  typeof LINKED_ACCOUNTS_SCREEN_ID
>;
