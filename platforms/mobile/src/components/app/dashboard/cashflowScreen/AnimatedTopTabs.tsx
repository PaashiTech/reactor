import { AccentText, ShadowWrapper, View } from "@unmaze/views";
import { Pressable, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export type AnimatedTabType = {
  id: number;
  title: string;
};

type TopTabsProps = {
  tabs: AnimatedTabType[];
  activeTabIndex: number;
  onTabSelect: (index: number) => void;
};

const MARGIN_HORIZONTAL = 24;

export const AnimatedTopTabs: React.FC<TopTabsProps> = ({
  tabs,
  activeTabIndex,
  onTabSelect,
}) => {
  const { width: WINDOW_WIDTH } = useWindowDimensions();
  const animatedViewWidth =
    (WINDOW_WIDTH - MARGIN_HORIZONTAL * 2) / tabs.length;

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(activeTabIndex * animatedViewWidth, {
          duration: 250,
        }),
      },
    ],
  }));

  return (
    <View bg="#FFF" paddingHorizontal={20} paddingTop={16} paddingBottom={16}>
      <View
        flexDirection="row"
        bg="#E7E7E7"
        borderRadius={9999}
        position="relative"
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              backgroundColor: "#FFF",
              borderRadius: 9999,
              height: 32,
              width: animatedViewWidth,
              margin: 4,
            },
            animatedStyle,
          ]}
        />

        {tabs.map((tab, i) => {
          return (
            <Pressable
              key={tab.id}
              onPress={() => onTabSelect(i)}
              style={{
                flex: 1,
                flexGrow: 1,
                alignItems: "center",
                paddingVertical: 12,
              }}
            >
              <AccentText size="sm">{tab.title}</AccentText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
