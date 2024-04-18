import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BodyText, SVGWrapper, ShadowWrapper, View } from "@unmaze/views";
import { useEffect, useRef } from "react";
import { Animated, Dimensions, Pressable } from "react-native";
import { useScrollContext } from "../helpers/ScrollContextProvider";

interface UnmazeBottomTabNavProps extends BottomTabBarProps {}

const width = Dimensions.get("window").width;
const TAB_WIDTH = width / 4;

export const UnmazeBottomTabNav: React.FC<UnmazeBottomTabNavProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const { scrollDirection } = useScrollContext();

  const translateTab = (index: number) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
      bounciness: 5,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);

  useEffect(() => {
    translateY.stopAnimation();
    Animated.timing(translateY, {
      toValue: scrollDirection === "down" ? 100 : 0,
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [scrollDirection]);

  return (
    <ShadowWrapper size="md-top">
      <Animated.View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#FFF",
          position: "absolute",
          bottom: 0,
          transform: [{ translateY }],
        }}
      >
        <View
          alignItems="center"
          position="absolute"
          width={TAB_WIDTH}
          height={"100%"}
        >
          <Animated.View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#035E5D",
              borderRadius: 30,
              bottom: 20,
              borderWidth: 4,
              borderColor: "#fff",
              transform: [{ translateX }],
            }}
          ></Animated.View>
        </View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          return (
            <View key={route.key} flex={1}>
              <Pressable onPress={() => navigation.navigate(route.name)}>
                <View alignItems="center" gap={8} paddingVertical={12}>
                  {options.tabBarIcon && (
                    <AnimatedIcon
                      isFocused={isFocused}
                      tabBarIcon={options.tabBarIcon}
                    />
                  )}
                  <BodyText size="sm" fontWeight={isFocused ? "600" : "400"}>
                    {options.tabBarLabel}
                  </BodyText>
                </View>
              </Pressable>
            </View>
          );
        })}
      </Animated.View>
    </ShadowWrapper>
  );
};

const AnimatedIcon = ({ isFocused, tabBarIcon }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const translateIcon = (value: number) => {
    Animated.spring(translateY, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
      translateIcon(-14);
    } else {
      translateIcon(0);
    }
  }, [isFocused]);

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <SVGWrapper
        iconSVG={tabBarIcon}
        svgColor={isFocused ? "#fff" : "#697077"}
        size="lg"
      />
    </Animated.View>
  );
};
