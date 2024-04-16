import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackRouteProps } from "../../navigation/navigators/types";

export const USER_PROFILE_SCREEN_ID = "0000";
export type UserProfileScreenProps = NativeStackScreenProps<
  {
    ProfileStackNavigator: {
      screen: keyof StackRouteProps;
      params: any;
    };
  },
  "ProfileStackNavigator"
>;
