import { Circle, Group, Path, Skia } from "@shopify/react-native-skia";
import { SharedValue, useDerivedValue } from "react-native-reanimated";
import PopoverText from "./PopoverText";

type CursorProps = {
  cx: SharedValue<number>;
  cy: SharedValue<number>;
  cursorOpacity: SharedValue<number>;
  chartHeight: number;
  selectedValue: SharedValue<number>;
};

const Cursor: React.FC<CursorProps> = ({
  cx,
  cy,
  cursorOpacity,
  chartHeight,
  selectedValue,
}) => {
  const path = useDerivedValue(() => {
    const dottedLine = Skia.Path.Make().lineTo(0, chartHeight - 20);
    dottedLine.dash(5, 5, 0);

    const matrix = Skia.Matrix();
    matrix.translate(cx.value, 0);
    dottedLine.transform(matrix);
    return dottedLine;
  });

  const animatedText = useDerivedValue(
    () => `₹${Math.round(selectedValue.value)}`
  );
  return (
    <Group opacity={cursorOpacity}>
      <Path
        path={path}
        color="rgba(3, 94, 93,1)"
        style="stroke"
        strokeWidth={1}
        strokeCap="round"
      />
      <PopoverText cx={cx} text={animatedText} />
      <Circle
        cx={cx}
        cy={cy}
        r={6}
        style="stroke"
        strokeWidth={6}
        color="rgba(3, 94, 93,1)"
      />
      <Circle cx={cx} cy={cy} r={4} style="fill" strokeWidth={3} color="#FFF" />
    </Group>
  );
};

export default Cursor;
