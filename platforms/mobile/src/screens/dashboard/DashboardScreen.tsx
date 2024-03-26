import { HeadingText, ShadowWrapper, View } from "@unmaze/views";
import { ChartKitLineChart } from "../../playground/charts/ChartKitLineChart";
import { GiftedLineChart } from "../../playground/charts/GiftedLineChart";
import { GiftedAreaChart } from "../../playground/charts/GiftedAreaChart";

export const DashboardScreen: React.FC = () => {
  return (
    <View flex={1} jc="center" padding={20} bg="#FAF9F2">
      <HeadingText textAlign="center">RN Gifted Charts</HeadingText>
      <ShadowWrapper size="sm">
        {/* <View> */}
        {/* <ChartKitLineChart /> */}
        <GiftedLineChart />
        <GiftedAreaChart />
        {/* </View> */}
      </ShadowWrapper>
    </View>
  );
};
