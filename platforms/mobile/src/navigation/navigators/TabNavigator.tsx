import { Text, View } from "@unmaze/views";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ME_TAB_ID,
  MARKET_TAB_ID,
  MIND_TAB_ID,
  PROFILE_TAB_ID,
  TabRouteProps,
} from "./types";
import {
  PlaceholderIcon,
  Market,
  ProfileInCircle,
  Mind,
  SvgProps,
} from "@unmaze/assets";
import { MeStackNavigator } from "./MeStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { UnmazeBottomTabNav } from "./UnmazeBottomTabNav";
import React from "react";

// Placeholders for the other stacks
const MarketScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Market!</Text>
    </View>
  );
};

const MindScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Mind!</Text>
    </View>
  );
};

type TabsType = {
  id: number;
  name: keyof TabRouteProps;
  component: () => JSX.Element;
  icon: React.FC<SvgProps>;
  label: string;
};

const tabs: TabsType[] = [
  {
    id: 1,
    name: ME_TAB_ID,
    component: MeStackNavigator,
    icon: PlaceholderIcon,
    label: "Me",
  },
  {
    id: 2,
    name: MARKET_TAB_ID,
    component: MarketScreen,
    icon: Market,
    label: "Market",
  },
  {
    id: 3,
    name: MIND_TAB_ID,
    component: MindScreen,
    icon: Mind,
    label: "Mind",
  },
  {
    id: 4,
    name: PROFILE_TAB_ID,
    component: ProfileStackNavigator,
    icon: ProfileInCircle,
    label: "Profile",
  },
];

export const TabNavigator = () => {
  const tabNav = createBottomTabNavigator<TabRouteProps>();

  return (
    <tabNav.Navigator
      initialRouteName={ME_TAB_ID}
      tabBar={(props) => <UnmazeBottomTabNav {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <tabNav.Screen
          key={tab.id}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            tabBarIcon: tab.icon,
          }}
        />
      ))}
    </tabNav.Navigator>
  );
};
