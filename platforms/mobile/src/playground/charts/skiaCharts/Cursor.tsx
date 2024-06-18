import { Circle, Group, Path, Skia } from "@shopify/react-native-skia";
import { SharedValue, useDerivedValue } from "react-native-reanimated";
import PopoverText from "./PopoverText";

type CursorProps = {
  cx: SharedValue<number>;
  cy: SharedValue<number>;
  cursorOpacity: SharedValue<number>;
  chartHeight: number;
  selectedValue: SharedValue<number>;
  selectedDate: SharedValue<string>;
};

const Cursor: React.FC<CursorProps> = ({
  cx,
  cy,
  cursorOpacity,
  chartHeight,
  selectedValue,
  selectedDate,
}) => {
  const path = useDerivedValue(() => {
    const dottedLine = Skia.Path.Make().lineTo(0, chartHeight - 25);

    const matrix = Skia.Matrix();
    matrix.translate(cx.value, 0);
    dottedLine.transform(matrix);
    return dottedLine;
  });

  const animatedText = useDerivedValue(() => {
    let netWorth = selectedValue.value;

    if (isNaN(netWorth)) return "Invalid Networth";

    const suffixes = ["", "K", "L", "Cr"];
    let index = 1;
    let initialDivisor = 1000; // For the first division

    while (netWorth >= initialDivisor && index < suffixes.length) {
      netWorth /= initialDivisor;
      index += 1;
      initialDivisor = 100; // Set 100 for subsequent divisions
    }

    return "₹" + netWorth.toFixed(2) + suffixes[index - 1];
  });

  const dateText = useDerivedValue(() => {
    if (selectedDate.value === "1 May") return `1 May 2024`;

    return `1 May - ${selectedDate.value}`;
  });

  return (
    <Group opacity={cursorOpacity}>
      <Path
        path={path}
        color="rgba(3, 94, 93,1)"
        style="stroke"
        strokeWidth={0.8}
        strokeCap="round"
        start={0.23}
      />
      <PopoverText dateText={dateText} amountText={animatedText} />
      <Circle
        cx={cx}
        cy={cy}
        r={4}
        style="stroke"
        strokeWidth={4}
        color="rgba(3, 94, 93,1)"
      />
      <Circle cx={cx} cy={cy} r={2} style="fill" strokeWidth={2} color="#FFF" />
    </Group>
  );
};

export default Cursor;
