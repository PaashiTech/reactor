import type { SwitchProps as SwitchHeadlessProps } from "@tamagui/switch-headless";
import { useSwitch } from "@tamagui/switch-headless";
import { forwardRef, useEffect, useRef, useState } from "react";
import type { View } from "react-native";
import { Animated, Pressable } from "react-native";

export const CustomSwitch: React.FC = () => {
  return <HeadlessSwitch />;
};
const HeadlessSwitch = forwardRef<View, SwitchHeadlessProps>((props, ref) => {
  const [checked, setChecked] = useState(props.defaultChecked || false);

  const { switchProps, switchRef, bubbleInput } = useSwitch(
    props,
    [checked, setChecked],
    ref
  );
  const animation = useRef(new Animated.Value(checked ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: checked ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [checked]);

  return (
    <>
      <Pressable
        style={{
          width: 36,
          height: 20,
          borderRadius: 100,
          backgroundColor: checked ? "#035E5D" : "#6E7678",
          justifyContent: "center",
        }}
        ref={switchRef}
        {...switchProps}
      >
        <Animated.View
          style={[
            {
              backgroundColor: "#fff",
              borderRadius: 100,
              width: 14,
              height: 14,
              paddingRight: 12,
            },

            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [3, 19],
                  }),
                },
              ],
            },
          ]}
        />
      </Pressable>

      {bubbleInput}
    </>
  );
});
