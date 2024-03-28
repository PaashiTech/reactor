import { LineChart } from "react-native-chart-kit";
import { Dimensions, Text } from "react-native";

export const ChartKitLineChart = () => {
  return (
    <LineChart
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        legend: ["Assets", "Liabilities"],
        datasets: [
          {
            data: [4, 4, 5.5, 6.5, 9.5, 7.5],
            color: () => "#08BDBA",
          },
          {
            data: [2.4, 1.5, 2, 1, 1.5, 2],
            color: () => "#FF7EB6",
          },
          {
            data: [1.5, 2, 3, 5, 7, 10],
            color: () => "#000",
          },
        ],
      }}
      width={Dimensions.get("window").width - 40} // from 20x2 padding
      height={250}
      yAxisLabel="₹"
      yAxisSuffix="L"
      yAxisInterval={1} // optional, defaults to 1
      withDots={false}
      withVerticalLines={false}
      fromZero
      chartConfig={{
        backgroundColor: "#fff",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        fillShadowGradient: "#fff",
        fillShadowGradientFrom: "#fff",
        fillShadowGradientTo: "#fff",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => "#afafaf",
        labelColor: (opacity = 1) => "rgba(0, 0, 0, 0.6)",
        strokeWidth: 2,
        propsForBackgroundLines: {
          strokeWidth: 1,
          stroke: "#e7e7e7",
          strokeDasharray: "0",
        },
        propsForVerticalLabels: {},
        propsForHorizontalLabels: {
          alignmentBaseline: "central",
        },
      }}
      bezier
      withInnerLines
      withOuterLines
      style={{
        marginVertical: 20,
        borderRadius: 12,
      }}
      formatYLabel={(yValue: string) => {
        if (Number.isInteger(+yValue)) return yValue.split(".")[0];
        return yValue;
      }}
    />
  );
};
