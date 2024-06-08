import { View } from "@unmaze/views";
import { useWindowDimensions } from "react-native";
import { CustomLineChart } from "./charts/skiaCharts/CustomLineChart";
import { data } from "./charts/skiaCharts/customLineChartData";

export const ChartsExampleScreen = () => {
  const CHART_HEIGHT = 350;
  const CHART_MARGIN = 20;
  const { width: CHART_WIDTH } = useWindowDimensions();

  return (
    <View flex={1} bg="#FFF" jc="center" ai="center">
      <CustomLineChart
        data={data}
        chartHeight={CHART_HEIGHT}
        chartMargin={CHART_MARGIN}
        chartWidth={CHART_WIDTH}
      />
    </View>
  );
};
