import { HeadingText, ShadowWrapper, View } from "@unmaze/views";
import { ChartKitLineChart } from "../../playground/charts/ChartKitLineChart";

export const DashboardScreen: React.FC = () => {
  return (
    <View flex={1} jc="center" ai="center" bg="#FAF9F2">
      <HeadingText>Bezier Line Chart</HeadingText>
      <ShadowWrapper size="sm">
        <View>
          <ChartKitLineChart />
        </View>
      </ShadowWrapper>
    </View>
  );
};
