import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnmzStackNavRoutePropsType, Screen } from "../screens/types";

import { ProfileDetailsScreen } from "../screens/profile/ProfileDetailsScreen";

// Component which actually renders the entire screen hierarachy
export const UnmzStackNavigator = () => {
  const screens: Screen[] = [ProfileDetailsScreen];

  // Object that handles the navigation
  // This needs to sit under NavigationContainer
  const NavStack = createNativeStackNavigator<UnmzStackNavRoutePropsType>();

  return (
    <NavStack.Navigator
      initialRouteName="0010"
      screenOptions={{ statusBarStyle: "dark", headerTitleAlign: "center" }}
    >
      {screens.map((scr) => {
        return (
          <NavStack.Screen
            key={scr.key}
            name={scr.key}
            component={scr.content}
            options={{ title: scr.title }}
          />
        );
      })}
    </NavStack.Navigator>
  );
};
