import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MeStackNavigator } from "./MeStackNavigator";
import { ProfileStackNavigator } from "./ProfileStackNavigator";
import { useGetUser } from "@unmaze/api";
import { Spinner, View } from "@unmaze/views";
import { OnboardingStackNavigator } from "./OnboardingStackNavigator";

type RootStackNavigatorProps = {};

type RootStackRouteProps = {
  MeStackNavigator: undefined;
  ProfileStackNavigator: undefined;
  OnboardingNavigator: undefined;
};

export const RootStackNavigator: React.FC<RootStackNavigatorProps> = () => {
  const { userIsLoading } = useGetUser({
    id: process.env.EXPO_PUBLIC_DEV_TEST_USER!,
  });
  const RootStack = createNativeStackNavigator<RootStackRouteProps>();

  if (userIsLoading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Spinner size="large" color="#035E5D" />
      </View>
    );
  }

  // const userSignedUp = false;

  return (
    <RootStack.Navigator
      initialRouteName="MeStackNavigator"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Group>
        <RootStack.Screen
          name="MeStackNavigator"
          component={MeStackNavigator}
        />
        <RootStack.Screen
          name="ProfileStackNavigator"
          component={ProfileStackNavigator}
        />
        <RootStack.Screen
          name="OnboardingNavigator"
          component={OnboardingStackNavigator}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
