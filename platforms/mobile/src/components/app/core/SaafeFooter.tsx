import { SaafeLogo } from "@unmaze/assets";
import { Text, View, XStack } from "@unmaze/views";
import DropShadow from "react-native-drop-shadow";

export const SaafeFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <DropShadow
      style={{
        shadowColor: "#21272a",
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      }}
    >
      <View paddingHorizontal={20} paddingVertical={16} gap={12} bg="#fff">
        {children}
        <XStack gap={8} alignSelf="center">
          <Text fontSize={10} color="#6F6F6F">
            Powered by RBI's Account Aggregator
          </Text>
          <SaafeLogo />
        </XStack>
      </View>
    </DropShadow>
  );
};
