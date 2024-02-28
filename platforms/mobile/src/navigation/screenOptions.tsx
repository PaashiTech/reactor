import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { IconButton } from "@unmaze/views";
import { ChevronLeft } from "@unmaze/assets";

export const screenOptions: NativeStackNavigationOptions = {
  statusBarStyle: "dark",
  headerTintColor: "#035E5D",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 14,
    fontFamily: "SatoshiSemibold",
  },
  statusBarTranslucent: true,
  statusBarColor: "transparent",
  headerShadowVisible: true,
  headerLeft: ({ canGoBack }): React.ReactNode => {
    const navigation = useNavigation();
    return (
      <>
        {canGoBack ? (
          <IconButton icon={ChevronLeft} onPress={() => navigation.goBack()} />
        ) : null}
      </>
    );
  },
};
