import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";

import { MeStackRouteProps } from "./types";
import { MeDashboardScreen } from "../../screens/dashboard/DashboardScreen";
import { TabNavigator } from "./TabNavigator";

export const MeStackNavigator = () => {
  const stackNav = createNativeStackNavigator<MeStackRouteProps>();
  return (
    <stackNav.Navigator screenOptions={screenOptions}>
      {/* Profile section main screen */}
      <stackNav.Screen
        name={MeDashboardScreen.key as keyof MeStackRouteProps}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </stackNav.Navigator>
  );
};
