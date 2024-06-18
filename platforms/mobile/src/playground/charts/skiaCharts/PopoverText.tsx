import {
  Circle,
  Group,
  RoundedRect,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import { SharedValue, clamp, useDerivedValue } from "react-native-reanimated";

type PopoverTextProps = {
  amountText: SharedValue<string>;
  dateText: SharedValue<string>;
};

const CHART_MARGIN = 20;

const PopoverText: React.FC<PopoverTextProps> = ({ amountText, dateText }) => {
  const { width: CHART_WIDTH } = useWindowDimensions();
  const spendsFont = useFont(
    require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    16
  );
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 14);
  const dateFont = useFont(
    require("@unmaze/assets/fonts/satoshi-variable/Satoshi-Medium.otf"),
    12
  );

  if (!font) {
    return null;
  }

  return (
    <Group>
      <RoundedRect
        x={CHART_MARGIN - 10}
        y={0}
        width={CHART_WIDTH - CHART_MARGIN * 2}
        height={80}
        r={10}
        color="#3d3d3d"
      />
      <Group>
        <Circle
          cx={35}
          cy={55}
          r={6}
          style="stroke"
          strokeWidth={2}
          color="#fff"
        />
        <Circle
          cx={35}
          cy={55}
          r={6}
          style="fill"
          strokeWidth={3}
          color="rgba(3, 94, 93,1)"
        />
      </Group>
      <Text
        x={CHART_MARGIN + 10}
        y={30}
        text={"Spends"}
        font={spendsFont}
        color="#f3f3f3"
      />

      <Text
        x={CHART_MARGIN + 30}
        y={60}
        text={dateText}
        font={dateFont}
        color="#f3f3f3"
      />
      <Text
        x={CHART_MARGIN + 10 + 115}
        y={60}
        text={amountText}
        font={font}
        color="#f3f3f3"
      />
    </Group>
  );
};

export default PopoverText;
