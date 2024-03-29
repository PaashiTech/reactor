import { LineChart, yAxisSides } from "react-native-gifted-charts";
import { View, Text, YStack, XStack, Circle } from "@unmaze/views";
import { Dimensions } from "react-native";
import { TabOptions } from "../../components/app/dashboard/networth/NetworthTabs";

const customLabel = (val: string) => {
  return (
    <View marginRight={20}>
      <Text
        textAlign="center"
        fontSize={12}
        fontWeight={"400"}
        color="rgba(0,0,0,0.6)"
      >
        {val}
      </Text>
    </View>
  );
};

const assetsData = [
  {
    value: 4,
    labelComponent: () => customLabel("Aug"),
  },
  {
    value: 4,
    labelComponent: () => customLabel("Sep"),
  },
  {
    value: 5.5,
    labelComponent: () => customLabel("Oct"),
  },
  {
    value: 6.5,
    labelComponent: () => customLabel("Nov"),
  },
  {
    value: 9.5,
    labelComponent: () => customLabel("Dec"),
  },
  {
    value: 7.5,
    labelComponent: () => customLabel("Jan"),
  },
];
const liabilitiesData = [
  {
    value: 2.4,
    labelComponent: () => customLabel("Aug"),
  },
  {
    value: 1.5,
    labelComponent: () => customLabel("Sep"),
  },
  {
    value: 2,
    labelComponent: () => customLabel("Oct"),
  },
  {
    value: 1,
    labelComponent: () => customLabel("Nov"),
  },
  {
    value: 1.5,
    labelComponent: () => customLabel("Dec"),
  },

  {
    value: 2,
    labelComponent: () => customLabel("Jan"),
  },
];
const netData = [
  {
    value: 1.5,
    labelComponent: () => customLabel("Aug"),
  },
  {
    value: 2,
    labelComponent: () => customLabel("Sep"),
  },
  {
    value: 3,
    labelComponent: () => customLabel("Oct"),
  },
  {
    value: 5,
    labelComponent: () => customLabel("Nov"),
  },
  {
    value: 7,
    labelComponent: () => customLabel("Dec"),
  },

  {
    value: 10,
    labelComponent: () => customLabel("Jan"),
  },
];
const dummyDataForXAxis = [
  {
    value: 0,
    labelComponent: () => customLabel("Aug"),
  },
  {
    value: 0,
    labelComponent: () => customLabel("Sep"),
  },
  {
    value: 0,
    labelComponent: () => customLabel("Oct"),
  },
  {
    value: 0,
    labelComponent: () => customLabel("Nov"),
  },
  {
    value: 0,
    labelComponent: () => customLabel("Dec"),
  },

  {
    value: 0,
    labelComponent: () => customLabel("Jan"),
  },
];

interface GifedLineChartProps {
  selectedTab: TabOptions;
}

export const GiftedLineChart: React.FC<GifedLineChartProps> = ({
  selectedTab,
}) => {
  const maxValue = Math.ceil(
    Math.max(
      ...netData.map((data) => data.value),
      ...assetsData.map((data) => data.value),
      ...liabilitiesData.map((data) => data.value)
    )
  );

  return (
    <>
      <View bg={"#fff"} padding={16}>
        <LineChart
          width={Dimensions.get("window").width - 120}
          thickness={2}
          yAxisSide={yAxisSides.RIGHT}
          color1="transparent"
          color2="#000"
          color3="#08BDBA"
          color4="#FF7EB6"
          curved
          noOfSections={4}
          data={dummyDataForXAxis}
          data2={selectedTab === "Net" ? netData : undefined}
          data3={selectedTab !== "Liabilities" ? assetsData : undefined}
          data4={selectedTab !== "Assets" ? liabilitiesData : undefined}
          backgroundColor="#fff"
          rulesColor="#E7E7E7"
          rulesType="solid"
          xAxisColor={"rgba(0,0,0,0.24)"}
          yAxisColor={"transparent"}
          showXAxisIndices
          xAxisIndicesHeight={3}
          xAxisIndicesColor={"rgba(0,0,0,0.24)"}
          xAxisIndicesWidth={1}
          yAxisTextStyle={{
            color: "rgba(0,0,0,0.6)",
            fontSize: 12,
            fontFamily: "SatoshiRegular",
          }}
          xAxisLabelsVerticalShift={2.5}
          hideDataPoints
          adjustToWidth
          yAxisLabelTexts={["₹0L", "₹2.5L", "₹5L", "₹7.5L", "₹10L"]}
          isAnimated
          animateTogether
          maxValue={maxValue}
        />
        <View position="absolute" top={30} left={20}>
          <Legend />
        </View>
      </View>
    </>
  );
};

const Legend: React.FC = () => {
  return (
    <YStack gap={4}>
      <XStack gap={8} ai={"center"}>
        <Circle width={12} height={12} backgroundColor={"#08BDBA"} />
        <Text fontSize={12} fontWeight={"400"} letterSpacing={0.24}>
          Assets
        </Text>
      </XStack>
      <XStack gap={8} ai={"center"}>
        <Circle width={12} height={12} backgroundColor={"#FF7EB6"} />
        <Text fontSize={12} fontWeight={"400"} letterSpacing={0.24}>
          Liabilities
        </Text>
      </XStack>
    </YStack>
  );
};
