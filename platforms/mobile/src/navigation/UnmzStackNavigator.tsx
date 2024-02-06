import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnmzStackNavRouteProps, Screen } from "../screens/types";
import { LinearGradient } from "tamagui/linear-gradient";

import { ProfileDetailsScreen } from "../screens/profile/ProfileDetailsScreen";
import { View } from "tamagui";

// Component which actually renders the entire screen hierarachy
export const UnmzStackNavigator = () => {
  const screens: Screen[] = [ProfileDetailsScreen];

  // Object that handles the navigation
  // This needs to sit under NavigationContainer
  const NavStack = createNativeStackNavigator<UnmzStackNavRouteProps>();

  return (
    <NavStack.Navigator
      initialRouteName="0010"
      screenOptions={{
        statusBarStyle: "dark",
        headerTitleAlign: "center",
        statusBarTranslucent: true,
        statusBarColor: "transparent",
      }}
    >
      {screens.map((scr) => {
        return (
          <NavStack.Screen
            key={scr.key}
            name={scr.key}
            component={scr.content}
            options={{
              title: scr.title,
              headerBackground: () =>
                scr.background === "linear-gradient" ? (
                  <LinearGradient
                    colors={["#fff000", "#cdfd62"]}
                    style={{ flex: 1 }}
                    locations={[0, 0.85]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                  />
                ) : (
                  <View flex={1} bg={"#fff"} />
                ),
            }}
          />
        );
      })}
    </NavStack.Navigator>
  );
};
