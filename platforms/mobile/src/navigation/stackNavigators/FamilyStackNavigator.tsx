import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeft } from "@unmaze/assets";
import { UnmzLinearGradient, View, IconButton } from "@unmaze/views";
import { screenOptions } from "../screenOptions";
import {
  AddFamilyMemberScreen,
  FamilyDetailsScreen,
} from "../../screens/family";
import {
  FAMILY_ACCOUNTS_SCREEN_ID,
  FamilyScreen,
  FamilyStackRouteProps,
} from "../../screens/family/types";

export const FamilyStackNavigator = () => {
  const screens: FamilyScreen[] = [FamilyDetailsScreen, AddFamilyMemberScreen];
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
              // headerBackground: () =>
              //   scr.headerBackground === "linear-gradient" ? (
              //     <UnmzLinearGradient style={{ flex: 1 }} />
              //   ) : (
              //     <View flex={1} bg={"#fff"} />
              //   ),
            }}
          />
        );
      })}
    </FamilyStack.Navigator>
  );
};
