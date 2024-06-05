import { Text, View, ViewProps } from "@unmaze/views";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export const BlankTestScreen = () => {
  const insets = useSafeAreaInsets();

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <View {...safeAreaInsets} flex={1} ai="center" jc="center">
      <Text>Blank Test Screen</Text>
    </View>
  );
};
