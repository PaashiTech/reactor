import { LineChart, yAxisSides } from "react-native-gifted-charts";
import { View, YStack, XStack, Circle, BodyText } from "@unmaze/views";
import { Dimensions } from "react-native";
import { TabOptions } from "./types";

const customLabel = (val: string) => {
  return (
    <View marginRight={20}>
      <BodyText
        size="sm"
        textAlign="center"
        fontSize={12}
        fontWeight={"400"}
        color="rgba(0,0,0,0.6)"
      >
        {val}
      </BodyText>
    </View>
  );
};

const XAxisLabels = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

interface NetworthLineChartProps {
  selectedTab: TabOptions;
  data: {
    netData: { value: number }[];
    assetsData: { value: number }[];
    liabilitiesData: { value: number }[];
  };
}

export const NetworthLineChart: React.FC<NetworthLineChartProps> = ({
  selectedTab,
  data,
}) => {
  const { netData, assetsData, liabilitiesData } = data;

  const dummyDataForXAxis = XAxisLabels.map((label) => ({
    value: 0,
    labelComponent: () => customLabel(label),
  }));

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
          <Legend selectedTab={selectedTab} />
        </View>
      </View>
    </>
  );
};

const Legend: React.FC<{ selectedTab: TabOptions }> = ({ selectedTab }) => {
  return (
    <YStack gap={4}>
      {selectedTab !== "Liabilities" && (
        <XStack
          gap={8}
          ai={"center"}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          animation="100ms"
        >
          <Circle width={12} height={12} backgroundColor={"#08BDBA"} />
          <BodyText size="sm">Assets</BodyText>
        </XStack>
      )}
      {selectedTab !== "Assets" && (
        <XStack
          gap={8}
          ai={"center"}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          animation="100ms"
        >
          <Circle width={12} height={12} backgroundColor={"#FF7EB6"} />
          <BodyText size="sm">Liabilities</BodyText>
        </XStack>
      )}
    </YStack>
  );
};
