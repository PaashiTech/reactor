import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screenOptions } from "../helpers/screenOptions";

import { MeStackRouteProps } from "./types";
import { MeDashboardScreen } from "../../screens/dashboard/DashboardScreen";
import { TabNavigator } from "./TabNavigator";
import { CashflowScreen } from "../../screens/dashboard/CashflowScreen";
import { CASHFLOW_SCREEN_ID } from "../../screens/dashboard/types";

export const MeStackNavigator = () => {
  const stackNav = createNativeStackNavigator<MeStackRouteProps>();
  return (
    <stackNav.Navigator
      screenOptions={screenOptions}
      initialRouteName={CASHFLOW_SCREEN_ID}
    >
      {/* Profile section main screen */}
      <stackNav.Screen
        name={MeDashboardScreen.key as keyof MeStackRouteProps}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <stackNav.Screen
        name={CashflowScreen.key as keyof MeStackRouteProps}
        component={CashflowScreen.content}
        options={{ headerTitle: CashflowScreen.title }}
      />
    </stackNav.Navigator>
  );
};
