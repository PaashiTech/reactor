import * as React from "react";
import { SVGWrapper, Text, View } from "@unmaze/views";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PlaceholderIcon, Market, ProfileInCircle, Mind } from "@unmaze/assets";
import { TabRouteProps } from "./types";

import { ME_TAB_ID, MARKET_TAB_ID, MIND_TAB_ID, PROFILE_TAB_ID } from "./types";
import { TextStyle } from "react-native";

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

const labelStyles: TextStyle = {
  fontSize: 12,
  fontWeight: "400",
  lineHeight: 16,
  letterSpacing: 0.24,
  paddingTop: 4,
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
        tabBarIcon: ({ focused }) => {
          if (route.name === ME_TAB_ID) {
            return focused ? (
              <SVGWrapper
                iconSVG={PlaceholderIcon}
                svgColor="##035E5D"
                size="lg"
              />
            ) : (
              <SVGWrapper
                iconSVG={PlaceholderIcon}
                svgColor="#697077"
                size="lg"
              />
            );
          } else if (route.name === MARKET_TAB_ID) {
            return focused ? (
              <SVGWrapper iconSVG={Market} svgColor="#035E5D" size="lg" />
            ) : (
              <SVGWrapper iconSVG={Market} svgColor="#697077" size="lg" />
            );
          } else if (route.name === MIND_TAB_ID) {
            return focused ? (
              <SVGWrapper iconSVG={Mind} svgColor="#035E5D" size="lg" />
            ) : (
              <SVGWrapper iconSVG={Mind} svgColor="#697077" size="lg" />
            );
          } else if (route.name === PROFILE_TAB_ID) {
            return focused ? (
              <SVGWrapper
                iconSVG={ProfileInCircle}
                svgColor="#035E5D"
                size="lg"
              />
            ) : (
              <SVGWrapper
                iconSVG={ProfileInCircle}
                svgColor="#697077"
                size="lg"
              />
            );
          }
        },
        tabBarLabel: ({ focused }) => {
          if (route.name === ME_TAB_ID) {
            return focused ? (
              <Text style={labelStyles} color="#035E5D">
                Me
              </Text>
            ) : (
              <Text style={labelStyles} color="#697077">
                Me
              </Text>
            );
          } else if (route.name === MARKET_TAB_ID) {
            return focused ? (
              <Text style={labelStyles} color="#035E5D">
                Market
              </Text>
            ) : (
              <Text style={labelStyles} color="#697077">
                Market
              </Text>
            );
          } else if (route.name === MIND_TAB_ID) {
            return focused ? (
              <Text style={labelStyles} color="#035E5D">
                Mind
              </Text>
            ) : (
              <Text style={labelStyles} color="#697077">
                Mind
              </Text>
            );
          } else if (route.name === PROFILE_TAB_ID) {
            return focused ? (
              <Text style={labelStyles} color="#035E5D">
                Profile
              </Text>
            ) : (
              <Text style={labelStyles} color="#697077">
                Profile
              </Text>
            );
          }
        },
        tabBarActiveTintColor: "#035E5D",
        tabBarInactiveTintColor: "#697077",
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
