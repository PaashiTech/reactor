import { BodyText, View, ViewProps } from "@unmaze/views";
import { UnmzNavScreen } from "../types";
import {
  ACCOUNT_DISCOVERY_SCREEN_ID,
  AccountDiscoveryScreenProps,
  SELECT_BANKS_SCREEN_ID,
} from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";

const _AccountDiscoveryScreen: React.FC<AccountDiscoveryScreenProps> = ({
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
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault(); // Prevent default action
      unsubscribe(); // Unsubscribe the event on first call to prevent infinite loop
      navigation.navigate(SELECT_BANKS_SCREEN_ID); // Navigate to your desired screen
    });
  }, []);

  return (
    <View flex={1} {...safeAreaInsets}>
      <View flex={1}>
        <BodyText>Account Discovery Screen</BodyText>
      </View>
    </View>
  );
};

export const AccountDiscoveryScreen: UnmzNavScreen = {
  key: ACCOUNT_DISCOVERY_SCREEN_ID,
  title: "Account Discovery",
  content: _AccountDiscoveryScreen,
};
