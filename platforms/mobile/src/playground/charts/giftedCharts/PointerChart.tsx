import { LayoutChangeEvent, useWindowDimensions } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { ptData, ptData2 } from "./staticData";
import { View, Text } from "@unmaze/views";
import { useEffect, useState } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

export const PointerChart = () => {
  const CHART_HEIGHT = 200;
  const { width: CHART_WIDTH } = useWindowDimensions();
  const [measure, setMeasure] = useState(0);
  const [labelWidth, setLabelWidth] = useState(0);
  const animatedLeft = useSharedValue(0);

  const onTextLayout = (e: LayoutChangeEvent) => {
    setLabelWidth(e.nativeEvent.layout.width);
  };

  useEffect(() => {
    animatedLeft.value = withTiming(
      measure < labelWidth / 2
        ? labelWidth / 2
        : measure >= CHART_WIDTH - 40 - labelWidth / 2
        ? -labelWidth / 2
        : 0,
      { duration: 200 }
    );
  }, [measure, labelWidth]);

  return (
    <LineChart
      curved
      lineGradient={false}
      data={ptData}
      onDataChangeAnimationDuration={1200}
      hideDataPoints
      getPointerProps={(props: any) => {
        setMeasure(props.pointerX);
      }}
      // spacing={10}
      adjustToWidth
      color="#099451"
      thickness={2}
      hideAxesAndRules
      hideYAxisText
      hideRules
      spacing={10}
      initialSpacing={0}
      isAnimated
      animationDuration={1200}
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      noOfSectionsBelowXAxis={0}
      showXAxisIndices={false}
      xAxisIndicesHeight={0}
      yAxisExtraHeight={50}
      pointerConfig={{
        pointerStripHeight: CHART_HEIGHT + 20,
        pointerStripColor: "#818181",
        pointerStripWidth: 1,
        pointerColor: "#b8b8b8",
        shiftPointerLabelY: 50,
        shiftPointerLabelX: -65,
        resetPointerOnDataChange: false,
        pointerLabelWidth: 150,
        pointerLabelHeight: 30,
        hideSecondaryPointer: true,
        autoAdjustPointerLabelPosition: false,
        pointerComponent: (item: any) => {
          return (
            <View
              width={16}
              height={16}
              borderRadius={50}
              bg="rgba(9, 148, 81, 0.5)"
              justifyContent="center"
              alignItems="center"
              padding={4}
              alignSelf="center"
              right={3}
            >
              <View
                width={8}
                height={8}
                borderRadius={50}
                borderWidth={1}
                borderColor={"#FFF"}
                backgroundColor={"#099451"}
              ></View>
            </View>
          );
        },
        pointerLabelComponent: (items) => {
          return (
            <Animated.View
              style={{
                width: 150,
                height: 30,
                padding: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                borderRadius: 6,
                left: animatedLeft,
              }}
            >
              <Text onLayout={onTextLayout} color={"#fff"} textAlign="center">
                {items[0].date} | {"$" + items[0].value + ".0"}
              </Text>
            </Animated.View>
          );
        },
      }}
    />
  );
};
