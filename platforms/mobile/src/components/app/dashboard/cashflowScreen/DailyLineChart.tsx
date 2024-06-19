import React from "react";
import { View, HeadingText } from "@unmaze/views";
import { LineChart } from "react-native-gifted-charts";

type DailyLineChartProps = {};

const DailyLineChart: React.FC<DailyLineChartProps> = ({}) => {
  const ptData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
    { value: 190, date: "3 Apr 2022" },
    { value: 180, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 145, date: "6 Apr 2022" },
    { value: 160, date: "7 Apr 2022" },
    { value: 200, date: "8 Apr 2022" },
    { value: 220, date: "9 Apr 2022" },
    { value: 240, date: "10 Apr 2022" },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 385, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 390, date: "16 Apr 2022" },
    { value: 370, date: "17 Apr 2022" },
    { value: 285, date: "18 Apr 2022" },
    { value: 295, date: "19 Apr 2022" },
    { value: 300, date: "20 Apr 2022" },
    { value: 280, date: "21 Apr 2022" },
    { value: 295, date: "22 Apr 2022" },
    { value: 260, date: "23 Apr 2022" },
    { value: 255, date: "24 Apr 2022" },
    { value: 190, date: "25 Apr 2022" },
    { value: 220, date: "26 Apr 2022" },
    { value: 205, date: "27 Apr 2022" },
    { value: 230, date: "28 Apr 2022" },
    { value: 210, date: "29 Apr 2022" },
    { value: 200, date: "30 Apr 2022" },
    { value: 240, date: "1 May 2022" },
    { value: 250, date: "2 May 2022" },
    { value: 280, date: "3 May 2022" },
    { value: 250, date: "4 May 2022" },
    { value: 210, date: "5 May 2022" },
  ];

  return (
    <View bg="#FFF">
      <LineChart
        curved
        areaChart
        data={ptData}
        rotateLabel
        yAxisExtraHeight={35}
        hideDataPoints
        spacing={10}
        color="#6FDC8C"
        thickness={0}
        startFillColor="#6FDC8C"
        endFillColor="#DEFBE600"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        hideYAxisText
        hideAxesAndRules
        maxValue={500}
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
                  bg="#42BE65"
                  borderRadius={9999}
                />
                <View
                  position="absolute"
                  top={3.5}
                  left={3.5}
                  width={7}
                  height={7}
                  bg="#24A148"
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
