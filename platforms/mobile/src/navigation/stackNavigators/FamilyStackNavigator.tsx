import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  FAMILY_ACCOUNTS_SCREEN_ID,
  FamilyScreen,
  FamilyStackRouteProps,
} from "../../screens/family/types";
import { ChevronLeft } from "@unmaze/assets";
import { Pressable } from "react-native";
import { UnmzLinearGradient, View } from "@unmaze/views";
import { useNavigation } from "@react-navigation/native";
import { FamilyDetailsScreen } from "../../screens/family/FamilyDetailsScreen";
import { screenOptions } from "../screenOptions";

export const FamilyStackNavigator = () => {
  const screens: FamilyScreen[] = [FamilyDetailsScreen];
  const FamilyStack = createNativeStackNavigator<FamilyStackRouteProps>();

  return (
    <FamilyStack.Navigator
      initialRouteName={FAMILY_ACCOUNTS_SCREEN_ID}
      screenOptions={screenOptions}
    >
      {screens.map((scr) => {
        return (
          <FamilyStack.Screen
            key={scr.key}
            name={scr.key}
            component={scr.content}
            options={{
              title: scr.title,
              headerShown: scr.title !== "Verify Number",
              headerBackground: () =>
                scr.headerBackground === "linear-gradient" ? (
                  <UnmzLinearGradient style={{ flex: 1 }} />
                ) : (
                  <View flex={1} bg={"#fff"} />
                ),
              headerLeft: () => {
                const navigation = useNavigation();
                return (
                  <Pressable
                    android_ripple={{
                      color: "#d1d1d1",
                      borderless: true,
                      radius: 16,
                    }}
                    onPress={() => navigation.goBack()}
                    style={{ padding: 10 }}
                  >
                    <ChevronLeft />
                  </Pressable>
                );
              },
            }}
          />
        );
      })}
    </FamilyStack.Navigator>
  );
};
