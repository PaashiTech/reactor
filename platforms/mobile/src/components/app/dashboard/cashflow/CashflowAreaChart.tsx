import { LineChart, yAxisSides } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-svg";
import { View, Text } from "@unmaze/views";
import { Dimensions } from "react-native";

const data = [7.5, 7.3, 4, 5, 3, 2, 1, 0.7, 0.5, 0.4, 0.3];

export const CashflowAreaChart = () => {
  return (
    <View bg={"#fff"} padding={16}>
      <LineChart
        data={data.map((item, i) => {
          return {
            value: item,
            label: i === 1 ? "Jan" : i === data.length - 1 ? "Dec" : undefined,
            labelTextStyle: {
              fontSize: 12,
              textAlign: "center",
              color: "rgba(0,0,0,0.6)",
            },
          };
        })}
        width={Dimensions.get("window").width - 120}
        yAxisSide={yAxisSides.RIGHT}
        maxValue={7.5}
        initialSpacing={0}
        areaChart
        adjustToWidth
        noOfSections={3}
        curved
        yAxisColor={"transparent"}
        xAxisColor={"rgba(0,0,0,0.24)"}
        // showXAxisIndices
        xAxisIndicesHeight={3}
        xAxisIndicesColor={"rgba(0,0,0,0.24)"}
        xAxisIndicesWidth={1}
        xAxisLabelsVerticalShift={2.5}
        yAxisLabelTexts={["₹0L", "₹2.5L", "₹5L", "₹7.5L"]}
        yAxisTextStyle={{
          color: "rgba(0,0,0,0.6)",
          fontSize: 12,
          fontFamily: "SatoshiRegular",
        }}
        hideRules
        color="transparent"
        hideDataPoints
        areaGradientId="ag" // same as the id passed in <LinearGradient> below
        areaGradientComponent={() => {
          return (
            <LinearGradient
              id="ag"
              x1="29"
              y1="-62.5"
              x2="281"
              y2="189.5"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0.13" stopColor={"#9EF0F0"} />
              <Stop offset="0.82" stopColor={"#035E5D"} />
            </LinearGradient>
          );
        }}
        isAnimated
      />
    </View>
  );
};
