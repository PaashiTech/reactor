import { View, ViewProps } from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  AA_FLOW_SUCCESS_SCREEN_ID,
  ACCOUNT_DISCOVERY_SCREEN_ID,
  CONNECTING_WITH_BANKS_SCREEN_ID,
  ConnectingWithBanksScreenProps,
} from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const _ConnectingWithBanksScreen: React.FC<ConnectingWithBanksScreenProps> = ({
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
      navigation.replace(AA_FLOW_SUCCESS_SCREEN_ID);
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

export const ConnectingWithBanksScreen: UnmzNavScreen = {
  key: CONNECTING_WITH_BANKS_SCREEN_ID,
  title: "Connecting",
  content: _ConnectingWithBanksScreen,
};
