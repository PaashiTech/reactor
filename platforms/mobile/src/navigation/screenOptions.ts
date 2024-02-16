import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const screenOptions: NativeStackNavigationOptions = {
  statusBarStyle: "dark",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 14,
    fontFamily: "SatoshiSemibold",
  },
  statusBarTranslucent: true,
  statusBarColor: "transparent",
};
