import {
  Canvas,
  Circle,
  Group,
  Path,
  Rect,
  Skia,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import { SharedValue, useDerivedValue } from "react-native-reanimated";

type CursorProps = {
  cx: SharedValue<number>;
  cy: SharedValue<number>;
  cursorOpacity: SharedValue<number>;
  chartHeight: number;
};

const Cursor: React.FC<CursorProps> = ({
  cx,
  cy,
  cursorOpacity,
  chartHeight,
}) => {
  const path = useDerivedValue(() => {
    const dottedLine = Skia.Path.Make().lineTo(0, chartHeight - 20);

    const matrix = Skia.Matrix();
    matrix.translate(cx.value, 0);
    dottedLine.transform(matrix);
    return dottedLine;
  });
  return (
    <Group opacity={cursorOpacity}>
      <Path
        path={path}
        color="rgba(3, 94, 93,1)"
        style="stroke"
        strokeWidth={1}
        strokeCap="round"
      />
      <PopoverText cx={cx} text={"hello"} />

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

const PopoverText = ({ cx, text }) => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 14);
  const xRect = useDerivedValue(() => cx.value - 35, [cx]);
  const xText = useDerivedValue(() => cx.value - 35 + 15, [cx]);

  const textHeight = font?.measureText(text).height;

  if (!font) {
    return null;
  }
  return (
    <Group>
      <Rect x={xRect} y={0} width={70} height={50} color="#095f2d" />
      <Text
        x={xText}
        y={25 + textHeight! / 2}
        text={text}
        font={font}
        color="#f3f3f3"
      />
    </Group>
  );
};
