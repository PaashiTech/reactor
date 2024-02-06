import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnmzStackNavRouteProps, Screen } from "../screens/types";
import { UnmzLinearGradient } from "@unmaze/views";

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
                  <UnmzLinearGradient style={{ flex: 1 }} />
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
