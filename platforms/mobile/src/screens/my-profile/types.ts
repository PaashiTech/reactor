import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screen } from "../types";

export interface MyProfileScreen extends Screen {
  key: keyof MyProfileStackRouteProps;
}

export const MY_PROFILE_SCREEN_ID = "0000";
export type MyProfileScreenProps = NativeStackScreenProps<
  MyProfileStackRouteProps,
  typeof MY_PROFILE_SCREEN_ID
>;

export const PROFILE_STACK_NAVIGATOR = "ProfileStackNavigator";
export const FAMILY_STACK_NAVIGATOR = "FamilyStackNavigator";

export type MyProfileStackRouteProps = {
  [MY_PROFILE_SCREEN_ID]: undefined;
  [PROFILE_STACK_NAVIGATOR]: undefined;
  [FAMILY_STACK_NAVIGATOR]: undefined;
};
