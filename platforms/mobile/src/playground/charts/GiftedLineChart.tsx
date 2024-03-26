import { LineChart, yAxisSides } from "react-native-gifted-charts";
import { View, Text, YStack, XStack, Circle } from "@unmaze/views";
import { Dimensions } from "react-native";

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

const data = [
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
const data2 = [
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
const data3 = [
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

export const GiftedLineChart: React.FC = () => {
  return (
    <>
      <View mt={30} bg={"#fff"} borderRadius={12} padding={16}>
        <LineChart
          width={Dimensions.get("window").width - 120}
          thickness={2}
          yAxisSide={yAxisSides.RIGHT}
          color="#08BDBA"
          color2="#FF7EB6"
          color3="#000"
          curved
          noOfSections={4}
          data={data}
          data2={data2}
          data3={data3}
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
