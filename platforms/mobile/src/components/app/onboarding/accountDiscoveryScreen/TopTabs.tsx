import { AccentText, ShadowWrapper, View } from "@unmaze/views";
import { useEffect } from "react";
import { Dimensions, Pressable } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type TopTabsProps = {
  selectedTab: number;
  onTabSelect: (index: number) => void;
};

export const TopTabs: React.FC<TopTabsProps> = ({
  selectedTab,
  onTabSelect,
}) => {
  const tabPositionX = useSharedValue(0);

  const animtedViewWidth = (Dimensions.get("window").width - 48) / 2;

  const handlePress = (index: number) => {
    onTabSelect(index);
  };

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming(
      animtedViewWidth * index,
      {
        duration: 300,
      },
      () => {
        runOnJS(handlePress)(index);
      }
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  useEffect(() => {
    tabPositionX.value = withTiming(animtedViewWidth * selectedTab);
  }, [selectedTab]);

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
              animatedStyle,
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
            onPress={() => onTabPress(0)}
            style={{
              flex: 1,
              flexGrow: 1,
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <AccentText
              size="sm"
              fontWeight={selectedTab === 0 ? "600" : "500"}
            >
              Banks
            </AccentText>
          </Pressable>
          <Pressable
            onPress={() => onTabPress(1)}
            style={{
              flex: 1,
              flexGrow: 1,
              alignItems: "center",
              paddingVertical: 12,
            }}
          >
            <AccentText
              size="sm"
              fontWeight={selectedTab === 1 ? "600" : "500"}
            >
              Investments
            </AccentText>
          </Pressable>
        </View>
      </ShadowWrapper>
    </View>
  );
};
