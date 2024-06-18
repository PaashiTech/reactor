import { View } from "@unmaze/views";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import {
  LinearGradient,
  useFont,
  vec,
  Text as SKText,
  RoundedRect,
  Group,
} from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";
import { data } from "../skiaCharts/customLineChartData";
import { formatAmount } from "../helpers";
import { ToolTip } from "./ToolTip";
import { useDerivedValue } from "react-native-reanimated";

export const VictoryLineChart = () => {
  const font = useFont(require("@tamagui/font-inter/otf/Inter-Medium.otf"), 10);
  const { state, isActive } = useChartPressState({
    x: "",
    y: { value: 0 },
  });

  const CHART_HEIGHT = 300;
  const CHART_MARGIN = 20;

  const textValue = useDerivedValue(() => {
    let amount = state.y.value.value.value;

    if (isNaN(amount)) return "Invalid amount";

    const suffixes = ["", "K", "L", "Cr"];
    let index = 1;
    let initialDivisor = 1000; // For the first division

    while (amount >= initialDivisor && index < suffixes.length) {
      amount /= initialDivisor;
      index += 1;
      initialDivisor = 100; // Set 100 for subsequent divisions
    }

    return "₹" + amount.toFixed(2) + suffixes[index - 1];
  }, [state.y.value]);

  const textValue2 = useDerivedValue(() => {
    return state.x.value.value;
  }, [state.x.value]);

  const { width: CHART_WIDTH } = useWindowDimensions();

  return (
    <View>
      <View
        style={{
          height: CHART_HEIGHT,
          width: CHART_WIDTH,
          paddingHorizontal: CHART_MARGIN,
        }}
      >
        <CartesianChart
          padding={{ bottom: 12, left: 12, right: 12 }}
          data={data}
          xKey="label"
          yKeys={["value"]}
          chartPressState={state}
          gestureLongPressDelay={1}
          axisOptions={{
            font,
            axisSide: { y: "right", x: "bottom" },
            labelOffset: { x: 5, y: 10 },
            lineColor: {
              grid: {
                x: "transparent",
                y: "rgba(145, 145, 145, 0.5)",
              },
              frame: "rgba(145, 145, 145, 0.5)",
            },
            formatYLabel: formatAmount,
            tickCount: { x: 3, y: 5 },
          }}
        >
          {/* 👇 render function exposes various data, such as points. */}
          {({ points, chartBounds }) => (
            // 👇 and we'll use the Line component to render a line path.
            <>
              <Line
                points={points.value}
                color="rgba(3, 94, 93,1)"
                strokeWidth={2}
                curveType="natural"
              />
              {isActive && (
                <Group>
                  <RoundedRect
                    height={50}
                    width={100}
                    r={10}
                    x={chartBounds.left + 5}
                    y={chartBounds.top + 10}
                    color="#3d3d3d"
                    style={"fill"}
                  />
                  <SKText
                    x={chartBounds.left + 10}
                    y={chartBounds.top + 50}
                    text={textValue}
                    color={"#FFF"}
                    font={font}
                    style={"fill"}
                  />
                  <SKText
                    x={chartBounds.left + 10}
                    y={chartBounds.top + 30}
                    text={textValue2}
                    color={"#FFF"}
                    font={font}
                    style={"fill"}
                  />
                </Group>
              )}
              <Area
                points={points.value}
                y0={chartBounds.bottom}
                curveType="natural"
                animate={{ type: "timing", duration: 500 }}
              >
                <LinearGradient
                  start={vec(chartBounds.top, 0)}
                  end={vec(chartBounds.bottom, chartBounds.bottom)}
                  colors={["rgba(3, 94, 93, 0.4)", "rgba(3, 94, 93, 0)"]}
                />
              </Area>
              {isActive ? (
                <ToolTip x={state.x.position} y={state.y.value.position} />
              ) : null}
            </>
          )}
        </CartesianChart>
      </View>
    </View>
  );
};
