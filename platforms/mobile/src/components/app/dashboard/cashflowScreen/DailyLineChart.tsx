import React from "react";
import { View, HeadingText } from "@unmaze/views";
import { LineChart } from "react-native-gifted-charts";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";

type DataType = {
  date: string;
  value: number;
};

const ptData: DataType[] = [
  { date: "1 May", value: 16190 },
  { date: "2 May", value: 17200 },
  { date: "3 May", value: 20040 },
  { date: "4 May", value: 21310 },
  { date: "5 May", value: 21310 },
  { date: "6 May", value: 32030 },
  { date: "7 May", value: 35350 },
  { date: "8 May", value: 38050 },
  { date: "9 May", value: 39670 },
  { date: "10 May", value: 43820 },
  { date: "11 May", value: 44150 },
  { date: "12 May", value: 44150 },
  { date: "13 May", value: 47150 },
  { date: "14 May", value: 52340 },
  { date: "15 May", value: 70620 },
  { date: "16 May", value: 70870 },
  { date: "17 May", value: 73810 },
  { date: "18 May", value: 73810 },
  { date: "19 May", value: 73810 },
  { date: "20 May", value: 82480 },
  { date: "21 May", value: 83030 },
  { date: "22 May", value: 84170 },
  { date: "23 May", value: 86380 },
  { date: "24 May", value: 86380 },
  { date: "25 May", value: 89710 },
  { date: "26 May", value: 89710 },
  { date: "27 May", value: 92120 },
  { date: "28 May", value: 94140 },
  { date: "29 May", value: 95610 },
  { date: "30 May", value: 101000 },
  { date: "31 May", value: 105000 },
];

const tabColors = {
  0: {
    primary: "#FFF1F1",
    secondary: "#FFD7D9",
  },
  1: {
    primary: "#E5F6FF",
    secondary: "#BAE6FF",
  },
  2: {
    primary: "#DEFBE6",
    secondary: "#A7F0BA",
  },
};

type DailyLineChartProps = {};

const DailyLineChart: React.FC<DailyLineChartProps> = ({}) => {
  const {
    state: { activeTabIndex },
  } = useCashflowScreenContext();
  return (
    <View bg="#FFF" pr="$3">
      <LineChart
        adjustToWidth
        curved
        areaChart
        data={ptData}
        rotateLabel
        yAxisExtraHeight={35}
        hideDataPoints
        thickness={0}
        startFillColor={tabColors[activeTabIndex].secondary}
        endFillColor="#fff"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        hideYAxisText
        hideAxesAndRules
        maxValue={Math.max(...ptData.map((item) => item.value)) + 2000}
        pointerConfig={{
          pointerStripUptoDataPoint: true,
          pointerStripColor: "#666",
          pointerStripWidth: 2,
          strokeDashArray: [5, 5],
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: false,
          autoAdjustPointerLabelPosition: false,
          pointerComponent: () => {
            return (
              <View
                jc="center"
                alignItems="center"
                transform={[{ translateX: -2 }]}
              >
                <View
                  width={14}
                  height={14}
                  opacity={0.6}
                  bg={tabColors[activeTabIndex].secondary}
                  borderRadius={9999}
                />
                <View
                  position="absolute"
                  top={3.5}
                  left={3.5}
                  width={7}
                  height={7}
                  bg={tabColors[activeTabIndex].primary}
                  borderRadius={9999}
                />
              </View>
            );
          },
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 8,
                  backgroundColor: "#F1F7F7",
                  borderWidth: 1,
                  borderColor: "rgba(67, 136, 131, 0.60)",
                }}
              >
                <HeadingText textAlign="center" color="#438883">
                  {"₹" + items[0].value}
                </HeadingText>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default DailyLineChart;
