import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MeStackNavigator } from "./MeStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";

type RootStackNavigatorProps = {};

type RootStackRouteProps = {
  MeStackNavigator: undefined;
  ProfileStackNavigator: undefined;
};

export const RootStackNavigator: React.FC<RootStackNavigatorProps> = () => {
  const RootStack = createNativeStackNavigator<RootStackRouteProps>();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MeStackNavigator" component={MeStackNavigator} />
      <RootStack.Screen
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
      />
    </RootStack.Navigator>
  );
};
