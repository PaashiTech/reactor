import { Text, View } from "@unmaze/views";
import { useWindowDimensions } from "react-native";
import { CustomLineChart } from "./charts/skiaCharts/CustomLineChart";
import { data } from "./charts/skiaCharts/customLineChartData";
import { VictoryLineChart } from "./charts/victoryCharts/VictoryLineChart";
import GiftedLineChart from "./charts/giftedCharts/GiftedLineChart";
import { PointerChart } from "./charts/giftedCharts/PointerChart";

export const ChartsExampleScreen = () => {
  // const CHART_HEIGHT = 350;
  // const CHART_MARGIN = 20;
  const { width: CHART_WIDTH } = useWindowDimensions();

  return (
    <View flex={1} width={CHART_WIDTH} bg="#1a1a1a" jc="center" ai="center">
      {/* <CustomLineChart
        data={data}
        chartHeight={CHART_HEIGHT}
        chartMargin={CHART_MARGIN}
        chartWidth={CHART_WIDTH}
      /> */}
      {/* <VictoryLineChart /> */}
      {/* <GiftedLineChart /> */}
      <PointerChart />
    </View>
  );
};
