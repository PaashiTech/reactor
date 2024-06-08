import { Group, RoundedRect, Text, useFont } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import { SharedValue, clamp, useDerivedValue } from "react-native-reanimated";

type PopoverTextProps = {
  cx: SharedValue<number>;
  text: SharedValue<string>;
};

const PopoverText: React.FC<PopoverTextProps> = ({ cx, text }) => {
  const { width: CHART_WIDTH } = useWindowDimensions();
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 14);
  const xRect = useDerivedValue(
    () => clamp(cx.value - 40, 10, CHART_WIDTH - 90),
    [cx]
  );
  const xText = useDerivedValue(
    () => clamp(cx.value - 40 + 15, 10 + 15, CHART_WIDTH - 90 + 15),
    [cx]
  );

  if (!font) {
    return null;
  }
  return (
    <Group>
      <RoundedRect
        x={xRect}
        y={0}
        width={80}
        height={50}
        r={6}
        color="#095f2d"
      />
      <Text x={xText} y={30} text={text} font={font} color="#f3f3f3" />
    </Group>
  );
};

export default PopoverText;
