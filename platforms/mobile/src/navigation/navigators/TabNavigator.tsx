import { BodyText, SVGWrapper, Text, View } from "@unmaze/views";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  PlaceholderIcon,
  Market,
  ProfileInCircle,
  Mind,
  SvgProps,
} from "@unmaze/assets";
import { TabRouteProps } from "./types";

import { ME_TAB_ID, MARKET_TAB_ID, MIND_TAB_ID, PROFILE_TAB_ID } from "./types";

import { MeStackNavigator } from "./MeStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";

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

type TabIconsMapType = Record<keyof TabRouteProps, React.FC<SvgProps>>;

type TabTitleMapType = Record<keyof TabRouteProps, string>;

const TabIconsMap: TabIconsMapType = {
  "tab-0": PlaceholderIcon,
  "tab-1": Market,
  "tab-2": Mind,
  "tab-3": ProfileInCircle,
};

const TabTitleMap: TabTitleMapType = {
  "tab-0": "Me",
  "tab-1": "Market",
  "tab-2": "Mind",
  "tab-3": "Profile",
};

export const TabNavigator = () => {
  const tabNav = createBottomTabNavigator<TabRouteProps>();

  return (
    <tabNav.Navigator
      initialRouteName={ME_TAB_ID}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 64,
          paddingTop: 12,
          paddingBottom: 12,
        },
        tabBarIcon: ({ focused }) => (
          <SVGWrapper
            iconSVG={TabIconsMap[route.name]}
            svgColor={focused ? "#035E5D" : "#697077"}
            size="lg"
          />
        ),

        tabBarLabel: ({ focused }) => (
          <BodyText mt={4} size="sm" fontWeight={focused ? "600" : "400"}>
            {TabTitleMap[route.name]}
          </BodyText>
        ),
        headerShown: false,
      })}
    >
      <tabNav.Screen name={ME_TAB_ID} component={MeStackNavigator} />
      <tabNav.Screen name={MARKET_TAB_ID} component={MarketScreen} />
      <tabNav.Screen name={MIND_TAB_ID} component={MindScreen} />
      <tabNav.Screen name={PROFILE_TAB_ID} component={ProfileStackNavigator} />
    </tabNav.Navigator>
  );
};
