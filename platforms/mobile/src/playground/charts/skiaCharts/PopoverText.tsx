import { Group, Rect, Text, useFont } from "@shopify/react-native-skia";
import React from "react";
import { SharedValue, useDerivedValue } from "react-native-reanimated";

type PopoverTextProps = {
  cx: SharedValue<number>;
  text: SharedValue<string>;
};

const PopoverText: React.FC<PopoverTextProps> = ({ cx, text }) => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 14);
  const xRect = useDerivedValue(() => cx.value - 40, [cx]);
  const xText = useDerivedValue(() => cx.value - 40 + 15, [cx]);

  if (!font) {
    return null;
  }
  return (
    <Group>
      <Rect x={xRect} y={0} width={80} height={50} color="#095f2d" />
      <Text x={xText} y={30} text={text} font={font} color="#f3f3f3" />
    </Group>
  );
};

export default PopoverText;
