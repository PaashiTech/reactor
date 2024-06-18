import React from "react";
import { Text, View } from "@unmaze/views";
import { useWindowDimensions } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";

export type BarData = {
  value: number;
  label: string;
};

type BarDataWithChartProps = BarData & {
  frontColor?: string;
  topLabelComponent?: () => JSX.Element;
};

type MonthlyBarChartProps = {
  barData: BarData[];
};

const tabColors = {
  0: {
    primary: "#DEFBE6",
    secondary: "#A7F0BA",
  },
  1: {
    primary: "#FFF1F1",
    secondary: "#FFD7D9",
  },
  2: {
    primary: "#E5F6FF",
    secondary: "#BAE6FF",
  },
};

export const MonthlyBarChart: React.FC<MonthlyBarChartProps> = ({
  barData,
}) => {
  const { width: WINDOW_WIDTH } = useWindowDimensions();
  const {
    state: { activeTabIndex },
  } = useCashflowScreenContext();

  const { primary, secondary } = tabColors[activeTabIndex];

  const updatedBarData: BarDataWithChartProps[] = barData.map((item, i) =>
    i === 0
      ? {
          ...item,
          frontColor: secondary,
          topLabelComponent: () => (
            <Text color="#6F6F6F" fontSize={10}>
              ₹{item.value}
            </Text>
          ),
        }
      : {
          ...item,

          topLabelComponent: () => (
            <Text color="#6F6F6F" fontSize={10}>
              ₹{item.value}
            </Text>
          ),
        }
  );

  return (
    <View bg="#FFF" paddingLeft={5} paddingRight={5}>
      <BarChart
        scrollToEnd
        barWidth={48}
        width={WINDOW_WIDTH - 15 * 2}
        yAxisExtraHeight={35}
        noOfSections={4}
        spacing={24}
        hideAxesAndRules
        hideYAxisText
        barBorderTopRightRadius={6}
        barBorderTopLeftRadius={6}
        frontColor={primary}
        xAxisLabelTextStyle={{
          color: "#6F6F6F",
          fontSize: 12,
          fontWeight: "400",
        }}
        barMarginBottom={8}
        data={updatedBarData.reverse()}
      />
    </View>
  );
};
