import { BodyText, View, ViewProps } from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  ACCOUNT_DISCOVERY_SCREEN_ID,
  LOADING_SCREEN_ID,
  LoadingScreenProps,
} from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const _LoadingScreen: React.FC<LoadingScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  useEffect(() => {
    const id = setTimeout(() => {
      navigation.navigate(ACCOUNT_DISCOVERY_SCREEN_ID);
    }, 3000);

    return () => clearTimeout(id);
  }, []);

  return (
    <View flex={1} {...safeAreaInsets}>
      <View flex={1} jc="center" ai="center">
        <ActivityIndicator size="large" color="#035E5D" />
      </View>
    </View>
  );
};

export const LoadingScreen: UnmzNavScreen = {
  key: LOADING_SCREEN_ID,
  title: "Loading Screen",
  content: _LoadingScreen,
};
