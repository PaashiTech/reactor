import { View, Text, AccentText, XStack } from "@unmaze/views";
import { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";
import { ChartType } from "./context/utility.types";

type ChartTypeSelectorProps = {};

export const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({}) => {
  const {
    state: { selectedChartType },
    dispatch,
  } = useCashflowScreenContext();

  const [btnContainerWidth, setWidth] = useState(0);
  const [btnContainerHeight, setHeight] = useState(0);
  const btnWidth = btnContainerWidth / 2;
  const btnHeight = btnContainerHeight - 2;

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
    setHeight(event.nativeEvent.layout.height);
  };

  const handleChartTypeSelect = (chartType: ChartType) => {
    dispatch({ type: "SELECT_CHART_TYPE", payload: { chartType: chartType } });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            selectedChartType === "Daily" ? 0 : btnWidth - 2,
            {
              duration: 250,
            }
          ),
        },
      ],
    };
  });

  return (
    <View bg="#FFF" pt="$2" pb="$3" alignItems="center">
      <XStack bg="#E7E7E7" borderRadius={"$2"} onLayout={onLayout}>
        <Animated.View
          style={[
            {
              position: "absolute",
              backgroundColor: "#fff",
              width: btnWidth,
              height: btnHeight,
              top: 1,
              left: 1,
              borderRadius: 7,
            },
            animatedStyle,
          ]}
        />
        <View
          paddingVertical="$1_5"
          paddingHorizontal="$3"
          onPress={() => handleChartTypeSelect("Daily")}
          alignItems="center"
          width={80}
        >
          <AccentText
            size="sm"
            color={
              selectedChartType === "Daily"
                ? "$text/on-primary/text_base"
                : "$text/on-primary/text_subdued"
            }
          >
            Daily
          </AccentText>
        </View>
        <View
          paddingVertical="$1_5"
          paddingHorizontal="$3"
          onPress={() => handleChartTypeSelect("Monthly")}
          alignItems="center"
          width={80}
        >
          <AccentText
            size="sm"
            color={
              selectedChartType === "Monthly"
                ? "$text/on-primary/text_base"
                : "$text/on-primary/text_subdued"
            }
          >
            Monthly
          </AccentText>
        </View>
      </XStack>
    </View>
  );
};
