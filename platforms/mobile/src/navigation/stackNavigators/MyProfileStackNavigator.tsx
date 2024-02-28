import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FAMILY_STACK_NAVIGATOR,
  MY_PROFILE_SCREEN_ID,
  MyProfileStackRouteProps,
  PROFILE_STACK_NAVIGATOR,
} from "../../screens/my-profile/types";
import { MyProfileScreen } from "../../screens/my-profile/MyProfileScreen";
import { FamilyStackNavigator } from "./FamilyStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { screenOptions } from "../screenOptions";

export const MyProfileStackNavigator = () => {
  const MyProfileStack = createNativeStackNavigator<MyProfileStackRouteProps>();
  return (
    <MyProfileStack.Navigator
      initialRouteName={MY_PROFILE_SCREEN_ID}
      screenOptions={{ ...screenOptions, headerShown: false }}
    >
      <MyProfileStack.Screen
        key={MY_PROFILE_SCREEN_ID}
        name={MY_PROFILE_SCREEN_ID}
        component={MyProfileScreen}
      />
      <MyProfileStack.Screen
        key={PROFILE_STACK_NAVIGATOR}
        name={PROFILE_STACK_NAVIGATOR}
        component={ProfileStackNavigator}
      />
      <MyProfileStack.Screen
        key={FAMILY_STACK_NAVIGATOR}
        name={FAMILY_STACK_NAVIGATOR}
        component={FamilyStackNavigator}
      />
    </MyProfileStack.Navigator>
  );
};
