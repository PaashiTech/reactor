import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";

import { MeStackRouteProps } from "./types";
import { ME_DASHBOARD_SCREEN_ID } from "../../screens/dashboard/types";
import { MeDashboardScreen } from "../../screens/dashboard/DashboardScreen";

export const MeStackNavigator = () => {
  const stackNav = createNativeStackNavigator<MeStackRouteProps>();
  return (
    <stackNav.Navigator
      initialRouteName={ME_DASHBOARD_SCREEN_ID}
      screenOptions={screenOptions}
    >
      {/* Profile section main screen */}
      <stackNav.Screen
        name={MeDashboardScreen.key as keyof MeStackRouteProps}
        component={MeDashboardScreen.content}
        options={{ headerShown: false }}
      />
    </stackNav.Navigator>
  );
};
