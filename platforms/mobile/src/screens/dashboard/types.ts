import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MeStackRouteProps } from "../../navigation/navigators/types";

export const ME_DASHBOARD_SCREEN_ID = "0100";
export type LinkedAccountsScreenProps = NativeStackScreenProps<
  MeStackRouteProps,
  typeof ME_DASHBOARD_SCREEN_ID
>;
