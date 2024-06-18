import { useEffect, useRef } from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart, yAxisSides } from "react-native-gifted-charts";

export const SimpleBlueBars = () => {
  const barChartScrollRef = useRef(null);

  const barData1 = [
    { value: 650, label: "Jan 24", frontColor: "#A7F0BA" },
    { value: 500, label: "Feb 24" },
    { value: 745, label: "Mar 24" },
    { value: 320, label: "Apr 24" },
    { value: 600, label: "May 24" },
    { value: 256, label: "Jun 24" },
    { value: 300, label: "July 24" },
  ];

  const updatedBarData1 = barData1.map((item) => ({
    ...item,
    topLabelComponent: () => (
      <Text style={{ color: "#6F6F6F", fontSize: 10, marginBottom: 8 }}>
        ₹{item.value}
      </Text>
    ),
  }));

  return (
    <View>
      <BarChart
        scrollRef={barChartScrollRef}
        scrollToEnd={true}
        barWidth={48}
        width={Dimensions.get("window").width - 20 * 2}
        yAxisExtraHeight={35}
        noOfSections={4}
        spacing={24}
        hideAxesAndRules
        yAxisSide={yAxisSides.RIGHT}
        barBorderTopRightRadius={6}
        barBorderTopLeftRadius={6}
        frontColor="#DEFBE6"
        xAxisLabelTextStyle={{
          color: "#6F6F6F",
          fontSize: 12,
          fontWeight: "400",
        }}
        barMarginBottom={8}
        data={updatedBarData1.reverse()}
        yAxisThickness={0}
        xAxisThickness={0}
      />
    </View>
  );
};
