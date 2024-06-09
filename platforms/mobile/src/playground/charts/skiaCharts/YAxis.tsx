import { Text, useFont } from "@shopify/react-native-skia";
import { DataType } from "./customLineChartData";

type YAxisProps = {
  max: number;
  min: number;
  chartWidth: number;
  chartHeight: number;
  chartMargin: number;
};

const Y_AXIS_LENGTH = 5;

const YAxis: React.FC<YAxisProps> = ({
  max,
  min,
  chartHeight,
  chartMargin,
  chartWidth,
}) => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 11);

  if (!font) {
    return null;
  }

  const yAxisArray = [
    max,
    max - (max - min) * 0.25,
    max - (max - min) * 0.5,
    max - (max - min) * 0.75,
    min,
  ];

  return yAxisArray.map((value, i) => {
    return (
      <Text
        key={i}
        text={formatAmount(value)}
        color={"#6F6F6F"}
        font={font}
        x={chartWidth - chartMargin - 40}
        y={((chartHeight - 50) * (i + 1)) / yAxisArray.length + 40}
      />
    );
  });
};

export default YAxis;

type FormatNetWorthFunction = (netWorth: number) => string;

const formatAmount: FormatNetWorthFunction = (netWorth) => {
  if (isNaN(netWorth)) return "Invalid Value";

  const suffixes = ["", "K", "L", "Cr"];
  let index = 1;
  let initialDivisor = 1000; // For the first division

  while (netWorth >= initialDivisor && index < suffixes.length) {
    netWorth /= initialDivisor;
    index += 1;
    initialDivisor = 100; // Set 100 for subsequent divisions
  }

  return "₹" + netWorth.toFixed(1) + suffixes[index - 1];
};
