import { AccentText, ShadowWrapper, View } from "@unmaze/views";
import { Animated, Dimensions, Pressable } from "react-native";

type TopTabsProps = {
  selectedTab: number;
  onTabSelect: (index: number) => void;
  scrollX: Animated.Value;
};

export const TopTabs: React.FC<TopTabsProps> = ({
  selectedTab,
  scrollX,
  onTabSelect,
}) => {
  const animtedViewWidth = (Dimensions.get("window").width - 48) / 2;

  const translateX = scrollX.interpolate({
    inputRange: [0, 120, 180, 220, 360],
    outputRange: [
      0,
      animtedViewWidth / 4,
      animtedViewWidth / 2,
      (3 * animtedViewWidth) / 4,
      animtedViewWidth,
    ],
  });

  return (
    <View bg="#FFF" paddingHorizontal={20} paddingTop={16} paddingBottom={16}>
      <ShadowWrapper size="sm">
        <View
          flexDirection="row"
          bg="#E7E7E7"
          borderRadius={9999}
          position="relative"
        >
          <Animated.View
            style={[
              {
                transform: [{ translateX }],
              },
              {
                position: "absolute",
                backgroundColor: "#FFF",
                borderRadius: 9999,
                height: 32,
                width: animtedViewWidth,
                margin: 4,
              },
            ]}
          />
          <Pressable
            onPress={() => onTabSelect(0)}
            style={{
              flex: 1,
              flexGrow: 1,
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <AccentText size="sm">Banks</AccentText>
          </Pressable>
          <Pressable
            onPress={() => onTabSelect(1)}
            style={{
              flex: 1,
              flexGrow: 1,
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <AccentText size="sm">Investments</AccentText>
          </Pressable>
        </View>
      </ShadowWrapper>
    </View>
  );
};
